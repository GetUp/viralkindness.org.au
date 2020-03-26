import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import ReactGA from 'react-ga'
import Geosuggest from 'react-geosuggest'
import { Search, Facebook, WhatsApp, NextDoor, Location } from '../Icons'
import defaultGroups from '../../data/defaultGroupsByState'
import s from './index.module.scss'
import '../../geosuggest.css'

const apiHost = process.env.REACT_APP_API_HOST
const publicDb = process.env.REACT_APP_PUBLIC_DATABASE
const radius = process.env.REACT_APP_RADIUS_IN_METERS

const helpText = 'Search by street or suburb'

const groupSearchUrl = ({ lng, lat }) =>
  `${apiHost}/${publicDb}/_design/geoid/_geo/geoidx?lat=${lat}&lon=${lng}&radius=${radius}&include_docs=true`

const GroupLink = ({ href, text }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className={`${s.groupDivBtn} ${groupClass(href, s)}`}
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

const groupClass = (url, s) => {
  if (/facebook\.com|fb\.com/i.test(url)) return s.fb
  if (/whatsapp\.com/i.test(url)) return s.wa
  if (/au\.nextdoor\.com/i.test(url)) return s.nd
  return null
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

const allGroups = (fetchedGroups = [], state) => {
  const localGroups = fetchedGroups.filter(g => g && g.doc && g.doc.groupLink)
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

export default ({ className = '' }) => {
  const [location, setLocation] = useState([])
  const [groups, setGroups] = useState([])
  const [errored, setErrored] = useState(false)
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    if (location && location.location) {
      const state = location.gmaps.address_components
        .filter(c => c.types[0] === 'administrative_area_level_1')
        .map(c => c.short_name)

      fetch(groupSearchUrl(location.location))
        .then(r => r.json())
        .then(json => {
          setGroups(allGroups(json.rows, state))
          setSearched(true)
        })
        .catch(e => {
          setErrored(true)
          throw e
        })
    }
  }, [location])

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
        <Link smooth to='#disclaimer' style={{ textDecoration: 'none' }}>
          *
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
            area. There is{' '}
            <Link smooth to='/resources#start-a-group'>
              more information on how to setup a group.
            </Link>{' '}
            Once you're setup{' '}
            <Link smooth to='/register'>
              please register the group
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
            You can find{' '}
            <Link smooth to='/faq#help'>
              more information on urgent help and medical assistance here
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
