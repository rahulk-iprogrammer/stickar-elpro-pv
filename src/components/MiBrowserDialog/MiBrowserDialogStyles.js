import share from "../../assets/icons/instruction_dialog/share.svg";
import { primaryOrange } from "../UI/Theme";
import background from "../../assets/icons/mi_browser_dialog/background.svg";

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
      marginBottom: "30px",
      [theme.breakpoints.down(641)]: {
        fontSize: "28px",
        lineHeight: "0.96",
        marginBottom: "28px",
      },
      [theme.breakpoints.down(481)]: {
        fontSize: "18px",
        lineHeight: "0.91",
        marginBottom: "21px",
      },
      [theme.breakpoints.down(381)]: {
        fontSize: "17px",
        lineHeight: "0.83",
        marginBottom: "15px",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "16px",
      },
      [theme.breakpoints.down(321)]: {
        fontSize: "14px",
        lineHeight: "0.84",
        marginBottom: "13px",
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
      textAlign: 'center',
      marginBottom: "30px",
      [theme.breakpoints.down(641)]: {
        lineHeight: "1.64",
        fontSize: "16px",
        marginBottom: "28px",
      },
      [theme.breakpoints.down(481)]: {
        lineHeight: "1.5",
        fontSize: "14px",
        marginBottom: "21px",
      },
      [theme.breakpoints.down(421)]: {
        fontSize: "13.5px",
      },
      [theme.breakpoints.down(381)]: {
        lineHeight: "1.5",
        fontSize: "13px",
        marginBottom: "15px",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down(321)]: {
        fontSize: "10px",
        lineHeight: "1.6",
        marginBottom: "13px",
      },
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
      height: "180px",
      width: "180px",
      borderRadius: '50%',
      boxShadow: "0px 0px 16px #c3c3c3",
      padding: '4px',
      [theme.breakpoints.down(641)]: {
        height: "150px",
        width: "150px",
      },
      [theme.breakpoints.down(481)]: {
        height: "130px",
        width: "130px",
      },
      [theme.breakpoints.down(421)]: {
        height: "115px",
        width: "115px",
      },
      [theme.breakpoints.down(381)]: {
        height: "110px",
        width: "110px",
      },
      [theme.breakpoints.down(361)]: {
        height: "100px",
        width: "100px",
      },
      [theme.breakpoints.down(321)]: {
        height: "80px",
        width: "80px",
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
    background_image: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        [theme.breakpoints.down(641)]: {
            height: "170px",
        },
        [theme.breakpoints.down(481)]: {
            height: "150px",
        },
        [theme.breakpoints.down(421)]: {
            height: "135px",
        },
        [theme.breakpoints.down(381)]: {
            height: "130px",
        },
        [theme.breakpoints.down(361)]: {
            height: "120px",
        },
        [theme.breakpoints.down(321)]: {
            height: "100px",
        },
    }
  };
};
