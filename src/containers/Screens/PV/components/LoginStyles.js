// import mobileicon from "../../../../assets/icons/login/mobileicon.svg";

export const styles = (theme) => {
  return {
    wrapper: {
      objectFit: "contain",
      maxWidth: "660px",
      padding: "30px",
      margin: "0 auto",
      textAlign: "center",
      [theme.breakpoints.down(641)]: {
        padding: "28px",
        // maxWidth: "588px",
      },
      [theme.breakpoints.down(481)]: {
        padding: "21px",
        // maxWidth: "440px",
      },
      [theme.breakpoints.down(381)]: {
        padding: "15px",
        // maxWidth: "330px",
      },
      [theme.breakpoints.down(321)]: {
        padding: "13px",
        // maxWidth: "294px",
      },
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
      marginTop: "120px",
      [theme.breakpoints.down(641)]: {
        fontSize: "28px",
        lineHeight: "0.96",
        marginTop: "100px",
      },
      [theme.breakpoints.down(481)]: {
        fontSize: "18px",
        lineHeight: "0.91",
        marginTop: "30px",
      },
      [theme.breakpoints.down(421)]: {
        fontSize: "17.5px",
      },
      [theme.breakpoints.down(401)]: {
        fontSize: "17px",
      },
      [theme.breakpoints.down(381)]: {
        fontSize: "16.5px",
        lineHeight: "0.83",
        marginTop: "60px",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "16px",
      },
      [theme.breakpoints.down(321)]: {
        fontSize: "14px",
        lineHeight: "0.84",
        marginTop: "50px",
      },
    },
    subHeading: {
      height: "53px",
      width: "100%",
      fontSize: "18px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.64",
      letterSpacing: "normal",
      textAlign: "center",
      color: "#7e7e7e",
      margin: "24px 0px 24px 0px",
      [theme.breakpoints.down(641)]: {
        height: "54px",
        lineHeight: "1.64",
        fontSize: "16px",
        margin: "20px 0px 100px 0px",
      },
      [theme.breakpoints.down(481)]: {
        height: "41px",
        lineHeight: "1.5",
        fontSize: "14px",
        margin: "14px 0px 80px 0px",
      },
      [theme.breakpoints.down(421)]: {
        fontSize: "13.5px",
      },
      [theme.breakpoints.down(401)]: {
        fontSize: "13px",
      },
      [theme.breakpoints.down(381)]: {
        height: "31px",
        lineHeight: "1.5",
        fontSize: "12.5px",
        margin: "12px 0px 60px 0px",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down(321)]: {
        height: "27px",
        fontSize: "10px",
        lineHeight: "1.6",
        margin: "10px 0px 50px 0px",
      },
    },
    icons: {
      width: "100%",
      // height: "122px",
      height: "75px",
      "--size ": "70px",
      display: "inline-block",
      transition: ".12s",
      "-webkit-mask-size": "cover",
      "mask-size ": "cover",
      objectFit: "contain",
      margin: "50px 0px",
      [theme.breakpoints.down(641)]: {
        // width: "62px",
        // height: "108px",
        height: "75px",
      },
      [theme.breakpoints.down(481)]: {
        // width: "100px",
        // height: "140px",
        height: "75px",
      },
      // [theme.breakpoints.down(421)]: {
      //   width: "45px",
      //   height: "72px",
      // },
      [theme.breakpoints.down(381)]: {
        // width: "35px",
        // height: "62px",
        height: "75px",
      },
      [theme.breakpoints.down(321)]: {
        // width: "30px",
        // height: "54px",
        height: "75px",
      },
    },
    formWrap: {
      width: "100%",
    },
    selDrop: {
      width: "23%",
      "& .MuiFormLabel-root": {
        fontFamily: "Montserrat",
      },
      "& div": {
        height: "92px",
        "& fieldset": {
          borderColor: "#e4e4e4 !important",
        },
      },
      "& .Mui-disabled": {
        color: "#454545",
        paddingLeft: "50px",
        [theme.breakpoints.down(481)]: {
          paddingLeft: "12px",
        },
        [theme.breakpoints.down(321)]: {
          paddingLeft: "8px",
        },
      },
      "& label": {
        fontSize: "20px",
        lineHeight: "2.5",
        color: "#454545",
        opacity: "1",
      },
      [theme.breakpoints.down(641)]: {
        "& div": {
          height: "80px",
        },
        "& label": {
          fontSize: "16px",
          // lineHeight: "0.7",
        },
      },
      [theme.breakpoints.down(481)]: {
        "& div": {
          height: "54px",
        },
        "& label": {
          fontSize: "14px",
          lineHeight: "0.9",
        },
      },
      [theme.breakpoints.down(421)]: {
        "& label": {
          fontSize: "13.5px",
        },
      },
      [theme.breakpoints.down(401)]: {
        "& label": {
          fontSize: "13px",
        },
      },
      [theme.breakpoints.down(381)]: {
        "& div": {
          height: "46px",
        },
        "& label": {
          fontSize: "12.5px",
          lineHeight: "0.7",
        },
      },
      [theme.breakpoints.down(361)]: {
        "& label": {
          fontSize: "12px",
        },
      },
      [theme.breakpoints.down(321)]: {
        "& div": {
          height: "40px",
        },
        "& label": {
          fontSize: "10px",
          lineHeight: "0.4",
        },
      },
    },
    LoginText: {
      width: "100%",
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px white inset !important", // Or another background color
        BoxShadow: "0 0 0 1000px white inset !important",
        WebkitTextFillColor: "#000 !important", // Ensures the text color stays black
      },
      "& div": {
        height: "92px",
        "& fieldset": {
          borderColor: "#e4e4e4 !important",
        },
      },
      "&& input": {
        fontSize: "20px",
        lineHeight: "1",
      },
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      letterSpacing: "normal",
      textAlign: "right",
      color: theme.palette.typography.texts.color,
      // marginLeft: "10px",
      [theme.breakpoints.between(424, 570)]: {
        width: "100%",
      },
      [theme.breakpoints.between(360, 425)]: {
        width: "100%",
      },
      [theme.breakpoints.between(0, 359)]: {
        width: "100%",
      },
      [theme.breakpoints.down(641)]: {
        "& div": {
          height: "80px",
        },
        "&& input": {
          fontSize: "16px",
          // lineHeight: "1.2",
        },
      },
      [theme.breakpoints.down(481)]: {
        "& div": {
          height: "54px",
        },
        "&& input": {
          fontSize: "14px",
          // lineHeight: "1.11",
        },
      },
      [theme.breakpoints.down(421)]: {
        "&& input": {
          fontSize: "13.5px",
          // lineHeight: "1.07",
        },
      },
      [theme.breakpoints.down(401)]: {
        "&& input": {
          fontSize: "13px",
          // lineHeight: "1.07",
        },
      },
      [theme.breakpoints.down(381)]: {
        "& div": {
          height: "46px",
        },
        "&& input": {
          fontSize: "12.5px",
          // lineHeight: "1.07",
        },
      },
      [theme.breakpoints.down(361)]: {
        "&& input": {
          fontSize: "12px",
        },
      },
      [theme.breakpoints.down(321)]: {
        "& div": {
          height: "40px",
        },
        "&& input": {
          fontSize: "10px",
          // lineHeight: "13.5px",
        },
      },
      "& p": {
        margin: "0px",
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderWidth: "1px",
          borderColor: "#e4e4e4 !important",
        },
      },
    },
    getotp: {
      ...theme.palette.typography.doneButtons,
      width: "100%",
      height: "92px",
      fontSize: "22px",
      lineHeight: "18px",
      marginTop: "30px",
      [theme.breakpoints.down(641)]: {
        height: "80px",
        fontSize: "16px",
        lineHeight: "16px",
        marginTop: "24px",
      },
      [theme.breakpoints.down(481)]: {
        height: "54px",
        fontSize: "14px",
        lineHeight: "12px",
        marginTop: "20px",
      },
      [theme.breakpoints.down(421)]: {
        fontSize: "13.5px",
      },
      [theme.breakpoints.down(401)]: {
        fontSize: "13px",
      },
      [theme.breakpoints.down(381)]: {
        height: "46px",
        fontSize: "12.5px",
        lineHeight: "9px",
        marginTop: "14px",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down(321)]: {
        height: "40px",
        fontSize: "10px",
        lineHeight: "8px",
        marginTop: "12px",
      },
    },
    down_icon: {
      position: "absolute",
      pointerEvents: "none",
      right: "10px",
      top: "calc(50% - 8px)",
      fontWeight: "bold",
      [theme.breakpoints.down(481)]: {
        top: "calc(50% - 4px)",
      },
      [theme.breakpoints.down(381)]: {
        top: "calc(50% - 3px)",
      },
      [theme.breakpoints.down(321)]: {
        top: "calc(50% - 1px)",
      },
    },
    errorMessage: {
      ...theme.palette.errorMessage,
      position: "absolute",
      left: 0,
      color: "red",
      fontSize: "18px",
      marginLeft: "10px",
      [theme.breakpoints.down(641)]: {
        fontSize: "16px",
      },
      [theme.breakpoints.down(481)]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down(421)]: {
        fontSize: "13.5px",
      },
      [theme.breakpoints.down(401)]: {
        fontSize: "13px",
      },
      [theme.breakpoints.down(381)]: {
        fontSize: "12.5px",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down(321)]: {
        fontSize: "10px",
      },
    },
    // mobileiconCss: {
    //   backgroundColor: theme.palette.primary.main,
    //   " -webkit-mask-image": `url(.${mobileicon})`,
    //   "mask-image": `url(.${mobileicon})`,
    //   mask: `url(.${mobileicon}) no-repeat center / contain`,
    //   "-webkit-mask": `url(.${mobileicon}) no-repeat center / contain`,
    // },
    main_root: {
      display: "flex",
      alignItems: "center",
      minHeight: "100%",
      backgroundColor: theme.palette.cards.backgroundColor,
    },
  };
};
