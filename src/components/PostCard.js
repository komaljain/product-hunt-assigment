import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton, Card, Chip, CircularProgress } from "@material-ui/core";
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
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function PostCard({ posts, isVotesList }) {
    const useStyles = makeStyles(theme => ({
        card: {
            width: '100%',
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
        expandComment: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandCommentOpen: {
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
        },
        appBar: {
            position: 'relative',
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
        },
        progress: {
            marginLeft: '50%',
            marginTop: theme.spacing(2)
        },
        inline: {
            display: 'inline',
        },
        expandMore: {
            marginLeft: 'auto'
        },
        childComment: {
            marginLeft: theme.spacing(4),
            marginTop: theme.spacing(2)
        },
        createdAtChild: {
            marginRight: theme.spacing(2)
        }
    }));
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [expandedComment, setExpandedComment] = React.useState(true);
    const [page, setPage] = React.useState(1);
    const [commentsList, setCommentsList] = React.useState([]);
    const [loadMoreDisable, setLoadMoreDisable] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleExpandCommentClick = () => {
        setExpandedComment(!expandedComment);
    };
    const handleFavClick = (postid) => {

        API.post('posts/' + postid + "/vote", (response) => {
        },
        (error) => {
        });
    }

    const fetchCommentsList = (postid, commentsCount) => {
        setLoading(true);
        setPage(page + 1);
        if ((page * 5) > (commentsCount + 4) / 5 * 5) {
            setLoading(false);
            setLoadMoreDisable(true);
        } else {
            API.get('posts/' + postid + '/comments?&page=' + page + '&per_page=5&order=desc', (response) => {
                setLoading(false);
                setCommentsList(commentsList.concat(response.data.comments));
            },
                (error) => {
                    setLoading(false);
                    console.log(error);
                });
        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (postid, commentsCount) => {
        setOpen(true);
        setPage(1);
        fetchCommentsList(posts.id, commentsCount);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
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
                    {!isVotesList && <IconButton aria-label="add to favorites" onClick={(event) => handleFavClick(posts.id)} >
                        {posts.current_user.voted_for_post && <FavoriteIcon className={classes.favRed} />}
                        {!posts.current_user.voted_for_post && <FavoriteIcon />}
                    </IconButton>}
                    <IconButton aria-label="share" onClick={(event) => handleClickOpen(posts.id, posts.comments_count)}>
                        <CommentIcon /><Typography variant="body2" color="textSecondary" component="p">
                            &nbsp;{posts.comments_count}
                        </Typography>
                    </IconButton>
                    <IconButton aria-label="share" disabled>
                        <ThumbUpIcon /><Typography variant="body2" color="textSecondary" component="p">&nbsp;{posts.votes_count}
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
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Comments
                        </Typography>
                    </Toolbar>
                </AppBar>
                {loading && <CircularProgress className={classes.progress} />}
                <List>
                    {commentsList.map(comment => {
                        return (
                            <div>
                                <ListItem button key={comment.id}>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={comment.user.image_url["30px"]} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={comment.body}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                    className={classes.createdAtChild}
                                                >
                                                    {DateUtils.diffFromNow(comment.created_at) + " ---- " + comment.user.name}
                                                </Typography>
                                                {comment.votes > 0 && <IconButton aria-label="share" disabled>
                                                    <ThumbUpIcon /><Typography variant="body2" color="textSecondary" component="p">&nbsp;{comment.votes}
                                                    </Typography>
                                                </IconButton>}
                                                {comment.maker && <Chip
                                                    key={comment.id}
                                                    label={"Maker"}
                                                    size="small"
                                                    className={classes.chip}
                                                />}
                                                {comment.hunter && <Chip
                                                    key={comment.id}
                                                    label={"Hunter"}
                                                    size="small"
                                                    className={classes.chip}
                                                />}
                                                {comment.live_guest && <Chip
                                                    key={comment.id}
                                                    size="small"
                                                    label={"Live Guest"}
                                                    className={classes.chip}
                                                />}
                                                {comment.child_comments_count > 0 && <IconButton
                                                    className={clsx(classes.expandComment, {
                                                        [classes.expandCommentOpen]: expandedComment,
                                                    })}
                                                    onClick={handleExpandCommentClick}
                                                    aria-expanded={expandedComment}
                                                    aria-label="show more"
                                                >
                                                    <ExpandMoreIcon />
                                                </IconButton>}

                                                <Collapse in={expandedComment} timeout="auto" unmountOnExit>
                                                    {comment.child_comments_count > 0 && comment.child_comments.map(childComment => {
                                                        return (
                                                            <div className={classes.childComment}>
                                                                <Typography variant="body2" color="textSecondary" component="p">
                                                                    {childComment.body}
                                                                </Typography>
                                                                <Typography
                                                                    className={classes.createdAtChild}
                                                                    component="span"
                                                                    variant="body2"
                                                                    color="textPrimary"
                                                                >
                                                                    {DateUtils.diffFromNow(childComment.created_at) + " ---- " + childComment.user.name}
                                                                </Typography>
                                                                {childComment.maker && <Chip
                                                                    key={childComment.id}
                                                                    label={"Maker"}
                                                                    size="small"
                                                                    className={classes.chip}
                                                                />}
                                                                {!childComment.hunter && <Chip
                                                                    key={childComment.id}
                                                                    label={"Hunter"}
                                                                    size="small"
                                                                    className={classes.chip}
                                                                />}
                                                                {childComment.live_guest && <Chip
                                                                    key={childComment.id}
                                                                    size="small"
                                                                    label={"Live Guest"}
                                                                    className={classes.chip}
                                                                />}
                                                            </div>
                                                        );
                                                    })}

                                                </Collapse>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                            </div>
                        );
                    })}
                </List>
                {!loadMoreDisable && !loading &&
                    <Button size="medium" color="primary" onClick={(event) => fetchCommentsList(posts.id, posts.comments_count)}>
                        Load More
                </Button>}
            </Dialog></div>
    );

}

export default PostCard;