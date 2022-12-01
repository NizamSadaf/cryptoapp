import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/slide1.jpg'
import img2 from '../assets/slide3.jpg'
import img3 from '../assets/slide2.jpg'
import '../Styles/carousel.scss'
const MyCarousel = () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item className='carousel-item w-100' interval={1000} >
        <img
          className="d-block w-100 rounded"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carousel-item w-100' interval={1000}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carousel-item w-100' interval={1000}>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default MyCarousel
