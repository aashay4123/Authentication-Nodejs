import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "../helper";

const AdminRoute = ({ Component: component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth() && isAuth().role === "admin" ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/signin", state: { from: props.location } }}
        />
      )
    }
  ></Route>
);
export default AdminRoute;
