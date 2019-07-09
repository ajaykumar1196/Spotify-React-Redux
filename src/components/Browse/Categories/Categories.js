import React from "react";
import { connect } from "react-redux";

import { fetchCategories } from "../../../actions/browseActions";

import MediaObjectsContainer from "../../MediaObjectsContainer/MediaObjectsContainer";

class Categories extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div>
        {this.props.categories ? (
          <MediaObjectsContainer
            heading={"Categories"}
            items={this.props.categories.categories.items}
            type={"categories"}
          />
        ) : (
          "Loading Categories..."
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
