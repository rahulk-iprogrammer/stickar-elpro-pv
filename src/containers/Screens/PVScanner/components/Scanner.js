import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { styles } from "./ScannerStyles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import QrReader from "react-qr-reader";
import { apiData } from "../../../../common/common-types";
import { stockAPI } from "../../../../common/axiosInstance";
import { openAlertBox } from "../../../../common/AlertMessage/AlertMessage";
import { decrypt, encrypt } from "../../../../crypto-helper";
import startScanning from "../../../../assets/images/download.svg";
import moment from "moment";

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "No result",
      isScanning: false, // Prevent multiple scan triggers
      productDetails: null,
      showScanner: false,
    };

    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  componentDidMount() {
    // Get the URL parameters

    let { customerId, productId, url } = this?.props?.urlDetails || {};
    if (url && customerId) {
      // Call handleScan if the id is present
      this.handleScan(this?.props?.urlDetails);
    }
  }

  resetState = () => {
    this.setState({
      result: "No result",
      isScanning: false,
      productDetails: null,
      showScanner: false,
    });
  };

  // Handle scanning logic
  async handleScan(data) {
    if (!data || this.state.isScanning) return; // Prevent multiple scans

    this.setState({ isScanning: true }); // Set scanning in progress
    this.props.showLoader(true);
    try {
      const urlParams =
        typeof data === "string"
          ? new URLSearchParams(data?.split("?")[1])
          : "";
      const paramsObject =
        typeof data === "string"
          ? Object.fromEntries(urlParams.entries())
          : { ...data };
      if((this?.props?.pvUserDetails?.user_type=='parking' && paramsObject?.privilegeType!=3) || 
        (this?.props?.pvUserDetails?.user_type=='dining' && (paramsObject?.privilegeType!=4 || this?.props?.pvUserDetails?.shop_id!=paramsObject?.brandId)) ||
        !['parking', 'dining'].includes(this?.props?.pvUserDetails?.user_type) || 
        (paramsObject?.privilegeType != 3 && paramsObject?.privilegeType != 4) || null || undefined){
        this.props.history.push("/pv-notify", {
          isSuccess: false,
          reason: "Invalid / Ineligible offer",
        });        this.props.showLoader(false);
        return
      }
      if (paramsObject?.mobileNo && paramsObject?.productId) {
        let selectedProDetails = null;
        this.setState({
          ...this.state,
          ...paramsObject,
        });

        const formDataProductDetails = new URLSearchParams();
        formDataProductDetails.append(
          "product_merchant_id",
          paramsObject?.productId
        );
        formDataProductDetails.append("product_id", 0);
        formDataProductDetails.append("customer_id", paramsObject?.customerId);
        formDataProductDetails.append("merchant_id", apiData.merchant_id);
        formDataProductDetails.append("platform", apiData.pv_platform);
        formDataProductDetails.append("is_privilege", 1);

        // Get product details API call
        const productDetails = await stockAPI(
          formDataProductDetails,
          "POST",
          "/getProductDetails",
          null,
          null,
          undefined,
          true
        );

        if (
          productDetails?.response?.productDetails?.length &&
          productDetails?.statusCode === 100
        ) {
          selectedProDetails = productDetails?.response?.productDetails?.filter(
            (x) => x.id === paramsObject?.productId
          );
        } else {
          this.setState({ isScanning: false });
          this.props.showLoader(false);

          this.props.history.push("/pv-notify", {
            isSuccess: false,
            // customerName: "sonal",
            reason: "Failed to retrieve product details.",
          });
        }

        if (selectedProDetails) {
          this.setState({
            ...this.state,
            productDetails: selectedProDetails?.[0],
          });

          let finalCartArray = selectedProDetails?.map((item) => ({
            ...item,
            qty: 1,
          }));

          const bodyFormData = new URLSearchParams();
          bodyFormData.append("customer_id", paramsObject?.customerId);
          bodyFormData.append("merchant_id", apiData.merchant_id);
          bodyFormData.append("platform", apiData.pv_platform);
          bodyFormData.append("cart_details", JSON.stringify(finalCartArray));

          // Add to cart
          const addToCart = await stockAPI(
            bodyFormData,
            "POST",
            "/addCart",
            null,
            null,
            undefined,
            true
          );

          if (addToCart?.statusCode === 100) {
            this.placeOrder();
          } else {
            this.setState({ isScanning: false });
            this.props.showLoader(false);

            this.props.history.push("/pv-notify", {
              isSuccess: false,
              // customerName: "sonal",
              reason: "Invalid / Ineligible offer",
            });
          }
        }
      } else {
        this.setState({ isScanning: false });
        this.props.showLoader(false);

        this.props.history.push("/pv-notify", {
          isSuccess: false,
          // customerName: "sonal",
          reason: "Please scan valid QR code",
        });
      }
    } catch (err) {
      this.setState({ isScanning: false });
      this.props.showLoader(false);

      openAlertBox(err.message || "Oops, something went wrong!", "error");
    } finally {
      // this.setState({ isScanning: false }); // Reset scanning flag
    }
  }

  handleError(err) {
    console.error(err);
    openAlertBox("Error during QR scan: " + err.message, "error");
    this.props.history.push("/pv-notify", {
      isSuccess: false,
      reason: "Error during QR scan: " + err.message,
    });
  }


  placeOrder = () => {
    this.props.showLoader(true);

    const data = new URLSearchParams();
    let placeOrderArr = [{ ...this.state?.productDetails }];
    let orderArr = [];
    placeOrderArr.map((product) => {
      orderArr.push({
        product_merchant_id: product.id,
        qty: 1,
        location_id: product.location_id,
        best_price: 0,
        calculated_points: 0,
      });
    });
    data.append("kiosk_user_id", this?.props?.pvUserDetails?.id);
    data.append("customer_id", this?.state?.customerId);
    data.append("merchant_id", apiData.merchant_id);
    data.append("platform", apiData.pv_platform);
    data.append("order_details", JSON.stringify(orderArr));
    data.append("shop_id", this?.props?.pvUserDetails?.shop_id);
    stockAPI(data, "POST", "/placeOrder", null, null, undefined, true)
      .then(async (response) => {
        if (response.response && response.statusCode === 100) {
          openAlertBox(
            response.statusDescription ||
              "Your order has been placed successfully!",
            "success"
          );
          this.setState({ isScanning: false });
          this.props.showLoader(false);

          this.props.history.push("/pv-notify", {
            isSuccess: true,
            customerName: response?.response?.customer_name || "",
            scannedAt: response?.response?.order_timestamp
              ? moment(response?.response?.order_timestamp)?.format(
                  "DD MMM YYYY | h:mma"
                )
              : "-",
            privilegeDetails:
              response?.response?.order_privilege_product_details?.[0] || null,
          });
          setTimeout(() => {
            this.resetState();
          }, 7000);
        } else {
          this.setState({ isScanning: false });
          this.props.showLoader(false);

          this.props.history.push("/pv-notify", {
            isSuccess: false,
            customerName: response?.response?.customer_name,
            reason: response?.statusDescription || "Invalid / Ineligible offer",
          });
          setTimeout(() => {
            this.resetState();
          }, 7000);
          // openAlertBox("error while placing order", "error");
        }
      })
      .catch((err) => {
        this.setState({ isScanning: false });
        this.props.showLoader(false);

        setTimeout(() => {
          this.resetState();
        }, 7000);
        this.props.history.push("/pv-notify", {
          isSuccess: false,
          customerName: err?.response?.customer_name,
          reason: err?.statusDescription || "Invalid / Ineligible offer",
        });
        // openAlertBox("error while placing order", "error");
      });
  };
  handleCancel = () => {
    this.resetState();
  };

  handleShowScanner = () => {
    this.setState({ ...this.state, showScanner: !this.state?.showScanner });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.redeemCnt}>
        <div className={classes.wrapper}>
          {!this.state?.showScanner ? (
            <div>
              <Typography variant="h1" className={classes.heading}>
                QR Code Reader
              </Typography>
              <Typography
                variant="h3"
                className={classes.subHeading}
                style={{ marginBottom: "20px", marginTop: "10px" }}
              >
                Click here to scan the QR code
              </Typography>
              <div className={classes.appLogoContainer}>
                <div>
                  <img
                    src={startScanning}
                    alt="logo"
                    className={classes.appLogo}
                  />
                </div>
              </div>
              <div className={classes.startBtnWrapper}>
                <div className={classes.btnContainer}>
                  <Button
                    disableRipple
                    color="primary"
                    variant="contained"
                    className={classes.okBtn}
                    onClick={this.handleShowScanner}
                  >
                    START SCANNING
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Typography variant="h1" className={classes.heading}>
                QR Code Reader
              </Typography>
              <Typography
                variant="h3"
                className={classes.subHeading}
                style={{ marginBottom: "20px", marginTop: "10px" }}
              >
                Scan your QR code here
              </Typography>
              <div
                // className={classes.formWrap}
                style={{ margin: "20px auto", width: "70%", height: "200px" }}
              >
                <QrReader
                  delay={300}
                  onError={this.handleError}
                  onScan={this.handleScan}
                  style={{ width: "100%" }}
                  facingMode="environment"
                />
              </div>
              <div className={classes.stopBtnWrapper}>
                <div className={classes.btnContainer}>
                  <Button
                    disableRipple
                    color="primary"
                    variant="contained"
                    className={classes.okBtn}
                    onClick={this.handleShowScanner}
                  >
                    STOP SCANNING
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Scanner));
