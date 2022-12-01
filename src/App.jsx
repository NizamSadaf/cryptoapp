import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Coins from './Components/MyCoins';
import Exchange from './Components/Exchange';
import CoinDetails from './Components/CoinDetails';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/coins' element={<Coins/>}/>
          <Route path='/coin/:id' element={<CoinDetails/>}/>
          <Route path='/exchange' element={<Exchange/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
