import React from 'react';
import { string } from 'prop-types';

const Banner = ({
  headingPart1,
  highlight,
  headingPart2,
  buttonText,
}) => (
  <div className="banner">
    <h2 className="banner-title">
      {headingPart1}
      <span className="h1-highlight"><i>{highlight}</i></span>
      {headingPart2}
    </h2>
    <a className="anchor btn btn-gray200" href="https://reactjs.org/">{buttonText}</a>
  </div>
);

Banner.propTypes = {
  headingPart1: string.isRequired,
  highlight: string.isRequired,
  headingPart2: string.isRequired,
  buttonText: string.isRequired,
};

export default Banner;