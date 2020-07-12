import React from "react";
import { connect } from "react-redux";

import { fetchCategoryPlaylists } from "../../../actions/browseActions";
import MediaObjectsContainer from "../../MediaObjectsContainer/MediaObjectsContainer";
import EmptyMessage from "../../EmptyMessage/EmptyMessage";
import Loader from '../../Loader/Loader';

class CategoryPlaylists extends React.Component {
  componentDidMount() {
    this.props.fetchCategoryPlaylists(this.props.match.params.categoryID);
  }

  render() {
    let str = this.props.match.params.categoryID;
    let title = str.slice(0, 1).toUpperCase() + str.slice(1, str.length)
    return (
      <div className="mediaContainer">
        {this.props.categoryPlaylists ?
        this.props.categoryPlaylists.playlists.items.length ? (
          <MediaObjectsContainer
            heading={`${title} Playlists`}
            items={this.props.categoryPlaylists.playlists.items}
            type={"playlist"}
          />
        ) : (
          <EmptyMessage title="Sorry, no playlist available!" subtitle="Explore other genres." toLink="/browse/categories"/>
        ) : (
            this.props.error ? <EmptyMessage title="404!" subtitle="Explore other genres." toLink="/browse/categories"/> 
          :<Loader/>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoryPlaylists: state.browse.categoryPlaylists,
    error: state.browse.error
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCategoryPlaylists
  }
)(CategoryPlaylists);
