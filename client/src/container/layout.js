import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/header";

const Layout = ({ children, match, history }) => {
  // if (process.env.NODE_ENV === "production") {
  //   let deferredPrompt;
  //   if (process.browser) {
  //     if ("serviceWorker" in navigator) {
  //       navigator.serviceWorker
  //         .register("/sw.js")
  //         .then(function () {
  //           console.log("service worker registered");
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //     window.addEventListener("beforeinstallprompt", function (event) {
  //       event.preventDefault();
  //       console.log("prompt");
  //       deferredPrompt = event;
  //       return false;
  //     });
  //   }
  //   if (deferredPrompt) {
  //     deferredPrompt.prompt();

  //     deferredPrompt.userChoice.then(function (choiceResult) {
  //       console.log(choiceResult.outcome);

  //       if (choiceResult.outcome === "dismissed") {
  //         console.log("User cancelled installation");
  //       } else {
  //         console.log("User added to home screen");
  //       }
  //     });

  //     deferredPrompt = null;
  //   }
  // }

  return (
    <Fragment>
      <Header match={match} history={history} />
      <div className="container">{children}</div>
    </Fragment>
  );
};

export default withRouter(Layout);
