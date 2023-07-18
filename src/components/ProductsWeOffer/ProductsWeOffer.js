"use client"
import s from './style.module.scss';
import cx from "classname";
import 'swiper/css';
import 'swiper/css/navigation';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';



export default function ProductsWeOffer() {
    return (
        <div className='container' >
            <h3 className='mt-5 pb-2'>Products we offer</h3>
            {/* <div className='d-flex flex-wrap gap-3 justify-content-center'> */}
            {/* <div className={cx(s.productCard)} >
                    <img className="card-img-top" src="https://5.imimg.com/data5/VV/FT/RJ/SELLER-2802470/mineral-water-treatment-plant-250x250.jpg" />

                    <div class="card-body">
                        <h5 class="card-title">Product title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn  btn-outline-dark">view all</a>
                    </div>
                </div> */}

            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                navigation
                modules={[Navigation]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className={s.productCard}>
                        <div className={s.image}>
                            <img src="https://5.imimg.com/data5/VV/FT/RJ/SELLER-2802470/mineral-water-treatment-plant-250x250.jpg" /></div>
                        <div className={s.title}>asdfadsfasf</div>
                        <div className={s.description}>Aquafresh Ro Company is certified by ISO 9001:2015 certificate. Our Domestic Ro Systems are </div>
                        <div className='btn btn-dark borderra'>View more</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className={s.productCard}>
                        <div className={s.image}>
                            <img src="https://5.imimg.com/data5/VV/FT/RJ/SELLER-2802470/mineral-water-treatment-plant-250x250.jpg" /></div>
                        <div className={s.title}>asdfadsfasf</div>
                        <div className={s.description}>Aquafresh Ro Company is certified by ISO 9001:2015 certificate. Our Domestic Ro Systems are </div>
                        <div>View more</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className={s.productCard}>
                        <div className={s.image}>
                            <img src="https://5.imimg.com/data5/VV/FT/RJ/SELLER-2802470/mineral-water-treatment-plant-250x250.jpg" /></div>
                        <div className={s.title}>asdfadsfasf</div>
                        <div className={s.description}>Aquafresh Ro Company is certified by ISO 9001:2015 certificate. Our Domestic Ro Systems are </div>
                        <div>View more</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className={s.productCard}>
                        <div className={s.image}>
                            <img src="https://5.imimg.com/data5/VV/FT/RJ/SELLER-2802470/mineral-water-treatment-plant-250x250.jpg" /></div>
                        <div className={s.title}>asdfadsfasf</div>
                        <div className={s.description}>Aquafresh Ro Company is certified by ISO 9001:2015 certificate. Our Domestic Ro Systems are </div>
                        <div>View more</div>
                    </div>
                </SwiperSlide>
            </Swiper>


            {/* </div> */}
        </div>
    )
}
