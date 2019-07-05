import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import "circular-std";
import "./Sidebar.css";

import { fetchCurrentUserPlaylists } from "../../actions/currentUserActions";

class Sidebar extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUserPlaylists();
  }

  renderCurrentUserPlaylists = playlistsItems => {
    return playlistsItems.map(item => {
      return (
        <li class="navBar-item navBar-item--small navBar-item--with-icon-right recently-played__item-2">
          <div class="react-contextmenu-wrapper">
            <div>
              <Link
                class="navBar-link link-subtle RecentlyPlayedWidget__link playlistItems"
                to={`/playlist/${item.id}`}
              >
                <div class="navBar-link-text-with-icon-wrapper">
                  <div class="navbar-link__text">
                    <div dir="auto" class="ellipsis-one-line">
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
              <svg viewBox="0 0 1134 340" className="spotify-logo--text">
                <title>Spotify</title>
                <path
                  fill="#fff"
                  d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
                />
              </svg>
            </NavLink>
          </div>

          <ul>
            <li className="navBar-group">
              <div className="navBar-item navBar-item--with-icon-left">
                <NavLink
                  className="link-subtle navBar-link ellipsis-one-line"
                  aria-label="Search"
                  exact
                  to="/"
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
            <li className="navBar-group">
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
            </li>
            <li className="navBar-group">
              <div className="GlueDropTarget">
                <div className="navBar-item navBar-item--with-icon-left">
                  <NavLink
                    className="link-subtle navBar-link ellipsis-one-line"
                    aria-label="Your Library"
                    to="/collection/playlists"
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

          <div class="recently-played navBar-group">
            <h2 class="navBar-group-header">Playlists</h2>
            <ul>
              {this.props.currentUserPlaylists
                ? this.renderCurrentUserPlaylists(
                    this.props.currentUserPlaylists.items
                  )
                : ""}
            </ul>
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
