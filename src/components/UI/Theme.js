import { createMuiTheme } from "@material-ui/core/styles";
import merchantColor from "./merchantColor.json";
import { apiData } from "../../common/common-types";

export const primaryOrange =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].primaryOrange;
export const globalBackground =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].globalBackground;
export const errorRed =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].errorRed;
export const color =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].color;
export const borderGrey =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].borderGrey;
export const lightGrey =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].lightGrey;
export const grey =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].grey;
export const imgBackgroundColor =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].imgBackgroundColor;
export const whiteColor =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].whiteColor;
export const headerTextColor =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].headerTextColor;
export const progressBar =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].progressBar;
export const progressDefault =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].progressDefault;
export const selectedTab =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].selectedTab;
export const top =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].top;
export const gold =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].gold;
export const headerBottomBorder =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].headerBottomBorder;
export const dashBoardTier =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].dashBoardTier;
export const green =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].green;
export const lightgreen =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].lightgreen;
export const maroonRed =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].maroonRed;
export const skyBlue =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].skyBlue;
export const disabledField =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].disabledField;
export const faq_qna_backgroundColor =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].faq_qna_background;
export const lightPrimary =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].lightPrimaryColor;
export const lightGreen = "#d8f3cf";
export const lightPrimaryColor2 =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].lightPrimaryColor2;
export const red =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].red;

export const goldenColor =
  merchantColor[
    merchantColor[apiData.merchant_id] ? apiData.merchant_id : "default"
  ].goldenColor;

const theme = createMuiTheme();
export default createMuiTheme({
  palette: {
    primary: {
      main: `${primaryOrange}`,
    },
    commonIcon: {
      golden: `${goldenColor}`,
    },
    common: {
      globalBackground: `${globalBackground}`,
    },
    img: {
      backgroundColor: `${imgBackgroundColor}`,
    },
    tick: {
      pending: `${primaryOrange}`,
      green: `${green}`,
    },
    orderSummary: {
      title: `${green}`,
    },
    cards: {
      backgroundColor: `${whiteColor}`,
      deleteIcon: `${lightGrey}`,
    },
    billSummary: {
      top: `${top}`,
    },
    progressBar: {
      processing: `${progressBar}`,
      default: `${progressDefault}`,
    },
    footer: {
      selected: `${selectedTab}`,
      default: `${lightGrey}`,
      selectedIcon: `${goldenColor}`,
    },
    tier: {
      gold: `${gold}`,
      dashBoardTier: `${dashBoardTier}`,
    },
    header: {
      headerBottomBorder: `${headerBottomBorder}`,
      backIconColor: `${whiteColor}`,
      badge: `${whiteColor}`,
    },
    dashBoardheadText: {
      color: `${whiteColor}`,
    },
    redeemHeader: {
      iconsColor: `${lightGrey}`,
      text: `${color}`,
    },
    uploadProgressBar: {
      inProgress: `${lightPrimary}`,
      complete: `${lightGreen}`,
    },
    typography: {
      labels: {
        fontFamily: "Montserrat",
      },
      texts: {
        color: `${color}`,
        specialPointsColor: `${primaryOrange}`,
        sellingPriceColor: `${lightGrey}`,
        headerTextColor: `${headerTextColor}`,
        subHeading: `${lightGrey}`,
        error: `${errorRed}`,
      },
      cancelButtons: {
        backgroundColor: borderGrey,
        width: "100%",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: borderGrey,
          color: "#FFF",
        },
        "&:disabled": {
          opacity: "0.4 !important",
          color: "#ffffff !important",
          backgroundColor: `${borderGrey} !important`,
        },
      },
      dangerButtons: {
        textTransform: "none",
        width: "100%",
        // height: '48px',
        boxShadow: "none",
        color: `${whiteColor}`,
        backgroundColor: `${errorRed}`,
        // fontSize: '1rem',
        marginBottom: theme.spacing(2),
        // [theme.breakpoints.down('sm')]: {
        // 	height: '36px',
        // 	fontSize: '0.85rem'
        // },
        "&:hover": {
          backgroundColor: `${errorRed}`,
          color: "#FFF",
        },
        "&:disabled": {
          opacity: "0.4 !important",
          color: "#ffffff !important",
          backgroundColor: `${errorRed} !important`,
        },
      },
      cnclButtons: {
        textTransform: "none",
        marginBottom: theme.spacing(2),
        backgroundColor: borderGrey,
        width: "100%",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: borderGrey,
          color: "#FFF",
        },
        "&:disabled": {
          opacity: "0.4 !important",
          color: "#ffffff !important",
          backgroundColor: `${borderGrey} !important`,
        },
      },
      doneButtons: {
        textTransform: "none",
        width: "100%",
        // height: '48px',
        boxShadow: "none",
        color: `${whiteColor}`,
        backgroundColor: `${primaryOrange}`,
        // fontSize: '1rem',
        marginBottom: theme.spacing(2),
        // [theme.breakpoints.down('sm')]: {
        // 	height: '36px',
        // 	fontSize: '0.85rem'
        // },
        "&:hover": {
          backgroundColor: `${primaryOrange}`,
          color: "#FFF",
        },
        "&:disabled": {
          opacity: "0.4 !important",
          color: "#ffffff !important",
          backgroundColor: `${primaryOrange} !important`,
        },
      },
    },
    errorMessage: {
      fontSize: "0.75rem",
      color: `${errorRed}`,
    },
    referFriend: {
      colorWhite: `${whiteColor}`,
      text: `${color}`,
    },
  },
});
