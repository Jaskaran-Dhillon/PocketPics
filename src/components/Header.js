import React, { useState } from "react";

//components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InfoDialog from "./InfoDialog";

//styles
import styles from "assets/jss/headerStyle";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <InfoDialog open={open} handleClose={handleClose} />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" classes={{ root: classes.appBar }}>
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              className={classes.appBarTitle}
            >
              PocketPics
            </Typography>
            <Button color="inherit" onClick={handleClickOpen}>About</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {props.children}
    </div>
  );
}
