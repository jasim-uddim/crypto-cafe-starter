import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Coins from "./components/Coins/Coins";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import CoinDetails from "./components/CoinDetails/CoinDetails";
import BdAddress from "./components/Contact/BdAddress";
import UsAddress from "./components/Contact/UsAddress";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route
          path="/coin-details/:id"
          element={<CoinDetails></CoinDetails>}
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}>
          <Route path="bd-address" element={<BdAddress></BdAddress>}></Route>
          <Route path="us-address" element={<UsAddress></UsAddress>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
