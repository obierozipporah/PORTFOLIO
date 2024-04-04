import React from 'react';
import {experienceInfo} from '../../data/experience';
import styles from './Experience.styles';

const Experience = () => {
  return (
    <section className={`w-full ${styles.experienceImage}`}>
      <div className="pb-20 md:max-w-screen-md lg:max-w-[69.375rem] md:mx-auto">
        <div className="py-10 mx-[0.875rem] flex flex-col items-center text-white text-center border-t-[1px] border-b-[1px] md:mx-[2rem] md:flex-row md:flex-wrap md:text-left md:border-b-0 lg:mx-0 lg:justify-between lg:pt-[4.5rem] pb-0">
          {experienceInfo.map((item, key) => (
            <div className="pb-5 md:w-[21.563rem] lg:pb-[3.625rem]" key={key}>
              <h2 className="text-[2rem] font-bold md:text-[3rem]">
                {item.language}
              </h2>
              <p className="text-portfolio-grey capitalize md:text-[1.125rem]">
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
