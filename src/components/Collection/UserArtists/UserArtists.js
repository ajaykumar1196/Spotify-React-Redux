import React from "react";
import { connect } from "react-redux";

import { fetchCurrentUserArtists } from "../../../actions/currentUserActions";

import MediaObjectsContainer from "../../MediaObjectsContainer/MediaObjectsContainer";
import EmptyMessage from "../../EmptyMessage/EmptyMessage";
import Loader from '../../Loader/Loader';

class UserArtists extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUserArtists();
  }

  render() {
    return (
      <div className="mediaContainer">
        {this.props.currentUserArtists ?
          this.props.currentUserArtists.artists.items.length ? (
            <MediaObjectsContainer
              heading={"Artists"}
              items={this.props.currentUserArtists.artists.items}
              type={"artist"}
            />
          ) : <EmptyMessage title="Like your favourite artists" subtitle="Follow artists you love to listen." /> : (
            <Loader/>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUserArtists: state.currentUser.currentUserArtists
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCurrentUserArtists
  }
)(UserArtists);
