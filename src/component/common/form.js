import React from "react";
import { Formik } from "formik";

const Form = (props) => {
  console.log( 'props in  the formik',props);

  return (
    <Formik initialValues={props.initialValue} onSubmit={props.onSubmit}>
      {
          (formProps)=>{
              console.log(" inside formik", props,formProps )
            return props.children(formProps)
          }
      }
    </Formik>
  );
};
export default Form;
