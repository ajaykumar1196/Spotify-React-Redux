import React from "react";
import { NavLink } from "react-router-dom";
import "circular-std";
import "./NavigationBar.css";

class NavigationBar extends React.Component {
  renderNavBarItems = navBarItems => {
    return navBarItems.map(item => {
      return (
        <li key={item.name} className="nav-bar-link">
          <div>
            <NavLink
              className="nav-bar-link-item"
              activeClassName="nav-bar-link--active"
              to={`${item.link}`}
            >
              {item.name}
            </NavLink>
          </div>
        </li>
      );
    });
  };

  render() {
    return (
      <nav className="nav-bar">
        <ul className="nav-bar-item-container">
          {this.renderNavBarItems(this.props.links)}
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;
