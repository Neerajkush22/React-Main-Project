import './App.css';
import Header from './common/header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';
import { useState } from 'react';
import Cart from './common/cart/Cart';
import Login from './pages/login';
import Contact from './components/contact/Contact';
import Sdata from './components/shop/Sdata';
import Footer from './common/footer/Footer';
import Payment from './components/payment/Payment';

function App() {
  const { productItems } = Data
  const { shopItems } = Sdata
  const [cartItem, setCardItem] = useState([])
  const [logIn, setLogIn] = useState(false);
  const [searchedItems, setSearchedItems] = useState("")

  const getVal = (searchData) => {
    setSearchedItems(searchData)
  }

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCardItem(cartItem.map((item) =>
      (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 }
        : item)))
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if(productExit.qty ===1)
    {
      setCardItem(cartItem.filter((item)=> item.id !== product.id))
    }else{
      setCardItem(cartItem.map((item)=> (item.id === product.id? {...productExit, qty: productExit.qty - 1}: item)))
    }
  }
  
  
  return (
    <>
      <Router>
        <Header cartItem={cartItem} logIn = {logIn} setLogIn = {setLogIn} getVal={getVal}/>
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems = {shopItems} searchedItems={searchedItems}/>
          </Route>
          <Route path='/cart' exact>
            <Cart cartItem={cartItem} addToCart={addToCart}  decreaseQty = {decreaseQty}/>
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
          <Route path='/login' exact>
            <Login setLogIn={setLogIn}/>
          </Route>
          <Route path='/purchase' exact>
            <Payment cartItem={cartItem} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
