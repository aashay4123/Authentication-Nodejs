import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./container/App";
import Private from "./container/private";
import Admin from "./container/admin";

import Signup from "./components/auth/signup";
import Signin from "./components/auth/signin";
import activate from "./components/auth/activate";
import Forgot from "./components/auth/forgot";
import reset from "./components/auth/reset";

import PrivateRoute from "./components/hoc/privateRoute";
import AdminRoute from "./components/hoc/adminRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/auth/activate/:token" exact component={activate} />
        <PrivateRoute path="/private" exact component={Private} />
        <AdminRoute path="/admin" exact component={Admin} />
        <Route path="/auth/password/forgot" exact component={Forgot} />
        <Route path="/auth/password/reset/:token" exact component={reset} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
