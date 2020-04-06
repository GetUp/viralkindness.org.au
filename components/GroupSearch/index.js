import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ReactGA from 'react-ga'
import Geosuggest from 'react-geosuggest'
import GoogleMapReact from 'google-map-react'
import {
  Search,
  Facebook,
  WhatsApp,
  NextDoor,
  Location,
  MapMarker
} from '../Icons'
import defaultGroups from '../../data/defaultGroupsByState'
import nationalGroups from '../../data/nationalGroups'
import s from './index.module.scss'

const apiHost = process.env.REACT_APP_API_HOST
const publicDb = process.env.REACT_APP_PUBLIC_DATABASE
const radius = process.env.REACT_APP_RADIUS_IN_METERS

const helpText = 'Search by street or suburb'

const allGroupsUrl = `${apiHost}/${publicDb}/_design/geoid/_geo/geoidx?bbox=-180%2C-90%2C180%2C90&limit=200&relation=contains&include_docs=true`
const groupSearchUrl = ({ lng, lat }) =>
  `${apiHost}/${publicDb}/_design/geoid/_geo/geoidx?lat=${lat}&lon=${lng}&radius=${radius}&relation=contains&nearest=true&include_docs=true`

const Marker = () => <MapMarker />

const GroupLink = ({ href, text }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className={`${s.groupDivBtn} ${groupClass(href)}`}
    onClick={() =>
      ReactGA.event({
        category: 'Actions',
        action: 'Group Link Click'
      })
    }
  >
    <GroupIcon url={href} />
    {text}
  </a>
)

const GroupIcon = ({ url }) => {
  if (/facebook\.com|fb\.com/i.test(url)) return <Facebook />
  if (/whatsapp\.com/i.test(url)) return <WhatsApp />
  if (/au\.nextdoor\.com/i.test(url)) return <NextDoor />
  return null
}

const groupClass = (url) => {
  if (/facebook\.com|fb\.com/i.test(url)) return s.fb
  if (/whatsapp\.com/i.test(url)) return s.wa
  if (/au\.nextdoor\.com/i.test(url)) return s.nd
  return s.ge
}

const locationDisplay = props =>
  (props && props.label.replace(', Australia', '')) || ''

const Group = ({ doc }, i) => (
  <div key={i} className={s.groupDivChild}>
    <div className={s.groupDivInfo}>
      <div>
        <div className={s.groupDivName}>{doc.groupName}</div>
        <div className={s.groupDivLoc}>
          {doc.properties && (
            <>
              <Location /> {locationDisplay(doc.properties)}
            </>
          )}
        </div>
      </div>
      <div className={s.groupLinkWrapper}>
        {doc.groupLink && (
          <GroupLink href={doc.groupLink} text='Join group'></GroupLink>
        )}
      </div>
    </div>
    {doc.groupBlurb && <div className={s.groupDivBlurb}>{doc.groupBlurb}</div>}
  </div>
)

const linkFilter = gs => gs.filter(g => g && g.doc && g.doc.groupLink)

const allGroups = (fetchedGroups = [], state) => {
  const localGroups = linkFilter(fetchedGroups)
  if (!(state && state[0] && state[0].length > 0)) {
    // no filtering at all
    return localGroups
  }

  if (!(defaultGroups[state[0]] && defaultGroups[state[0]].length > 0)) {
    // no default state groups to append
    return localGroups
  }

  // state-filtered local groups + default state groups
  return localGroups.concat(defaultGroups[state[0]])
}

// fallback points to ensure map stays over AU
const backupPoints = [
  { geometry: { coordinates: [120, -20] } },
  { geometry: { coordinates: [150, -37] } }
]

// Return map bounds based on list of places
const getMapBounds = (map, maps, gs) => {
  const bounds = new maps.LatLngBounds()
  const groups = gs.length > 0 ? gs : backupPoints
  groups.forEach(group => {
    group.geometry &&
      bounds.extend(
        new maps.LatLng(
          group.geometry.coordinates[1],
          group.geometry.coordinates[0]
        )
      )
  })
  return bounds
}

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
  maps.event.addDomListenerOnce(map, 'idle', () => {
    maps.event.addDomListener(window, 'resize', () => {
      map.fitBounds(bounds)
    })
  })
}
const positionMap = (map, maps, groups) => {
  const bounds = getMapBounds(
    map,
    maps,
    groups.filter(g => g.geometry)
  )
  map.fitBounds(bounds)
  bindResizeListener(map, maps, bounds)
}

