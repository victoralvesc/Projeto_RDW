import React from "react";
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from '../Card'

import 'swiper/swiper-bundle.css'

SwiperCore.use([Pagination])

function Slider() {
return (
    <Swiper  slidesPerView={4}>
        <SwiperSlide>
            <Card />
        </SwiperSlide>
        <SwiperSlide>
            <Card />
        </SwiperSlide>
        <SwiperSlide>
            <Card />
        </SwiperSlide>
        <SwiperSlide>
            <Card />
        </SwiperSlide>
        <SwiperSlide>
            <Card />
        </SwiperSlide>
    </Swiper>
)
}

export default Slider