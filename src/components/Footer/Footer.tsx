import React from 'react';
import {socialLinks} from '../../data/links';

const Footer = () => {
  return (
    <footer className=" bg-portfolio-bg-grey pt-[2.438rem] pb-[3.75rem]">
      <div className="flex flex-col items-center md:flex-row md:w-full md:justify-between md:px-[1.875rem] md:h-fit md:pt-[1.813rem] lg:px-0 lg:max-w-[69.375rem] lg:mx-auto">
        <p className="text-white text-2xl font-bold w-[9.625rem] text-center md:text-[2rem]">
          ZipporahObiero
        </p>
        <div className="pt-5 flex flex-row justify-between w-[9.625rem] md:pt-0 md:w-[12rem]">
          {socialLinks.map((item, key) => (
            <a href={item.hrefLink} target="_blank" rel="noreferrer" key={key}>
              <img
                className="w-[1.188rem] h-[1.188rem] md:w-[1.5rem] md:h-[1.5rem]"
                src={item.imageLink}
                alt={item.altTag}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
