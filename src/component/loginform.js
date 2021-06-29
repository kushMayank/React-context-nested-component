import React from "react";
import Form from "./common/form";

export default function Loginform(props) {
  console.log("login form", props);
  return (
    <Form
      initialValue={{
        email: "anna@gmail.com",
      }}
      onSubmit={() => alert("U clicked submit")}
    >
      {({
        dirty,
        errors,
        handleSubmit,
        isSubmitting,
        isValidating,
        isValid,
        setFieldError,
        setFieldValue,
        submitCount,
        values,
        handleChange,
        handleBlur,
        formProps
      }) => {
        console.log(
          "=====>",
          dirty,
          errors,
          handleSubmit,
          isSubmitting,
          isValidating,
          isValid,
          setFieldError,
          setFieldValue,
          submitCount,
          values,
          formProps
        );

        return (
          <form onSubmit={handleSubmit}>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              //   value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        );
      }}
    </Form>
  );
}
