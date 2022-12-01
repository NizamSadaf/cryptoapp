import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import '../Styles/home.scss'
import bitcoin from '../assets/bitcoin.svg'
import MyCarousel from './MyCarousel'
const Home = () => {
  return (
    <>
      <Container className='home' fluid>
        <Row className='hero'>
          <Col md={6} sm={12} className='hero-left'>
            <div className='image'></div>
            <div className='buttons'>
             <Button>
              exchange
             </Button>
             <Button>
              coin list
             </Button>
            </div>
          </Col>
          <Col md={6} sm={12} className='hero-right'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta veniam excepturi labore eos nesciunt maiores consequatur veritatis sit ex tempore distinctio iste aliquam corporis recusandae animi aspernatur, voluptatem cum nostrum quasi impedit molestias et. Ab in doloribus minus laudantium excepturi dicta maxime molestias eos, a alias eum molestiae quibusdam fugit accusamus, modi, officia incidunt deleniti animi non blanditiis. Aliquam ratione, unde dolore ipsum reprehenderit velit ducimus doloremque temporibus voluptatibus cumque praesentium voluptas. Ad, itaque nesciunt in provident nemo dolor quia deserunt, doloremque eaque labore architecto repudiandae consequuntur impedit placeat. Dicta iste nobis impedit ut eaque aliquam rem unde neque.
            </p>
          </Col>
        </Row>
        <Row className='service'>
          <Col className='service-icons'>
            <div className='icon-container'>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0.004 0 63.993 64"><path d="M63.04 39.741c-4.274 17.143-21.638 27.575-38.783 23.301C7.12 58.768-3.313 41.404.962 24.262 5.234 7.117 22.597-3.317 39.737.957c17.144 4.274 27.576 21.64 23.302 38.784z" fill="#f7931a"/><path d="M46.11 27.441c.636-4.258-2.606-6.547-7.039-8.074l1.438-5.768-3.512-.875-1.4 5.616c-.922-.23-1.87-.447-2.812-.662l1.41-5.653-3.509-.875-1.439 5.766c-.764-.174-1.514-.346-2.242-.527l.004-.018-4.842-1.209-.934 3.75s2.605.597 2.55.634c1.422.355 1.68 1.296 1.636 2.042l-1.638 6.571c.098.025.225.061.365.117l-.37-.092-2.297 9.205c-.174.432-.615 1.08-1.609.834.035.051-2.552-.637-2.552-.637l-1.743 4.02 4.57 1.139c.85.213 1.683.436 2.502.646l-1.453 5.835 3.507.875 1.44-5.772c.957.26 1.887.5 2.797.726L27.504 50.8l3.511.875 1.453-5.823c5.987 1.133 10.49.676 12.383-4.738 1.527-4.36-.075-6.875-3.225-8.516 2.294-.531 4.022-2.04 4.483-5.157zM38.087 38.69c-1.086 4.36-8.426 2.004-10.807 1.412l1.928-7.729c2.38.594 10.011 1.77 8.88 6.317zm1.085-11.312c-.99 3.966-7.1 1.951-9.083 1.457l1.748-7.01c1.983.494 8.367 1.416 7.335 5.553z" fill="#fff"/></svg>
              </div>
              <p className='icon-title'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, aliquam?
              </p>
            </div>
            <div className='icon-container'>
            <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#627EEA"/><g fill="#FFF" fill-rule="nonzero"><path fill-opacity=".602" d="M16.498 4v8.87l7.497 3.35z"/><path d="M16.498 4L9 16.22l7.498-3.35z"/><path fill-opacity=".602" d="M16.498 21.968v6.027L24 17.616z"/><path d="M16.498 27.995v-6.028L9 17.616z"/><path fill-opacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><path fill-opacity=".602" d="M9 16.22l7.498 4.353v-7.701z"/></g></g></svg>
              </div>
              <p className='icon-title'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, aliquam?
              </p>
            </div>
            <div className='icon-container'>
              <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0.004 0 63.993 64"><path d="M63.04 39.741c-4.274 17.143-21.638 27.575-38.783 23.301C7.12 58.768-3.313 41.404.962 24.262 5.234 7.117 22.597-3.317 39.737.957c17.144 4.274 27.576 21.64 23.302 38.784z" fill="#f7931a"/><path d="M46.11 27.441c.636-4.258-2.606-6.547-7.039-8.074l1.438-5.768-3.512-.875-1.4 5.616c-.922-.23-1.87-.447-2.812-.662l1.41-5.653-3.509-.875-1.439 5.766c-.764-.174-1.514-.346-2.242-.527l.004-.018-4.842-1.209-.934 3.75s2.605.597 2.55.634c1.422.355 1.68 1.296 1.636 2.042l-1.638 6.571c.098.025.225.061.365.117l-.37-.092-2.297 9.205c-.174.432-.615 1.08-1.609.834.035.051-2.552-.637-2.552-.637l-1.743 4.02 4.57 1.139c.85.213 1.683.436 2.502.646l-1.453 5.835 3.507.875 1.44-5.772c.957.26 1.887.5 2.797.726L27.504 50.8l3.511.875 1.453-5.823c5.987 1.133 10.49.676 12.383-4.738 1.527-4.36-.075-6.875-3.225-8.516 2.294-.531 4.022-2.04 4.483-5.157zM38.087 38.69c-1.086 4.36-8.426 2.004-10.807 1.412l1.928-7.729c2.38.594 10.011 1.77 8.88 6.317zm1.085-11.312c-.99 3.966-7.1 1.951-9.083 1.457l1.748-7.01c1.983.494 8.367 1.416 7.335 5.553z" fill="#fff"/></svg>
              </div>
              <p className='icon-title'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, aliquam?
              </p>
            </div>
          </Col>
        </Row>
        <Row className='testimonial'>
          <Col>
            <MyCarousel/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
