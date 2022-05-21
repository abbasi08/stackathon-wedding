import React from "react";
import { connect } from "react-redux";
import { Box, Button, Typography } from "@mui/material";

export const Home = (props) => {
  const { username, firstName } = props;

  return (
    <Box textAlign="center" sx={[{ m: 2 }, { display: "flex" }]}>
      <div>
        <h4 style={{ textAlign: "left" }}>Welcome, {firstName}</h4>
        <Typography variant="h2">Leslie's Wedding Dashboard</Typography>
        <Button>Add Photos</Button>
      </div>
    </Box>
  );
};

// CONTAINER
const mapState = (state) => {
  return {
    username: state.auth.username
  };
};

export default connect(mapState)(Home);
