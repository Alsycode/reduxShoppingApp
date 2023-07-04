
import './App.css';
import React from 'react';
import Header from './containers/Header';
import ProductComponent from './containers/ProductComponent';
import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>
     <Header/>
     <Switch>
     <Route path="/" exact component={ProductListing} />
     <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
     </Switch>
     </Router>
   
    </div>
  );
}

export default App;
