import React from "react";
import { connect } from "react-redux";

import { fetchNewReleases } from "../../../actions/browseActions";

import MediaObjectsContainer from "../../MediaObjectsContainer/MediaObjectsContainer";
import EmptyMessage from "../../EmptyMessage/EmptyMessage";
import Loader from '../../Loader/Loader';

class NewReleases extends React.Component {
  componentDidMount() {
    this.props.fetchNewReleases();
  }

  render() {
    return (
      <div className="mediaContainer">
        {this.props.newReleasesAlbums ? this.props.newReleasesAlbums.albums.items.length ? (
          <MediaObjectsContainer
            heading={"New Releases"}
            items={this.props.newReleasesAlbums.albums.items}
            type={"album"}
          />
        ) : (
          <EmptyMessage title="Sorry, no new release playlists available!" subtitle="Explore other categories."/>
        ) : (
          this.props.error ? <EmptyMessage title="404!" subtitle="Can't find the playlists."/> 
          :<Loader/>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newReleasesAlbums: state.browse.newReleasesAlbums,
    isBrowseFetching: state.browse.isFetching
  };
};

export default connect(
  mapStateToProps,
  {
    fetchNewReleases
  }
)(NewReleases);
