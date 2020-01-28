import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton, Box, Card, Chip } from "@material-ui/core";
import { red } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { DateUtils } from "../utils/DateUtils";
import CommentIcon from '@material-ui/icons/Comment'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import FavoriteIcon from '@material-ui/icons/Favorite';
import API from "../network/API";


function PostCard({ posts, isVotesList }) {
    const useStyles = makeStyles(theme => ({
      card: {
        maxWidth: 345,
      },
      cardTagline: {
        height: 40
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
      chip: {
        margin: theme.spacing(0.5),
      },
      favRed: {
        color: red[500],
      }
    }));
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleFavClick = (postid) => {
        API.post('posts/' + postid + "/vote",  (response) => {
            },
            (error) => {
            });
    }

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={posts.thumbnail.image_url}
          title={posts.thumbnail.media_type}
        />
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar} src={posts.user.image_url["30px"]} />
          }
          title={posts.name}
          subheader={"Created At " + DateUtils.convertUTCStringToFormattedDate(posts.created_at, "HH:mm:ss")}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" className={classes.cardTagline} component="p">
            {posts.tagline}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {!isVotesList && <IconButton aria-label="add to favorites"  onClick={(event)=>handleFavClick(posts.id)} >
            {posts.current_user.voted_for_post && <FavoriteIcon className={classes.favRed}  />}
            {!posts.current_user.voted_for_post && <FavoriteIcon/>}
          </IconButton>}
          <IconButton aria-label="share" disabled>
             <CommentIcon/><Typography variant="body2" color="textSecondary" component="p">
              &nbsp;{posts.comments_count}
            </Typography>
          </IconButton>
          <IconButton aria-label="share" disabled>
              <ThumbUpIcon/><Typography variant="body2" color="textSecondary" component="p">&nbsp;{posts.votes_count}
            </Typography>
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Box p={1}></Box>
            {posts.topics.map(topic => {
              return (
                <Chip
                  key={topic.id}
                  label={topic.name}
                  className={classes.chip}
                />
              );
            })}
          </CardContent>
        </Collapse>
      </Card>
    );
  
  }
  
  export default PostCard;