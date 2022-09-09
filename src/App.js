//components
import Header from "components/Header";

//views
import Gallery from "views/Gallery";

//styles
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Theme from "theme/Theme";

const theme = createTheme(Theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Gallery />
    </ThemeProvider>
  );
}

export default App;
