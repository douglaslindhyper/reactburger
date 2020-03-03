import Components from "./index";
import React, { useEffect, useRef } from "react";

export default props => {
  let vegetablesRef = useRef();
  useEffect(() => {
    var elem = vegetablesRef;

    var flkty = new window.Flickity(vegetablesRef.current, {
      // options
      cellAlign: "left",
      contain: true,
      pageDots: false,
      wrapAround: true
    });
  }, []);

  return (
    <div className="vegetables">
      <div className="vegetables__container main-carousel" ref={vegetablesRef}>
        {props.content.vegetables.map(image => (
          <img className="carousel-cell" src={image.filename} />
        ))}
      </div>
    </div>
  );
};
