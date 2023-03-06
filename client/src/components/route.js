import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const Routes = () => {
  return (
    <Router>
      
        <Route path="/search">
          <SearchResults />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      
    </Router>
  );
};