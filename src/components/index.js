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

// // Alternative
// let renderComponent = (type, key, content) => {
//   switch (type) {
//     case "burger":
//       return <Burger key={key} content={content} />;
//       break;
//     case "TopBun":
//       return <TopBun key={key} content={content} />;
//       break;
//     case "Vegetables":
//       return <Vegetables key={key} content={content} />;
//       break;
//     case "Cheese":
//       return <Cheese key={key} content={content} />;
//       break;
//     case "Patty":
//       return <Patty key={key} content={content} />;
//       break;
//     case "BottomBun":
//       return <BottomBun key={key} content={content} />;
//       break;
//     default:
//       return null;
//   }
// };

export default blok => {
  // console.log(blok);
  if (typeof Components[blok.component] !== "undefined") {
    return React.createElement(Components[blok.component], {
      key: blok._uid,
      content: blok
    });
  }
  // //Alternative
  // return renderComponent(blok.component, blok._uid, blok);
  return React.createElement(
    () => <div>The component {blok.component} has not been created yet.</div>,
    { key: blok._uid }
  );
};
