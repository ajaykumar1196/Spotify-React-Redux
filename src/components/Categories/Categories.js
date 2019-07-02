import React from "react";
import { connect } from "react-redux";

import { fetchCategories } from "../../actions/browseActions";

import MediaContainer from "../MediaContainer/MediaContainer";

class Categories extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div>
        {this.props.categories ? (
          <MediaContainer
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
  console.log(state.browse);
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
