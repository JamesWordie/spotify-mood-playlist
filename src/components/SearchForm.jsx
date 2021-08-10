import React from "react";
import { Form, Field } from "react-final-form";

const SearchForm = (props) => {
  const renderInput = ({ input, meta, label }) => {
    return (
      <div>
        <input placeholder={label} className="form-control" {...input} />
        {renderError(meta)}
      </div>
    )
  }

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="alert alert-danger mt-2" role="alert">
          <p className="text-muted my-0">{error}</p>
        </div>
      )
    }
  }

  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  }

  const validate = (formValues) => {
    let errors = {};

    if(!formValues.search) {
      errors.search = 'You need to make a search.'
    }

    return errors;
  }

  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="search"
            component={renderInput}
            label="Enter a search term..."
          />
        </form>
      )}
    />
  )
}

export default SearchForm;
