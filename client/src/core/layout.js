import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuth, signout } from "../auth/helper";

const Layout = ({ children, match, history }) => {
  const isActive = (path) => {
    if (match.path === path) {
      return { color: "#000" };
    } else {
      return { color: "#fff" };
    }
  };
  const nav = () => (
    <Fragment>
      <ui className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link to="/" className="nav-link" style={isActive("/")}>
            home
          </Link>
        </li>
        {!isAuth() && (
          <Fragment>
            <li className="navbar-toggler ">
              <Link
                to="/signin"
                className="nav-link"
                style={isActive("/signin")}
              >
                signin
              </Link>
            </li>
            <li className="navbar-toggler ">
              <Link
                to="/signup"
                className="nav-link"
                style={isActive("/signup")}
              >
                signup
              </Link>
            </li>
          </Fragment>
        )}
        {isAuth() && isAuth().role === "admin" && (
          <li className="nav-item">
            <Link to="/admin" className="nav-link" style={isActive("/admin")}>
              {isAuth().name}
            </Link>
          </li>
        )}
        {isAuth() && isAuth().role === "subscriber" && (
          <li className="nav-item">
            <Link
              to="/private"
              className="nav-link"
              style={isActive("/private")}
            >
              {isAuth().name}
            </Link>
          </li>
        )}

        {isAuth() && (
          <li className="nav-item">
            <span
              className="nav-link"
              style={{ cursor: "pointer", color: "#fff" }}
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              signout
            </span>
          </li>
        )}
      </ui>
      <div className="container">{children}</div>
    </Fragment>
  );
  return nav();
};

export default withRouter(Layout);
