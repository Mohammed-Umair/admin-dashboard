import "./App.css";

import SideBar from "./components/SideBar/Sidebar";
import { ThemeProvider } from "@mui/material/styles";
import createTheme from "@mui/material/styles/createTheme";
function App() {
  const theme = createTheme();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <SideBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
