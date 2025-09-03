

import { Component } from "react";
import { Link } from "react-router-dom";


class HeaderTwo extends Component {
    render() { 
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 200) {
                document.querySelector('.header').classList.add(['header--fixed'],['animated'], ['fadeInDown'])
            }else{
                document.querySelector('.header').classList.remove(['header--fixed'], ['animated'], ['fadeInDown'])
            }
        });
        return (
            <header className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-xl">
                        <Link className="navbar-brand" to="/"><img src="assets/images/logo/logo.png" alt="Niftyland" style={{width: "250px"}}/></Link>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler--icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link" aria-current="page" href="#home">Home</a>
                                <a className="nav-link" href="#collection">NFT</a>
                                <a className="nav-link" href="#mint">Mint</a>
                                <a className="nav-link" href="#roadmap">Roadmap</a>
                                <a className="nav-link" href="#team">Team</a>
                                <a className="nav-link" href="#faq">Faq</a>
                            </div>
                            <div className="social-btns">
                                <a href="https://t.me/+ampB9N-ttDQ3NTky" className="default-btn">
                                    <span>Join Our Telegram</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}
 
export default HeaderTwo;