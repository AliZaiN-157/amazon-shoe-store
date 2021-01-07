import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Checkout from './Components/Checkout/Checkout';
import Home from './Components/Home/Home';
import Item from './Components/Item/Item';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/">
            <Home />
          </Route>
          <Route path="checkout">
            <Checkout />
          </Route>
          <Route path="item/:id/:title">
            <Item />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
