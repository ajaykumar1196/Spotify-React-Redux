import React from "react";
import { connect } from "react-redux";

import { fetchCurrentUserAlbums } from "../../../actions/currentUserActions";

import MediaObjectsContainer from "../../MediaObjectsContainer/MediaObjectsContainer";
import EmptyMessage from "../../EmptyMessage/EmptyMessage";

class UserAlbums extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUserAlbums();
  }

  render() {
    return (
      <div className="mediaContainer">
        {this.props.currentUserAlbums ?
          this.props.currentUserAlbums.items.length ?
            (
              <MediaObjectsContainer
                heading={"Albums"}
                items={this.props.currentUserAlbums.items}
                type={"album"}
              />
            ) : <EmptyMessage title="Save your favourite albums" subtitle="Save albums you love to build the collection of your dreams." /> : (
            "Loading Albums..."
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUserAlbums: state.currentUser.currentUserAlbums
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCurrentUserAlbums
  }
)(UserAlbums);
