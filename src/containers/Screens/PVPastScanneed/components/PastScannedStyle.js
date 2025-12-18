export const styles = (theme) => {
  return {
    redeemCnt: {
      display: "block",
      height: "100%",
      backgroundColor: theme.palette.common.globalBackground,
      width: "100%",
      margin: "20px 0 0 0",
      [theme.breakpoints.down("481")]: {
        margin: "14px 0 0 0",
      },
      [theme.breakpoints.down("381")]: {
        margin: "12px 0 0 0",
      },
      [theme.breakpoints.down("321")]: {
        margin: "10px 0 0 0",
      },
    },

    wrapper: {
      objectFit: "contain",
      maxWidth: "660px",
      padding: " 0 30px 30px 30px",
      margin: "0 auto",
      textAlign: "center",
      [theme.breakpoints.down(641)]: {
        padding: "0 28px 28px 28px",
        // maxWidth: "588px",
      },
      [theme.breakpoints.down(481)]: {
        padding: "0px 21px 21px 21px",
        // maxWidth: "440px",
      },
      [theme.breakpoints.down(381)]: {
        padding: "0px 15px 15px 15px",
        // maxWidth: "330px",
      },
      [theme.breakpoints.down(321)]: {
        padding: "0px 13px 13px 13px",
        // maxWidth: "294px",
      },
    },

    filterDropdown: {
      zIndex: 1,
      textTransform: "none",
    },

    brandcontainer: {
      height: "fit-content",
      margin: "22px 0px",
      padding: "20px",
      border: `1px solid ${theme.palette.commonIcon.golden} !important`,
      boxShadow: "none !important", 
      [theme.breakpoints.down("641")]: {
        // height: 125,
        margin: "20px 0px",
      },
      [theme.breakpoints.down("481")]: {
        // height: 120,
        margin: "14px 0px",
      },
      [theme.breakpoints.down("421")]: {
        // height: 120,
        margin: "12px 0px",
      },
      [theme.breakpoints.down("401")]: {
        // height: 90,
        margin: "12px 0px",
      },
      [theme.breakpoints.down("381")]: {
        // height: 90,
        margin: "9px 0px",
      },
      [theme.breakpoints.down("321")]: {
        // height: 85,
        margin: "8px 0px",
      },
    },
    branddetailcontainer: {
      height: 184,
      padding: "0px 24px",
      [theme.breakpoints.down("641")]: {
        height: 164,
        padding: "0px 24px",
      },
      [theme.breakpoints.down("481")]: {
        height: 112,
        padding: "0px 12px",
      },
      [theme.breakpoints.down("421")]: {
        height: 100,
        padding: "0px 12px",
      },
      [theme.breakpoints.down("401")]: {
        height: 100,
        padding: "0px 12px",
      },
      [theme.breakpoints.down("381")]: {
        height: 90,
        padding: 10,
      },
      [theme.breakpoints.down("321")]: {
        height: 85,
        padding: 10,
      },
    },
    branddetailcontainer1: {
      height: 184,
      padding: "24px",
      [theme.breakpoints.down("641")]: {
        height: 164,
        padding: "24px",
      },
      [theme.breakpoints.down("481")]: {
        height: 112,
        padding: "12px",
      },
      [theme.breakpoints.down("421")]: {
        height: 100,
        padding: "12px",
      },
      [theme.breakpoints.down("401")]: {
        height: 100,
        padding: "12px",
      },
      [theme.breakpoints.down("381")]: {
        height: 90,
        padding: 10,
      },
      [theme.breakpoints.down("321")]: {
        height: 85,
        padding: 10,
      },
    },
    branddetails: {
      fontSize: 22,
      [theme.breakpoints.down("641")]: {
        fontSize: 21,
      },
      [theme.breakpoints.down("481")]: {
        fontSize: 14,
      },
      [theme.breakpoints.down("401")]: {
        fontSize: 13,
      },
      [theme.breakpoints.down("381")]: {
        fontSize: 12,
      },
      [theme.breakpoints.down("361")]: {
        fontSize: 11,
      },
      [theme.breakpoints.down("321")]: {
        fontSize: 10,
      },
    },
  };
};
