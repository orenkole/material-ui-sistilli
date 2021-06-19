import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Content from "./Content";

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
          <Grid xs={false} sm={2} />
          {/* Actual content */}
          <Grid xs={12} sm={8}>
            <Content />
          </Grid>
          {/* Space right */}
          <Grid xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
