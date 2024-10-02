import { Box, CircularProgress, colors, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <>
      <Box
        style={{ zIndex: "auto" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress></CircularProgress>
        <Typography style={{ color: "red" }}>Đang tải...</Typography>
      </Box>
    </>
  );
};

export default Loading;
