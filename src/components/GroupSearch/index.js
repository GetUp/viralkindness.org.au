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

const Group = (group, i) => (
  <tr key={i}>
    <td className={s.groupIconWrapper}>
      <Facebook />
    </td>
    <td>{group.doc.groupName}</td>
    <td>{group.doc.properties.label}</td>
    <td>
      <GroupLink href={group.doc.groupLink} text='Join group' />
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

export default () => {
  const [location, setLocation] = useState([])
  const [groups, setGroups] = useState([])

  useEffect(() => {
    if (location && location.location) {
      fetch(groupSearchUrl(location.location))
        .then(r => r.json())
        .then(json => {
          console.log('cloudant response:', json)
          return json
        })
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
      {groups.length === 0 && (
        <div className={s.importantWrapper}>
          <div>Important</div>
          <p>
            These are community groups established to help people with everyday
            needs, such as shopping or a check-in call. If you need urgent help
            or medical assistance, <a href='/'>head here</a>.
          </p>
        </div>
      )}
      {groups.length > 0 && (
        <GroupTable>
          {/* <tr>
            <td className={s.groupIconWrapper}>
              <Facebook />
            </td>
            <td>Group name</td>
            <td>201 Whitehorse Road, Balwyn VIC, Australia</td>
            <td>
              <GroupLink href='getup.org.au' text='Join group' />
            </td>
          </tr>
          <tr>
            <td className={s.groupIconWrapper}>
              <WhatsApp />
            </td>
            <td>Group name</td>
            <td>Group label</td>
            <td>
              <GroupLink href='getup.org.au' text='Join group' />
            </td>
          </tr>
          <tr>
            <td className={s.groupIconWrapper}>
              <Messenger />
            </td>
            <td>Group name</td>
            <td>Group label</td>
            <td>
              <GroupLink href='getup.org.au' text='Join group' />
            </td>
          </tr> */}
          {groups.map(Group)}
        </GroupTable>
      )}
    </div>
  )
}
