import React, { useState, useEffect } from 'react'
import s from './index.module.scss'

const apiHost =
  'https://68545911-1f96-432f-809a-c20fb3cf240b-bluemix.cloudant.com'
const allDocsUrl = `${apiHost}/viral-kindness-public/_all_docs?include_docs=true`
const helpText = 'Search by your postcode or suburb'

const GroupLink = ({ href, text }) => (
  <a href={href} target='_blank' rel='noopener noreferrer'>
    {text}
  </a>
)

const Group = group => (
  <>
    <tr>
      <td>{group.doc.groupName}</td>
      <td>{group.doc.location}</td>
      <td>
        {group.doc.facebook && (
          <GroupLink href={group.doc.facebook} text='Facebook' />
        )}
        {group.doc.messenger && (
          <GroupLink href={group.doc.messenger} text='Messenger' />
        )}
        {group.doc.whatsapp && (
          <GroupLink href={group.doc.whatsapp} text='Whatsapp' />
        )}
      </td>
    </tr>
  </>
)

const GroupTable = ({ children }) => (
  <table className={s.groupsTable}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Location</th>
        <th>Platform</th>
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
)

export default () => {
  const [groups, setGroups] = useState([])
  useEffect(() => {
    fetch(allDocsUrl)
      .then(r => r.json())
      .then(json => setGroups(json.rows))
  })
  return (
    <div>
      <h1>Join page</h1>
      <form>
        <input
          type='search'
          name='q'
          aria-label={helpText}
          placeholder={helpText}
        />
        <button>Search</button>
      </form>
      <GroupTable>{groups && groups.map(Group)}</GroupTable>
    </div>
  )
}
