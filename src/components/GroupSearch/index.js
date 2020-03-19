import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import ReactGA from 'react-ga'
import Geosuggest from 'react-geosuggest'
import { Search, Facebook, WhatsApp, Messenger, ExternalLink } from '../Icons'
import defaultGroups from '../../data/defaultGroupsByState'
import s from './index.module.scss'
import '../../geosuggest.css'

const apiHost =
  'https://68545911-1f96-432f-809a-c20fb3cf240b-bluemix.cloudant.com'
const helpText = 'Search by street or suburb'

const groupSearchUrl = ({ lng, lat }) =>
  `${apiHost}/viral-kindness-public/_design/geoid/_geo/geoidx?g=point(${lng}%20${lat})&limit=10&nearest=true&include_docs=true`

const GroupLink = ({ href, text }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className={s.joinGroupBtn}
    onClick={() =>
      ReactGA.event({
        category: 'Actions',
        action: 'Group Link Click'
      })
    }
  >
    {text} <ExternalLink />
  </a>
)

const GroupIcon = ({ url }) => {
  if (/facebook.com|fb.com/i.test(url)) return <Facebook />
  if (/messenger.com|m.me/i.test(url)) return <Messenger />
  if (/whatsapp.com/i.test(url)) return <WhatsApp />
  return null
}

const Group = ({ doc }, i) => (
  <tr key={i} className={s.groupRow}>
    <td>{doc.groupName}</td>
    <td>{(doc.properties && doc.properties.label) || ''}</td>
    <td className={s.groupIconWrapper}>
      <GroupIcon url={doc.groupLink} />
    </td>
    <td>
      <GroupLink href={doc.groupLink} text='Join group' />
    </td>
  </tr>
)

const GroupSml = ({ doc }, i) => (
  <tr key={i} className={s.groupRowSml}>
    <td>
      <div className={s.groupNameSml}>{doc.groupName}</div>
      <div className={s.groupAddSml}>
        {(doc.properties && doc.properties.label) || ''}
      </div>
      <div className={`${s.groupBtn}`}>
        <GroupIcon url={doc.groupLink} />
        <GroupLink href={doc.groupLink} text='Join group' />
      </div>
    </td>
  </tr>
)

const GroupTable = ({ children }) => (
  <table className={s.groupsTable}>
    <thead>
      <tr>
        <th width='40%'>Name</th>
        <th>Location</th>
        <th width='32'></th>
        <th width='108'></th>
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
)

const GroupTableSml = ({ children }) => (
  <table className={s.groupsTableSml}>
    <thead>
      <tr>
        <th></th>
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
)

const groupsForState = (groups, state) =>
  groups.filter(
    r =>
      /(NSW|VIC|QLD|SA|NT|WA|TAS)/.exec(r.doc.properties.label) &&
      /(NSW|VIC|QLD|SA|NT|WA|TAS)/.exec(r.doc.properties.label)[0] === state
  )

const allGroups = (fetchedGroups = [], state) => {
  if (!(state && state[0] && state[0].length > 0)) {
    // no filtering at all
    return fetchedGroups
  }

  const localGroups = groupsForState(fetchedGroups, state[0])

  if (!(defaultGroups[state[0]] && defaultGroups[state[0]].length > 0)) {
    // no default state groups to append
    return localGroups
  }

  // state-filtered local groups + default state groups
  return localGroups.concat(defaultGroups[state[0]])
}

export default () => {
  const [location, setLocation] = useState([])
  const [groups, setGroups] = useState([])
  const [errored, setErrored] = useState(false)

  useEffect(() => {
    if (location && location.location) {
      const state = location.gmaps.address_components
        .filter(c => c.types[0] === 'administrative_area_level_1')
        .map(c => c.short_name)

      fetch(groupSearchUrl(location.location))
        .then(r => r.json())
        .then(json => setGroups(allGroups(json.rows, state)))
        .catch(e => {
          setErrored(true)
          throw e
        })
    }
  }, [location])

  return (
    <div className={s.mainContent}>
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
      {groups.length === 0 && (
        <div className={s.importantWrapper}>
          <div>Important</div>
          <p>
            These are community groups established to help people with everyday
            needs, such as shopping or a check-in call. <br />
            <Link to='/faq#help'>
              Click here if you need urgent help or medical assistance.
            </Link>
          </p>
        </div>
      )}
      {groups.length > 0 && (
        <>
          <GroupTableSml>{groups.map(GroupSml)}</GroupTableSml>
          <GroupTable>{groups.map(Group)}</GroupTable>
        </>
      )}
    </div>
  )
}
