import React from "react";
import colors from "./colors";
import Button from "@mui/material/Button";

export function UpdateSound() {
  const browsingLibrary = () => {
    alert("browsing library to update sound");
  };
  return (
    <div style={buttonStyle}>
      <Button fullWidth={true} color="secondary">
        Add a sound
      </Button>
    </div>
  );
}

const buttonStyle = {
  display: "flex",
  width: 500,
  height: 300,
  zIndex: 10,
  innerWidth: 3,
  backgroundColor: colors.opacity,
  borderRadius: 10,
};

export default UpdateSound;
