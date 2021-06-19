import {
  Button,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core'
import React from 'react'

function TestComponent() {
  return (
    <Paper style={{ height: "100vh" }}>
      <Grid cointaner direction="column">
        <Typography variant="h1">This is my App</Typography>
        <Button variant="contained" color="primary">
          This is a button
        </Button>
        <Button variant="contained" color="primary">
          This is another button
        </Button>
      </Grid>
    </Paper>
  )
}

export default TestComponent
