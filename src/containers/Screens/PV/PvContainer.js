import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Login from "./components/Login";
import { connect } from "react-redux";
import { showLoader } from "../../../App/redux/action";
import AlertMessage from "../../../common/AlertMessage/AlertMessage";
import {
  authenticate_pv_user,
  pv_user_details,
  url_details,
} from "./redux/action";

const mapDispatchToProps = {
  showLoader,
  authenticate_pv_user,
  pv_user_details,
  url_details,
};
const mapStateToProps = (state) => {
  return {
    isAuthenticatedPvUser:
      state?.reducerPvUserAuthentication?.isAuthenticatedPvUser,
    pvUserDetails: state?.reducerPvUserAuthentication?.pvUserDetails,
  };
};

class PvContainer extends Component {
  componentDidMount() {
    const {  isAuthenticatedPvUser, history, url_details } =
      this.props;

    // Extract query parameters from URL
    const params = new URLSearchParams(this.props.location.search);
    const customerId = params.get("customerId");
    const merchantId = params.get("merchantId");
    const mobileNo = params.get("mobileNo");
    const productId = params.get("productId");
    const locId = params.get("locId");
    const currentPath = `${window.location.pathname}${window.location.search}`;

    url_details({
      locId,
      productId,
      mobileNo,
      merchantId,
      customerId,
      url: currentPath,
    });

    if (isAuthenticatedPvUser) {
      // User is authenticated, redirect with parameters
      const redirectUrl = `/pv-scanner`;
      history.push(redirectUrl);
    }
  }

  componentDidUpdate(prevProps) {
    const { isAuthenticatedPvUser, history, url_details } = this.props;

    // Re-check authentication if it changes
    if (isAuthenticatedPvUser && !prevProps.isAuthenticatedPvUser) {
      const params = new URLSearchParams(this.props.location.search);
      const customerId = params.get("customerId");
      const merchantId = params.get("merchantId");
      const mobileNo = params.get("mobileNo");
      const productId = params.get("productId");
      const locId = params.get("locId");
      const currentPath = `${window.location.pathname}${window.location.search}`;

      url_details({
        locId,
        productId,
        mobileNo,
        merchantId,
        customerId,
        url: currentPath,
      });

      // Redirect with parameters
      const redirectUrl = `/pv-scanner`;
      history.push(redirectUrl);
    }
  }

  render() {
    const {
      showLoader,
      authenticate_pv_user,
      pvUserDetails,
      pv_user_details,
    } = this.props;
    return (
      <Fragment>
        <AlertMessage />
        {!this.props.isAuthenticatedPvUser ? (
          <Login
            showLoader={showLoader}
            authenticate_pv_user={authenticate_pv_user}
            pvUserDetails={pvUserDetails}
            pv_user_details={pv_user_details}
          />
        ) : null}
      </Fragment>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PvContainer));
