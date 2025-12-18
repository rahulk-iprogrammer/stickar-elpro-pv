import share from "../../assets/icons/instruction_dialog/share.svg";
import { goldenColor } from "../UI/Theme";

export const styles = (theme) => {
  return {
    dialogModal: {
      "& .MuiDialog-paperWidthMd": {
        width: "100%",
      },
      "& .MuiDialog-paper": {
        margin: "15px",
      },
    },
    root: {
      padding: "30px",
      [theme.breakpoints.down(641)]: {
        padding: "28px",
      },
      [theme.breakpoints.down(481)]: {
        padding: "21px",
      },
      [theme.breakpoints.down(381)]: {
        padding: "15px",
      },
      [theme.breakpoints.down(321)]: {
        padding: "13px",
      },
    },
    instructionContainer: {
      width: "100%",
      textAlign: "center",
    },
    heading: {
      fontSize: "32px",
      fontWeight: "bold",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "0.94",
      letterSpacing: "normal",
      textAlign: "center",
      color: theme.palette.typography.texts.color,
      marginBottom: "10px",
      [theme.breakpoints.down(641)]: {
        fontSize: "28px",
        lineHeight: "0.96",
      },
      [theme.breakpoints.down(481)]: {
        fontSize: "18px",
        lineHeight: "0.91",
      },
      [theme.breakpoints.down(381)]: {
        fontSize: "17px",
        lineHeight: "0.83",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "16px",
      },
      [theme.breakpoints.down(321)]: {
        fontSize: "14px",
        lineHeight: "0.84",
      },
    },
    subHeading: {
      fontSize: "18px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.64",
      letterSpacing: "normal",
      color: theme.palette.typography.texts.color,
      marginBottom: "10px",
      [theme.breakpoints.down(641)]: {
        lineHeight: "1.64",
        fontSize: "16px",
      },
      [theme.breakpoints.down(481)]: {
        lineHeight: "1.5",
        fontSize: "14px",
      },
      [theme.breakpoints.down(421)]: {
        fontSize: "13.5px",
      },
      [theme.breakpoints.down(381)]: {
        lineHeight: "1.5",
        fontSize: "13px",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down(321)]: {
        fontSize: "10px",
        lineHeight: "1.6",
      },
    },
    just_tap1: {
      "& span": {
        margin: "0px 4px",
      },
      fontSize: "18px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      letterSpacing: "normal",
      color: theme.palette.typography.texts.color,
      marginBottom: "10px",
      lineHeight: "2.9",
      display: "block",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down(641)]: {
        lineHeight: "1.9",
        fontSize: "16px",
      },
      [theme.breakpoints.down(481)]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down(421)]: {
        fontSize: "13.5px",
      },
      [theme.breakpoints.down(381)]: {
        lineHeight: "1.5",
        fontSize: "13px",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down(321)]: {
        lineHeight: "1.5",
        fontSize: "10px",
      },
    },
    just_tap: {
      fontSize: "18px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      letterSpacing: "normal",
      color: theme.palette.typography.texts.color,
      marginBottom: "10px",
      lineHeight: "2.9",
      display: "flex",
      width: "100%",
      alignItems: 'center',
      justifyContent: "center",
      [theme.breakpoints.down(641)]: {
        lineHeight: "1.9",
        fontSize: "16px",
      },
      [theme.breakpoints.down(481)]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down(421)]: {
        fontSize: "13.5px",
      },
      [theme.breakpoints.down(381)]: {
        lineHeight: "1.5",
        fontSize: "13px",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down(321)]: {
        lineHeight: "1.5",
        fontSize: "10px",
      },
    },
    shareIcon: {
      display: "inline-block",
      height: "36px",
      width: "27px",
      margin: "0 3px",
      transition: ".12s",
      "-webkit-mask-size": "cover",
      "mask-size ": "cover",
      [theme.breakpoints.down(641)]: {
        height: "33px",
        width: "24px",
      },
      [theme.breakpoints.down(481)]: {
        height: "30px",
        width: "21px",
      },
      [theme.breakpoints.down(421)]: {
        height: "29px",
        width: "20px",
      },
      [theme.breakpoints.down(381)]: {
        height: "28px",
        width: "19px",
      },
      [theme.breakpoints.down(361)]: {
        height: "27px",
        width: "18px",
      },
      [theme.breakpoints.down(321)]: {
        height: "24px",
        width: "15px",
      },
    },
    shareIconCss: {
      backgroundColor: theme.palette.primary.main,
      " -webkit-mask-image": `url(.${share})`,
      "mask-image": `url(.${share})`,
      mask: `url(.${share}) no-repeat center / contain`,
      "-webkit-mask": `url(.${share}) no-repeat center / contain`,
    },
    a2hs: {
      color: `${goldenColor}`,
      fontWeight: "bold",
    },
    appLogoContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "30px",
      [theme.breakpoints.down(641)]: {
        marginBottom: "28px",
      },
      [theme.breakpoints.down(481)]: {
        marginBottom: "21px",
      },
      [theme.breakpoints.down(421)]: {
        marginBottom: "18px",
      },
      [theme.breakpoints.down(381)]: {
        marginBottom: "16px",
      },
      [theme.breakpoints.down(361)]: {
        marginBottom: "15px",
      },
      [theme.breakpoints.down(321)]: {
        marginBottom: "13px",
      },
    },
    appLogo: {
      height: "140px",
      width: "140px",
      boxShadow: "0px 0px 16px #c3c3c3",
      [theme.breakpoints.down(641)]: {
        height: "120px",
        width: "120px",
      },
      [theme.breakpoints.down(481)]: {
        height: "100px",
        width: "100px",
      },
      [theme.breakpoints.down(421)]: {
        height: "95px",
        width: "95px",
      },
      [theme.breakpoints.down(381)]: {
        height: "90px",
        width: "90px",
      },
      [theme.breakpoints.down(361)]: {
        height: "80px",
        width: "80px",
      },
      [theme.breakpoints.down(321)]: {
        height: "60px",
        width: "60px",
      },
    },
    btnContainer: {
      width: "100%",
    },
    okBtn: {
      ...theme.palette.typography.doneButtons,
      marginBottom: 0,
      fontSize: "22px",
      height: "92px",
      lineHeight: "18px",
      [theme.breakpoints.down(641)]: {
        height: "80px",
        fontSize: "18px",
        lineHeight: "16px",
      },
      [theme.breakpoints.down(481)]: {
        height: "54px",
        fontSize: "16px",
        lineHeight: "12px",
      },
      [theme.breakpoints.down(421)]: {
        height: "54px",
        fontSize: "13.5px",
      },
      [theme.breakpoints.down(381)]: {
        height: "46px",
        fontSize: "13px",
        lineHeight: "12px",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "12px",
        lineHeight: "9px",
      },
      [theme.breakpoints.down(321)]: {
        height: "40px",
        fontSize: "10px",
        lineHeight: "8px",
      },
    },
    video: {
      display: "flex",
      height: "160px",
      alignItems: "center",
	  justifyContent: "center",
	  marginBottom:'15px',
    },
    i_frame: {
      border: "none",
      width: "100%",
      borderRadius: "4px",
    },
  };
};
