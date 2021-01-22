import React from "react";
import styles from "./Cards.module.css";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function Cards(props) {
  console.log("From Cards");
  console.log(props.data);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Card>
            <CardContent>
              <Typography color="textSecondary" guttterBottom>
                Infected
              </Typography>
              <Typography variant="h5">Real Data</Typography>
              <Typography color="textSecondary">Real Date</Typography>
              <Typography variant="body2">
                Number of active case of COVID-19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
