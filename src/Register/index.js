import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { v4 as uuidv4 } from 'uuid'
import { omit } from 'lodash'
import { useHistory } from 'react-router-dom'
import postJson from '../postJson'
import s from './index.module.scss'
import ContentWithSidebar from '../components/ContentWithSidebar'

const apiHost =
  'https://68545911-1f96-432f-809a-c20fb3cf240b-bluemix.cloudant.com'

const initialValues = {
  email: 'me@example.com',
  phone: '',
  groupName: 'example group',
  location: 'dummy location',
  facebook: 'https://example.com/groups',
  messenger: '',
  whatsapp: '',
  links: '',
  general: ''
}

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^.+@.+$/i.test(values.email)) {
    errors.email = "The email format doesn't look right"
  }

  if (!values.groupName) {
    errors.groupName = 'Required'
  }

  if (!values.facebook && !values.messenger && !values.whatsapp) {
    errors.links = 'At least one of the link fields are required'
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
                  <Field type='email' name='email' required />
                </label>
                <ErrorMessage name='email' component='div' />
                <label>
                  Phone
                  <Field type='tel' name='phone' />
                </label>
                <ErrorMessage name='phone' component='div' />
              </fieldset>

              <fieldset>
                <span>
                  <legend>This will be shown on the site</legend>
                </span>
                <label>
                  Group Name:
                  <Field type='text' name='groupName' required />
                </label>
                <ErrorMessage name='groupName' component='div' />
                <label>
                  Location:
                  <Field type='text' name='location' required />
                </label>
                <ErrorMessage name='location' component='div' />

                <ErrorMessage name='links' component='div' />
                <label>
                  Facebook Group link:
                  <Field
                    type='url'
                    name='facebook'
                    placeholder='https://www.facebook.com/groups/123...'
                  />
                </label>
                <label>
                  Messenger group chat link:
                  <Field
                    type='url'
                    name='messenger'
                    placeholder='https://m.me/abc...'
                  />
                </label>
                <label>
                  Whatsapp group chat link:
                  <Field
                    type='url'
                    name='whatsapp'
                    placeholder='https://chat.whatsapp.com/abc...'
                  />
                </label>
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
