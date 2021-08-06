import React from "react";  
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color= "primary" 
        className={classes.button}
        startIcon={<ShoppingCartIcon style={{ color: "whitesmoke" }} />}
      >
        
      </Button>
     
      </div>
      );
      
      
}
