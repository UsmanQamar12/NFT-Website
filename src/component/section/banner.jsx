import { Component } from "react";

const title = <h1 className="text--3d text-uppercase"> <span>PROUD </span> <br /> COUNTRY GANG</h1>
const desc = "Artem Dneprovskiy and his people with strict rules.";


let socialList = [
    {
        imgUrl: 'assets/images/social/tiktok.png',
        imgAlt: 'Social Thumb',
        siteLink: 'https://www.tiktok.com/@artem_dneprovskiy777?_t=zm-8ywaqyfwsws&_r=1',
    },
    {
        imgUrl: 'assets/images/social/instagram.png',
        imgAlt: 'Social Thumb',
        siteLink: 'https://www.tiktok.com/@artem_dneprovskiy777?_t=zm-8ywaqyfwsws&_r=1',
    },
    {
        imgUrl: 'assets/images/social/telegram.png',
        imgAlt: 'Social Thumb',
        siteLink: 'https://t.me/+ampB9N-ttDQ3NTky',
    },
    {
        imgUrl: 'assets/images/social/twitch.png',
        imgAlt: 'Social Thumb',
        siteLink: 'https://twitch.tv/artem_dneprovskiy',
    },
    {
        imgUrl: 'assets/images/social/XTwitter.jpg',
        imgAlt: 'Social Thumb',
        siteLink: 'https://x.com/dneprovskiy7774?s=21',
    },
]

let bannerAppsImageList = [
    {
        imgUrl: 'assets/images/banner/bannerimage/02.png',
        imgAlt: 'Banner Apps',
        duration: '1500',
    },
    {
        imgUrl: 'assets/images/banner/bannerimage/01.png',
        imgAlt: 'Banner Apps',
        duration: '1000',
    },
    {
        imgUrl: 'assets/images/banner/bannerimage/06.png',
        imgAlt: 'Banner Apps',
        duration: '1500',
    },
    {
        imgUrl: 'assets/images/banner/bannerimage/07.png',
        imgAlt: 'Banner Apps',
        duration: '1000',
    },
]

class Banner extends Component {
    render() { 
        return (
            <section id="home" className="banner" style={{backgroundImage: "url(/assets/images/header/bannerbg.jpg)"}}>
                <div className="container">
                    <div className="banner__wrapper">
                        <div className="row g-5 align-items-center justify-content-center">
                            <div className="col">
                                <div className="banner__content text-center" data-aos="fade-up" data-aos-duration="2000">
                                    {title}
                                    <p style={{color: "white"}}>{desc}</p>
                                    <ul className="social justify-content-center mb-5">
                                        {socialList.map((val, i) => (
                                            <li className="social__item" key={i}>
                                                <a href={val.siteLink} className="social__link"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="banner__apes">
                    {bannerAppsImageList.map((val, i) => (
                        <li className="banner__apes-item" key={i}>
                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}
 
export default Banner;