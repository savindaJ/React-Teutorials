import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Card from "./RecipeReviewCard";

// const Item = styled(Paper)(({ theme }) => ({
//   height: "100px",
//   backgroundColor: "#1A2027",
//   textAlign: "center",
//   color: "white",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// }));

export default function BasicGrid() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} sm={6} md={3}>
          <Card name="Savinda"/>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Card name="Kamal"/>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Card name="jnaka"/>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Card name="Hewage"/>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Card name="Hewage"/>
        </Grid>
      </Grid>
    </Box>
  );
}
