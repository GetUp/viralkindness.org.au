import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Geosuggest from 'react-geosuggest'
import { Search, Facebook, WhatsApp, Messenger, ExternalLink } from '../Icons'
import s from './index.module.scss'
import '../../geosuggest.css'

const apiHost =
  'https://68545911-1f96-432f-809a-c20fb3cf240b-bluemix.cloudant.com'
const helpText = 'Search by suburb'

const groupSearchUrl = ({ lng, lat }) =>
  `${apiHost}/viral-kindness-public/_design/geoid/_geo/geoidx?g=point(${lng}%20${lat})&limit=20&nearest=true&include_docs=true`

const GroupLink = ({ href, text }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className={s.joinGroupBtn}
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
  <tr key={i}>
    <td className={s.groupIconWrapper}>
      <GroupIcon url={doc.groupLink} />
    </td>
    <td>{doc.groupName}</td>
    <td>{doc.properties.label}</td>
    <td>
      <GroupLink href={doc.groupLink} text='Join group' />
    </td>
  </tr>
)

const GroupTable = ({ children }) => (
  <table className={s.groupsTable}>
    <thead>
      <tr>
        <th width='32'></th>
        <th width='30%'>Name</th>
        <th>Location</th>
        <th width='108'></th>
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
)

const defaultGroups = [
  {
    doc: {
      groupName: 'default group 1',
      groupLink: 'fb.com/groups/12345',
      properties: { label: 'default address 1' }
    }
  },
  {
    doc: {
      groupName: 'default group 2',
      groupLink: 'https://m.me/viralkindnessgroup',
      properties: { label: 'default location 2' }
    }
  },
  {
    doc: {
      groupName: 'default group 3',
      groupLink: 'http://chat.whatsapp.com/qwe123',
      properties: { label: 'default area 3' }
    }
  }
]

export default () => {
  const [location, setLocation] = useState([])
  const [groups, setGroups] = useState(defaultGroups)

  useEffect(() => {
    if (location && location.location) {
      fetch(groupSearchUrl(location.location))
        .then(r => r.json())
        .then(json => setGroups(json.rows))
    }
  }, [location])

  return (
    <div className={s.mainContent}>
      <h2>Find a group</h2>
      <p>
        <b>
          Looking for help? Or keen to lend a hand? Enter your suburb below to
          find a community care group near you.
        </b>
      </p>
      <p>
        Every group is a little different. Read each group’s instructions about
        how to join or get involved.
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
            placeDetailFields={[]}
            minLength={3}
            onSuggestSelect={setLocation}
          />
        </div>
      </label>
      <GroupTable>{groups.map(Group)}</GroupTable>
    </div>
  )
}
