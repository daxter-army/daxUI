import React from "react";

import Image from "./Image";

import classes from "./Section.module.css";

const Section = (props) => {
  console.log(props.color);
  return (
    <div className={classes.Section}>
      <div className={classes.SectionHeading} style={{ color: props.color }}>
        {props.heading}
      </div>
      <div className={classes.Array}>
        {props.children.map((item) => {
          return (
            <Image
              key={item.id_}
              source={item.image}
              alterText={item.alt}
              onImageClick={() => props.imageClicker(item)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section;
