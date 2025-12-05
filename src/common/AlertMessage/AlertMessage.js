import React from "react";
import { Alert } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";

let alertFn;

class AlertMessage extends React.Component {
  state = {
    open: false,
    message: "",
    className: "",
  };

  componentDidMount() {
    alertFn = this.openAlertBox;
  }

  openAlertBox = (message, className, timeout) => {
    const timeLoc = timeout ? timeout : 5000;
    this.setState(
      {
        open: true,
        message,
        className,
      },
      () => {
        this.timeoutId = setTimeout(() => {
          this.handleAlertBoxClose();
        }, timeLoc);
      }
    );
  };

  handleAlertBoxClose = () => {
    this.setState({
      open: false,
      message: "",
      className: "",
    });
  };

  componentWillUnmount() {
    this.setState({
      open: false,
      message: "",
      className: "",
    });
    clearTimeout(this.timeoutId);
  }

  render() {
    return (
      <div style={{ width: "100%", zIndex: "999", position: "fixed" }}>
        <Collapse in={this.state.open}>
          <Alert
            severity={this.state.className ? this.state.className : "success"}
            action={
              <IconButton
                color="inherit"
                size="small"
                onClick={this.handleAlertBoxClose}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {this.state.message ? this.state.message : ""}
          </Alert>
        </Collapse>
      </div>
    );
  }
}

export function openAlertBox(message, className, timeout) {
  alertFn(message, className, timeout);
}

export default AlertMessage;
