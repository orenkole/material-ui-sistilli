import React from 'react'
import { useState } from 'react';
import {
  Button,
  Grid,
  Paper,
  Switch,
  Typography,
} from '@material-ui/core'
import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';



function TestComponent() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark"
    }
  })

  return (
    <ThemeProvider theme={darkMode && darkTheme} >
      <Paper style={{ height: "100vh" }}>
        <Grid cointaner direction="column">
          <Typography variant="h1">This is my App</Typography>
          <Button variant="contained" color="primary">
            This is a button
        </Button>
          <Button variant="contained" color="secondary">
            This is another button
        </Button>
          <Switch
            checked={darkMode}
            onChange={() => (setDarkMode(!darkMode))}
          />
        </Grid>
      </Paper>
    </ThemeProvider>
  )
}

export default TestComponent
