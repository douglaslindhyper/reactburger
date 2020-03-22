import React from "react";

export default props => {
  return (
    <div className="patty">
      <div className="patty__container">
        <img src={props.content.Patty} />
      </div>
    </div>
  );
};
