import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { styles } from "./LoginStyles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { stockAPI } from "../../../../common/axiosInstance";
import { openAlertBox } from "../../../../common/AlertMessage/AlertMessage";
import { apiData } from "../../../../common/common-types";
import mobileicon from "../../../../assets/icons/login/mobileicon.svg";
import {  setStorageItem } from "../../../../common/localStorage";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usernameError: "",
      passwordError: "",
      disabled: true,
    };
  }

  validateUsername = (username) => {
    // Ensure the username is required
    if (!username) {
      return "Username is required";
    } 
    return "";
  };

  validatePassword = (password) => {
    // Ensure the password is at least 6 characters long
    if (!password) {
      return "Password is required";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return "";
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.validateForm);
  };

  validateForm = () => {
    const { username, password } = this.state;
    const usernameError = this.validateUsername(username);
    const passwordError = this.validatePassword(password);

    this.setState({
      usernameError,
      passwordError,
      disabled: !!(usernameError || passwordError), // Disable button if there's any error
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    const usernameError = this.validateUsername(username);
    const passwordError = this.validatePassword(password);

    if (usernameError || passwordError) {
      this.setState({ usernameError, passwordError });
      return;
    }

    this.props.showLoader(true);

    const formData = new FormData();

    formData.append("platform", apiData.pv_platform);
    formData.append("merchant_id", apiData.merchant_id);
    formData.append("username", username);
    formData.append("password", password);

    stockAPI(formData, "POST", "/pv-verify-user", null, null, null, true)
      .then(async (res) => {
        this.props.showLoader(false);
        if (res && res.statusCode === 100) {
          const token = res?.response?.auth?.token || "";
          const refreshToken = res?.response?.auth?.refresh_token || "";
          await setStorageItem("user", JSON.stringify(res?.response?.details));
          localStorage.setItem("acc_token", token);
          localStorage.setItem("refresh_token", refreshToken);
          this.props.authenticate_pv_user();
          this.props.pv_user_details(res?.response?.details);
          this.props.history.push("/pv-scanner");
        } else {
          openAlertBox(
            res.statusDescription || "Oops something went wrong!",
            "error"
          );
        }
      })
      .catch((err) => {
        this.props.showLoader(false);
        openAlertBox(err && err.statusDescription, "error");
      });
  };

  render() {
    const { classes } = this.props;
    const { usernameError, passwordError, disabled } = this.state;

    return (
      <div className={classes.main_root}>
        <div className={classes.wrapper}>
          {/* <span className={classes.icons + " " + classes.mobileiconCss} /> */}
          <img src={mobileicon} alt="login" className={classes.icons} />
          <Typography variant="h1" className={classes.heading}>
            Login
          </Typography>

          <Typography variant="h3" className={classes.subHeading}>
            Please enter your username and password
          </Typography>
          <form
            noValidate
            autoComplete="off"
            onSubmit={this.handleSubmit}
            style={{ position: "relative" }}
          >
            <div className={classes.formWrap} style={{ marginTop: "20px" }}>
              <TextField
                autoComplete="off"
                className={classes.LoginText}
                id="outlined-basic"
                name="username"
                placeholder="Enter username"
                label=""
                onChange={this.handleInputChange}
                error={!!usernameError}
                helperText={usernameError}
                variant="outlined"
              />
            </div>

            <div className={classes.formWrap} style={{ marginTop: "20px" }}>
              <TextField
                autoComplete="off"
                className={classes.LoginText}
                id="outlined-basic"
                name="password"
                placeholder="Enter password"
                label=""
                type="password"
                onChange={this.handleInputChange}
                error={!!passwordError}
                helperText={passwordError}
                variant="outlined"
              />
            </div>

            <div style={{ marginTop: "20px" }}>
              <Button
                variant="contained"
                color="primary"
                className={classes.getotp}
                type="submit"
                disabled={disabled}
              >
                LOGIN
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(Login));
