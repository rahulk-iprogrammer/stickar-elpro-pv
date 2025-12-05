import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import accountIcon from "../../../assets/icons/header/account.svg";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography, Grid, IconButton } from "@material-ui/core";
import bell from "../../../assets/icons/header/bell.svg";
import { connect } from "react-redux";
import { changeActiveTab, logoutPvUser } from "../../../App/redux/action";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const styles = (theme) => {
  return {
    toolbarMargin: {
      minHeight: "87px",
      [theme.breakpoints.down("641")]: {
        minHeight: "83px",
      },
      [theme.breakpoints.down("481")]: {
        minHeight: "65px",
      },
      [theme.breakpoints.down("421")]: {
        minHeight: "53px",
      },
      [theme.breakpoints.down("381")]: {
        minHeight: "51px",
      },
      [theme.breakpoints.down("361")]: {
        minHeight: "49px",
      },
      [theme.breakpoints.down("321")]: {
        minHeight: "44px",
      },
    },
    appbar: {
      height: "auto",
      backgroundColor: theme.palette.primary.main,
    },
    dashboard_header: {
      width: "100%",
      display: "block",
      padding: "0 30px",
      [theme.breakpoints.down(641)]: {
        padding: "0 26px",
      },
      [theme.breakpoints.down(481)]: {
        padding: "0 20px",
      },
      [theme.breakpoints.down(381)]: {
        padding: "0 15px",
      },
      [theme.breakpoints.down(321)]: {
        padding: "0 13px",
      },
    },
    mainHeader: {
      backgroundColor: theme.palette.primary.main,
      borderBottom: `1px solid ${theme.palette.header.headerBottomBorder}`,
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    mainHeaderInner: {
      display: "flex",
      alignItems: "center",
    },
    icons: {
      width: "36px",
      height: "36px",
      "--size ": "70px",
      display: "inline-block",
      transition: ".12s",
      "-webkit-mask-size": "cover",
      "mask-size ": "cover",
      objectFit: "contain",
      [theme.breakpoints.down("641")]: {
        width: "32px",
        height: "32px",
      },
      [theme.breakpoints.down("481")]: {
        width: "24px",
        height: "24px",
      },
      [theme.breakpoints.down("381")]: {
        width: "18px",
        height: "18px",
      },
      [theme.breakpoints.down("321")]: {
        width: "17px",
        height: "17px",
      },
    },
    bellIcons: {
      cursor: "pointer",
      backgroundColor: theme.palette.dashBoardheadText.color,
      " -webkit-mask-image": `url(.${bell})`,
      "mask-image": `url(.${bell})`,
      mask: `url(.${bell}) no-repeat center / contain`,
      "-webkit-mask": `url(.${bell}) no-repeat center / contain`,
    },
    custName: {
      fontFamily: "Montserrat",
      fontWeight: "500",
      fontStretch: "normal",
      fontStyle: "normal",
      letterSpacing: "normal",
      textAlign: "center",
      color: theme.palette.typography.texts.headerTextColor,
      fontSize: "24px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      [theme.breakpoints.down("641")]: {
        fontSize: "22px",
      },
      [theme.breakpoints.down("481")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.down("421")]: {
        fontSize: "17.5px",
      },
      [theme.breakpoints.down("401")]: {
        fontSize: "17px",
      },
      [theme.breakpoints.down("381")]: {
        fontSize: "16.5px",
      },
      [theme.breakpoints.down("361")]: {
        fontSize: "16px",
      },
      [theme.breakpoints.down("321")]: {
        fontSize: "14px",
      },
    },
    profile_icon_container: {
      marginRight: "28px",
      [theme.breakpoints.down("481")]: {
        marginRight: "18px",
      },
      [theme.breakpoints.down("381")]: {
        marginRight: "12px",
      },
      [theme.breakpoints.down("321")]: {
        marginRight: "10px",
      },
    },
    accountIconCss: {
      cursor: "pointer",
      backgroundColor: theme.palette.dashBoardheadText.color,
      " -webkit-mask-image": `url(.${accountIcon})`,
      "mask-image": `url(.${accountIcon})`,
      mask: `url(.${accountIcon}) no-repeat center / contain`,
      "-webkit-mask": `url(.${accountIcon}) no-repeat center / contain`,
    },
    regular: {
      minHeight: "86px",
      lineHeight: "86px",
      // padding: "11px 30px 11px 30px",
      [theme.breakpoints.down("641")]: {
        // padding: "9px 26px 9px 26px",
        minHeight: "82px",
        lineHeight: "82px",
      },
      [theme.breakpoints.down("481")]: {
        // padding: "7px 20px 7px 20px",
        minHeight: "64px",
        lineHeight: "64px",
      },
      [theme.breakpoints.down("421")]: {
        minHeight: "54px",
        lineHeight: "54px",
      },
      [theme.breakpoints.down("381")]: {
        // padding: "0px 15px 0px 15px",
        minHeight: "50px",
        lineHeight: "50px",
      },
      [theme.breakpoints.down("361")]: {
        minHeight: "48px",
        lineHeight: "48px",
      },
      [theme.breakpoints.down("321")]: {
        // padding: "0px 13px 0px 13px",
        minHeight: "43px",
        lineHeight: "43px",
      },
    },
    countClass: {
      color: theme.palette.primary.main,
      position: "absolute",
      border: "1px solid #ffffff",
      fontSize: "1.20rem",
      fontWeight: "600",
      borderRadius: "50%",
      "-webkit-border-top-left-radius": "50%",
      "-webkit-border-top-right-radius": "50%",
      "-webkit-border-bottom-right-radius": "50%",
      "-webkit-border-bottom-left-radius": "50%",
      "-moz-border-radius-topleft": "50%",
      "-moz-border-radius-topright": "50%",
      "-moz-border-radius-bottomright": "50%",
      "-moz-border-radius-bottomleft": "50%",
      borderTopLeftRadius: "50%",
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
      borderBottomLeftRadius: "50%",
      "-webkit-border-radius": "50%",
      "-moz-border-radius": "50%",
      "-khtml-border-radius": "50%",
      backgroundColor: theme.palette.cards.backgroundColor,
      transform: "translate(10px, -11px)",
      height: "24px",
      width: "24px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        height: "22px",
        width: "22px",
      },
      [theme.breakpoints.down(641)]: {
        fontSize: "12.5px",
        height: "18px",
        width: "18px",
        transform: "translate(9px, -10px)",
      },
      [theme.breakpoints.down(481)]: {
        fontSize: "10.5px",
        height: "15px",
        width: "15px",
        transform: "translate(7px, -8px)",
      },
      [theme.breakpoints.down(421)]: {
        fontSize: "10.2px",
      },
      [theme.breakpoints.down(401)]: {
        fontSize: "9.9px",
      },
      [theme.breakpoints.down(381)]: {
        fontSize: "9.5px",
        height: "13px",
        width: "13px",
        transform: "translate(6px, -7px)",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "9px",
      },
      [theme.breakpoints.down(321)]: {
        fontSize: "8px",
        height: "12px",
        width: "12px",
        transform: "translate(5px, -6px)",
      },
    },
  };
};

