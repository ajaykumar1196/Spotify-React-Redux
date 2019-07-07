import React from "react";
import { connect } from "react-redux";

import { fetchFeaturedPlaylists } from "../../actions/browseActions";

import MediaContainer from "../MediaContainer/MediaContainer";

class FeaturedPlaylists extends React.Component {
  componentDidMount() {
    this.props.fetchFeaturedPlaylists();
  }

  render() {
    return (
      <div className="container">
        {this.props.featuredPlaylists ? (
          <MediaContainer
            heading={"Featured Playlists"}
            items={this.props.featuredPlaylists.playlists.items}
            type={"playlist"}
          />
        ) : (
          "Loading Playlists..."
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    featuredPlaylists: state.browse.featuredPlaylists
  };
};

export default connect(
  mapStateToProps,
  {
    fetchFeaturedPlaylists
  }
)(FeaturedPlaylists);