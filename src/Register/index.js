import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { v4 as uuidv4 } from 'uuid'
import { omit } from 'lodash'
import { useHistory } from 'react-router-dom'
import Geosuggest from 'react-geosuggest'
import postJson from '../postJson'
import s from './index.module.scss'
import ContentWithSidebar from '../components/ContentWithSidebar'
import { Private, Public } from '../components/Icons'
import InputWithIcon from '../components/InputWithIcon'
import '../geosuggest.css'

const apiHost =
  'https://68545911-1f96-432f-809a-c20fb3cf240b-bluemix.cloudant.com'

const initialValues = {
  email: 'me@example.com',
  phone: '',
  groupName: 'example group',
  groupLink: 'https://m.me/groups',
  location: '',
  links: '',
  general: ''
}

const groupLinkPattern = new RegExp(
  '^https://(www.facebook.com|m.me|www.messenger.com|chat.whatsapp.com)/',
  'i'
)

const geoJson = loc => ({
  geometry: {
    coordinates: [loc.location.lng, loc.location.lat],
    type: 'Point'
  },
  properties: loc,
  type: 'Feature'
})

export default () => {
  const history = useHistory()
  const [location, setLocation] = useState({})

  const validate = values => {
    const errors = {}

    if (!values.email) {
      errors.email = 'This field is required'
    } else if (!/^.+@.+$/i.test(values.email)) {
      errors.email = "The email address format doesn't look right"
    }

    if (!values.groupName) {
      errors.groupName = 'This field is required'
    }

    if (!(location && location.location)) {
      errors.location = 'A location is needed so people can find the group'
    }

    if (!values.groupLink) {
      errors.groupLink = 'This field is required'
    } else if (!groupLinkPattern.test(values.groupLink)) {
      errors.groupLink =
        'The link should be to a Facebook group or group chat on FB Messenger or WhatsApp'
    }

    return errors
  }

  const onSubmit = (values, { setSubmitting, setFieldError }) => {
    const payload = { _id: uuidv4(), ...values, ...geoJson(location) }
    const privateSubmission = postJson(`${apiHost}/viral-kindness/`, payload)
    const publicSubmission = postJson(
      `${apiHost}/viral-kindness-public/`,
      omit(payload, ['email', 'phone'])
    )
    Promise.all([privateSubmission, publicSubmission])
      .then(data => {
        setSubmitting(false)
        history.push('/thanks')
      })
      .catch(error => {
        setFieldError(
          'general',
          `An error occurred: "${error.message}".  Please try again shortly.`
        )
        postJson(
          'https://api.getup.org.au/blackhole?campaign=viralkindness&source=client-error',
          payload
        )
      })
  }

  return (
    <div className='Register'>
      <h1>Register your local group</h1>
      <ContentWithSidebar>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={s.addForm}>
              <fieldset>
                <span>
                  <legend>
                    This information will not be shown on the site
                  </legend>
                </span>
                <label>
                  Email
                  <InputWithIcon className={s.inputWrapper}>
                    <Private />
                    <Field type='email' name='email' required />
                  </InputWithIcon>
                </label>
                <ErrorMessage name='email' component='div' />
                <label>
                  Phone
                  <InputWithIcon className={s.inputWrapper}>
                    <Private />
                    <Field type='tel' name='phone' />
                  </InputWithIcon>
                </label>
                <ErrorMessage name='phone' component='div' />
              </fieldset>

              <fieldset>
                <span>
                  <legend>This will be shown on the site</legend>
                </span>

                <label>
                  Group Name
                  <InputWithIcon className={s.inputWrapper}>
                    <Public />
                    <Field type='text' name='groupName' required />
                  </InputWithIcon>
                </label>
                <ErrorMessage name='groupName' component='div' />

                <label>
                  Location
                  <InputWithIcon className={s.inputWrapper}>
                    <Public />
                    <Geosuggest
                      placeholder='Enter your street or suburb'
                      country='AU'
                      placeDetailFields={[]}
                      minLength={4}
                      onSuggestSelect={setLocation}
                    />
                    <ErrorMessage name='location' component='div' />
                  </InputWithIcon>
                </label>
                <ErrorMessage name='location' component='div' />

                <label>
                  Group link (Facebook, Messenger, WhatsApp)
                  <InputWithIcon className={s.inputWrapper}>
                    <Public />
                    <Field
                      type='url'
                      name='groupLink'
                      placeholder='https://www.facebook.com/groups/123...'
                    />
                  </InputWithIcon>
                </label>
                <ErrorMessage name='groupLink' component='div' />
              </fieldset>

              <ErrorMessage name='general' component='div' />
              <button type='submit' disabled={isSubmitting}>
                Register your group
              </button>
            </Form>
          )}
        </Formik>
        <div>
          <h1>hello</h1>
        </div>
      </ContentWithSidebar>
    </div>
  )
}
