import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import "./Sidebar.css";

import { fetchCurrentUserPlaylists } from "../../actions/currentUserActions";
import Logout from "../Logout/Logout";

class Sidebar extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUserPlaylists();
  }

  renderCurrentUserPlaylists = playlistsItems => {
    return playlistsItems.map(item => {
      return (
        <li
          key={item.id}
          className="navBar-item navBar-item--small navBar-item--with-icon-right recently-played__item-2"
        >
          <div className="react-contextmenu-wrapper">
            <div>
              <Link
                className="navBar-link link-subtle RecentlyPlayedWidget__link playlistItems"
                to={`/playlist/${item.id}`}
              >
                <div className="navBar-link-text-with-icon-wrapper">
                  <div className="navbar-link__text">
                    <div dir="auto" className="ellipsis-one-line">
                      {item.name}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="Root__nav-bar">
        <div className="navBar">
          <div className="navBar-header">
            <NavLink to="/" className="logo navbar-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="119.163" height="23.143" viewBox="0 0 109.163 23.143">
              <g id="Group_4" data-name="Group 4" transform="translate(-7 -4.463)">
                <g id="Group_3" data-name="Group 3" transform="translate(68.423 5.518)">
                  <g id="Group_2" data-name="Group 2" transform="translate(38.834 -2.576) rotate(41)">
                    <path id="Shape" d="M2.63,7.277V1.315a1.315,1.315,0,1,0-2.63,0V7.277a1.315,1.315,0,1,0,2.63,0Z" transform="translate(6.037 0)" fill="#03a5d1"/>
                    <path id="Shape-2" data-name="Shape" d="M2.034,5.459,6.7,2.417A1.315,1.315,0,0,0,5.26.214L.6,3.257a1.315,1.315,0,0,0,1.437,2.2Z" transform="translate(10.14 9.293)" fill="#00bba2"/>
                    <path id="Shape-3" data-name="Shape" d="M2.245,3.7,3.7,2.245A1.315,1.315,0,0,0,1.836.385L.385,1.836A1.315,1.315,0,0,0,2.245,3.7Z" transform="translate(11.297 4.117)" fill="#ff6783"/>
                    <path id="Shape-4" data-name="Shape" d="M1.315,2.63H1.7A1.315,1.315,0,0,0,1.7,0h-.38a1.315,1.315,0,0,0,0,2.63Z" transform="translate(13.051 16.088)" fill="#ffa458"/>
                    <path id="Shape-5" data-name="Shape" d="M1.315,2.63H1.7A1.315,1.315,0,0,0,1.7,0h-.38a1.315,1.315,0,0,0,0,2.63Z" transform="translate(6.037 10.828)" fill="#c75fff"/>
                    <path id="Shape-6" data-name="Shape" d="M3.3,2.592,2.523.794A1.315,1.315,0,1,0,.108,1.837l.776,1.8A1.315,1.315,0,1,0,3.3,2.592Z" transform="translate(0 2.015)" fill="#ffa458"/>
                  </g>
                  <g id="Group_1" data-name="Group 1" transform="translate(12.181 -0.3)">
                    <path id="Shape-7" data-name="Shape" d="M0,6.035A3.736,3.736,0,1,1,3.736,9.77,3.74,3.74,0,0,1,0,6.035Zm1.725,0A2.012,2.012,0,1,0,3.736,4.023,2.014,2.014,0,0,0,1.725,6.035Zm12.069-2.3A3.736,3.736,0,1,1,17.53,7.472,3.74,3.74,0,0,1,13.794,3.736Zm1.725,0A2.012,2.012,0,1,0,17.53,1.725,2.014,2.014,0,0,0,15.519,3.736Z" transform="translate(0 11.305)" fill="#fff"/>
                    <path id="Shape-8" data-name="Shape" d="M1.724,17.34V4.943a1.437,1.437,0,0,1,1.218-1.42l10.534-1.8a.288.288,0,0,1,.317.286V15.041a.862.862,0,0,0,1.724,0V2.012A2.012,2.012,0,0,0,13.2.024L2.667,1.821A3.157,3.157,0,0,0,0,4.943v12.4a.862.862,0,0,0,1.724,0Z" transform="translate(5.748 0)" fill="#fff"/>
                  </g>
                </g>
                <text id="MUSIFY" transform="translate(7 22)" fill="#fff" fontSize="18" fontFamily="Inter-ExtraBold, Inter" fontWeight="800"><tspan x="0" y="0">MUSIFY</tspan></text>
              </g>
            </svg>
            </NavLink>
          </div>

          <ul>
            <li className="navBar-group">
              <div className="navBar-item navBar-item--with-icon-left">
                <NavLink
                  className="link-subtle navBar-link ellipsis-one-line"
                  aria-label="Browse"
                  to="/browse"
                  activeClassName={
                    "link-subtle navBar-link ellipsis-one-line navBar-link--active"
                  }
                >
                  <div className="navBar-link-text-with-icon-wrapper">
                    <div className="icon home-active-icon NavBar__icon">
                      <svg
                        viewBox="0 0 512 512"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <span className="navbar-link__text">Home</span>
                  </div>
                </NavLink>
              </div>
            </li>
            {/* <li className="navBar-group">
              <div className="navBar-item navBar-item--with-icon-left">
                <NavLink
                  className="link-subtle navBar-link ellipsis-one-line"
                  aria-label="Search"
                  to="/featured-playlists"
                  activeClassName={
                    "link-subtle navBar-link ellipsis-one-line navBar-link--active"
                  }
                >
                  <div className="navBar-link-text-with-icon-wrapper">
                    <div className="icon search-active-icon NavBar__icon">
                      <svg
                        viewBox="0 0 512 512"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M357.079 341.334l94.476 110.73-32.508 27.683-94.222-110.476q-45.714 30.476-100.826 30.476-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 23.365-5.841 45.714t-16.635 41.651-25.778 35.555zM224 357.079q28.19 0 53.841-11.048t44.19-29.587 29.587-44.19 11.048-53.841-11.048-53.841-29.587-44.191-44.19-29.587-53.841-11.047-53.841 11.047-44.191 29.588-29.587 44.19-11.047 53.841 11.047 53.841 29.588 44.19 44.19 29.587 53.841 11.048z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <span className="navbar-link__text">Search</span>
                  </div>
                </NavLink>
              </div>
            </li> */}
            <li className="navBar-group">
              <div className="GlueDropTarget">
                <div className="navBar-item navBar-item--with-icon-left">
                  <NavLink
                    className="link-subtle navBar-link ellipsis-one-line"
                    aria-label="Your Library"
                    to="/collection"
                    activeClassName={
                      "link-subtle navBar-link ellipsis-one-line navBar-link--active"
                    }
                  >
                    <div className="navBar-link-text-with-icon-wrapper">
                      <div className="icon collection-active-icon NavBar__icon">
                        <svg
                          viewBox="0 0 512 512"
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="navbar-link__text">Your Library</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </li>
          </ul>

          <div className="recently-played navBar-group">
            <h2 className="navBar-group-header">Playlists</h2>
            <ul>
              {this.props.currentUserPlaylists
                ? this.renderCurrentUserPlaylists(
                    this.props.currentUserPlaylists.items
                  )
                : ""}
            </ul>

            <div className="navBar-group">
             <Logout/>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUserPlaylists: state.currentUser.currentUserPlaylists
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCurrentUserPlaylists
  }
)(Sidebar);
