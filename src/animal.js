import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import withStyles from "@material-ui/core/styles/withStyles"


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
      margin: "10px",
        padding: "10px"
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

fullHeightCard: {
 width:"30%",
backgroundColor: "red",
  float:"right",
  height : "100%",
  color : "white",




    },

fullHeightCard1: {
 
backgroundColor: "black",
width:"100%",

  marginRight: "80px",


    },

 
 

}));

 function Animal() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  return (
    
<div className={classes.fullHeightCard1}>
     <div className={classes.fullHeightCard}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            L
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Lion"
       
      />
      <CardMedia
        className={classes.media}
        image="ln.jpg"
     
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Do not try to fight a lion if you are not one yourself.
           I am more afraid of an army of one hundred sheep led by a lion than an army of one hundred lions led by a sheep.
           A lion sleeps in the heart of every brave man. ...
        </Typography>
      </CardContent>
      </Card>
      </div>
   

   <div className={classes.fullHeightCard}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            C
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Cat"
       
      />
      <CardMedia
        className={classes.media}
        image="ct.jpg"
     
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         You know cats make amazing pets for plenty of reasons, but sometimes it can be hard to put into words exactly why they so great. 
         If you need a little help.The legs move diagonally, 
         starting with one of the front legs 

        </Typography>
      </CardContent>
      </Card>
      </div>

     <div className={classes.fullHeightCard}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            T
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Tiger"
       
      />
      <CardMedia
        className={classes.media}
        image="tgr.jpg"
     
      />
 <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         Here are some adjectives for tiger:
          royal bengal, black and sallow, common, striped, 
          half-starved bengal, hungry and unreliable, particularly 
          hungry and unreliable, large bengal, magnificent bengal.

        </Typography>
      </CardContent>
      </Card>
      </div>


      </div>
);
}
export default Animal;