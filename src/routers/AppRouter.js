import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import Header from "../components/Header.js";
import NotFound from "../components/NotFound.js";

const PortfolioHomePage = () => (
  <p>Welcome to my website, have a look around !</p>
);

const PortfolioPage = props => {
  if (props.match.params.id < 0 || props.match.params.id > 3) {
    return <Redirect to="/not-found" />;
  }

  return (
    <div>
      <p>There is my portfolio, click on each items !</p>
      <NavLink to="/portfolio/1" activeClassName="bold-link" exact>
        Itemieu 1
      </NavLink>
      <NavLink to="/portfolio/2" activeClassName="bold-link" exact>
        Item 2
      </NavLink>
      <NavLink to="/portfolio/3" activeClassName="bold-link" exact>
        Item 3
      </NavLink>
      {props.match.params.id && <PortfolioItem item={props.match.params.id} />}
    </div>
  );
};

const PortfolioItem = props => {
  return (
    <p>
      Item n°
      {props.item} :
    </p>
  );
};

const PortfolioContactPage = () => <p>Here is my contact page</p>;

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={PortfolioHomePage} />
        <Route path="/portfolio" exact component={PortfolioPage} />
        <Route path="/portfolio/:id" component={PortfolioPage} />
        <Route path="/contact" component={PortfolioContactPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default routes;
