import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../Styles/exchanges.scss'
import Loader from './Loader';
const Exchange = () => {
  const baseUrl='https://api.coingecko.com/api/v3/exchanges/?per_page=250'
  const [exchange,setExchange]=useState([])
  const [isLoading,setLoading]=useState(true)
  useEffect(()=>{
    async function exchanges(){
    try {
    await axios.get(baseUrl)
    .then((response)=>
    {
      setExchange(response.data)
      setLoading(false)
      console.log(response.data)
    }) 
  }
  catch(err){
    console.log(err)
  }
  }
      exchanges()
  },[])
  const renderExchangeList=exchange.map((item)=>
  (
    <Card key={item.id} style={{ width: '15rem' }} className=' d-flex flex-column align-items-center card' >
      <Card.Img variant="top" style={{ width: '30px', marginTop:'10px' }}  src={item.image} />
      <Card.Body className=' d-flex flex-column align-items-center'>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        </Card.Text>
          <Button  variant="primary" className=' text-uppercase' href={item.url} target='blank'>
            details
          </Button>

      </Card.Body>
    </Card>
    
  )
)
  return (
    <div className=' d-flex flex-wrap justify-content-center  gap-1 exchanges ' >
      {
        (isLoading)? <Loader/> : renderExchangeList 
      }
    </div>
  )
}

export default Exchange