class HeaderPvDashboard extends Component {
  handleBellIconClicked = () => {
    this.props.history.push("/notifications");
  };
  logoutUser = async() => {
    await this.props.logoutPvUser()
    await this.props.history.push("/pv");
   
  };

  render() {
    const { classes } = this.props;
    // const isSafari =
    //   /constructor/i.test(window.HTMLElement) ||
    //   (function (p) {
    //     return p.toString() === "[object SafariRemoteNotification]";
    //   })(!window["safari"] || typeof safari !== "undefined");

    return (
      <Fragment>
        <ElevationScroll>
          <AppBar position="fixed" className={classes.appbar}>
            <Toolbar
              disableGutters
              className={classes.dashboard_header}
              classes={{ regular: classes.regular }}
            >
              <div className={classes.mainHeader}>
                <div className={classes.mainHeaderInner}>
                  <div className={classes.profile_icon_container}>
                    <div
                      className={classes.accountIconCss + " " + classes.icons}
                      style={{ verticalAlign: "middle", cursor: "default" }}
                    ></div>
                  </div>
                  <div>
                    <Typography className={classes.custName}>
                      Hi{" "}
                      {this.props.pvUserDetails &&
                        this.props.pvUserDetails.first_name &&
                        this.props.pvUserDetails.first_name}
                      !
                    </Typography>
                  </div>
                </div>
                <div className={classes.mainHeaderInner}>
                  <Typography
                    className={classes.custName}
                    style={{ cursor: "pointer" }}
                    onClick={this.logoutUser}
                  >
                    Logout
                  </Typography>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // notificationUnReadCount: state.reducerDashboard.notificationUnReadCount,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveTab: (id) => dispatch(changeActiveTab(id)),
    logoutPvUser: () => dispatch(logoutPvUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(withStyles(styles, { withTheme: true })(HeaderPvDashboard))
);
