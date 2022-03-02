import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Left from "./Component/Left";
import Right from "./Component/Right";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    height: "50%",
    width: "100%",
    margin: "20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  // card: {
  //   height: "20vh",
  //   width: "auto",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   fontSize: "40px",
  //   fontWeight: "bold",
  // },
}));

function App() {
  const classes = useStyles();
  return (
    <Paper
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={8}>
            {/* <Paper className={classes.card}>1</Paper> */}
            <Left />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Right />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default App;
