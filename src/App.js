import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => {
  const korisnik = true
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/proizvodi/:kategorije'>
          <ProductList />
        </Route>
        <Route path='/proizvod/:id'>
          <ProductPage />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/prijava'>
          {korisnik ? <Redirect to = '/' /> : <Login />}

        </Route>
        <Route path='/registracija'>
        {korisnik ? <Redirect to = '/' /> : <Register />}
        </Route>
      </Switch>
    </Router>
  )
};

export default App;
