import React from "react";
import "./Button.scss";

export function Button(props) {
  return (
    <div>
      <button className="action" disabled={props.disabled}>
        {props.children}
      </button>
    </div>
  );
}
