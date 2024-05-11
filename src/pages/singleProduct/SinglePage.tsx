import "./SinglePage.scss"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import { likeProduct } from '../../redux/likeSlice';
import { cartProduct } from '../../redux/CartSlice';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FaRegHeart } from "react-icons/fa";

const SinglePage = () => {

  interface Product {
    id: number;
    images: string[];
    products: any;
    category: any;
    product: any;
    title: string;
    description: string;
    brand: string;
    price: number;
  }

  const [products, setProducts] = useState<Product | null>(null)
  const [ thumbsSwiper, setThumbsSwiper ] = useState(null);
  const { single_id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${single_id}/`)
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  console.log(single_id);

  console.log(products)
  const dispatch = useDispatch();

//   const handleup2 = (phone2) => {
//     dispatch(likeProduct(phone2))
//     console.log(phone2);
//     navigate("/like")
// }
  return (
    <>
      {
        <div className='singlePage'>
          <div className='singlePage_carusel'>

            <Swiper onSwiper={() => setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper">
              {
                products?.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img className='mySwiperImage' src={image} />
                  </SwiperSlide>
                ))
              }
            </Swiper>
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {
                products?.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image} />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          <div className='singlePage_text_info'>
            <h1>{products?.title}</h1>
            <div className='singlePage_text_info_next'>
              <p>Description : {products?.description}</p>
              <p>Model: {products?.title}</p>
              <p>Brand: {products?.brand}</p>
              <p>Category: {products?.category}</p>
              <div className='singlePage_end'>
                <div className='singlePage_price'>
                  <p>Price: <span>US ${products?.price}</span></p>
                </div>
                <div className='singlePage_btn'>
                  <button className='btn1'>Buy It Now</button>
                  <button className='btn2' onClick={() => dispatch(cartProduct(products))} >Add to Cart</button>
                  <button className='btn3' onClick={() => dispatch(likeProduct(products))}><FaRegHeart />Add to Watchlist</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      }
    </>
  )
}

export default SinglePage
