import React from "react";
import { NavLink } from "react-router-dom";
import "circular-std";
import "./NavigationBar.css";

class NavigationBar extends React.Component {
  renderNavBarItems = navBarItems => {
    return navBarItems.map(item => {
      return (
        <li class="nav-bar-link">
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
      <nav class="nav-bar">
        <ul class="nav-bar-item-container">
          {this.renderNavBarItems(this.props.links)}
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;
