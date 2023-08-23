"use client"
import s from './style.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ProductsWeOffer(props) {
    const { title, data = [], path } = props;
    const router = useRouter();
    return (
        <div className='container' >
            <h3 className='mt-5 py-2'>{title}</h3>
            <div className={s.underline} />
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                navigation
                modules={[Navigation]}
                breakpoints={{
                    240: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    420: {
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
                {data?.map((item, i) => {
                    return (<SwiperSlide key={`ITEM_${title}_${i}`}>
                        <div className={s.productCard} onClick={() => item?.slug && router.push(`${path}/${item?.slug}`)} role={item?.slug ? "button" : "document"}>
                            <div className={s.image}>
                                <Image src={item.imgSrc} alt={item?.name} fill />
                            </div>
                            <div className={s.name}>
                                <h3 className={s.title}>{item?.name}</h3>
                            </div>
                            {/* <div className={s.description}>Aquafresh Ro Company is certified by ISO 9001:2015 certificate. Our Domestic Ro Systems are </div> */}
                        </div>
                    </SwiperSlide>)
                })}

            </Swiper>
        </div>
    )
}
