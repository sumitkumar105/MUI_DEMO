import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40px",
    fontWeight: "bold",
    height: "20vh",
    width: "auto",
  },
}));

function Left(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {/* spacing={24} */}
      <Grid container spacing={18}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.card}>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.card}>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.card}>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.card}>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.card}>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.card}>3</Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Left;
