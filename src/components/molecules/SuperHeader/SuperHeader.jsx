import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './SuperHeader.styles';

const SuperHeader = ({ siteTitle }) => (
  <div
  style={{
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  }}
>
  <h1 style={{ margin: 0 }}>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
  </h1>
</div>
);

SuperHeader.propTypes = {
  // bla: PropTypes.string,
};

SuperHeader.defaultProps = {
  // bla: 'test',
};

export default SuperHeader;
