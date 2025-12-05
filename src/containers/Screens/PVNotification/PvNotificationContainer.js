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
import PvSuccess from "./components/PvSuccess";
import PvError from "./components/PvError";

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
  };
};

class PvScannerContainer extends Component {
 
  render() {
    const {
      showLoader,
      logout_pv_user,
      pvUserDetails,
      url_details,
    } = this.props;
    
    const locationState = this.props?.location?.state;
    return (
      <Fragment>
        <HeaderPvDashboard
          logout_pv_user={logout_pv_user}
          pvUserDetails={pvUserDetails}
        />
        <AlertMessage />
        <MyRoute dashboard={true} billUploadStatus={this.props.uploadingStatus}>
          {locationState?.isSuccess ? (
            <PvSuccess
              showLoader={showLoader}
              locationState={locationState}
              url_details={url_details}
            />
          ) : (
            <PvError
              showLoader={showLoader}
              locationState={locationState}
              url_details={url_details}
            />
          )}
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
