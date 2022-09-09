const galleryStyle = () => ({
  placeholderBox: {
    width: "350px",
    height: "215px",
    marginTop: "25px",
    marginBottom: "10px",
  },
  previewImage: {
    width: "350px",
    height: "215px",
  },
  imageItem: {
    width: "200px",
    height: "200px",
    marginRight: "10px",
    overflow: "hidden",
  },
  image: {
    height: "auto",
    width: "inherit",
  },
  deleteButton: {
    "&.MuiIconButton-root": {
      color: "red",
      marginBottom: "-35px",
      float: "right",
    },
  },
  submitButton: {
    "&.MuiButton-contained": {
      backgroundColor: "green",
      "&:hover": {
        backgroundColor: "green",
      },
    },
    "&.Mui-focusVisible": {
      backgroundColor: "green",
    },
  },
  galleryItem: {
    "&.MuiGrid-root": {
      marginTop: "25px",
    },
    width: "100%",
    paddingLeft: "25px",
    paddingRight: "25px",
  },
  gallery: {
    width: "100%",
  },
});

export default galleryStyle;
