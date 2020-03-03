import Components from "./index";
import React from "react";

export default props => {
  return (
    <div className="top-bun">
      <div className="top-bun__container">
        <div
          style={{ fill: props.content.TopBunColour }}
          dangerouslySetInnerHTML={{ __html: props.content.TopBun }}
        />
      </div>
    </div>
  );
};
