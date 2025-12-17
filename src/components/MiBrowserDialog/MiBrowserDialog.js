import React, { PureComponent } from "react";
import { styles } from "./MiBrowserDialogStyles";
import { Dialog, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import mi_ban_logo from "../../assets/icons/mi_browser_dialog/mi_ban_logo.jpg";

class MiBrowserDialog extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Dialog
        open={this.props.isOpen}
        onClose={this.props.handleClose}
        maxWidth="md"
        className={classes.dialogModal}
      >
        <div className={classes.root}>
          <div className={classes.appLogoContainer}>
            <div className={classes.background_image}>
              <img src={mi_ban_logo} alt="logo" className={classes.appLogo} />
            </div>
          </div>
          <div className={classes.instructionContainer}>
            <Typography className={classes.heading}>
              Browser not supported!
            </Typography>
            <Typography className={classes.subHeading}>
              Due to Indian government's ban on Mi browser, Elpro Elite Mall does
              not work optimally over here. Kindly switch over to Google Chrome
              for best results.
            </Typography>

            <div className={classes.btnContainer}>
              <Button
                disableRipple
                color="primary"
                variant="contained"
                className={classes.okBtn}
                onClick={this.props.handleClose}
              >
                OK
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MiBrowserDialog);
