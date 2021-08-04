import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
// import Button from "components/CustomButtons/Button";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";

import styles from "styles/jss/nextjs-material-kit/pages/landingPage";

// Sections for this page
// import ProductSection from "pages-sections/LandingPage-Sections/ProductSection";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection";

const dashboardRoutes: any = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props: any) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Elemint"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/landing-bg.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <img alt="..." src="/img/Elemint-Logo.png" />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>Bring your ideas into fruition.</h1>
              <h4>
                Elemint is an experienced and highly technical team equipped
                with cutting edge technology to offer a broad suite of services.
              </h4>
              <h4>
                Utilising computational modelling, mathematical optimization and
                machine learning, we can address any high calibre,
                computationally intense project.
              </h4>
              <h4>
                We are a small team of hard working problem solvers,
                mathematicians and scientists with strong technical backgrounds
                and a high level of passion for their work.
              </h4>
              <h4>
                We have collaborated successfully on a number of projects over
                three years and are ready to tackle new, complex problems head
                on.
              </h4>
              <br />
              {/* <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <ProductSection /> */}
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
