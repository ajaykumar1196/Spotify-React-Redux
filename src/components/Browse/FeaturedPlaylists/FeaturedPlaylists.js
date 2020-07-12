import React from "react";
import { connect } from "react-redux";

import { fetchFeaturedPlaylists } from "../../../actions/browseActions";

import MediaObjectsContainer from "../../MediaObjectsContainer/MediaObjectsContainer";

import EmptyMessage from "../../EmptyMessage/EmptyMessage";
import Loader from '../../Loader/Loader';

class FeaturedPlaylists extends React.Component {
  componentDidMount() {
    this.props.fetchFeaturedPlaylists();
  }

  render() {
    return (
      <div className="mediaContainer">
        {this.props.featuredPlaylists ? this.props.featuredPlaylists.playlists.items.length ?(
          <MediaObjectsContainer
            heading={"Featured Playlists"}
            items={this.props.featuredPlaylists.playlists.items}
            type={"playlist"}
          />
        ) : (
          <EmptyMessage title="Sorry, no featured playlist available!" subtitle="Explore other categories."/>
        ) : (
          this.props.error ? <EmptyMessage title="404!" subtitle="Can't find the featured playlists."/> 
          :<Loader/>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    featuredPlaylists: state.browse.featuredPlaylists,
    error: state.browse.error
  };
};

export default connect(
  mapStateToProps,
  {
    fetchFeaturedPlaylists
  }
)(FeaturedPlaylists);
