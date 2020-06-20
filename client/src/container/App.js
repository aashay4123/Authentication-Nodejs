import React from "react";
import Layout from "./layout";

const App = () => {
  return (
    <Layout>
      <div className="col-md-6 offset-med-3 text-center">
        <h1 className="p-5">React Node MongoDB Authentication Boilerplate</h1>
        <h2>MERN STACK</h2>
        <hr />
        <p className="lead">
          MERN stack login register system with account activation, forgot
          password, reset password, login with facebook and google as well as
          private and protected routes for authenticated user and users with the
          role of admin.
        </p>
      </div>
    </Layout>
  );
};

export default App;
