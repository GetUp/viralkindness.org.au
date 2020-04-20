# #ViralKindness setup

Static React frontend & managed backend using IBM Cloudant. Relies on Google Maps ([get an api key](https://developers.google.com/maps/documentation/javascript/get-api-key)) for address autocomplete & geocoding.

## Backend

The sites uses Cloudant as a datastore & geospatial service.  It is a managed service, but requires a modest setup.

- [Sign up to Cloudant](https://developer.ibm.com/clouddataservices/docs/compose/cloudant/get-started/)
- Create a new Cloudant service using **both** authentication methods
- Create a set of service credentials, then launch the Cloudant Dashboard
- Create 2 non-partitioned databases (one private, one public)

- In both of the databases (to prevent non-admin updates/deletions):
  - Create a new view with name "prevent_unauthenticated_updates" (leave the rest of the fields)
  - Click Design Documents then "_design/prevent_unauthenticated_updates" to Edit it
  - Remove everything except for the `_id` & `_rev` keys, then paste in:

```
"validate_doc_update": "function(newDoc, oldDoc, userCtx) { if(oldDoc && userCtx.roles.indexOf('_admin') < 0) { throw({forbidden: 'Document update rejected'}); } }"
```

- In the public database:
  - Permissions: Set the "_reader" & "_writer" permissions for "Unauthenticated connections"
  - Design Documents: create [a new geospatial index](https://developer.ibm.com/clouddataservices/docs/compose/cloudant/cloudant-geospatial/) using the following names:
    - Use "geoid" for the `_design/` name
    - Use "geoidx" for the Index name
    - Don't change the pre-filled index function
    - N.B. the names above correspond to the url, so need to be the same

- In the private database:
  - Permissions: Set the "_writer" permission only for "Unauthenticated connections"


- In the Cloudant Dashboard under Account > CORS, add your domains :)
- Check ./docs for pictures of the final results from Cloudant

At this point, the system should be working when the frontend is configured & deployed.

### Data export

- Create another set of service credentials with the "Reader" role
- In the private database
  - Permissions: grant "_reader" access to the Reader credentials
  - Design Documents:
    - Create a new view called "csv" with an index name "output" (leave the Map function as is)
    - Click Design Documents then "_design/csv" to Edit it
    - Add the following as a sibling to the "views" key:

```
"lists": {
    "format": "function(head, req) { var row, fields = ['_id','created_at','email','phone','groupName','groupLink','groupBlurb','location'];  start({ headers: { 'Content-Type': 'text/csv' } });  send(fields.join(',') + '\\n');  function quote(val) { return '\"' + val.replace(/\"/g,'\"\"') + '\"'; }  while(row = getRow()) { var doc = row.doc; var line = fields.map(function(f) { if (f === 'location') { return quote(doc.properties.label); } else { return quote(doc[f]); } });  send(line + '\\n'); } };"
  },
```

The CSV will be available from a url like: https://...-bluemix.cloudant.com/[PRIVATE-DB-NAME]/_design/csv/_list/format/output?include_docs=true

(N.B. the _design & _list parts of the path are system objects. The other parts of the path correspond to the keys in the Design Doc.)



### Backup

[Check out couchbackup](https://www.npmjs.com/package/@cloudant/couchbackup)

## Frontend

- Deploy to a static hosting service capable of running `npm run build`
- Set up the environment as per the `.env.example` file
- Ensure that all routes are sent to `index.html` (for Netlify this is handled in `public/_redirects`)

More details about the frontend usage/dev follows; we used `npm` instead of `yarn` tho

<hr><hr>

# Next.js readme

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on ZEIT Now

The easiest way to deploy your Next.js app is to use the [ZEIT Now Platform](https://zeit.co/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
