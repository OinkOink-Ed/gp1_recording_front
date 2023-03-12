import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authorization from "../pages/Authorization";
import LoginForm from "../shared/UI/forms/LoginForm";
import RegistrationForm from "../shared/UI/forms/RegistrationForm";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./main.css";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authorization></Authorization>}>
            <Route path="login" element={<LoginForm></LoginForm>} />
            <Route path="registration" element={<RegistrationForm></RegistrationForm>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;