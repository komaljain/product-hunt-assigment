import React, { useState } from "react";
import API from "../network/API";
import { Container, AppBar, Toolbar, Typography, IconButton, Box, Grid, Card, Chip, CircularProgress } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CommentIcon from '@material-ui/icons/Comment'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ViewUtils } from "../utils/ViewUtils";
import MessageResponse from "../uiutils/MessageResponse";
import { red } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import { DateUtils } from "../utils/DateUtils";
import DatePicker from 'react-date-picker';


function ProductHuntToolbar() {
  const useStyles = makeStyles(theme => ({
    appBar: {
      marginBottom: '1rem',
    },
    toolbarButtons: {
      marginLeft: 'auto',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

  const favoriteIconClicked = event => {
    console.log("favorite icon clicked");
  };

  const classes = useStyles();

  return (<AppBar position="static" className={classes.appBar}>
    <Toolbar variant="regular">
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit">ProductHunt</Typography>
      <FavoriteIcon aria-controls="menu-appbar" onClick={favoriteIconClicked} className={classes.toolbarButtons}></FavoriteIcon>
    </Toolbar>
  </AppBar>);
}

function ProductHuntList({ postsList }) {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(1)
    }
  }));

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        {
          postsList.map(posts => (
            <Grid item xs={4} key={posts.id}>
              <PostCard posts={posts} />
            </Grid>
          ))
        }
      </Grid></div>
  );
}

function PostCard({ posts }) {
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
    }
  }));
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
           <CommentIcon/><Typography variant="body2" color="textSecondary" component="p">
            &nbsp;{posts.comments_count}
          </Typography>
        </IconButton>
        <IconButton aria-label="share">
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


class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      msgHandler: null,
      postsList: [],
      selectedDate: new Date(),
      isLoading: false
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  componentDidMount() {
    this.getAccessToken("");
  }

  getAccessToken(daysParameter) {
    let currentComponent = this;
    currentComponent.setState({isLoading: true, postsList: []});
    API.get('posts' + "?day=" + daysParameter, (response) => {
      console.log("response:" + JSON.stringify(response));
      currentComponent.setState({
        postsList: response.data.posts,
        isLoading: false
      });
    },
      (error) => {
        currentComponent.setState({
          msgHandler: error.msgHandler,
          isLoading: false
        })
      });
  }

  onDateChange(date) {
    let currentComponent = this;
    currentComponent.setState({ selectedDate: date });
    currentComponent.getAccessToken(DateUtils.convertDateToFormattedDate(date, "YYYY-MM-DD"));
  } 

  render() {
    return (
      <React.Fragment>
        <Container fixed>
          <ProductHuntToolbar />
          <div className="right-align"><DatePicker onChange={this.onDateChange} value={this.state.selectedDate} /></div>
          {this.state.isLoading && <CircularProgress />}
          {this.state.msgHandler}
          <ProductHuntList postsList={this.state.postsList} />
        </Container>
      </React.Fragment>
    );
  }
}

export default HomePage;