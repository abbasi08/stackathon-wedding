import React from "react";
import { Box, Button, Grid, IconButton, Paper, Typography } from "@mui/material";

const WeddingAlbum = () => {
  return (
    <Box sx={[{ m: 1 }, { display: "flex" }]}>
      <Grid
        container
        direction="column"
        justifyContent="left"
        alignItems="left"
        sx={{
          display: "flex",
          gap: "10px",
          textAlign: "center",
          justifyContent: "left",
          alignItems: "left",
          width: "25%"
        }}
      >
        <Grid
          item
          xs={4}
          sx={{
            flexDirection: "column",
            justifyContent: "center"
            // position: "fixed"
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: "url(https://i.ibb.co/3WdZh8B/cookieEC.jpg)",
              minHeight: "230px",
              width: "205px",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></Box>
          <h5>Help Leslie and Dante celebrate their special week by uploading your favorite pictures from their wedding! </h5>
          <Button color="secondary" style={{ m: 1, width: "85%", padding: "5px", fontSize: "12px" }} variant="contained">
            Upload A Photo
          </Button>
        </Grid>

        <Grid item xs={8} display="flex" alignItems="flex-start">
          <div className="containerWedding">
            <div className="weddingPic">
              <img className="weddingPic" src="https://hosting.photobucket.com/images/i158/thorny_roses/cake1.jpg" />
            </div>
            <div className="weddingPic">
              <img className="weddingPic" src="https://hosting.photobucket.com/images/i158/thorny_roses/vows.jpg" />
            </div>
            <div className="weddingPic">
              <img className="weddingPic" src="https://hosting.photobucket.com/images/i158/thorny_roses/bride.jpg" />
            </div>
            <div className="weddingPic">
              <img className="weddingPic" src="https://hosting.photobucket.com/images/i158/thorny_roses/groom.jpg" />
            </div>
            <div className="weddingPic">
              <img className="weddingPic" src="https://hosting.photobucket.com/images/i158/thorny_roses/bridemom.jpg" />
            </div>
            <div className="weddingPic">
              <img className="weddingPic" src="https://hosting.photobucket.com/images/i158/thorny_roses/cake2.jpg" />
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeddingAlbum;
