import ThumbNailOneMobile from '../images/thumbnail-project-1-small.webp';
import ThumbNailTwoMobile from '../images/thumbnail-project-2-small.webp';
import ThumbNailThreeMobile from '../images/thumbnail-project-3-small.webp';
import ThumbNailFourMobile from '../images/thumbnail-project-4-small.webp';
import ThumbNailFiveMobile from '../images/thumbnail-project-5-small.webp';
import ThumbNailOneDesktop from '../images/thumbnail-project-1-large.webp';
import ThumbNailTwoDesktop from '../images/thumbnail-project-2-large.webp';
import ThumbNailThreeDesktop from '../images/thumbnail-project-3-large.webp';
import ThumbNailFourDesktop from '../images/thumbnail-project-4-large.webp';
import ThumbNailFiveDesktop from '../images/thumbnail-project-5-large.webp';


interface PortfolioProjects {
  portfolioImageSmall: string;
  portfolioImageLarge: string;
  portfolioImageAlt: string;
  portfolioTile: string;
  portfolioHtml: string;
  portfolioCss: string;
  portfolioJavascript: string;
  portfolioProjectViewLink: string;
  portfolioProjectCodeLink: string;
}

export const PortfolioProjects: PortfolioProjects[] = [
  {
    portfolioImageSmall: ThumbNailOneMobile,
    portfolioImageLarge: ThumbNailOneDesktop,
    portfolioImageAlt: 'Audiophile Project image',
    portfolioTile: 'Audiophile Project',
    portfolioHtml: 'html',
    portfolioCss: 'css',
    portfolioJavascript: 'Jvascript',
    portfolioProjectViewLink:
      'https://audiophile-ecommerce-project-delta.vercel.app/',
    portfolioProjectCodeLink:
      'https://github.com/obierozipporah/Audiophile-Ecommerce-Project.git',
  },
  {
    portfolioImageSmall: ThumbNailTwoMobile,
    portfolioImageLarge: ThumbNailTwoDesktop,
    portfolioImageAlt: 'Countries Application App image',
    portfolioTile: 'Countries Application App',
    portfolioHtml: 'html',
    portfolioCss: 'css',
    portfolioJavascript: 'Javascript',
    portfolioProjectViewLink:
      'https://countries-application-one.vercel.app/',
    portfolioProjectCodeLink:
      'https://github.com/obierozipporah/REST-COUNTRY.git',
  },
  {
    portfolioImageSmall: ThumbNailThreeMobile,
    portfolioImageLarge: ThumbNailThreeDesktop,
    portfolioImageAlt: 'Todo web app image',
    portfolioTile: 'Todo web app',
    portfolioHtml: 'html',
    portfolioCss: 'css',
    portfolioJavascript: 'Javascript',
    portfolioProjectViewLink:
      'https://todo-application-iota-topaz.vercel.app/',
    portfolioProjectCodeLink:
      'https://github.com/obierozipporah/ToDo-App.git',
  },
  {
    portfolioImageSmall: ThumbNailFourMobile,
    portfolioImageLarge: ThumbNailFourDesktop,
    portfolioImageAlt: 'Git User Search App Image',
    portfolioTile: 'Git User Search app',
    portfolioHtml: 'html',
    portfolioCss: 'css',
    portfolioJavascript: 'Javascript',
    portfolioProjectViewLink:
       'https://github-user-search-app-ten-pearl.vercel.app/',
    portfolioProjectCodeLink:
       'https://github.com/obierozipporah/SEARCH-APP.git',
  },
  {
    portfolioImageSmall: ThumbNailFiveMobile,
    portfolioImageLarge: ThumbNailFiveDesktop,
    portfolioImageAlt: 'Portfolio Image',
    portfolioTile: 'Portfolio',
    portfolioHtml: 'html',
    portfolioCss: 'css',
    portfolioJavascript: 'Javascript',
    portfolioProjectViewLink:
      'https://github.com/obierozipporah/-Portfolio.git',
    portfolioProjectCodeLink:
      'https://main--zobi.netlify.app/',
  },
];
