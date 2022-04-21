import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { CircularProgress, Grid } from "@material-ui/core";
// redux store
import { useSelector } from "react-redux";

export default function Posts({
  setCurrentId
}) /*props.setCurrentID={setCurrentId} */ {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.mainContainer}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
              {/* <Post post={post} setCurrentId={setCurrentId} /> */}
            <Post post={post} setCurrentId={setCurrentId} />

            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
