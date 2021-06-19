import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        {/* Header */}
        <Grid item>
          <Header />
        </Grid>
        {/* Content */}
        <Grid item container>
          {/* Space left */}
          <Grid xs={0} sm={2} />
          {/* Actual content */}
          <Grid sm={8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Grid>
          {/* Space right */}
          <Grid xs={0} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
