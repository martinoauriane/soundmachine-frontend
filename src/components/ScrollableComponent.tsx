import React from "react";

function ScrollableComponent(height: any) {
  return <div style={{ height: height, overflow: "scroll" }}></div>;
}

export default ScrollableComponent;
