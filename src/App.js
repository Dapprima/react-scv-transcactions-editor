import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import NavbarComponent from "./components/layouts/Navbar";
import Transactions from "./pages/Transactions";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <NavbarComponent />;
      <Container>
        <Switch>
          <Route path="/" component={Transactions} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
