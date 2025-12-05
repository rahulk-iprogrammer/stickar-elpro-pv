import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import success from "../../../../assets/icons/bill_upload_guidelines/green_tick.png";
import { styles } from "./PvNotificationStyle";
import { Button } from "@material-ui/core";

class PvSuccess extends Component {
  componentDidMount() {
    this.props.url_details(null);
    setTimeout(() => {
      this.props.history.push("/pv-scanner");
    }, 10000);
  }

  redirectToScan = () =>{
    this.props.history.push("/pv-scanner");
  }

  render() {
    const { classes } = this.props;
    const locationState = this.props.locationState;

    return (
      <div className={classes.redeemCnt}>
        <div className={classes.wrapper}>
          <div className={classes.imageContainer}>
            <img alt={"success"} src={success} className={classes.img} />
          </div>
          {locationState?.privilegeDetails ? <div className={classes.countWrapper}>
            <Typography variant="h6" className={classes.countText}>
              {locationState?.privilegeDetails?.benefit_quantity == 10000 ? 'Unlimited' : `${locationState?.privilegeDetails?.benefit_quantity_used}/${locationState?.privilegeDetails?.benefit_quantity}`}
            </Typography>
          </div> : null}

          <Typography
            variant="h1"
            className={classes.heading}
            style={{ marginBottom: "50px" }}
          >
            Order placed successfully!
          </Typography>

          {/* Using Grid to display the name and scanned date */}
          <Grid container alignItems="center" justifyContent="center">
            {/* Privilege Name */}
            {locationState?.privilegeDetails?.privilege_name ? <Grid item xs={12} sm={12} md={8}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography variant="h6" className={classes.prodName}>
                    Privilege Name :
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    className={classes.prodName}
                  >
                    {locationState?.privilegeDetails?.privilege_name}
                  </Typography>
                </Grid>
              </Grid>
            </Grid> : null}

            {/* Customer Name */}
            {locationState?.customerName ? <Grid item xs={12} sm={12} md={8}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography variant="h6" className={classes.prodName}>
                    Customer Name :
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    className={classes.prodName}
                    style={{ wordWrap: "break-word" }} // Prevent long names from breaking layout
                  >
                    {locationState?.customerName}
                  </Typography>
                </Grid>
              </Grid>
            </Grid> : null}

            {/* Scanned At */}
            {locationState?.scannedAt ?<Grid item xs={12} sm={12} md={8}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography variant="h6" className={classes.prodName}>
                    Scanned at :
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    className={classes.prodName}
                    style={{ wordWrap: "break-word" }}
                  >
                    {locationState?.scannedAt}
                  </Typography>
                </Grid>
              </Grid>
            </Grid> : null}
          </Grid>

          <div className={classes.startBtnWrapper}>
            <div className={classes.btnContainer}>
              <Button
                disableRipple
                color="primary"
                variant="contained"
                className={classes.okBtn}
                onClick={this.redirectToScan}
                style={{height: '50px', width: '100px'}}
              >
                DONE
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(PvSuccess));
