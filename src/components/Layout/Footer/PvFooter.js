import React, { useEffect } from "react";
import classnames from "classnames";
import BottomNavigation from "@material-ui/core/BottomNavigation";

import { makeStyles } from "@material-ui/core/styles";
import offers_active from "../../../assets/icons/footer/offers_active.svg";
import scan_active from "../../../assets/icons/footer/scan-icon.svg";
import scan_history_active from "../../../assets/icons/footer/scanHistory.svg";

import { connect } from "react-redux";
import { changeActiveTab, logoutPvUser } from "../../../App/redux/action";
import PvBottomNavigationAction from "../../UI/MyBottomNavigationAction/PvBottomNavigationAction";

const useStyles = makeStyles((theme) => {
  return {
    bottomNav: {
      width: "100%",
      padding: 0,
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      bottom: 0,
      height: "86px",
      boxShadow: "0px -1px 3px 0 rgba(0, 0, 0, 0.3)",
      [theme.breakpoints.down("641")]: {
        height: "82px",
      },
      [theme.breakpoints.down("481")]: {
        height: "64px",
      },
      [theme.breakpoints.down("421")]: {
        height: "54px",
      },
      [theme.breakpoints.down("381")]: {
        height: "50px",
      },
      [theme.breakpoints.down("361")]: {
        height: "48px",
      },
      [theme.breakpoints.down("321")]: {
        height: "43px",
      },
    },
    icon: {
      width: "36px",
      height: "36px",
      display: "inline-block",
      transition: ".12s",
      "-webkit-mask-size": "cover",
      "mask-size ": "cover",
      objectFit: "contain",
      objectPosition: "center",
      marginBottom: "11px",
      [theme.breakpoints.down("481")]: {
        width: "25px",
        height: "25px",
        marginBottom: "6px",
      },
      [theme.breakpoints.down("381")]: {
        width: "18px",
        height: "18px",
      },
      [theme.breakpoints.down("321")]: {
        width: "16px",
        height: "16px",
      },
    },
    moreIcon: {
      margin: "15px 0px 26px 0px",
      width: "36px",
      height: "6px",
      objectFit: "contain",
      objectPosition: "center",
      [theme.breakpoints.down("481")]: {
        width: "25px",
        height: "5px",
        margin: "10px 0px 16px 0px",
      },
      [theme.breakpoints.down("381")]: {
        width: "16px",
        height: "5px",
        margin: "7px 0px 13px 0px",
      },
      [theme.breakpoints.down("321")]: {
        width: "16px",
        height: "3px",
        margin: "6px 0px 12px 0px",
      },
    },
    transactionsIcon: {
      width: "30px",
      height: "38px",
      objectFit: "contain",
      objectPosition: "center",
      marginBottom: "11px",
      [theme.breakpoints.down("481")]: {
        width: "20px",
        height: "26px",
        marginBottom: "6px",
      },
      [theme.breakpoints.down("381")]: {
        width: "16px",
        height: "19px",
      },
      [theme.breakpoints.down("321")]: {
        width: "14px",
        height: "17px",
      },
    },

    scan_active: {
      backgroundColor: theme.palette.footer.selectedIcon,
      " -webkit-mask-image": `url(..${scan_active})`,
      "mask-image": `url(..${scan_active})`,
      mask: `url(..${scan_active}) no-repeat center / contain`,
      "-webkit-mask": `url(..${scan_active}) no-repeat center / contain`,
    },
    scan_deactive: {
      backgroundColor: theme.palette.footer.default,
      " -webkit-mask-image": `url(..${scan_active})`,
      "mask-image": `url(..${scan_active})`,
      mask: `url(..${scan_active}) no-repeat center / contain`,
      "-webkit-mask": `url(..${scan_active}) no-repeat center / contain`,
    },

    scan_history_active: {
      backgroundColor: theme.palette.footer.selectedIcon,
      " -webkit-mask-image": `url(..${scan_history_active})`,
      "mask-image": `url(..${scan_history_active})`,
      mask: `url(..${scan_history_active}) no-repeat center / contain`,
      "-webkit-mask": `url(..${scan_history_active}) no-repeat center / contain`,
    },
    scan_history_deactive: {
      backgroundColor: theme.palette.footer.default,
      " -webkit-mask-image": `url(..${scan_history_active})`,
      "mask-image": `url(..${scan_history_active})`,
      mask: `url(..${scan_history_active}) no-repeat center / contain`,
      "-webkit-mask": `url(..${scan_history_active}) no-repeat center / contain`,
    },
  };
});

const PvFooter = (props) => {
  const classes = useStyles();

  const routes = [
    {
      name: "Scan",
      link: "/pv-scanner",
      value: 0,
      iconPath: classes.scan_deactive,
      iconActive: classes.scan_active,
    },
    {
      name: "Past Scans",
      link: "/pv-past-scanned",
      value: 1,
      iconPath: classes.scan_history_deactive,
      iconActive: classes.scan_history_active,
    },
  ];

  useEffect(() => {
    setActiveTab();
  }, []);

  const changeHandler = (index) => {
    setActiveTab(index);
  };

  const setActiveTab = () => {
    const currentUrl = window.location.pathname;
    const { activeTab, changeActiveTab } = props;
    if (currentUrl.includes("/pv-scanner")) {
      if (activeTab !== 0) {
        changeActiveTab(0);
      }
    } else if (currentUrl.includes("/pv-past-scanned")) {
      if (activeTab !== 1) {
        changeActiveTab(1);
      }
    } else {
      if (activeTab !== 0) {
        changeActiveTab(0);
      }
    }
  };

  return (
    <BottomNavigation
      value={props.activeTab}
      showLabels
      className={classes.bottomNav}
    >
      {routes?.map((route) => {
        return (
          <PvBottomNavigationAction
            key={route.value}
            value={route.value}
            to={route.link}
            label={route.name}
            logoutUser={props.logoutPvUser}
            icon={
              <span
                className={classnames({
                  [route.iconActive]: route.value === props.activeTab,
                  [route.iconPath]: route.value !== props.activeTab,
                  [classes.moreIcon]: route.value === 4,
                  [classes.transactionsIcon]: route.value === 3,
                  [classes.icon]: true,
                })}
              />
            }
            activeTabValue={props.activeTab}
            handleChange={changeHandler}
          />
        );
      })}
    </BottomNavigation>
  );
};

const mapStateToProps = (state) => {
  return {
    activeTab: state.reducerApp.activeTab,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveTab: (id) => dispatch(changeActiveTab(id)),
    logoutPvUser: () => dispatch(logoutPvUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PvFooter);
