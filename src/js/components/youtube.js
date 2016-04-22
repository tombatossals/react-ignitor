import React, { Component } from 'react';
import VideoList from 'components/videolist';
import SearchBox from 'components/search';

// const KEY = 'AIzaSyBQ0inJMYo3nyDlSs5KnDtRQl86kpsRNqI';

class YoutubePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  searchVideo({ target }) {
    console.log('youtube', target.value);
  }

  render() {
    return (
      <div>
        <h1>Youtube</h1>
        <SearchBox
          autoFocus
          placeholder="Search..."
          onChange={this.searchVideo}
        />
        <VideoList results={this.state.results} />
      </div>
    );
  }
}

export default YoutubePage;
