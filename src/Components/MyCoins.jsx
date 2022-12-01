import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap';
import MyPagination from './MyPagination'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../Styles/mycoin.scss'
import Loader from './Loader';
import Form from 'react-bootstrap/Form';
const Coins = () => {
  const [page,setPage]=useState(1)
  const [coins,setCoins]=useState([])
  const [isLoading,setLoading]=useState(true)
  const [currency,setCurrency]=useState('usd')
  const [symbol,setSymbol]=useState('$')
  const btns=new Array(132).fill(1)
  const base=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=100&page=${page}`
  useEffect(()=>{
    async function getCoins(){
      const response=await axios.get(base)
      const datas=response.data
      setCoins(datas)
      setLoading(false)
      console.log(datas)
    }
    console.log(btns)
    getCoins()
  },[page,currency])
  const handleClick=(e)=>
  {
    setCurrency(e.target.value)
    e.target.value==='usd'?setSymbol('$'):setSymbol('€')
  }
  // coins.map((coin)=>{
  //   console.log(coin.id)
  // })
  // console.log(coins[0])
  const renderCoinList=coins.map((coin)=>
  (
    <Card key={coin.id} style={{ width: '10rem' }} className=' d-flex flex-column align-items-center card' >
      <Card.Img variant="top" style={{ width: '30px', marginTop:'10px' }}  src={coin.image} />
      <Card.Body className=' d-flex flex-column align-items-center'>
        <Card.Title>{coin.name}</Card.Title>
        <Card.Text>
        {currency==='eur'?'EUR':'USD'} {coin.current_price}{symbol}
        </Card.Text>
        {/* <Link to={`/coin/${coin.id}`}>
          <Button variant="primary" className=' align-self-stretch text-uppercase details'>details</Button>
        </Link> */}
      </Card.Body>
    </Card>
    
  )
)
  return (
    <>
    <div className='d-flex justify-content-center mt-2'>
      <div className='d-flex gap-2'>
        <Form.Check type="radio" aria-label="radio 1" name="currency" value={'usd'} label="USD" onClick={handleClick}/>
        <Form.Check type="radio" aria-label="radio 2" name="currency" value={'eur'} label="EUR" onClick={handleClick}/>
      </div>
    </div>
   
    <div className=' d-flex flex-wrap justify-content-center gap-2 coinlist' >
      {
        (isLoading)? <Loader/> : renderCoinList 
      }
    </div>
    {/* <MyPagination/> */}
    <div className="overflow-auto p-4" style={{width:'100%'}}>
    <Pagination>
      {btns.map((item,index)=>(
        <Pagination.Item key={index} onClick={()=>setPage(index+1)}>
        {index+1}
      </Pagination.Item>
      ))}
      </Pagination>
    </div>

    </>
    
  )
}

export default Coins
