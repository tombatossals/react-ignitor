import React, { PropTypes } from 'react';
import debounce from 'lodash.debounce';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.delayedOnChange = debounce(this.delayedOnChange, 1000);
  }

  delayedOnChange({ target }) {
    console.log('hola');
    this.props.onChange(target.value);
  }

  render() {
    return (
      <input type="search" { ...this.props } />
    );
  }
}

SearchBox.propTypes = {
  onChange: PropTypes.any,
};

export default SearchBox;
