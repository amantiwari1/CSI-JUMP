import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Construction from "./Pages/Construction/Construction";
import ContactUs from "./Pages/ContactUs/ContactUs";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/our-team" component={Construction} />
        <Route exact path="/events" component={Construction} />
        <Route exact path="/gallery" component={Construction} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
