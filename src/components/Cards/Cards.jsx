import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log("From Cards");
  //console.log(props.data);
  //   console.log(confirmed.value);
  if (!confirmed) {
    return "loading";
  }
  console.log(confirmed.value);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          {/* <Card> */}
          <CardContent>
            <Typography gutterBottom color="textSecondary">
              Infected
            </Typography>
            <Typography variant="h5">{confirmed.value}</Typography>
            <Typography color="textSecondary">Real Date</Typography>
            <Typography variant="body2">
              Number of active COVID19 cases
            </Typography>
          </CardContent>
          {/* </Card> */}
        </Grid>
        <Grid item component={Card}>
          {/* <Card> */}
          <CardContent>
            <Typography gutterBottom color="textSecondary">
              Recovered
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">Real Date</Typography>
            <Typography variant="body2">
              Number of recoveries from COVID19
            </Typography>
          </CardContent>
          {/* </Card> */}
        </Grid>
        <Grid item component={Card}>
          {/* <Card> */}
          <CardContent>
            <Typography gutterBottom color="textSecondary">
              Deaths
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">Real Date</Typography>
            <Typography variant="body2">
              Number of deaths caused due to COVID19
            </Typography>
          </CardContent>
          {/* </Card> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
