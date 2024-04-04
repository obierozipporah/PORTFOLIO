import {css} from '@emotion/css';
import PatternRings from '../../images/pattern-rings.svg';

const styles = {
  experienceImage: css`
    background-image: url(${PatternRings});
    background-repeat: no-repeat;
    background-position: calc(100% + 333px) calc(100% + -13px);

    @media screen and (min-width: 768px) {
      background-position: calc(100% + 333px) calc(100% + -35px);
    }

    @media screen and (min-width: 1024px) {
      background-position: calc(100% + 244px) calc(100% + -81px);
    }
  `,
};

export default styles;