export default ({ className = '' }) => {
  const [location, setLocation] = useState([])
  const [groups, setGroups] = useState([])
  const [errored, setErrored] = useState(false)
  const [searched, setSearched] = useState(false)
  const [mapRefs, setMapRefs] = useState({})

  // fetch all groups on first load, once only
  useEffect(() => {
    fetch(allGroupsUrl)
      .then(r => r.json())
      .then(json => setGroups(linkFilter(json.rows)))
  }, [])

  // fetch groups for entered address, when location changes
  useEffect(() => {
    if (location && location.location) {
      const state = location.gmaps.address_components
        .filter(c => c.types[0] === 'administrative_area_level_1')
        .map(c => c.short_name)

      fetch(groupSearchUrl(location.location))
        .then(r => r.json())
        .then(json => {
          setGroups(allGroups(json.rows, state).concat(nationalGroups))
          setSearched(true)
        })
        .catch(e => {
          setErrored(true)
          throw e
        })
    }
  }, [location])

  // set appropriate map zoom whenever `groups` changes
  useEffect(() => {
    if (mapRefs.map) {
      const { map, maps } = mapRefs
      positionMap(map, maps, groups)
    }
  }, [mapRefs, groups])

  return (
    <div className={`${s.mainContent} ${className}`}>
      <h2>Find a group</h2>
      <p className={s.mainSubtext}>
        Looking for help? Or keen to lend a hand? Enter your suburb below to
        find a community care group near you.
      </p>
      <p className={s.mainSubSubtext}>
        Every group is a little different. Read each group’s instructions about
        how to join or get involved.
        <Link href='#disclaimer'>
          {/* <Link smooth to='#disclaimer' style={{ textDecoration: 'none' }}> */}
          <a style={{ textDecoration: 'none' }}>*</a>
        </Link>
      </p>
      <br />
      <label>
        <div className={s.inputContainer}>
          <Search />
          <Geosuggest
            id='groupSearch'
            aria-label={helpText}
            placeholder={helpText}
            country='AU'
            placeDetailFields={['address_components']}
            minLength={3}
            onSuggestSelect={s => {
              setSearched(false)
              setErrored(false)
              setLocation(s)
            }}
          />
        </div>
      </label>
      <div className={s.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={{ lat: -29, lng: 134 }}
          defaultZoom={4}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={setMapRefs}
        >
          {groups &&
            groups.map(
              g =>
                g.geometry && (
                  <Marker
                    key={g.id}
                    lat={g.geometry.coordinates[1]}
                    lng={g.geometry.coordinates[0]}
                  />
                )
            )}
        </GoogleMapReact>
      </div>
      {errored && (
        <div className={s.errorMessage}>
          Uh oh! Something didn't work out, sorry. :(
          <br />
          <br />
          We’ve been notified of the issue. Please try again later.
        </div>
      )}
      {searched && groups && groups.length === 0 && (
        <div className={s.importantWrapper}>
          <div>No results</div>
          <p>
            Unfortunately there are no community groups established in your
            area. There is {/* <Link smooth to='/resources#start-a-group'> */}
            <Link href='/resources#start-a-group'>
              <a>more information on how to setup a group.</a>
            </Link>{' '}
            Once you're setup {/* <Link smooth to='/register'> */}
            <Link href='/register'>
              <a>please register the group</a>
            </Link>{' '}
            so others can find it and help out.
          </p>
        </div>
      )}
      {!searched && groups && groups.length === 0 && (
        <div className={s.importantWrapper}>
          <div>Important</div>
          <p>
            These are community groups established to help people with everyday
            needs, such as shopping or a check-in call. <br />
            You can find {/* <Link smooth to='/faq#help'> */}
            <Link href='/faq#help'>
              <a>more information on urgent help and medical assistance here</a>
            </Link>
            .
          </p>
        </div>
      )}
      {groups && groups.length > 0 && (
        <>
          <div>{groups.map(Group)}</div>
        </>
      )}
    </div>
  )
}
