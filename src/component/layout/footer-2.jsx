import { Component } from "react";


const title = "TAG ALONG WITH US!";
const desc = "Every village around the globe should send their MVP — let’s build a worldwide gang, one rep at a time!";

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

class FooterTwo extends Component {
    render() { 
        return (
            <footer className="footer bg--cover" style={{backgroundImage: "url(/assets/images/footer/bg.jpg)"}}>
                <div className="footer__wrapper padding-top padding-bottom aos-animate aos-ini" data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className="container">
                        <div className="footer__content text-center t">
                            <h2 className="color--gradient-y">{title}</h2>
                            <p>{desc}</p>
                            <ul className="social justify-content-center">
                                {socialList.map((val, i) => (
                                    <li className="social__item" key={i}>
                                        <a href={`${val.siteLink}`} className="social__link"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <div className="container">
                        <div className="text-center py-4">
                            <p className=" mb-0">2025 DNEPROVSKIY & GANG/All Rules Reserved/Awooooooo!!!</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default FooterTwo;