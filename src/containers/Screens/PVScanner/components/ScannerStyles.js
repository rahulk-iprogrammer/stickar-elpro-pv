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
      // marginTop: "120px",
      [theme.breakpoints.down(641)]: {
        fontSize: "28px",
        lineHeight: "0.96",
        // marginTop: "100px",
      },
      [theme.breakpoints.down(481)]: {
        fontSize: "18px",
        lineHeight: "0.91",
        // marginTop: "80px",
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
        // marginTop: "60px",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "16px",
      },
      [theme.breakpoints.down(321)]: {
        fontSize: "14px",
        lineHeight: "0.84",
        // marginTop: "50px",
      },
    },
    prodName:{
      textAlign: "center",
      marginBottom:'20px',
      fontFamily: "Montserrat",
      fontSize: "22px",
      lineHeight: "1.25",
      userSelect: "none",
      width: "92%",
      fontWeight: "500",
      overflow: "hidden",
      fontStretch: "normal",
      fontStyle: "normal",
      letterSpacing: "normal",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": 1,
      "-webkit-box-orient": "vertical",
      [theme.breakpoints.down(641)]: {
        fontSize: "20px",
        lineHeight: "1.4",
        // height: "21px",
      },
      [theme.breakpoints.down(481)]: {
        fontSize: "18px",
        // width: "175px",
        lineHeight: "1.3",
        // height: "19px",
      },
      [theme.breakpoints.down(430)]: {
        fontSize: "16px",
        // height: "17px",
        lineHeight: "1.25",
      },
      [theme.breakpoints.down(421)]: {
        fontSize: "15.5px",
        // height: "15px",
      },
      [theme.breakpoints.down(401)]: {
        fontSize: "15px",
        // height: "15px",
      },
      [theme.breakpoints.down(381)]: {
        fontSize: "14.5px",
        // height: "15px",
        lineHeight: "1.25",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "14px",
        // height: "15px",
        lineHeight: "1.25",
      },
      [theme.breakpoints.down(321)]: {
        fontSize: "12px",
        // height: "13px",
        lineHeight: "1.23",
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
      margin: "24px 0px 120px 0px",
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
      height: "122px",
      "--size ": "70px",
      display: "inline-block",
      transition: ".12s",
      "-webkit-mask-size": "cover",
      "mask-size ": "cover",
      objectFit: "contain",
      [theme.breakpoints.down(641)]: {
        // width: "62px",
        height: "108px",
      },
      [theme.breakpoints.down(481)]: {
        // width: "100px",
        height: "82px",
      },
      // [theme.breakpoints.down(421)]: {
      //   width: "45px",
      //   height: "72px",
      // },
      [theme.breakpoints.down(381)]: {
        // width: "35px",
        height: "62px",
      },
      [theme.breakpoints.down(321)]: {
        // width: "30px",
        height: "54px",
      },
    },
    formWrap: {
      maxwidth: "100%",
      maxHeight:'200px'
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
      marginLeft: "10px",
      [theme.breakpoints.between(424, 570)]: {
        width: "73.5%",
      },
      [theme.breakpoints.between(360, 425)]: {
        width: "73.5%",
      },
      [theme.breakpoints.between(0, 359)]: {
        width: "68%",
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
    submitOtp: {
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
    overrideOtp: {
      ...theme.palette.typography.dangerButtons,
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
    cancelBtn: {
      ...theme.palette.typography.cnclButtons,
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

    submitModal: {
      ...theme.palette.typography.dangerButtons,
      width: "50%",
      height: "50px",
      fontSize: "14px",
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
    cancelModal: {
      ...theme.palette.typography.cnclButtons,
      width: "50%",
      height: "50px",
      fontSize: "14px",
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

    dialogModal: {
      "& .MuiDialog-paperWidthMd": {
        width: "100%",
      },
      "& .MuiDialog-paper": {
        margin: "15px",
      },
    },
    modal_wrapper: {
      padding: '10px',
      margin: "0 auto",
      display: "block",
      width: "100%",
      overflow: "hidden",
      maxHeight: "600px",
    },
    btnContainer: {
      width: "100%",
      // padding: "30px",
      [theme.breakpoints.down("610")]: {
        padding: "28px",
      },
      [theme.breakpoints.down("481")]: {
        padding: "21px",
      },
      [theme.breakpoints.down("381")]: {
        padding: "15px",
      },
      [theme.breakpoints.down("321")]: {
        padding: "13px",
      },
    },

    doneBtn: {
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
        fontSize: "13.5px",
      },
      [theme.breakpoints.down(401)]: {
        fontSize: "13px",
      },
      [theme.breakpoints.down(381)]: {
        height: "46px",
        fontSize: "12.5px",
        lineHeight: "9px",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down(321)]: {
        height: "40px",
        fontSize: "10px",
        lineHeight: "8px",
      },
    },
    dangerBtn: {
      ...theme.palette.typography.dangerButtons,
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
        fontSize: "13.5px",
      },
      [theme.breakpoints.down(401)]: {
        fontSize: "13px",
      },
      [theme.breakpoints.down(381)]: {
        height: "46px",
        fontSize: "12.5px",
        lineHeight: "9px",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down(321)]: {
        height: "40px",
        fontSize: "10px",
        lineHeight: "8px",
      },
    },
    cancelButtons: {
      ...theme.palette.typography.cancelButtons,
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
        fontSize: "13.5px",
      },
      [theme.breakpoints.down(401)]: {
        fontSize: "13px",
      },
      [theme.breakpoints.down(381)]: {
        height: "46px",
        fontSize: "12.5px",
        lineHeight: "9px",
      },
      [theme.breakpoints.down(361)]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down(321)]: {
        height: "40px",
        fontSize: "10px",
        lineHeight: "8px",
      },
    },
    otpBoxInput: {
      width: "100%",
      margin: "0 auto 25px auto",
      display: "block",
      textAlign: "center",
      marginRight: "0px",
      "& div": {
        width: "100%",
        margin: "0px",
        "& div": {
          width: "24%",
          display: "block !important",
          float: "left",
          marginRight: "20px",
        },
        [theme.breakpoints.down(641)]: {
          "& div": {
            marginRight: "18px",
          },
        },
        [theme.breakpoints.down(481)]: {
          "& div": {
            marginRight: "13px",
          },
        },
        [theme.breakpoints.down(381)]: {
          "& div": {
            marginRight: "10px",
          },
        },
        [theme.breakpoints.down(321)]: {
          "& div": {
            marginRight: "9px",
          },
        },
        "& div:last-child": {
          marginRight: "0px",
        },
      },
      "&& input": {
        width: "23% !important",
        height: "92px",
        // margin: "0px 6px",
        textAlign: "center",
        "-webkit-appearance": 'none',
        // "-moz-user-select": "none",
        // "-webkit-user-select": "none",
        // "-ms-user-select": "none",
        // userSelect: "none",
        fontSize: "24px",
        borderRadius: "10px",
        border: "1px solid #e4e4e4",
        boxShadow: "none !important",
        "-webkit-appearance": "none",
        "-moz-appearance": "none",
        appearance: "none",
      },
      [theme.breakpoints.down(641)]: {
        "&& input": {
          width: "23% !important",
          fontSize: "20px",
          height: "80px",
          lineHeight: "1.2",
          borderRadius: "8.9px",
        },
      },
      [theme.breakpoints.down(481)]: {
        "&& input": {
          width: "23% !important",
          fontSize: "18px",
          height: "54px",
          lineHeight: "1.11",
          borderRadius: "6.7px",
        },
      },
      [theme.breakpoints.down(421)]: {
        "&& input": {
          width: "23% !important",
          fontSize: "17.5px",
        },
      },
      [theme.breakpoints.down(401)]: {
        "&& input": {
          width: "23% !important",
          fontSize: "17px",
        },
      },
      [theme.breakpoints.down(381)]: {
        "&& input": {
          width: "23% !important",
          fontSize: "16.5px",
          height: "46px",
          lineHeight: "1.07",
          borderRadius: "5px",
        },
      },
      [theme.breakpoints.down(361)]: {
        "&& input": {
          width: "23% !important",
          fontSize: "16px",
          height: "46px",
          lineHeight: "1.07",
          borderRadius: "5px",
        },
      },
      [theme.breakpoints.down(321)]: {
        "&& input": {
          width: "23% !important",
          fontSize: "14px",
          height: "40px",
          lineHeight: "13.5px",
          borderRadius: "4.4px",
        },
      },
      "&& input:focus": {
        outline: "transparent",
      },
    },
    otpContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    redeemCnt: {
      display: "block",
      height: "100%",
      backgroundColor: theme.palette.common.globalBackground,
      width: "100%",
      margin: "45px 0 0 0",
      [theme.breakpoints.down("481")]: {
        margin: "24px 0 0 0",
      },
      [theme.breakpoints.down("381")]: {
        margin: "20px 0 0 0",
      },
      [theme.breakpoints.down("321")]: {
        margin: "17px 0 0 0",
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
    
    startBtnWrapper:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    },
    stopBtnWrapper:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:'45%',
      [theme.breakpoints.down(641)]: {
        marginTop:'40%',

      },
      [theme.breakpoints.down(481)]: {
        marginTop:'30%',

      },
      [theme.breakpoints.down(421)]: {
        marginTop:'25%',

      },
      [theme.breakpoints.down(381)]: {
        marginTop:'20%',

      },
      [theme.breakpoints.down(361)]: {
        marginTop:'18%',

      },
      [theme.breakpoints.down(321)]: {
        marginTop:'10%',

      },
    },


    btnContainer: {
      width: "70%",
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
      // boxShadow: "0px 0px 16px #c3c3c3",
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
    
  };
  
};
