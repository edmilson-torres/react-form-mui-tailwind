import { useState, useEffect } from "react";

import Form from "./components/Form";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
  FormGroup,
  FormControlLabel,
  CssBaseline,
  Switch,
} from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4894c0",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f50b5",
    },
  },
});

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="mx-auto max-w-screen-lg">
        <div id="header" className="flex justify-end">
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={isDarkTheme} onChange={toggleTheme} />}
              label="Dark Theme"
            />
          </FormGroup>
        </div>
        <div id="main" className="lg:max-w-screen-md m-4 lg:mx-auto">
          <Form />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
