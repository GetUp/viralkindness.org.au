import React, { useState, useEffect } from 'react'
import './index.css'

const apiHost =
  'https://68545911-1f96-432f-809a-c20fb3cf240b-bluemix.cloudant.com'
const allDocsUrl = `${apiHost}/viral-kindness-public/_all_docs?include_docs=true`
const helpText = 'Search by your postcode or suburb'

const GroupLink = ({ href, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
)

const Group = group => (
  <div>
    <p>Name: {group.doc.groupName}</p>
    <p>Location: {group.doc.location}</p>
    {group.doc.facebook && (
      <GroupLink href={group.doc.facebook} text="Facebook" />
    )}
    {group.doc.messenger && (
      <GroupLink href={group.doc.messenger} text="Messenger" />
    )}
    {group.doc.whatsapp && (
      <GroupLink href={group.doc.whatsapp} text="Whatsapp" />
    )}
  </div>
)

export default () => {
  const [groups, setGroups] = useState([])
  useEffect(() => {
    fetch(allDocsUrl)
      .then(r => r.json())
      .then(json => setGroups(json.rows))
  })
  return (
    <div className="Join">
      <h1>Join page</h1>
      <form>
        <input
          type="search"
          name="q"
          aria-label={helpText}
          placeholder={helpText}
        />
        <button>Search</button>
      </form>

      {groups && groups.map(Group)}
    </div>
  )
}
