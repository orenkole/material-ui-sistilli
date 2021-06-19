import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core"
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles({
  typographyStyles: {
    flex: 1,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          className={classes.typographyStyles}
        >Anthony Sistilli</Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  )
}

export default Header;