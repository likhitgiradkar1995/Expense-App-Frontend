import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularLoader() {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div style={style}>
      <CircularProgress color="primary" />
      <p style={{ fontSize: "20px", color: "#1976d2" }}>Loading ...</p>
    </div>
  );
}
