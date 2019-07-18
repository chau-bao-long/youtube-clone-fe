import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import { connect } from 'react-redux';

import { login } from '../../actions/user';

const LoginForm = styled(Form)`
  width: 450px;
  margin: 100px auto;
  border-radius: 8px;
  border: 1px solid #dadce0;
  min-height: 450px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextField = styled(Field)`
  border-radius: 4px;
  height: 28px;
  margin: 15px 1px; ;
  padding: 20px 30px;
  font-size: 17px;
`;

const ButtonLogin = styled.button`
  background: #1a73e8;
  color: #ffffff;
  border-radius: 4px;
  line-height: 20px;
  min-width: 88px;
  padding: 8px 16px;
`;

const TitleForm = styled.span`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  font-weight: 400;
  padding-top: 16px;
`;

const SubTitleForm = styled.span`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-weight: 400;
  padding-top: 8px;
  padding-bottom: 12px;
`;

function Login(props) {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          props.login({values, meta: { setSubmitting }});
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <LoginForm onSubmit={handleSubmit} >
          <TitleForm>Sing in</TitleForm>
          <SubTitleForm>to continue to Youtube</SubTitleForm>
          <TextField
            type="text"
            name="email"
            placeholder="Email or Phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <TextField
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <ButtonLogin disabled={isSubmitting}>Login</ButtonLogin>
        </LoginForm>
      )}
    </Formik>
  )
}

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  { login }
)(Login)
