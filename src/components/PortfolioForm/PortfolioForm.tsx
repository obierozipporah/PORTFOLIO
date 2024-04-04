import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {cx} from '@emotion/css';
import styles from './PortfolioForm.styles';
import ErrorWarning from '../../images/warning.svg';

interface props {
  name: string;
  email: string;
  message: string;
}

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const onSubmit = (values: props) => {
  console.log('Form submit data', values);
};

const validationSchema = Yup.object({
  email: Yup.string().email('Sorry, invalid format here').required('Required!'),
});

const PortfolioForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {formik => {
        const {errors, touched} = formik;
        return (
          <Form
            aria-autocomplete="none"
            className="flex flex-col pt-[3.125rem] pb-[5.438rem] md:w-[27.813rem] md:mx-auto lg:mx-0 lg:pt-0">
            <div
              className={`relative mb-[2rem] ${cx(
                styles.formFields,
                styles.formFieldsBorder,
              )}`}>
              <Field
                type="name"
                id="name"
                name="name"
                placeholder="NAME"
                className=""
              />
            </div>
            <div
              className={`relative mb-[2rem]  ${
                errors.email && touched.email
                  ? cx(styles.formFieldsError)
                  : cx(styles.formFieldsBorder)
              } ${cx(styles.formFields)}`}>
              <Field type="email" id="email" name="email" placeholder="EMAIL" />
              {errors.email ? (
                <img
                  className="absolute top-[0.688rem] right-0"
                  src={ErrorWarning}
                />
              ) : (
                ''
              )}
              <p
                className={`absolute text-portfolio-error pt-[0.313rem] right-0 animate-[shake_0.25s_ease-in-out_2s]`}>
                <ErrorMessage name="email" />
              </p>
            </div>
            <Field
              type="text"
              id="message"
              name="message"
              component="textarea"
              rows="4"
              placeholder="MESSAGE"
              className={`bg-transparent border-b-[1px] h-[6.688rem] text-white focus:outline-none px-[1.063rem] pt-[0.313rem] resize-none transition ease-in-out delay-150 focus:border-b-portfolio-green`}
            />
            {/* </div> */}
            <button
              type="submit"
              className="uppercase text-white mt-[2rem] pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold w-[144px] self-end hover:-translate-y-1 hover:text-portfolio-green delay-150 transition ease-in-out">
              Send message
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PortfolioForm;
