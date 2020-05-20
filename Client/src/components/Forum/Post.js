import React from 'react';
import './Forum.css';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  avatar: {
    backgroundColor: red[500],
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  title: {
    fontSize: 25,
  },
}));

function Post({ title, category, tag, postBody, date }) {
  const classes = useStyles();

  const d = new Date(date.replace(' ', 'T'));
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  const newDate = `${mo} ${da}, ${ye}`;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar aria-label="userAvatar" className={classes.avatar}>
              SS
            </Avatar>
          </Grid>

          <Grid item xs zeroMinWidth>
            <Typography className={classes.title} gutterBottom>
              {title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {newDate}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {postBody}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              #{tag} | category: {category}
            </Typography>

            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Post;
