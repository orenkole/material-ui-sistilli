import {
  Grid
} from "@material-ui/core";
import React from "react";
import CofeeCard from "./CofeeCard";

import cofeeMakerList from "./constants";

const Content = () => {

  const getCofeeMaker = (cofeeMaker) => {
    return (
      <Grid item xs={12} sm={4}>
        <CofeeCard {...cofeeMaker} />
      </Grid>
    )
  }

  return (
    <Grid container
      spacing={4}
    >
      {cofeeMakerList.map(cofeeMaker => (
        getCofeeMaker(cofeeMaker)
      ))}
    </Grid>
  )
}

export default Content;