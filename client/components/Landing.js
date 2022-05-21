import React from "react";
import { connect } from "react-redux";
import { Box, Button, Grid, Link, MenuItem, Toolbar, Typography } from "@mui/material";

export const Landing = (props) => {
  const { username, firstName } = props;
  const preventDefault = (event) => event.preventDefault();

  return (
    <Box textAlign="center" sx={[{ m: 2 }, { justifyContent: "center" }, { display: "flex" }]}>
      {/* <div style={{ display: "flex", padding: "30px 0", justifyContent: "center" }}> */}
      <div>
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: "url(https://i.ibb.co/TYTpRYc/mailbox.png)",
            minHeight: "400px",
            minWidth: "650px",
            backgroundSize: "cover"
          }}
        ></Box>

        <Box>
          <Toolbar sx={{ borderTop: "solid 2px grey" }}>
            <Link href="/prewedding_album" style={{ padding: "8px", fontSize: ".85rem", color: "#36454F", textDecoration: "none" }} sx={{ "&:hover": { bgcolor: "transparent" } }}>
              <h4>Snapshots From Our Life</h4>
            </Link>
            <Link href="/events" style={{ padding: "8px", fontSize: ".85rem", color: "#36454F", textDecoration: "none" }} sx={{ "&:hover": { bgcolor: "transparent" } }}>
              <h4 className="toolbar">Wedding Events </h4>
            </Link>
            <Link href="/wedding_album" style={{ padding: "8px", fontSize: ".85rem", color: "#36454F", textDecoration: "none" }} sx={{ "&:hover": { bgcolor: "transparent" } }}>
              <h4>Wedding Album</h4>
            </Link>
          </Toolbar>
        </Box>
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

export default connect(mapState)(Landing);
