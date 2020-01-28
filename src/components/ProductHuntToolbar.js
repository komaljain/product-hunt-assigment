import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from "react-router-dom";

function ProductHuntToolbar({isHomePage, pageName}) {
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
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar variant="regular">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    {isHomePage?<MenuIcon />:<Link to="/homepage"><ArrowBackIcon/></Link>}
                </IconButton>
                <Typography variant="h6" color="inherit">{isHomePage?"ProductHunt":pageName}</Typography>
                {isHomePage && <Link className={classes.toolbarButtons} to="myupvotes"><FavoriteIcon aria-controls="menu-appbar"></FavoriteIcon></Link>}
            </Toolbar>
        </AppBar>);
}

export default ProductHuntToolbar;
