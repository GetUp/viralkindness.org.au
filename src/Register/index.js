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
  NextDoor,
  Facebook
} from '../components/Icons'
import InputWithIcon from '../components/InputWithIcon'
import '../geosuggest.css'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import FaqNav from '../components/FaqNav'
import ResourcesLink from '../components/ResourcesLink'
import {
  Accordion,
  AccordionTitle,
  AccordionBody
} from '../components/Accordion'

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

const groupLinkPattern = /^https?:\/\/(www\.)?(facebook\.com|fb\.com|messenger\.com|m\.me|chat\.whatsapp\.com|au\.nextdoor\.com|nextdoor\.com)/i

const geoJson = loc => ({
  geometry: {
    coordinates: [loc.location.lng, loc.location.lat],
    type: 'Point'
  },
  properties: loc,
  type: 'Feature'
})

const active = (pattern, groupLink) => (pattern.test(groupLink) ? 1 : 0.5)

export default () => {
  const history = useHistory()
  const [location, setLocation] = useState({})
  const [blurbLength, setBlurbLength] = useState(0)
  const blurbMaxLength = 280

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
        'The link should be to a Facebook or Nextdoor group or group chat on FB Messenger or WhatsApp and must begin with a protocol (e.g. "https://")'
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
        <div className={s.headerContainer}>
          <h1 className={s.pageHeader}>Add a group</h1>
          <p className={s.subtitle}>
            <strong>
              Adding a community care group in your local area is easy!
              <br /> Here's how to set it up:
            </strong>
          </p>
          <ol className={s.list}>
            <li>
              Create a group up via Facebook, Facebook Messenger, WhatsApp or
              NextDoor.
            </li>
            <li>
              Once your group is set up, fill in the information below to add
              your group on the #viralkindness website
            </li>
            <li>
              After you've added your group, people will be able to{' '}
              <Link to='/#groupSearch' className={s.link}>
                find it on this site by searching for their suburb
              </Link>
              . They’ll be able to volunteer to lend a hand, or request
              assistance.
            </li>
          </ol>
          <hr className={s.hr} />
          <p style={{ fontSize: '0.9rem' }}>
            <Link smooth to='/resources#start-a-group' className={s.link}>
              More information about starting a group is available here.
            </Link>
          </p>
          {/*
          <Accordion>
            <AccordionTitle>
              <p style={{ fontSize: '0.9rem' }}>
                Some tips if if you’re using a Facebook group
              </p>
            </AccordionTitle>
            <AccordionBody>
              <ul style={{ marginTop: 0, fontSize: '0.9rem' }}>
                <li>
                  Add a clear group description to the ‘About’ section of your
                  page.
                </li>
                <li>
                  Make the group ‘private’ <strong>not</strong> ‘secret’ or
                  ‘public’. That way you can make sure only members of your
                  community join.
                </li>
              </ul>
            </AccordionBody>
          </Accordion> */}
        </div>
      </PageHeader>
      <ContentWithSidebar>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, values: { groupLink } }) => (
            <Form className={s.addForm}>
              <fieldset>
                <p className={s.formHeader}>
                  <b>Personal details</b>
                  <div className={s.inputMessage}>
                    Your personal information won't be publicly visible.
                  </div>
                </p>
                <label>
                  Your email*
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
                </label>
                <label>
                  Your phone
                  <InputWithIcon className={s.inputWrapper}>
                    <Private />
                    <Field type='tel' name='phone' placeholder='Phone' />
                  </InputWithIcon>
                </label>
                <hr className={s.hr} />
                <p className={s.formHeader}>
                  <b>Group details</b>
                </p>

                <label>
                  Group Name*
                  <InputWithIcon className={s.inputWrapper}>
                    <Public />
                    <Field
                      type='text'
                      name='groupName'
                      placeholder='e.g. George St Mutual Aid'
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
                  Location*
                  <InputWithIcon className={s.inputWrapper}>
                    <Public />
                    <Geosuggest
                      placeholder='Enter your street or suburb'
                      country='AU'
                      placeDetailFields={['address_components']}
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
                  Link*
                  <span className={s.socialIcons}>
                    <span
                      style={{
                        opacity: active(/au\.nextdoor\.com/, groupLink)
                      }}
                    >
                      <NextDoor />
                    </span>
                    <span
                      style={{
                        opacity: active(/chat\.whatsapp\.com/, groupLink)
                      }}
                    >
                      <WhatsApp />
                    </span>
                    <span
                      style={{
                        opacity: active(/(m\.me|messenger\.com)/, groupLink)
                      }}
                    >
                      <Messenger />
                    </span>
                    <span
                      style={{
                        opacity: active(/(fb\.com|facebook\.com)/, groupLink)
                      }}
                    >
                      <Facebook />
                    </span>
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
                <Accordion className={s.accordion}>
                  <AccordionTitle className={s.title}>
                    Supported platforms
                  </AccordionTitle>
                  <AccordionBody className={s.body}>
                    <ul>
                      <li>
                        <span>
                          <Facebook />
                          Facebook
                        </span>
                      </li>
                      <li>
                        <span>
                          <WhatsApp />
                          WhatsApp
                        </span>
                      </li>
                      <li>
                        <span>
                          <Messenger />
                          Messenger
                        </span>
                      </li>
                      <li>
                        <span>
                          <NextDoor />
                          NextDoor
                        </span>
                      </li>
                    </ul>
                  </AccordionBody>
                </Accordion>
                <label>
                  Short introduction or instructions (
                  {`${blurbLength}/${blurbMaxLength}`})
                  <InputWithIcon className={s.inputWrapper}>
                    <Public className={s.textareaIcon} />
                    <Field
                      as='textarea'
                      rows={4}
                      maxLength={blurbMaxLength}
                      name='groupBlurb'
                      placeholder='Any special instructions'
                      onKeyUp={e => setBlurbLength(e.target.value.length)}
                    />
                  </InputWithIcon>
                </label>
                <div className={s.disclaimer}>
                  Your information is collected under GetUp’s Privacy Policy
                </div>
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
          <Link to='/#groupSearch' className={s.sidebarLink}>
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
