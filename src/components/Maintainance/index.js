import React, { Component } from "react";
import maintainance from "../../assets/images/maintainance.svg";
import background_maintainance from "../../assets/images/background_maintainance.svg";
import malllogo from "../../assets/icons/instruction_dialog/logo192.png";
import logo from "../../assets/icons/instruction_dialog/logo.png";
import BOOMER1 from "../../assets/icons/more/layer-3.png";
import BOOMER2 from "../../assets/icons/more/layer-3@2x.png";
import BOOMER3 from "../../assets/icons/more/layer-3@3x.png";

import { Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { whiteColor, lightGrey } from "../UI/Theme";
import { apiData } from "../../common/common-types";

const styles = (theme) => {
  return {
    headerWrapper: {
      background: whiteColor,
      boxShadow: "0px 2px 3px 0 rgba(0, 0, 0, 0.3)",
      display: "table",
      width: "100%",
      height: 120,
      padding: "0px 20px",
      [theme.breakpoints.down(641)]: {
        height: 110,
        padding: "0px 18px",
      },
      [theme.breakpoints.down(481)]: {
        height: 80,
        padding: "0px 17px 0px 11px",
      },
      [theme.breakpoints.down(421)]: {
        height: 74,
        padding: "0px 17px 0px 11px",
      },
      [theme.breakpoints.down(401)]: {
        height: 74,
        padding: "0px 16px 0px 10px",
      },
      [theme.breakpoints.down(381)]: {
        height: 72,
        padding: "0px 16px 0px 10px",
      },
      [theme.breakpoints.down(361)]: {
        height: 70,
        padding: "0px 15px 0px 9px",
      },
      [theme.breakpoints.down(321)]: {
        height: 66,
        padding: "0px 14px 0px 8px",
      },
    },
    innerwrapper: {
      height: "calc(100% - 168px)",
      [theme.breakpoints.down(641)]: {
        height: "100%",
      },
      [theme.breakpoints.down(481)]: {
        height: "calc(100% - 102px)",
      },
      [theme.breakpoints.down(421)]: {
        height: "calc(100% - 102px)",
      },
      [theme.breakpoints.down(401)]: {
        height: "calc(100% - 102px)",
      },
      [theme.breakpoints.down(381)]: {
        height: "calc(100% - 92px)",
      },
      [theme.breakpoints.down(361)]: {
        height: "calc(100% - 92px)",
      },
      [theme.breakpoints.down(321)]: {
        height: "calc(100% - 90px)",
      },
    },
    logo: {
      height: 75,
      width: 150,
      [theme.breakpoints.down(641)]: {
        height: 60,
        width: 100,
      },
      [theme.breakpoints.down(481)]: {
        height: 48,
        width: 96,
      },
      [theme.breakpoints.down(421)]: {
        height: 44,
        width: 88,
      },
      [theme.breakpoints.down(401)]: {
        height: 44,
        width: 88,
      },
      [theme.breakpoints.down(381)]: {
        height: 42,
        width: 84,
      },
      [theme.breakpoints.down(361)]: {
        height: 39,
        width: 82,
      },
      [theme.breakpoints.down(321)]: {
        height: 36,
        width: 80,
      },
    },
    malllogo: {
      height: 74,
      width: 340,
      [theme.breakpoints.down(641)]: {
        height: 60,
        width: 240,
      },
      [theme.breakpoints.down(481)]: {
        height: 48,
        width: 216,
      },
      [theme.breakpoints.down(421)]: {
        height: 44,
        width: 186,
      },
      [theme.breakpoints.down(401)]: {
        height: 44,
        width: 170,
      },
      [theme.breakpoints.down(381)]: {
        height: 44,
        width: 160,
      },
      [theme.breakpoints.down(361)]: {
        height: 40,
        width: 156,
      },
      [theme.breakpoints.down(321)]: {
        height: 36,
        width: 150,
      },
    },
    imagewrapper: {
      width: "100%",
      overflow: "hidden",
      padding: "0px 34px",
      height: "370px",
      [theme.breakpoints.down(641)]: {
        padding: "0px 24px",
        height: "300px",
      },
      [theme.breakpoints.down(481)]: {
        padding: "0px 24px",
        height: "230px",
      },
      [theme.breakpoints.down(421)]: {
        padding: "0px 24px",
        height: "192px",
      },
      [theme.breakpoints.down(401)]: {
        padding: "0px 24px",
        height: "186px",
      },
      [theme.breakpoints.down(381)]: {
        padding: "0px 24px",
        height: "178px",
      },
      [theme.breakpoints.down(361)]: {
        padding: "0px 24px",
        height: "178px",
      },
      [theme.breakpoints.down(321)]: {
        padding: "0px 22px",
        height: "178px",
      },
    },
    heading: {
      fontSize: "32px",
      fontWeight: "bold",
      fontStretch: "normal",
      fontStyle: "normal",
      letterSpacing: "normal",
      textAlign: "center",
      color: theme.palette.typography.texts.color,
      marginTop: "0px",
      lineHeight: 1.6,
      padding: "0px 40px",
      marginBottom: "18px",
      [theme.breakpoints.down(641)]: {
        fontSize: "28px",
        lineHeight: 1.6,
        padding: "0px 40px",
        marginBottom: "18px",
        marginTop: "0px",
      },
      [theme.breakpoints.down(481)]: {
        fontSize: "18px",
        marginTop: "0px",
        lineHeight: 1.6,
        padding: "0px 40px",
        marginBottom: "12px",
      },
      [theme.breakpoints.down(421)]: {
        fontSize: "17.5px",
        lineHeight: 1.6,
        marginTop: "0px",
        padding: "0px 26px",
        marginBottom: "12px",
      },
      [theme.breakpoints.down(401)]: {
        fontSize: "17px",
        marginTop: "0px",
        lineHeight: 1.6,
        padding: "0px 20px",
        marginBottom: "12px",
      },
      [theme.breakpoints.down(381)]: {
        fontSize: "16.5px",
        marginTop: "0px",
        lineHeight: 1.6,
        padding: "0px 20px",
        marginBottom: "12px",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "16px",
        marginTop: "0px",
        lineHeight: 1.6,
        padding: "0px 18px",
        marginBottom: "7px",
      },
      [theme.breakpoints.down(321)]: {
        fontSize: 15,
        marginTop: "00px",
        lineHeight: 1.6,
        padding: "0px 9px",
        marginBottom: "7px",
      },
    },
    coming_soon: {
      textAlign: "center",
      color: lightGrey,
      fontSize: "23px",
      padding: "0px 38px",
      letterSpacing: "0.82px",
      [theme.breakpoints.down("641")]: {
        fontSize: "17px",
        padding: "0px 16px",
        letterSpacing: "0.54px",
      },
      [theme.breakpoints.down("481")]: {
        fontSize: "14.5px",
        padding: "0px 16px",
        letterSpacing: "0.6px",
      },
      [theme.breakpoints.down("421")]: {
        fontSize: "13.2px",
        padding: "0px 16px",
        letterSpacing: "0.23px",
      },
      [theme.breakpoints.down("401")]: {
        fontSize: "12.7px",
        padding: "0px 16px",
        letterSpacing: "0.2px",
      },
      [theme.breakpoints.down("381")]: {
        fontSize: "11.9px",
        padding: "0px 16px",
        letterSpacing: "0.18px",
      },
      [theme.breakpoints.down("361")]: {
        fontSize: "11px",
        padding: "0px 16px",
        letterSpacing: "0.36px",
      },
      [theme.breakpoints.down("321")]: {
        fontSize: "10px",
        padding: "0px 16px",
        letterSpacing: "0.14px",
      },
    },
    coming_soon_img: {
      width: "100%",
      height: "100%",
      display: "inline-block",
      transition: ".12s",
      "-webkit-mask-size": "cover",
      "mask-size ": "cover",
      objectPosition: "center",
      objectFit: "contain",
    },
    marginBottom: {
      marginBottom: "3vh",
    },
    bgCss: {
      background: `url(..${background_maintainance}) no-repeat center / contain`,
      display: "flex",
      justifyContent: "center",
      height: "100%",
    },
    iconCss: {
      width: "40%",
      backgroundColor: theme.palette.primary.main,
      " -webkit-mask-image": `url(..${maintainance})`,
      "mask-image": `url(..${maintainance})`,
      mask: `url(..${maintainance}) no-repeat center / contain`,
      "-webkit-mask": `url(..${maintainance}) no-repeat center / contain`,
    },
    bottom_title: {
      fontFamily: "Montserrat",
      fontSize: "20px",
      userSelect: "none",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.64,
      letterSpacing: "normal",
      textAlign: "right",
      color: "#7e7e7e",
      whiteSpace: "nowrap",
      [theme.breakpoints.down(641)]: { fontSize: "16px" },
      [theme.breakpoints.down(481)]: { fontSize: "12px" },
      [theme.breakpoints.down(381)]: { fontSize: "10px" },
      [theme.breakpoints.down(321)]: { fontSize: "8px" },
    },
    bottom_panel: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "Column",
      alignItems: "center",
      position: "absolute",
      bottom: 0,
      width: "100%",
      margin: "1rem 0",
      // [theme.breakpoints.down(641)]: { bottom: "126px" },
      // [theme.breakpoints.down(481)]: { bottom: "80px" },
      // [theme.breakpoints.down(421)]: { bottom: "45px" },
      // [theme.breakpoints.down(413)]: { bottom: "50px" },
      // [theme.breakpoints.down(401)]: { bottom: "58px" },
      // [theme.breakpoints.down(381)]: { bottom: "48px" },
      // [theme.breakpoints.down(361)]: { bottom: "48px" },
      // [theme.breakpoints.down(321)]: { bottom: "36px" },
    },
    Layer_3: {
      objectFit: "contain",
      width: "250px",
      height: "100px",
      [theme.breakpoints.down(641)]: { width: "170px", height: "70px" },
      [theme.breakpoints.down(481)]: { width: "140px", height: "45px" },
      [theme.breakpoints.down(381)]: { width: "130px", height: "40px" },
      [theme.breakpoints.down(321)]: { width: "110px", height: "40px" },
    },
  };
};

