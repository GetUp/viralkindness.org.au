import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { v4 as uuidv4 } from 'uuid'
import { omit } from 'lodash'
import { useHistory } from 'react-router-dom'
import postJson from '../postJson'
import './index.css'

const apiHost =
  'https://68545911-1f96-432f-809a-c20fb3cf240b-bluemix.cloudant.com'

const initialValues = {
  email: 'me@example.com',
  phone: '',
  groupName: 'example group',
  groupLink: 'https://m.me/groups',
  location: 'dummy location',
  links: '',
  general: ''
}

const groupLinkPattern = new RegExp(
  '^https://(www.facebook.com|m.me|www.messenger.com|chat.whatsapp.com)/',
  'i'
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

  if (!values.groupLink) {
    errors.groupLink = 'This field is required'
  } else if (!groupLinkPattern.test(values.groupLink)) {
    errors.groupLink =
      'The link should be to a Facebook group or group chat on FB Messenger or WhatsApp'
  }

  return errors
}

export default () => {
  const history = useHistory()

  const onSubmit = (values, { setSubmitting, setFieldError }) => {
    const payload = { _id: uuidv4(), ...values }
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
    <div className="Register">
      <h1>Register your local group</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <fieldset>
              <legend>This information will not be shown on the site</legend>
              <label>
                Contact email:
                <Field type="email" name="email" required />
              </label>
              <ErrorMessage name="email" component="div" />
              <label>
                Contact phone:
                <Field type="tel" name="phone" />
              </label>
              <ErrorMessage name="phone" component="div" />
            </fieldset>

            <fieldset>
              <legend>This will be shown on the site</legend>

              <label>
                Group Name:
                <Field type="text" name="groupName" required />
              </label>
              <ErrorMessage name="groupName" component="div" />

              <label>
                Location:
                <Field type="text" name="location" required />
              </label>
              <ErrorMessage name="location" component="div" />

              <label>
                Group link (Facebook, Messenger, WhatsApp):
                <Field
                  type="url"
                  name="groupLink"
                  placeholder="https://www.facebook.com/groups/123..."
                />
              </label>
              <ErrorMessage name="groupLink" component="div" />
            </fieldset>

            <ErrorMessage name="general" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Register your group
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
