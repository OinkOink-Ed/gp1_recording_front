import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authorization from "../pages/Authorization";
import Home from "../pages/Home";
import "./main.css";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/authorization" element={<Authorization></Authorization>}>
          <Route path="login" />
          <Route path="registration" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
