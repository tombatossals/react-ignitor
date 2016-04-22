import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const VideoList = (props) => (
  <ul>
    {
      props.results.map(el => (
        <li><Link to="/">{ el }</Link></li>
      ))
    }
  </ul>
);

VideoList.propTypes = {
  results: PropTypes.array,
};

export default VideoList;

