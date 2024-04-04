import React from 'react';
import {PortfolioProjects} from '../../data/portfolio-projects';

const Projects = () => {
  const windowWidth = window.innerWidth;
  const desktopMedia = 1024;

  return (
    <section className="mx-[0.875rem] pb-10 md:mx-auto md:px-[1.875rem] md:max-w-screen-md lg:max-w-[69.375rem] lg:px-0">
      <div className="flex justify-between items-center pb-10">
        <h3 className="text-[2.5rem] font-bold text-white md:text-[4.5rem] lg:text-[5.5rem]">
          Projects
        </h3>
        <a
          href="#contact"
          className="uppercase text-white pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-portfolio-green delay-150 transition ease-in-out">
          Contact me
        </a>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-20 md:pb-14">
        {PortfolioProjects.map((item, key) => (
          <div
            key={key}
            className="flex flex-col pb-10 md:w-[21.375rem] md:h-[24.875rem] lg:w-[33.75rem] lg:h-[30.438rem]">
            <div className="lg:relative group">
              <img
                className=""
                src={
                  windowWidth < desktopMedia
                    ? item.portfolioImageSmall
                    : item.portfolioImageLarge
                }
                alt={item.portfolioImageAlt}
              />
              <div className="w-full h-full z-40 lg:absolute top-0 left-0 ease-in-out transition hover:bg-black/50">
                <div className="flex-col items-center ease-in-out transition absolute top-[34%] right-[34%] text-center hidden lg:group-hover:flex">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.portfolioProjectViewLink}
                    className="uppercase text-white mt-5 mb-6 pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-portfolio-green delay-150 transition ease-in-out lg:cursor-pointer">
                    View Project
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.portfolioProjectCodeLink}
                    className="uppercase text-white mt-5 w-max pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-portfolio-green delay-150 transition ease-in-out lg:cursor-pointer">
                    View code
                  </a>
                </div>
              </div>
            </div>
            <h4 className="text-white uppercase text-[1.5rem] font-bold pb-1.5 pt-5">
              {item.portfolioTile}
            </h4>
            <div className="uppercase pb-0.5 text-white text-[1.125rem] font-medium flex">
              <p className="pr-[1.125rem]">{item.portfolioHtml}</p>
              <p className="pr-[1.125rem]">{item.portfolioCss}</p>
              <p>{item.portfolioJavascript}</p>
            </div>
            <div className="flex lg:hidden">
              <a
                target="_blank"
                rel="noreferrer"
                href={item.portfolioProjectViewLink}
                className="uppercase text-white mt-5 mr-5 pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-portfolio-green delay-150 transition ease-in-out lg:cursor-pointer">
                View Project
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={item.portfolioProjectCodeLink}
                className="uppercase text-white mt-5 pb-2.5 border-b-2 border-portfolio-green tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-portfolio-green delay-150 transition ease-in-out lg:cursor-pointer">
                View code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
