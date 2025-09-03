import { Component } from "react";
import { Link } from "react-router-dom";
import CountDown from "../component/sidebar/countdown";


const title = "We're Coming Soon !";
const desc = "We are working hard to bring you new experience";
const btnText = "Back To Home";


let socialList = [
    {
        imgUrl: 'assets/images/social/discord.png',
        imgAlt: 'Discord',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/social/twitter.png',
        imgAlt: 'twitter',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/social/instagram.png',
        imgAlt: 'instagram',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/social/twitch.png',
        imgAlt: 'twitch',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/social/youtube.png',
        imgAlt: 'youtube',
        siteLink: '#',
    },
]

class ComingSoon extends Component {
    render() { 
        return (
            <section className="coming-soon">
                <div className="coming-soon__inner">
                    <div className="coming-soon__content">
                        <h2 className="color--gradient-y">{title} </h2>
                        <p>{desc}</p>
                        <CountDown />
                        <div className="input-group mb-5">
                            <input type="text" className="form-control" placeholder="Enter You Email to get update" />
                            <button className="input-group-text" id="email-newsletter"><i className="icofont-paper-plane"></i></button>
                        </div>
                        <ul className="social justify-content-center">
                            {socialList.map((val, i) => (
                                <li className="social__item" key={i}>
                                    <a href={`${val.siteLink}`} className="social__link"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></a>
                                </li>
                            ))}
                        </ul>
                        <div className="d-inline mt-5">
                            <Link to="/" className="default-btn"><span>{btnText}</span></Link>
                        </div>
                    </div>
                    <div className="coming-soon__thumb">
                        <Link to="/"><img src="assets/images/coming-soon/01.jpg" alt="NFT Image" /> </Link>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default ComingSoon;