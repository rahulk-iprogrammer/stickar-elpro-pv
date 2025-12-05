import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { showLoader } from "../../../App/redux/action";
import AlertMessage from "../../../common/AlertMessage/AlertMessage";
import HeaderPvDashboard from "../../../components/Layout/Header/HeaderPvDashboard";
import { logout_pv_user, url_details } from "../PV/redux/action";
import PvFooter from "../../../components/Layout/Footer/PvFooter";

import { Grid } from "@material-ui/core";
import MyRoute from "../../../hoc/MyRoute";
import PastScannedList from "./components/PastScannedList";

const mapDispatchToProps = {
  showLoader,
  logout_pv_user,
  url_details,
};
const mapStateToProps = (state) => {
  return {
    isAuthenticatedPvUser:
      state?.reducerPvUserAuthentication?.isAuthenticatedPvUser,
    pvUserDetails: state?.reducerPvUserAuthentication?.pvUserDetails,
    loading: state?.reducerApp.showLoader
  };
};

class PvPastScannedContainer extends Component {
  
  render() {
    const { showLoader, logout_pv_user, pvUserDetails , loading} =
      this.props;

    return (
      <Fragment>
        <HeaderPvDashboard
          logout_pv_user={logout_pv_user}
          pvUserDetails={pvUserDetails}
        />
        <AlertMessage />
        <MyRoute dashboard={true} billUploadStatus={this.props.uploadingStatus}>
          <PastScannedList
            showLoader={showLoader}
            pvUserDetails={pvUserDetails}
            loading={loading}
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
)(withRouter(PvPastScannedContainer));
