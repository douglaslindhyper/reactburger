import React from "react";

export default props => {
  let styles = {
    fill: props.content.TopBunColour
  };

  return (
    <div className="top-bun">
      <div className="top-bun__container">
        <div
          style={styles}
          dangerouslySetInnerHTML={{ __html: props.content.TopBun }}
        />
      </div>
    </div>
  );
};
