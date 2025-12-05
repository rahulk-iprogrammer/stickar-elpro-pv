// import mobileicon from "../../../../assets/icons/login/mobileicon.svg";

export const styles = (theme) => {
    return {
      wrapper: {
        objectFit: "contain",
        // width: "660px",
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
      countWrapper:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

      },
      countText:{
        textAlign: "left",
        marginBottom:'20px',
        fontFamily: "Montserrat",
        fontSize: "22px",
        lineHeight: "1.25",
        userSelect: "none",
        // width: "92%",
        fontWeight: "500",
        // overflow: "hidden",
        // fontStretch: "normal",
        fontStyle: "normal",
        letterSpacing: "normal",
        // textOverflow: "ellipsis",
        // display: "-webkit-box",
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
      prodName:{
        textAlign: "left",
        marginBottom:'20px',
        fontFamily: "Montserrat",
        fontSize: "22px",
        lineHeight: "1.25",
        userSelect: "none",
        width: "92%",
        fontWeight: "500",
        // overflow: "hidden",
        // fontStretch: "normal",
        fontStyle: "normal",
        letterSpacing: "normal",
        // textOverflow: "ellipsis",
        // display: "-webkit-box",
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

      imageContainer: {
        marginBottom: "30px",
        display: "inline-block",
        width: "132px",
        height: "132px",
        overflow: "hidden",
        verticalAlign: "top",
        [theme.breakpoints.down("sm")]: {
          marginBottom: "20px",
          width: "112px",
          height: "112px",
          verticalAlign: "top",
        },
        [theme.breakpoints.down("xs")]: {
          marginBottom: "10px",
          width: "57px",
          height: "57px",
          verticalAlign: "top",
        },
      },
      img: {
        width: "100%",
        height: "100%",
      },
      
    };
    
  };
  