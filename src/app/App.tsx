import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authorization from "../pages/Authorization";
import LoginForm from "../shared/UI/forms/LoginForm";
import RegistrationForm from "../shared/UI/forms/RegistrationForm";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./main.css";
import Home from "../pages/Home";
import PrivateRouter from "../router/PrivateRouter";


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
          <Route element={<PrivateRouter></PrivateRouter>}>
            <Route path="/" element={<Home></Home>}></Route>
          </Route>
          <Route path="/" element={<Authorization></Authorization>}>
            <Route path="login" element={<LoginForm></LoginForm>}></Route>
            <Route path="registration" element={<RegistrationForm></RegistrationForm>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;