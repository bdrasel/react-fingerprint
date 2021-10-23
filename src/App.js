import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import GlobalStyles from "./globalStyles";
import Home from "./pages/HomePages/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyles />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
