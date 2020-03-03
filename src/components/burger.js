import Components from "./index";
import React from "react";

export default props => {
  return (
    <div className="react-burger">
      {props.content.body.map(blok => Components(blok))}
    </div>
  );
};
