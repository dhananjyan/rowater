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
            <h3 className='mt-5 pb-2'>Our dealerships</h3>
            <div className='d-flex flex-wrap gap-3 justify-content-center'>
                <div className={s.productCard}>
                    <div className={s.image}>
                        <img src="https://5.imimg.com/data5/VV/FT/RJ/SELLER-2802470/mineral-water-treatment-plant-250x250.jpg" /></div>
                    {/* <div className={s.title}>asdfadsfasf</div> */}
                    <div className={s.description}>Aquafresh Ro Company is certified by ISO 9001:2015 certificate. Our Domestic Ro Systems are </div>
                </div>
                <div className={s.productCard}>
                    <div className={s.image}>
                        <img src="https://5.imimg.com/data5/VV/FT/RJ/SELLER-2802470/mineral-water-treatment-plant-250x250.jpg" /></div>
                    {/* <div className={s.title}>asdfadsfasf</div> */}
                    <div className={s.description}>Aquafresh Ro Company is certified by ISO 9001:2015 certificate. Our Domestic Ro Systems are </div>
                </div>
                <div className={s.productCard}>
                    <div className={s.image}>
                        <img src="https://5.imimg.com/data5/VV/FT/RJ/SELLER-2802470/mineral-water-treatment-plant-250x250.jpg" /></div>
                    {/* <div className={s.title}>asdfadsfasf</div> */}
                    <div className={s.description}>Aquafresh Ro Company is certified by ISO 9001:2015 certificate. Our Domestic Ro Systems are </div>
                </div>
                <div className={s.productCard}>
                    <div className={s.image}>
                        <img src="https://5.imimg.com/data5/VV/FT/RJ/SELLER-2802470/mineral-water-treatment-plant-250x250.jpg" /></div>
                    {/* <div className={s.title}>asdfadsfasf</div> */}
                    <div className={s.description}>Aquafresh Ro Company is certified by ISO 9001:2015 certificate. Our Domestic Ro Systems are </div>
                </div>
            </div>

            {/* 
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                modules={[Navigation]}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}

                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
            >
                <SwiperSlide>
                    <div className={s.productCard}>
                        <div className={s.image}>
                            <img src="https://5.imimg.com/data5/VV/FT/RJ/SELLER-2802470/mineral-water-treatment-plant-250x250.jpg" /></div>

                        <div className={s.description}>Aquafresh Ro Company is certified by ISO 9001:2015 certificate. Our Domestic Ro Systems are </div>
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
            </Swiper> */}


            {/* </div> */}
        </div>
    )
}
