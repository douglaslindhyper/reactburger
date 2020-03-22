import React from "react";

export default props => {
  return (
    <div className="bottom-bun">
      <div className="bottom-bun__container">
        <div
          style={{ fill: props.content.BottomBunColour }}
          dangerouslySetInnerHTML={{ __html: props.content.BottomBun }}
        />
      </div>
    </div>
  );
};
