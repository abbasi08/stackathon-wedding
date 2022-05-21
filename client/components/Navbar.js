import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Dashboard</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/">
            <img src=" https://image.shutterstock.com/image-vector/handdrawn-heart-icon-set-three-260nw-1305687037.jpg" width="45" height="50" />
          </Link>
        </div>
      ) : (
        <div className="navbar">
          {/* The navbar will show these links before you log in */}
          {/* <Link to="/login">Login</Link> */}
          <Link to="/">
            <img id="hearts" src=" https://image.shutterstock.com/image-vector/handdrawn-heart-icon-set-three-260nw-1305687037.jpg" width="45" height="50" />
          </Link>
        </div>
      )}
    </nav>
    {/* <hr /> */}
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

export default connect(mapState, mapDispatch)(Navbar);
