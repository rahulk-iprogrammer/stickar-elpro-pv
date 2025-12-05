import React from "react";
import classnames from "classnames";
import { isMobile } from "react-device-detect";
import "./style.css";

function HandleOreintations(props) {
  return isMobile ? (
    <div
      className={classnames("autoOreintations", {
        autoOreintations:
          !props.changeDisplay ||
          window.matchMedia("(min-width: 480px) and (orientation: landscape)")
            .matches,
        overite: props.changeDisplay,
      })}
      id="overite-autoOreintations"
    >
      <div className="inner-panel" id="overite-inner-panel">
        {props.children}
      </div>
    </div>
  ) : (
    <div>{props.children}</div>
  );
}

export default HandleOreintations;

HandleOreintations.defaultProps = {
  changeDisplay: false,
};
