const galleryStyle = () => ({
  appBar: {
    "&.MuiAppBar-root": {
      color: "white",
      backgroundColor: "green",
    },
  },
  appBarTitle: {
    flexGrow: 1, 
    "&.MuiTypography-root": {
      fontWeight: 600 
    }
  }
});

export default galleryStyle;
