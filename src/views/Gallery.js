/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

//components
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import { Fancybox } from "@fancyapps/ui";

//assets
import placeholder from "assets/images/Placeholder.png";

//icons
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

//styles
import styles from "assets/jss/galleryStyle";
import { makeStyles } from "@mui/styles";
import { Button, IconButton } from "@mui/material";
import "@fancyapps/ui/dist/fancybox.css";

const useStyles = makeStyles(styles);

export default function Gallery() {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState("");

  const addImage = (image) => {
    setImages((prev) => {
      return [...prev, image];
    });
  };

  const deleteImage = (image) => {
    setImages((prev) => {
      return prev.filter((img) => {
        return image !== img;
      });
    });
  };

  const submitImage = (e) => {
    if (currentImage === "") {
      alert("Blank submissions are not allowed.");
      return;
    }
    addImage(currentImage);
    setCurrentImage("");
    e.preventDefault();
  };

  function handlePaste(pasteEvent) {
    var item = pasteEvent.clipboardData.items[0];

    if (item.type.indexOf("image") === 0) {
      var blob = item.getAsFile();

      var reader = new FileReader();
      reader.onload = function (event) {
        setCurrentImage(event.target.result);
      };
      reader.readAsDataURL(blob);
    }
  }

  useEffect(() => {
    window.addEventListener("paste", handlePaste, false);
    return () => {
      window.removeEventListener("paste", handlePaste, false);
    };
  }, []);

  return (
    <Grid
      container
      className={classes.background}
      direction="column"
      alignItems="center"
    >
      <div className={classes.placeholderBox}>
        <img
          className={classes.previewImage}
          src={currentImage || placeholder}
          alt=""
        />
      </div>
      <Button
        onClick={submitImage}
        className={classes.submitButton}
        variant="contained"
      >
        Submit
      </Button>
      <Grid item xs={12} className={classes.galleryItem}>
        <Grid container className={classes.gallery} spacing={2}>
          {images.map((img, index) => {
            return (
              <Grid item className={classes.imageItem} key={index}>
                <Tooltip title="Remove">
                  <IconButton
                    size="small"
                    onClick={() => deleteImage(img)}
                    className={classes.deleteButton}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <a href={img} data-fancybox className={classes.image}>
                  <img src={img} alt="" />
                </a>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
