import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";

const App = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/" component={ProductsPage} exat />
      </main>
    </React.Fragment>
  );
};

export default App;
