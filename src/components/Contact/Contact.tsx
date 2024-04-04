import React from 'react';
import PortfolioForm from '../PortfolioForm/PortfolioForm';
import {cx} from '@emotion/css';
import styles from './Contact.styles';

const Contact = () => {
  return (
    <section
      id="contact"
      className={`bg-portfolio-bg-grey w-full ${cx(
        styles.contactImage,
      )} md:px-[1.875rem]`}>
      <div className="px-[0.875px] border-b-[1px] lg:px-0 lg:max-w-[69.375rem] lg:mx-auto lg:flex lg:justify-between lg:pt-[5.25rem]">
        <div className="">
          <h2 className="text-[2.5rem] font-bold text-white text-center pt-[3.75rem] md:text-[4.5rem] lg:text-[5.5rem] lg:text-left lg:pt-0">
            Contact
          </h2>
          <div className="pt-2 text-base leading-6 text-portfolio-grey text-center font-medium md:text-[1.125rem] md:leading-7 lg:hidden">
            <p>I would love to hear about your project and</p>
            <p>how I could help. Please fill in the form, and</p>
            <p>I&apos;ll get back to you as soon as possible.</p>
          </div>
          <div className="hidden pt-2 text-base leading-6 text-portfolio-grey text-center font-medium md:text-[1.125rem] md:leading-7 lg:block lg:text-[1.125rem] lg:text-left">
            <p>I would love to hear about your project and how I</p>
            <p> could help. Please fill in the form, and I&apos;ll get back</p>
            <p> to you as soon as possible.</p>
          </div>
        </div>
        <PortfolioForm />
      </div>
    </section>
  );
};

export default Contact;
