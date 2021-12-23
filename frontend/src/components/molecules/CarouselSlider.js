import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./../../assets/css/templates/components/carousel.scss";

import screenshot from "./../../assets/img/worms.png";
export default class CarouselSlider extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={775}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <div className="slide-container">
              <div className="flex-wrapper margin-auto">
                <h1>Los gusanos en la zona de una serpiente resbaladiza</h1>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="slide-container">
              <div className="flex-wrapper margin-auto">
                <h1>Come todo lo que puedas y corre!</h1>
              </div>
            </div>
          </Slide>
          <Slide index={2}>
            <div className="slide-container">
              <div className="flex-wrapper margin-auto">
                <h1>Acción y diversion con los gusanos del espacio</h1>
              </div>
            </div>
          </Slide>
        </Slider>
        <div className="slider-one-arrow-container">
          <ButtonBack>&nbsp;</ButtonBack>
          <ButtonNext>&nbsp;</ButtonNext>
        </div>
      </CarouselProvider>
    );
  }
}
export class CarouselScreenshotSlider extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideHeight={100}
        naturalSlideWidth={100}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <div className="slide-container">
              <div className="flex-wrapper margin-auto">
                <img src={screenshot} alt="screenshot 1" />
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="slide-container">
              <div className="flex-wrapper margin-auto">
                <img src={screenshot} alt="screenshot 1" />
              </div>
            </div>
          </Slide>
          <Slide index={2}>
            <div className="slide-container">
              <div className="flex-wrapper margin-auto">
                <img src={screenshot} alt="screenshot 1" />
              </div>
            </div>
          </Slide>
        </Slider>
        <div className="slider-one-arrow-container">
          <ButtonBack>&nbsp;</ButtonBack>
          <ButtonNext>&nbsp;</ButtonNext>
        </div>
      </CarouselProvider>
    );
  }
}
