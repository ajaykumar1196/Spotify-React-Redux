import React from "react";
import { Link } from 'react-router-dom'

import "./EmptyMessage.css";


class EmptyMessage extends React.Component {
  render() {
    return (
      <div className="empty-message">
        <h1 className="empty-message__title">{this.props.title}</h1>
        <h4 className="empty-message__subtitle">{this.props.subtitle}</h4>
        <Link className="btn btn-black cta-button" to="/browse">DISCOVER</Link>
      </div>
    )
  }
}

export default EmptyMessage;