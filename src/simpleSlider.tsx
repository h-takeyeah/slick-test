import * as React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SimpleSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'ease',
    vertical: true,
    verticalSwiping: true,
    slideToShow: 1
  }
  const style = {
    fontSize: '36px',
    margin: '10px',
    padding: '2%',
    color: '#fff',
    background: '#5f9ea0'
  }
  return (
    <div>
      <h2>AutoPlay</h2>
      <Slider {...settings}>
        <div>
          <h3 style={style}>1</h3>
        </div>
        <div>
          <h3 style={style}>2</h3>
        </div>
        <div>
          <h3 style={style}>3</h3>
        </div>
        <div>
          <h3 style={style}>4</h3>
        </div>
        <div>
          <h3 style={style}>5</h3>
        </div>
        <div>
          <h3 style={style}>6</h3>
        </div>
      </Slider>
    </div>
  )
}

export default SimpleSlider
