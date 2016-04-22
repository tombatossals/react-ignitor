import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LayoutPage = (props) => (
  <div>
    <ul>
      <li><Link to="/">FrontPage</Link></li>
      <li><Link to="/youtube">Youtube Search</Link></li>
    </ul>
    <hr />
    {props.children}
  </div>
);

LayoutPage.propTypes = {
  children: PropTypes.any,
};

export default LayoutPage;
