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
    height: "30vh",
    width: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40px",
    fontWeight: "bold",
    marginTop: "15px",
  },
}));

function Right(props) {
  const data = [
    {
      name: "sumitkumar",
    },
    {
      name: "sumitkumar",
    },
    {
      name: "sumitkumar",
    },
    {
      name: "sumitkumar",
    },
  ];
  console.log("array data", data);
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {/* {data.map((e) => {
        <Grid container spacing={3} direction="column">
          <Grid item xs={12} sm={6} md={12}>
            <Paper className={classes.card}>{e.name}</Paper>
          </Grid>
        </Grid>;
      })} */}
      <Grid container spacing={2} direction="column">
        <Grid item xs={12} sm={6} md={12}>
          {data.map((e) => (
            <Paper className={classes.card}>{e.name}</Paper>
          ))}
          {/* <Paper className={classes.card}>Right</Paper> */}
        </Grid>
        {/* <Grid item xs={12} sm={6} md={12}>
          <Paper className={classes.card}>Right</Paper>
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default Right;
