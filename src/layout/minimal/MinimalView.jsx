import React from "react";

const MinimalView = (props) => {
  const { children } = props;

  return <main>{children}</main>;
};

export default MinimalView;
