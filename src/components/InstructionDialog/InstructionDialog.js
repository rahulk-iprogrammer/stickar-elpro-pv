import React, { PureComponent } from "react";
import { styles } from "./InstructionDialogStyles";
import { Dialog, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import appLogo from "../../assets/icons/instruction_dialog/logo192.png";
import platform from "platform";
// import sample from "../../assets/sample.mp4";
class InstructionDialog extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Dialog
        open={this.props.isOpen}
        onClose={this.props.handleClose}
        maxWidth="md"
        className={classes.dialogModal}
      >
        {platform.name === "Safari" ? (
          <div className={classes.root}>
            <div className={classes.appLogoContainer}>
              <div>
                <img src={appLogo} alt="logo" className={classes.appLogo} />
              </div>
            </div>
            <div className={classes.instructionContainer}>
              <Typography className={classes.heading}>
                Install Centrio Rewards PV
              </Typography>
              <Typography className={classes.subHeading}>
                Install this application on your home screen for quick and easy
                access when you're on the go.
              </Typography>
              <Typography className={classes.just_tap}>
                Just tap{" "}
                <i className={classes.shareIcon + " " + classes.shareIconCss} />{" "}
                then '<span className={classes.a2hs}>Add to Home Screen</span>'
                {/* Just click on '
              <span className={classes.a2hs}>Add to Home Screen</span>' from
              your browser menu bar. */}
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
        ) : (
          <div className={classes.root}>
            <div className={classes.appLogoContainer}>
              <div>
                <img src={appLogo} alt="logo" className={classes.appLogo} />
              </div>
            </div>
            <div className={classes.instructionContainer}>
              <Typography className={classes.heading}>
                Install Centrio Rewards PV
              </Typography>
              <Typography className={classes.subHeading}>
                Install this application on your home screen for quick and easy
                access when you're on the go.
              </Typography>
              <Typography className={classes.just_tap1}>
                {/* Just tap <i className={classes.shareIcon + ' ' + classes.shareIconCss} /> then '<span className={classes.a2hs}>Add to Home Screen</span>' */}
                Just click on '
                {platform.name === "Firefox Mobile" ? (
                  <span className={classes.a2hs}>Install</span>
                ) : (
                  <span className={classes.a2hs}>Add to Home Screen</span>
                )}
                ' from your browser menu bar.
              </Typography>
              {/* <div className={classes.video}>
            <iframe
      allowFullScreen="allowfullscreen"
      allow="autoplay"
              title="starterVideo"
              className={classes.i_frame}
              src={sample}
            />
          </div> */}
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
        )}
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(InstructionDialog);
