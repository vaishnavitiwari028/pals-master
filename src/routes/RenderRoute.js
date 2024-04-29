import React from "react";

const RenderRoute = ({ Component, title, ...other }) => {
  document.title = title + " - Pals" || "Pals";
  return <Component />;
};

export default RenderRoute;
