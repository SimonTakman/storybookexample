import React from "react";
import "./Button.scss";

export function Button(props) {
  return (
    <div>
      <button className="action">{props.children}</button>
    </div>
  );
}
