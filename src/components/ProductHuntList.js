import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import PostCard from "./PostCard";

function ProductHuntList({ displayList, isVotesList }) {
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1,
        marginTop: theme.spacing(1),
      }
    }));
  
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={10}>
          {
            displayList.map(posts => (
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}  key={posts.id}>
                <PostCard posts={isVotesList?posts.post:posts} isVotesList={isVotesList} />
              </Grid>
            ))
          }
        </Grid></div>
    );
  }
  
export default ProductHuntList;