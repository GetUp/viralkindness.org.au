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
    "format": "function(head, req) { var row, fields = ['_id','email','phone','groupName','groupLink','groupBlurb','location'];  start({ headers: { 'Content-Type': 'text/csv' } });  send(fields.join(',') + '\\n');  function quote(val) { return '\"' + val.replace(/\"/g,'\"\"') + '\"'; }  while(row = getRow()) { var doc = row.doc; var line = fields.map(function(f) { if (f === 'location') { return quote(doc.properties.label); } else { return quote(doc[f]); } });  send(line + '\\n'); } };"
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

# Create React App readme

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
