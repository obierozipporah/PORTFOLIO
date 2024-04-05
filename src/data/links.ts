import GitHubIcon from '../images/icon-github.svg';
import LinkedInIcon from '../images/icon-linkedin.svg';
import TwitterIcon from '../images/icon-twitter.svg';

interface SocialLinksProps {
  imageLink: string;
  altTag: string;
  hrefLink: string;
}

export const socialLinks: SocialLinksProps[] = [
  {
    imageLink: GitHubIcon,
    altTag: 'GitHub icon',
    hrefLink: 'https://github.com/obierozipporah',
  },
  {
    imageLink: LinkedInIcon,
    altTag: 'LinkedIn icon',
    hrefLink: 'https://www.linkedin.com/zipporah-obiero',
  },
  {
    imageLink: TwitterIcon,
    altTag: 'Twitter icon',
    hrefLink: 'https://twitter.com/ZipporahObiero',
  },
];
