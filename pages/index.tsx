import Img from "react-optimized-image";
import windblowsStyles from "../styles/winblows.module.css";

import React from "react";

/**
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */
export default function Home() {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=1920, maximum-scale=1.0" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="https://animaproject.s3.amazonaws.com/home/favicon.png"
        />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="photo" />
        {/* <link rel="stylesheet" type="text/css" href="../styles/winblows.css" />
        <link rel="stylesheet" type="text/css" href="../styles/styleguide.css" />
        <link rel="stylesheet" type="text/css" href="../styles/globals.css" /> */}
        <meta
          name="author"
          content="AnimaApp.com - Design to code, Automated."
        />
      </head>
      <body style={{ margin: 0 }}>
        <input type="hidden" id="anPageName" name="page" value="winblows" />
        <div className="container-center-horizontal">
          <div className={windblowsStyles.winblows}>
            <Img
              className={windblowsStyles["elemint-I420Fu"]}
              src={require("../public/img/elemint@2x.svg")}
            />
            <Img
              className={windblowsStyles["elemint-eZglSA"]}
              src={require("../public/img/elemint-1@2x.svg")}
            />
            <Img
              className={windblowsStyles["elemint-ITVefu"]}
              src={require("../public/img/elemint-2@2x.svg")}
            />
            <Img
              className={windblowsStyles["elemint-56DL8L"]}
              src={require("../public/img/elemint-3@2x.svg")}
            />
            <Img
              className={windblowsStyles["elemint-nCnPXY"]}
              src={require("../public/img/elemint-4@2x.svg")}
            />
            <Img
              className={windblowsStyles["star-1-I420Fu"]}
              src={require("../public/img/star-1@2x.svg")}
            />
            <Img
              className={windblowsStyles["star-2-I420Fu"]}
              src={require("../public/img/star-2@2x.svg")}
            />
            <Img
              className={windblowsStyles["star-3-I420Fu"]}
              src={require("../public/img/star-3@2x.svg")}
            />
            <Img
              className={windblowsStyles["star-4-I420Fu"]}
              src={require("../public/img/star-4@2x.svg")}
            />
            <h1 className={windblowsStyles["title-I420Fu"]}>
              Website Coming Soon
            </h1>
          </div>
        </div>
      </body>
    </html>
  );
}