class Maintainance extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div className={classes.innerwrapper}>
          <Grid container className={classes.headerWrapper}>
            <Grid
              item
              xs={6}
              sm={6}
              style={{
                display: "table-cell",
                verticalAlign: "middle",
              }}
            >
              <img src={logo} className={classes.logo} />
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              style={{
                display: "table-cell",
                verticalAlign: "middle",
                textAlign: "right",
              }}
            >
              <img src={malllogo} className={classes.malllogo} />
            </Grid>
          </Grid>
          <div className={classes.imagewrapper}>
            <div className={classes.bgCss}>
              <span
                className={classes.coming_soon_img + " " + classes.iconCss}
              />
            </div>
          </div>
          <Typography variant="h1" className={classes.heading}>
            Hey there!
          </Typography>
          <Typography className={classes.coming_soon}>
            We are working to quash some bugs and sanitize your experience in
            using the Infiniti Mall app. While we clean up, why don't you settle
            in for a nice cup of coffee and that movie, which you have in your
            Watchlist?
          </Typography>
          <div className={classes.marginBottom}></div>
          <Typography className={classes.coming_soon}>
            We will be up and waiting to serve you shortly.
          </Typography>
        </div>
        <div className={classes.bottom_panel}>
          <div className={classes.bottom_title}>Powered By</div>
          <div className={classes.icons}>
            <img
              src={BOOMER1}
              srcSet={`${BOOMER2} 2x,${BOOMER3} 3x`}
              className={classes.Layer_3}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Maintainance);
