import React from "react";
// import { Router, Route, Routes} from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Thankyou from "./components/ThankYou";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thank-you" element={<Thankyou />} />
    </Routes>
  </Router>

)

export default App;
