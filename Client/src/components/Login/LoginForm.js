import React, { useContext } from 'react';
import { Button } from 'grommet';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UserContext from '../../contexts/userContext';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'© MCP Foundation '}
      <Link color="inherit" href="/">
        Local Buzz
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginForm({ loginUser }) {
  const user = useContext(UserContext);
  const classes = useStyles();

  const handleSubmit = (e) => {
    // e.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      }),
    }).then((res) => {
      if (res.status === 200) {
        user.setIsLoggedIn(true);
      }
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <section className="LoginFormComponent">
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit}
            id="loginForm"
            action="/api/login"
            method="post"
          >
            <TextField
              // htmlFor="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              // htmlFor="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <div className="registerFormButton">
              <Button
                className="avatarFormSubmit"
                primary
                type="submit"
                label="Log In"
                className={classes.submit}
              />
            </div>
            <Grid container justify="center">
              <Grid item>
                <Link href="/register" variant="body2">
                  Don't have an account? Sign Up Now!
                </Link>
              </Grid>
            </Grid>
          </form>
        </section>
      </div>
      <Grid container justify="center">
        <Box mt={8} className="copywrite">
          <Copyright />
        </Box>
      </Grid>
    </Container>
  );
}
