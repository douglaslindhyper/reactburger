import React from "react";
import Burger from "./burger";
import TopBun from "./topbun";
import Vegetables from "./vegetables";
import Cheese from "./cheese";
import Patty from "./patty";
import BottomBun from "./bottombun";

const Components = {
  burger: Burger,
  TopBun: TopBun,
  Vegetables: Vegetables,
  Cheese: Cheese,
  Patty: Patty,
  BottomBun: BottomBun
};

export default blok => {
  if (typeof Components[blok.component] !== "undefined") {
    return React.createElement(Components[blok.component], {
      key: blok._uid,
      content: blok
    });
  }
  return React.createElement(
    () => <div>The component {blok.component} has not been created yet.</div>,
    { key: blok._uid }
  );
};
