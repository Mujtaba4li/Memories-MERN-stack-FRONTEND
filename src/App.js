import React, {useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import mem from "./images/memories.jpg";

// component import
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";

// import styles
import useStyles from "./styles";

// redux
import { useDispatch } from "react-redux";
// actions 
import {getPosts} from './actions/post'

export default function () {
  const classes = useStyles();
  const dispatch = useDispatch();

const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img
            className={classes.image}
            src={mem}
            alt="memories"
            height="50"
            width="auto"
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
}
