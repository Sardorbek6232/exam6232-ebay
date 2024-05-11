
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';;

import slide1_1 from "../../assets/images/engine_home.webp"
import slide1_2 from "../../assets/images/Frames_home.webp"
import slide1_3 from "../../assets/images/Helmets_home.webp"

import slide2_1 from "../../assets/images/slide2_accessories.webp"
import slide2_2 from "../../assets/images/slide2_fragrances.webp"
import slide2_3 from "../../assets/images/slide2_hairCare.webp"

import slide3 from "../../assets/images/slide_3.jpg"

import './Slider.scss';

const Slider = () => {
  return (
    <>
      <div className='slider'>
        <Swiper slidesPerView={1}
          centeredSlides={false}
          spaceBetween={30}
          autoplay={{ delay: 8000, disableOnInteraction: false, pauseOnMouseEnter: false, }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper">
          <SwiperSlide className='slide_1'>
            <div className='slide_1_item1'>
              <h1>Convenient gear, unconventional travel</h1>
              <p>Save up to 20%* on the motorcycle parts you need on eBay.</p>
              <button>Code:MOTOPROM20</button>
            </div>
            <div className='slide_1_item2'>
              <img src={slide1_2} style={{ width: "350px" }} />
              <img src={slide1_1} style={{ width: "350px" }} />
              <img src={slide1_3} style={{ width: "350px" }} />
            </div>
          </SwiperSlide>
          <SwiperSlide className='slide_2'>
            <div className='slide_2_item1'>
              <h1>Get in harmony</h1>
              <p>Health, hair care and luxury items can help you feel at one.</p>
              <button>Feel at one</button>
            </div>
            <div className='slide_2_item2'>
              <img src={slide2_1} style={{ width: "350px" }} />
              <img src={slide2_2} style={{ width: "350px" }} />
              <img src={slide2_3} style={{ width: "350px" }} />
            </div>
          </SwiperSlide>
          <SwiperSlide className='slide_3'>
          <div className='slide_3_item1'>
              <h1>May  the collectible be with you</h1>
              <p>Discover a variety of action figures, cards, toys and more.</p>
              <button>Find yours</button>
            </div>
            <div className='slide_3_item2'>
              <img src={slide3}  />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Slider