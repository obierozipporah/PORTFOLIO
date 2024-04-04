import React from 'react';
import {socialLinks} from '../../data/links';
import ProfileImageMobile from '../../images/image-profile-mobile.webp';
import ProfileImageTablet from '../../images/image-profile-tablet.webp';
import ProfileImageDesktop from '../../images/image-profile-desktop.webp';
import {cx} from '@emotion/css';
import styles from './Hero.styles';

const Hero = () => {
  const windowWidth = window.innerWidth;
  const tabletMedia = 768;
  const desktopMedia = 1024;

  return (
    <section
      className={`max-w-[100rem] mx-auto ${cx(styles.elongatedCircleImage)}`}>
      <div className="pb-20 md:max-w-screen-md md:mx-auto lg:max-w-[69.375rem]">
        <div className={`container relative ${cx(styles.container)}`}>
          <div className={`${cx(styles.circleImage)}`}></div>
          <img
            className={`z-10 ${cx(styles.portfolioImage)}`}
            src={
              windowWidth < tabletMedia
                ? ProfileImageMobile
                : windowWidth > desktopMedia
                ? ProfileImageDesktop
                : ProfileImageTablet
            }
          />
          <nav
            className={`mx-auto w-[9.625rem] pb-3 flex flex-col justify-center items-center z-20 md:flex-row md:w-full md:justify-between md:px-[1.875rem] md:h-fit md:pt-[1.875rem] lg:pl-0 lg:pr-[1.875rem] ${cx(
              styles.navLinks,
            )}`}>
            <p className="text-white text-2xl font-bold md:text-3xl lg:text-[2rem]">
              Zipporah Obiero
            </p>
            <div className="pt-5 flex flex-row w-full justify-between md:w-[12rem] md:pt-0">
              {socialLinks.map((item, key) => (
                <a
                  href={item.hrefLink}
                  target="_blank"
                  rel="noreferrer"
                  key={key}>
                  <img
                    className="w-[1.188rem] h-[1.188rem] md:w-[1.5rem] md:h-[1.5rem]"
                    src={item.imageLink}
                    alt={item.altTag}
                  />
                </a>
              ))}
            </div>
          </nav>
          <div
            className={`hidden pt-10 pl-[2rem] md:flex flex-col ${cx(
              styles.heroText,
            )} lg:pl-0`}>
            <div className="hidden text-[4.5rem] leading-[4.5rem] text-white text-left font-bold z-30 md:block lg:hidden">
              <h1>Nice to</h1>
              <h1>
                meet you! I&apos;m{' '}
                <span className="border-b-4 border-portfolio-green">
                  Zipporah Obiero
                </span>
                .
              </h1>
            </div>
            <div className="text-[5.375rem] leading-[5.375rem] text-white text-left font-bold z-30 hidden lg:block">
              <h1>Nice to meet you!</h1>
              <h1>
                I&apos;m{' '}
                <span className="border-b-4 border-portfolio-green">
                  Zipporah Obiero
                </span>
                .
              </h1>
            </div>
            <div className="pt-[2.938rem] text-[1.125rem] leading-[1.75rem] text-portfolio-grey text-left font-medium">
              <p>Based in Nairobi,  Kenya I&apos;m a front-end developer</p>
              <p>passionate about building accessible web apps</p>
              <p>that users love.</p>
            </div>
            <a
              href="#contact"
              className="uppercase text-white w-[7.5rem] mt-[2.125rem] pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-portfolio-green delay-150 transition ease-in-out lg:mt-[4.125rem]">
              Contact me
            </a>
          </div>
        </div>
        <div className="pt-10 flex flex-col items-center md:hidden">
          <div className="text-[2.5rem] leading-10 text-white text-center font-bold">
            <h1>Nice to meet you!</h1>
            <h1>
              I&apos;m{' '}
              <span className="border-b-4 border-portfolio-green">
                Zipporah Obiero
              </span>
              .
            </h1>
          </div>
          <div className="pt-8 text-base leading-6 text-portfolio-grey text-center font-medium">
            <p>Based in Nairobi, Kenya I&apos;m a front-end developer</p>
            <p>passionate about building accessible web</p>
            <p>apps that users love.</p>
          </div>
          <a
            href="#contact"
            className="uppercase text-white mt-5 pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-portfolio-green delay-150 transition ease-in-out">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
