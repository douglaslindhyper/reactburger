import React, { useState } from "react";

export default props => {
  let cheeseSlice = props.content.Cheese;
  const [cheeseSlices, setCheeseSlices] = useState([cheeseSlice]);

  const addSlice = () => {
    setCheeseSlices([...cheeseSlices, cheeseSlice]);
  };

  return cheeseSlices.map(cheese => (
    <div className="cheese">
      <div className="cheese__container">
        <img
          src={cheese}
          onClick={() => {
            addSlice();
          }}
        />
      </div>
    </div>
  ));
};
