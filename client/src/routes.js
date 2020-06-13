import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Signup from "./auth/signup";
import Signin from "./auth/signin";
import Private from "./core/private";
import activate from "./auth/activate";
import PrivateRoute from "./auth/privateRoute";
import AdminRoute from "./auth/adminRoute";
import Forgot from "./auth/forgot";
import reset from "./auth/reset";
import Admin from "./core/admin";

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
