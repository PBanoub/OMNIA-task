import React from 'react';
import '../assets/styles/banner.css';
import { Carousel,Button } from 'react-bootstrap';

export default class Banner extends React.Component {
  render() {
    return (
      <div id="banner" className="banner">
        <Carousel>
          <Carousel.Item>
            <div className="carousel-img"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-img"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-img"></div>
          </Carousel.Item>
        </Carousel>
        <div className="container">
          <div className="bannerCaption">
            <h1 className="App-title">Welcome to a more connected world</h1>
            <p>Travel soothes the soul and our collection royalty.</p>
            <Button bsStyle="info" className="learnMore">Learn More</Button>
          </div>
        </div>
      </div>
    )
  }
}