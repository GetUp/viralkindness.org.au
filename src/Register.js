import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Register.css";

const initialValues = {
  email: "me@example.com",
  phone: "",
  groupName: "example group",
  location: "dummy location",
  facebook: "https://example.com/groups",
  messenger: "",
  whatsapp: "",
  links: ""
};

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^.+@.+$/i.test(values.email)) {
    errors.email = "The email format doesn't look right";
  }

  if (!values.groupName) {
    errors.groupName = "Required";
  }

  if (!values.facebook && !values.messenger && !values.whatsapp) {
    errors.links = "At least one of the link fields are required";
  }

  return errors;
};

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    console.log(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

export default () => (
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

            <ErrorMessage name="links" component="div" />
            <label>
              Facebook Group link:
              <Field
                type="url"
                name="facebook"
                placeholder="https://www.facebook.com/groups/123..."
              />
            </label>
            <label>
              Messenger group chat link:
              <Field
                type="url"
                name="messenger"
                placeholder="https://m.me/abc..."
              />
            </label>
            <label>
              Whatsapp group chat link:
              <Field
                type="url"
                name="whatsapp"
                placeholder="https://chat.whatsapp.com/abc..."
              />
            </label>
          </fieldset>

          <button type="submit" disabled={isSubmitting}>
            Register your group
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
