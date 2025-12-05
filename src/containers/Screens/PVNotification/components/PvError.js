import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import error from "../../../../assets/icons/bill_upload_guidelines/red_cross.png";
import { styles } from "./PvNotificationStyle";
import { Button } from "@material-ui/core";

class PvError extends Component {
  componentDidMount(){
    this.props.url_details(null)
    setTimeout(() => {
      this.props.history.push('/pv-scanner')
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
            <img alt={"Error"} src={error} className={classes.img} />
          </div>

          <Typography variant="h1" className={classes.heading} style={{marginBottom:'50px', marginTop:'25px'}}>
            Invalid Offer
          </Typography>

            {/* Using Grid to display the name and scanned date */}
            <Grid container  alignItems="center" justifyContent="center">
              {/* Customer Name */}
              {locationState?.customerName ? <Grid item xs={12} sm={12} md={8}>
                <Grid container spacing={1} >
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
                      {locationState?.customerName }
                    </Typography>
                  </Grid>
                </Grid>
              </Grid> :null}

              {/* reason */}
             {locationState?.reason  ? <Grid item xs={12} sm={12} md={8}>
                <Grid container spacing={1} >
                  <Grid item xs={4}>
                    <Typography variant="h6" className={classes.prodName}>
                      Reason:
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      variant="h6"
                      className={classes.prodName}
                      style={{ wordWrap: "break-word" }}
                    >
                      {locationState?.reason || "Duplicate Scanned QR code ,this Qr code is already used"}
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

export default withStyles(styles)(withRouter(PvError));

