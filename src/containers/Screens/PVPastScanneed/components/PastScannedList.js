import {
  Button,
  Card,
  ClickAwayListener,
  Grid,
  Grow,
  InputBase,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { openAlertBox } from "../../../../common/AlertMessage/AlertMessage";
import { stockAPI } from "../../../../common/axiosInstance";
import { apiData } from "../../../../common/common-types";
import { styles } from "./PastScannedStyle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import moment from "moment";

// eslint-disable-next-line no-unused-vars
const CustomInput = withStyles((theme) => ({
  root: {
    width: "96%",
    position: "relative",
    fontSize: 20,
    padding: "25px 24px 0px 13px",
    textAlign: "left",
    [theme.breakpoints.down(641)]: {
      fontSize: 21,
      padding: "20px 24px 0px 13px",
    },
    [theme.breakpoints.down(481)]: {
      fontSize: 14,
      padding: "11px 24px 0px 13px",
    },
    [theme.breakpoints.down(421)]: {
      fontSize: 14,
      padding: "11px 24px 0px 13px",
    },
    [theme.breakpoints.down(401)]: {
      fontSize: 13,
      padding: "12px 24px 0px 13px",
    },
    [theme.breakpoints.down(381)]: {
      fontSize: 12,
      padding: "9px 24px 0px 13px",
    },
    [theme.breakpoints.down(361)]: {
      fontSize: 12,
      padding: "8px 24px 0px 13px",
    },
    [theme.breakpoints.down(321)]: {
      fontSize: 10,
      padding: "6px 24px 0px 13px",
    },
  },
}))(InputBase);

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

class StoreLocator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      showMap: false,
      isBrand: false,
      locations: [],
      selectedlocation: 0,
      brands: [],
      nextpage: 1,
      curpage: "",
      searchtext: "",
      hasMore: true, // Make sure this is initially true
      floorsaAndCategories: null,
      brandid: null,
      openFilter: false,
      scannedHistory: [],
      selectedFilter: 1, // Default filter
      filterOptions: [
        { key: 1, label: "This Month" },
        { key: 3, label: "This Quarter" },
        { key: 12, label: "This Year" },
      ],
    };
    this.anchorRefLocation = createRef();
  }

  componentDidMount() {
    this.getScannedHistory();
  }

  // API call for scanned history based on filter and pagination
  getScannedHistory = () => {
    const { selectedFilter } = this.state;
    const data = new FormData();
    data.append("period", selectedFilter);
    data.append("user_id", this?.props?.pvUserDetails?.id);
    data.append("merchant_id", apiData?.merchant_id);
    data.append("platform", apiData?.pv_platform);
    this.props.showLoader(true);
    stockAPI(data, "POST", "/pv-get-past-scans")
      .then((response) => {
        const newScannedHistory = response || [];
        this.setState((prevState) => ({
          scannedHistory: [...newScannedHistory],
        }));
        this.props.showLoader(false);
      })
      .catch((err) => {
        openAlertBox(err.message, "error");
        this.props.showLoader(false);
      });
  };

  // Filter change handler
  handleFilterChange = (filterKey) => {
    this.setState(
      {
        selectedFilter: filterKey,
        scannedHistory: [], // Reset scanned history on filter change
        openFilter: !this.state.openFilter,
      },
      () => {
        this.getScannedHistory(); // Call API with the new filter
      }
    );
  };

  handleToggleFilter = (e) => {
    e.stopPropagation();
    this.setState((prevState) => ({
      openFilter: !prevState.openFilter,
    }));
  };

  render() {
    const { classes } = this.props;
    const { scannedHistory, openFilter, filterOptions, selectedFilter } =
      this.state;

    return (
      <div className={classes.redeemCnt}>
        <div className={classes.wrapper}>
          {/* Filter dropdown */}
          <div style={{ textAlign: "right" }}>
            <Button
              ref={this.anchorRefLocation}
              aria-controls={"menu-list-grow1"}
              aria-haspopup="true"
              onClick={(e) => this.handleToggleFilter(e)}
              endIcon={openFilter ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              className={classes.filterDropdown}
            >
              {filterOptions.find((f) => f.key === selectedFilter)?.label ||
                "Select Option"}
            </Button>
            <Popper
              open={openFilter}
              anchorEl={this.anchorRefLocation.current}
              role={undefined}
              transition
              disablePortal
              className={classes.filterDropdown}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={this.handleToggleFilter}>
                      <MenuList autoFocusItem={openFilter} id="menu-list-grow1">
                        {filterOptions.map((option, index) => (
                          <MenuItem
                            key={option.key}
                            selected={selectedFilter === option.key}
                            onClick={() => this.handleFilterChange(option.key)}
                          >
                            {option.label}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>

          {/* Infinite scroll for scanned history */}
          <div>
            {scannedHistory?.length ? (
              scannedHistory?.map((ele, index) => (
                <Card
                  key={index}
                  className={classes.brandcontainer}
                  id={ele.id}
                >
                  <Grid style={{ height: "100%", margin: 0 }}>
                    <div
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={classes.branddetails}
                    >
                      <div>
                        <Typography
                          variant="span"
                          className={classes.prodName}
                          style={{
                            marginBottom: "8px",
                            textAlign: "left",
                            display: "block",
                          }}
                        >
                          {`Customer Name: ${
                            ele.customer_name ? ele?.customer_name : "-"
                          }`}
                        </Typography>
                        <Typography
                          variant="span"
                          className={classes.prodName}
                          style={{
                            marginBottom: "8px",
                            textAlign: "left",
                            display: "block",
                          }}
                        >
                          {`Privilege: ${
                            ele?.privilege_name ? ele?.privilege_name : ""
                          }`}
                          {/* {`Privilege: ${
                            ele.benefit_quantity
                              ? `1/${ele?.benefit_quantity}`
                              : "-"
                          }`} */}
                        </Typography>
                        <Typography
                          variant="span"
                          className={classes.prodName}
                          style={{
                            marginBottom: "8px",
                            display: "block",
                            textAlign: "right",
                          }}
                        >
                          {`Date: ${
                            ele.created_at
                              ? moment(ele.created_at)?.format(
                                  "DD MMM YYYY | h:mma"
                                )
                              : "-"
                          }`}
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                </Card>
              ))
            ) : !this.props.loading ? (
              <Card className={classes.brandcontainer}>
                <Grid style={{ height: "100%", margin: 0 }}>
                  <div
                    style={{
                      verticalAlign: "middle",
                    }}
                    className={classes.branddetails}
                  >
                    <div>
                      <Typography
                        variant="span"
                        className={classes.prodName}
                        style={{
                          marginBottom: "8px",
                          textAlign: "center",
                          display: "block",
                        }}
                      >
                        {`No records found`}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Card>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(withRouter(StoreLocator)));
