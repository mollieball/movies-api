import React from "react";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Movies />
      </Switch>
    </Router>
  );
}

export default App;
