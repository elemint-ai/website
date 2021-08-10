import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";

import styles from "styles/jss/nextjs-material-kit/pagesX/landingPageSections/workStyle";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
            Contact us about collaboration either with the form below or email
            contact@elemint.ai.
          </h4>
          <h4 className={classes.description}>
            We hope to hear from you soon!
          </h4>
          <form
            action="https://forms.zohopublic.com/luke33/form/ContactUs/formperma/FxYCXLIcGR9bFyRI5Mrx2agGRbuyDxrB0oc_SrCxUks/htmlRecords/submit"
            name="form"
            id="form"
            method="POST"
            acceptCharset="UTF-8"
            encType="multipart/form-data"
          >
            <input type="hidden" name="zf_referrer_name" value="" />
            {/* <!-- To Track referrals , place the referrer name within the " " in the above hidden input field --> */}
            <input type="hidden" name="zf_redirect_url" value="" />
            {/* <!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field --> */}
            <input type="hidden" name="zc_gad" value="" />
            {/* <!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM --> */}
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="First Name"
                  id="lastname"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "Name_First",
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Last Name"
                  id="firstname"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "Name_Last",
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "Email",
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Company"
                  id="company"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "SingleLine",
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  name: "MultiLine",
                }}
              />
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Button color="primary" type="submit">
                  Send Message
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
