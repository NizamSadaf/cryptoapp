import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
const Loader = () => {
  return (
    <div className=' d-flex flex-column justify-content-center align-items-center'>
      <Spinner animation="border" role="status">
      </Spinner>
      <p className='text-center fs-2'>Loading...</p>
    </div>
  )
}

export default Loader
