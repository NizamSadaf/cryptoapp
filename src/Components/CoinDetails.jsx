import axios from 'axios';
import React, { useState,useEffect, useRef } from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { BiDownArrow,BiUpArrow } from 'react-icons/Bi';

import '../Styles/coindetails.scss';
const CoinDetails = () => {
    const details=useRef(null)
    const [coin,setCoin]=useState({})
    const params = useParams();
    useEffect(()=>
    {
      const fetchCoins=async()=>{
        const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`)
        details.current=data
        setCoin(details.current)
        console.log(details.current)
        console.log(coin)
        
        // console.log("Data from storage (useState)=",coin)
        // console.log("data from API=",data)
        // console.log(params.id)
      }
      fetchCoins()
    },[params.id])
      
    
   
    // useEffect(() =>
    // {
    //     async function fetchCoins()
    //     {
    //       const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`)
    //       setCoinData(data)
    //       console.log("Data from storage (useState)=",coin)
    //       console.log("data from API=",data)
    //       console.log(params.id)
    //     }
    //     fetchCoins();
    // },[params.id])
  return (
    <>
      <Container fluid>
        <Row  className='coindetails'>
          <Col className='coindetails-first' md={'4'}>
            <div>
              <h2>{details.current.id}</h2>
              {/* <h3>#{details.current.id}</h3>
              <img src={`${coin.image.large}`} alt="bitcoin-logo" />
              <p>Latest Price:{coin.market_data.current_price[usd]} USD</p>
              <p>Updated At:{Date().split("GMT+0600 (Bangladesh Standard Time)")}</p>
              <p>
              {
                (coin.market_data.price_change_percentage_24h>100)? <BiDownArrow/> : <BiUpArrow/>
              } {coin.market_data.price_change_percentage_24h}%
              </p> */}
            </div>
          </Col>
          <Col className='coindetails-second'>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CoinDetails
