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
      margin: "30px",
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

 function Fruits() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  return (
    
     <div className={classes.fullHeightCard1}>
     <div className={classes.fullHeightCard}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Apple"
       
      />
      <CardMedia
        className={classes.media}
        image="img.jpg"
     
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Find another word for apple. In this page you can discover 80 synonyms,
           antonyms, idiomatic expressions,
           
        </Typography>
      </CardContent>
      </Card>
      </div>
   

   <div className={classes.fullHeightCard}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            O
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Orange"
       
      />
      <CardMedia
        className={classes.media}
        image="org.jpg"
     
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Here are some adjectives for orange: animated valiant, scarlet, mock, good and very fresh, usual upscale, standard, admiral, tangent and opal,
        </Typography>
      </CardContent>
      </Card>
      </div>

     <div className={classes.fullHeightCard}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Banana"
       
      />
      <CardMedia
        className={classes.media}
        image="bnn.jpg"
     
      />
 <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          A banana is a only curved, yellow fruit with a thick skin andd the soft sweet flesh. If you eat a banana every day for breakfast.
           
        </Typography>
      </CardContent>
      </Card>
      </div>


      </div>
);
}
export default Fruits;