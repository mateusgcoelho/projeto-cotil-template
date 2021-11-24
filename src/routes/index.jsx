import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home";

function DefaultRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default DefaultRoutes;
