import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongItem from './SongItem/SongItem';
import PropTypes from 'prop-types';
import * as musicActions from '../../store/actions/musicActions';

class MusicList extends Component {
  deleteSongHandler(id) {
    this.props.deleteSong(id);
  };

  render() {
    const { year, songs } = this.props;
    const music = songs.map((item) => {
      return <SongItem key={ item.id } data={ item } deleted={ () => this.deleteSongHandler(item.id) }/>
    });

    return (
      <div>
        <div>
          { year }
        </div>
        <div>
          { this.props.isFetching ?   'Loading......' : music }
        </div>

        <button onClick={ this.props.fetchMusic }>Fetch Music</button>
      </div>
    );
  }
}

MusicList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    length: PropTypes.string
  })).isRequired,
  year: PropTypes.number.isRequired,

};

const mapStateToProps = (state) => {
  return {
    ...state,
    songs: state.musicReducer.songs,
    year: state.musicReducer.year,
    isFetching: state.musicReducer.isFetching
  }
};

export default connect(mapStateToProps, musicActions)(MusicList)