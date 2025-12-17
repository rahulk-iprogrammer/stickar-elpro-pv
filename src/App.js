import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/UI/Theme";
import {
  changeActiveTab,
  onTryAutoLogin,
  logoutPvUser,
} from "./App/redux/action";
import { connect } from "react-redux";


import PvContainer from "./containers/Screens/PV/PvContainer";
import PvScannerContainer from "./containers/Screens/PVScanner/PvScannerContainer";
import {
  getStorageItem,
  setStorageItem,
  removeStorageItem,
} from "./common/localStorage";

import Loader from "./components/Loader/Loader";
import Maintainance from "./components/Maintainance";

import InstructionDialog from "./components/InstructionDialog/InstructionDialog";
import MiBrowserDialog from "./components/MiBrowserDialog/MiBrowserDialog";
// import platform from "platform";
import { stockAPI } from "./common/axiosInstance";
// import { openAlertBox } from "./common/AlertMessage/AlertMessage";
import HandleOreintations from "./hoc/HandleOreintations";
import * as serviceWorker from './serviceWorker';
// import swConfig from './swConfig';
// import { Button } from "@material-ui/core";
import { apiData } from "./common/common-types";
import PvNotificationContainer from "./containers/Screens/PVNotification/PvNotificationContainer";
import { url_details } from "./containers/Screens/PV/redux/action";
import PvRouting from "./PvRouting";
import PvPastScannedContainer from "./containers/Screens/PVPastScanneed/PvPastScannedContainer";

let interval = null;
// const isMiBrowser = platform.product === 'Xiaomi MiuiBrowser';
const isMiBrowser = /miuibrowser/.test(navigator.userAgent.toLowerCase());
class App extends Component {
  installPrompt = null;
  state = {
    instructionDialog: false,
    isMiBrowserDialog: isMiBrowser,
    warningDialog: false,
    width: 0,
    height: 0,
    orientation: "",
    angle: 0,
    newVersionAvailable: false,
    ismaintainance:
      (!getStorageItem("ismaintainance") ||
        getStorageItem("ismaintainance") === "false"
        ? false
        : true) || false,
  };

  componentDidMount() {
    setStorageItem("IsTabActive", "true");
    if (process.env.NODE_ENV === 'production') {
      serviceWorker.register({ onUpdate: this.OnServiceWorkerUpdate });
    }
    this.getReferalCode();
    window.addEventListener("contextmenu", (e) => {
      //to avoid user to mouse right click
      e.preventDefault();
    });
    window.addEventListener("storage", function (e) {
      if (e.storageArea.length === 0) {
        window.open(window.origin + "/login", "_self");
      }
    });
    this.getMaintainance();
    interval = setInterval(() => {
      this.getMaintainance();
    }, 60000);

    //this function will set the active tab in app
    // this.props.setActiveTab();
    //this will check if the user has already been logged in
    //and allow the user to access the app if logged in else logout

    this.props.onTryAutoLogin();

    //for installation prompt counter
    if (!getStorageItem("promptCounter")) {
      setStorageItem("promptCounter", 0);
    }
    this.installationPrompt();

    window.addEventListener("beforeunload", this.pageRefreshed);

    if (!getStorageItem("isPWAInstalled")) {
      setStorageItem("isPWAInstalled", "not installed");
    }
  }
  async getReferalCode() {
    let url = window.location.href;
    let updateUrl = url.split("?ref=");
    // let referalCode = updateUrl[1] == undefined ? "false: updateUrl[1]
    let referalCode = updateUrl[1] ? updateUrl[1] : false;
    await setStorageItem("referalCode", referalCode);
  }

