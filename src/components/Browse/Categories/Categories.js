import React from "react";
import { connect } from "react-redux";

import { fetchCategories } from "../../../actions/browseActions";

import MediaObjectsContainer from "../../MediaObjectsContainer/MediaObjectsContainer";
import EmptyMessage from "../../EmptyMessage/EmptyMessage";
import Loader from '../../Loader/Loader';

class Categories extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className="mediaContainer">
        {this.props.categories ? 
        this.props.categories.categories.items.length ? (
          <MediaObjectsContainer
            heading={"Categories"}
            items={this.props.categories.categories.items}
            type={"browse/categories"}
          />
        ): (
          <EmptyMessage title="Sorry, no categories available!" subtitle="Explore featured playlist."/>
        ) : (
          this.props.error ? <EmptyMessage title="404!" subtitle="Can't find the categories."/> 
          :<Loader/>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.browse.categories
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCategories
  }
)(Categories);
