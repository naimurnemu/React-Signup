import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Form, Info } from "../../components";

const Home = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Grid container>
        <Grid order={smallScreen ? 2 : 1} item xs={12} md={7}>
            <Info smallScreen={smallScreen} />
        </Grid>
        <Grid order={smallScreen ? 1 : 2} item xs={12} md={5}>
          <Form smallScreen={smallScreen} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
