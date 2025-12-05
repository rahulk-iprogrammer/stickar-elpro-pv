import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import queryString from "query-string";
import { url_details } from "./containers/Screens/PV/redux/action";
import { connect } from "react-redux";

class PvRouting extends React.Component {
  componentDidMount() {
    // Get the current location's search string
    const { location } = this.props;
    const queryParams = queryString.parse(location.search);
    const currentPath = `${window.location.pathname}${window.location.search}`;

    this.props.url_details({
      ...queryParams,
      url: currentPath,
    });
  }

  render() {
    return <Redirect to={`/pv-scanner`} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    url_details: (data) => dispatch(url_details(data)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(PvRouting));