  // refreshAction = (key) => { //render the snackbar button
  //   return (
  //     <Fragment>
  //       <Button
  //         style={{
  //           fontStretch: "normal",
  //           fontStyle: "normal",
  //           letterSpacing: "normal",
  //           textAlign: "center",
  //           // color: theme.palette.typography.texts.color,
  //           fontSize: "9px",
  //         }}
  //         // className="snackbar-button"
  //         size="small"
  //         onClick={this.updateServiceWorker}
  //       >{"refresh"}</Button>
  //     </Fragment>
  //   );
  // };
  OnServiceWorkerUpdate = async registration => {
    // const { enqueueSnackbar } = this.props;
    // const { newVersionAvailable } = this.state
    await this.setState({
      waitingWorker: registration && registration.waiting,
      newVersionAvailable: true
    });
    let newVersion = this.state.newVersionAvailable
    if (newVersion) {//show snackbar with refresh button
      // enqueueSnackbar("A new version was released", {
      //   persist: true,
      //   variant: "success",
      //   action: this.refreshAction(),
      // });
      this.updateServiceWorker()
    }
  }
  updateServiceWorker = () => {
    const { waitingWorker } = this.state
    waitingWorker && waitingWorker.postMessage({ type: 'SKIP_WAITING' });
    this.setState({ newVersionAvailable: false })
    window.location.reload();
  }
  componentDidUpdate(preProps) {
    if (
      !getStorageItem("user") &&
      preProps.location.pathname.includes("redeem")
    ) {
      setStorageItem("prev_route", preProps.location.pathname);
    }
    if (
      preProps.location.pathname.includes("store-locator") &&
      !this.props.location.pathname.includes("store-locator")
    ) {
      removeStorageItem("brandid");
      // this.props.clearBrands();
    }
    // if (
    //   !this.props.location.pathname.includes("offers") &&
    //   !this.props.location.pathname.includes("offers-detail")
    // ) {
    //   removeStorageItem("offerid");
    //   this.props.clearOfferDetails();
    //   this.props.clearOffers();
    // }
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.pageRefreshed);
    window.removeEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    clearInterval(interval);
    localStorage.removeItem("isOptIn");
    localStorage.removeItem("isconfirm");
  }

  getMaintainance() {
    const formData = new URLSearchParams();
    formData.append("merchant_id",apiData.merchant_id&&apiData.merchant_id);
    stockAPI(formData, "POST", "/isMaintainance")
      .then((response) => {
        if (response) {
          setStorageItem("ismaintainance", response.maintainance_mode);
          this.setState({
            ismaintainance: response.maintainance_mode,
          });
        }
      })
      .catch((err) => {
        this.setState({
          ismaintainance: false,
        });
        // openAlertBox(err && err.message, "error");
      });
  }

  // pageRefreshed = async (e) => {
  //   if (this.props.uploadingStatus && this.props.uploadPercentage !== 100) {
  //     e.preventDefault();
  //     e.returnValue = "";
  //   }
  // };

  closeInstructionDialog = () => {
    this.setState(
      {
        instructionDialog: false,
      },
      () => {
        setStorageItem(
          "promptCounter",
          parseInt(getStorageItem("promptCounter")) + 1
        );
      }
    );
  };

  closeMiBrowserDialog = () => {
    this.setState({ isMiBrowserDialog: false });
  };

  openInstructionDialog = () => {
    if (
      !this.installPrompt &&
      getStorageItem("promptCounter") &&
      parseInt(getStorageItem("promptCounter")) < 1 &&
      !(
        (window.matchMedia &&
          window.matchMedia("(display-mode: standalone)").matches) ||
        window.navigator.standalone === true
      ) &&
      getStorageItem("isPWAInstalled") === "not installed" &&
      !isMiBrowser
    ) {
      this.setState({
        instructionDialog: true,
      });
    }
  };

  installationPrompt = () => {
    if (
      getStorageItem("promptCounter") &&
      parseInt(getStorageItem("promptCounter")) < 3
    ) {
      window.addEventListener("beforeinstallprompt", (e) => {
        // For older browsers
        e.preventDefault();
        this.installPrompt = e;
        // See if the app is already installed, in that case, do nothing
        if (
          (window.matchMedia &&
            window.matchMedia("(display-mode: standalone)").matches) ||
          window.navigator.standalone === true
        ) {
          return false;
        }
      });
    }
  };

  installApp = async () => {
      //setting storage for pv user 
      // let user = window.location.pathname?.includes("/pv")? 'pvUser':'customer';
      // setStorageItem("userType", user);

    if (
      getStorageItem("promptCounter") &&
      parseInt(getStorageItem("promptCounter")) < 3
    ) {
      if (!this.installPrompt) {
        this.openInstructionDialog();
        return false;
      }
      this.installPrompt
        .prompt()
        .then((response) => {
          if (response.outcome === "dismissed") {
            setStorageItem(
              "promptCounter",
              parseInt(getStorageItem("promptCounter")) + 1
            );
            console.log("User cancelled installation");
          } else {
            console.log("User added to home screen");
            setStorageItem("promptCounter", 3);
          }
          this.installPrompt = null;
        })
        .catch((err) => {
          this.installPrompt = null;
        });
    }
  };

  changeActiveTab = (index) => {
    this.props.changeActiveTab(index);
  };

  render() {
    const { showLoader } = this.props;
    const { ismaintainance } = this.state;
    let routes = (
      <Switch>
        <Route path="/pv" component={PvContainer} />
        <Redirect to={{ pathname: "/pv" }} />
         <Route
          path="/"
          render={() => {
            return <Redirect to="/" />;
          }}
        /> 
      </Switch>
    );

    if(this?.props?.isAuthenticatedPvUser){
      routes = (
        <Fragment>
          <Switch>
          <Route path="/pv-scanner">
          <PvScannerContainer  installApp={this.installApp}/>
          </Route>
          <Route path="/pv-past-scanned" component={PvPastScannedContainer} />
          <Route path="/pv-notify" component={PvNotificationContainer} />
          <Route path="/" component={PvRouting} />
            <Redirect to="/" /> 
          </Switch>
          <InstructionDialog
            isOpen={
              this.state.instructionDialog && !this.state.isMiBrowserDialog
            }
            handleClose={this.closeInstructionDialog}
          />
        </Fragment>
      );
      
    }
    let orientationArray = [
      "/login",
      "/optout",
      "/otpverification",
      "/registration",
      "/contact-us",
    ];

    let styling = {
      height: "100%",
      backgroundColor: "#f5f5f5",
    };

    return (
      <ThemeProvider theme={theme}>
        <HandleOreintations
          changeDisplay={orientationArray.includes(
            this.props.history.location.pathname
          )}
        >
          <div style={styling}>
            <Loader open={showLoader} />
            {ismaintainance ? <Maintainance /> : routes}
            <MiBrowserDialog
              isOpen={this.state.isMiBrowserDialog}
              handleClose={this.closeMiBrowserDialog}
            />
          </div>
        </HandleOreintations>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // activeTab: state.reducerApp.activeTab,
     showLoader: state.reducerApp.showLoader,
    isAuthenticatedPvUser: state?.reducerPvUserAuthentication?.isAuthenticatedPvUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveTab: (id) => dispatch(changeActiveTab(id)),
    onTryAutoLogin: () => dispatch(onTryAutoLogin()),
    logoutUser: () => dispatch(logoutPvUser()),
    url_details:(data)=> dispatch(url_details(data))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
