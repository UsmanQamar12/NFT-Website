import { Component } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";


const title = <h2> <span>The</span> Collection</h2>;
const desc = "Papa IVAN’s everywhere—respect your IVAN. Every sip’s straight gold, bro!";
const btnText = "Soon On Opensea";


let collectionSlider = [
    {
        imgUrl: 'assets/images/collection/01.jpeg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/02.jpeg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/03.jpeg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/04.jpeg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/05.jpeg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/06.jpeg',
        imgAlt: 'NFT Image',
    },
]


let collectionSliderTwo = [
    {
        imgUrl: 'assets/images/collection/07.jpeg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/08.jpeg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/09.jpeg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/10.jpeg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/11.jpeg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/12.jpeg',
        imgAlt: 'NFT Image',
    },
]

class Collection extends Component {
    render() { 
        return (
            <section className="collection padding-top padding-bottom" id="collection">
                <div className="container">
                    <div className="section-header aos-animate aos-init" data-aos="fade-up" data-aos-duration="1000">
                        <div className="section-header__content">
                            {title}
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className="collection__wrapper">
                        <div className="collection__thumb">
                            <div className="swiper collection__thumb-slider-1 mb-3">
                                <Swiper
                                    spaceBetween={15}
                                    slidesPerView={6}
                                    loop={'true'}
                                    autoplay={{
                                        delay: 1,
                                        disableOnInteraction: false,
                                    }}
                                    speed={4000}
                                    modules={[Autoplay]}
                                    >
                                    {collectionSlider.map((val, i) => (
                                        <SwiperSlide key={i}>
                                            <div className="collection__thumb-item">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="swiper collection__thumb-slider-2">
                                <Swiper
                                    spaceBetween={15}
                                    slidesPerView={6}
                                    loop={'true'}
                                    autoplay={{
                                        delay: 1,
                                        reverseDirection: true,
                                    }}
                                    speed={3000}
                                    modules={[Autoplay]}
                                    >
                                    {collectionSliderTwo.map((val, i) => (
                                        <SwiperSlide key={i}>
                                            <div className="collection__thumb-item">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="text-center mt-5">
                                <a href="#" className="default-btn">{btnText}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Collection;