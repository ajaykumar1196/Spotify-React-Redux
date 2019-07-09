import React from "react";
import { connect } from "react-redux";

import { fetchNewReleases } from "../../../actions/browseActions";

import MediaObjectsContainer from "../../MediaObjectsContainer/MediaObjectsContainer";

class NewReleases extends React.Component {
  componentDidMount() {
    this.props.fetchNewReleases();
  }

  render() {
    return (
      <div>
        {this.props.newReleasesAlbums ? (
          <MediaObjectsContainer
            heading={"New Releases"}
            items={this.props.newReleasesAlbums.albums.items}
            type={"album"}
          />
        ) : (
          "Loading Albums..."
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
