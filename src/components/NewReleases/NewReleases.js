import React from "react";
import { connect } from "react-redux";

import { fetchNewReleases } from "../../actions/browseActions";

import MediaContainer from "../MediaContainer/MediaContainer";

class NewReleases extends React.Component {
  componentDidMount() {
    this.props.fetchNewReleases();
  }

  render() {
    return (
      <div className="container">
        {this.props.newReleasesAlbums ? (
          <MediaContainer
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
