import React, { useState, useEffect } from 'react'
import ReactGA from 'react-ga'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { HashLink as Link } from 'react-router-hash-link'
import { v4 as uuidv4 } from 'uuid'
import { omit } from 'lodash'
import { useHistory } from 'react-router-dom'
import Geosuggest from 'react-geosuggest'
import postJson from '../postJson'
import s from './index.module.scss'
import ContentWithSidebar from '../components/ContentWithSidebar'
import {
  Private,
  Public,
  Messenger,
  WhatsApp,
  Facebook
} from '../components/Icons'
import InputWithIcon from '../components/InputWithIcon'
import '../geosuggest.css'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import FaqNav from '../components/FaqNav'
import ResourcesLink from '../components/ResourcesLink'

const apiHost =
  'https://68545911-1f96-432f-809a-c20fb3cf240b-bluemix.cloudant.com'

const initialValues = {
  email: '',
  phone: '',
  groupName: '',
  groupLink: '',
  groupBlurb: '',
  location: '',
  links: '',
  general: ''
}

const groupLinkPattern = /^https?:\/\/(www\.)?(facebook\.com|fb\.com|messenger\.com|m\.me|chat\.whatsapp\.com)/i

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

  useEffect(
    () => ReactGA.pageview(window.location.pathname + window.location.search),
    []
  )

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
        'The link should be to a Facebook group or group chat on FB Messenger or WhatsApp and must begin with a protocol (e.g. "https://")'
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
    <div>
      <PageHeader>
        <h1 style={{ marginBottom: '1rem' }}>Add a group</h1>
        <p className={s.subtitle} style={{ fontSize: '1.15rem' }}>
          Adding a community care group in your local area is easy!
        </p>
        <p style={{ fontSize: '1.15rem', marginBottom: '1.2em' }}>
          Fill in the information below - including how the group will organise
          eg. Facebook group, FB Messenger, or WhatsApp group. Many groups are
          using Facebook as a digital space to come together and communicate.
        </p>
        <p style={{ fontSize: '0.9rem' }}>
          If you’re using a Facebook group, make sure you:
        </p>
        <ul style={{ marginTop: 0, fontSize: '0.9rem' }}>
          <li>
            Add a clear group description to the ‘About’ section of your page.
          </li>
          <li>
            Make the group ‘private’ <strong>not</strong> ‘secret’ or ‘public’.
            That way you can make sure only members of your community join.
          </li>
        </ul>
        <p style={{ fontSize: '0.9rem' }}>
          <Link
            to='/resources'
            style={{
              borderBottom: '1px solid rgba(0, 68, 114, 0.3)',
              textDecoration: 'none'
            }}
          >
            More information about starting a group is available here.
          </Link>
        </p>
      </PageHeader>
      <ContentWithSidebar>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={s.addForm}>
              <fieldset>
                <label>
                  Your email
                  <InputWithIcon className={s.inputWrapper}>
                    <Private />
                    <Field
                      type='email'
                      name='email'
                      placeholder='Email'
                      required
                    />
                  </InputWithIcon>
                  <ErrorMessage
                    name='email'
                    component='div'
                    className={s.errorMessage}
                  />
                  <span className={s.inputMessage}>
                    Your email won't be publicly visible.
                  </span>
                </label>
                <label>
                  Your phone
                  <InputWithIcon className={s.inputWrapper}>
                    <Private />
                    <Field type='tel' name='phone' placeholder='Phone' />
                  </InputWithIcon>
                  <span className={s.inputMessage}>
                    Your phone number won't be publicly visible.
                  </span>
                </label>

                <label>
                  Name of the group
                  <InputWithIcon className={s.inputWrapper}>
                    <Public />
                    <Field
                      type='text'
                      name='groupName'
                      placeholder='Group name'
                      required
                    />
                  </InputWithIcon>
                  <ErrorMessage
                    name='groupName'
                    component='div'
                    className={s.errorMessage}
                  />
                </label>

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
                    <ErrorMessage
                      name='location'
                      component='div'
                      className={s.errorMessage}
                    />
                  </InputWithIcon>
                </label>
                <ErrorMessage
                  name='location'
                  component='div'
                  className={s.errorMessage}
                />

                <label>
                  Link
                  <span className={s.socialIcons}>
                    <WhatsApp />
                    <Messenger />
                    <Facebook />
                  </span>
                  <InputWithIcon className={s.inputWrapper}>
                    <Public />
                    <Field
                      type='url'
                      name='groupLink'
                      placeholder='https://www.facebook.com/groups/123...'
                    />
                  </InputWithIcon>
                  <ErrorMessage
                    name='groupLink'
                    component='div'
                    className={s.errorMessage}
                  />
                </label>
                <label>
                  Short introduction or instructions
                  <InputWithIcon className={s.inputWrapper}>
                    <Public className={s.textareaIcon} />
                    <Field
                      as='textarea'
                      rows={4}
                      maxLength={280}
                      name='groupBlurb'
                      placeholder='Any special instructions'
                    />
                  </InputWithIcon>
                </label>
              </fieldset>

              <ErrorMessage name='general' component='div' />
              <button
                type='submit'
                disabled={isSubmitting}
                className='btn btn-large btn-secondary'
                style={{ border: 'none' }}
              >
                Register your group
              </button>
            </Form>
          )}
        </Formik>
        <div className={s.sidebarContainer}>
          <Link to='/' className={s.sidebarLink}>
            <div className={s.sidebarLinkHeader}>Find a group</div>
            <div className={s.sidebarLinkSubtitle}>
              Find a community care group near you.
            </div>
          </Link>
          <ResourcesLink s={s} />
          <FaqNav />
        </div>
      </ContentWithSidebar>
      <Footer />
    </div>
  )
}
