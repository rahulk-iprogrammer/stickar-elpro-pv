import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    backgroundColor: theme.palette.primary.main,
    maxWidth: "50%",
    minWidth: "64px",
    padding: 0,
    textDecoration: "none",
    height: "100%",
    alignItems: "center",
    "&$selected": {
      padding: 0,
      backgroundColor: theme.palette.commonIcon.golden,
    },
  },
  selected: {},
  label: {
    color: 'white',
    fontWeight: "500",
    textTransform: "none",
    fontSize: "16px",
    [theme.breakpoints.down("641")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("481")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("421")]: {
      fontSize: "11.5px",
    },
    [theme.breakpoints.down("401")]: {
      fontSize: "11px",
    },
    [theme.breakpoints.down("381")]: {
      fontSize: "10.5px",
    },
    [theme.breakpoints.down("361")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("321")]: {
      fontSize: "8px",
    },
    "&$selected": {
      color: theme.palette.text.primary,
      fontSize: "16px",
      [theme.breakpoints.down("641")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("481")]: {
        fontSize: "10px",
      },
      [theme.breakpoints.down("421")]: {
        fontSize: "11.5px",
      },
      [theme.breakpoints.down("401")]: {
        fontSize: "11px",
      },
      [theme.breakpoints.down("381")]: {
        fontSize: "10.5px",
      },
      [theme.breakpoints.down("361")]: {
        fontSize: "10px",
      },
      [theme.breakpoints.down("321")]: {
        fontSize: "8px",
      },
    },
  },
}));

const PvBottomNavigationAction = React.memo((props) => {
  const classes = useStyles();
  return (
    <BottomNavigationAction
      disableRipple
      classes={classes}
      component={Link}
      to={props.to}
      label={props.label}
      icon={props.icon}
      value={props.value}
      showLabel
      selected={props.activeTabValue === props.value}
      onChange={(event, value) => {
        props.handleChange(value);
      }}
    />
  );
});

export default PvBottomNavigationAction;
