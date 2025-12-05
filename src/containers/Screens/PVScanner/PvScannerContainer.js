import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Scanner from "./components/Scanner";
import { connect } from "react-redux";
import { showLoader } from "../../../App/redux/action";
import AlertMessage from "../../../common/AlertMessage/AlertMessage";
import HeaderPvDashboard from "../../../components/Layout/Header/HeaderPvDashboard";
import { logout_pv_user } from "../PV/redux/action";
import PvFooter from "../../../components/Layout/Footer/PvFooter";

import { Grid } from "@material-ui/core";
import MyRoute from "../../../hoc/MyRoute";

const mapDispatchToProps = {
  showLoader,
  logout_pv_user,
};
const mapStateToProps = (state) => {
  return {
    isAuthenticatedPvUser:
      state?.reducerPvUserAuthentication?.isAuthenticatedPvUser,
    pvUserDetails: state?.reducerPvUserAuthentication?.pvUserDetails,
    urlDetails: state?.reducerPvUserAuthentication?.urlDetails,
  };
};

class PvScannerContainer extends Component {
  prompTimer = null;

  componentDidMount() {
    window.scrollTo(0, 0);
    this.prompTimer = setTimeout(() => {
      this.props.installApp();
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.prompTimer);
  }

  render() {
    const {
      showLoader,
      logout_pv_user,
      pvUserDetails,
      urlDetails,
    } = this.props;

    return (
      <Fragment>
        <HeaderPvDashboard
          logout_pv_user={logout_pv_user}
          pvUserDetails={pvUserDetails}
        />
        <AlertMessage />
        <MyRoute dashboard={true} billUploadStatus={this.props.uploadingStatus}>
          <Scanner
            showLoader={showLoader}
            urlDetails={urlDetails}
            pvUserDetails={pvUserDetails}
          />
        </MyRoute>
        <Grid item>
          <PvFooter />
        </Grid>
      </Fragment>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PvScannerContainer));
