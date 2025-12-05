import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => {
  return {
    colorPrimary: {
      color: theme.palette.primary.main,
    },
  };
};

const Loader = (props) => {
  const { open, classes } = props;

  if (!open) {
    let myobj = document.getElementById("temp-meta");
    if (myobj) {
      myobj.remove();
    }
  }
  return (
    <Dialog
      open={open}
      keepMounted
      maxWidth="md"
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <DialogContent style={{ overflow: "hidden" }}>
        <CircularProgress
          color="primary"
          classes={{ colorPrimary: classes.colorPrimary }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default withStyles(styles, { withTheme: true })(Loader);
