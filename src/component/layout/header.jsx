import { Component } from "react";

import { Link } from "react-router-dom";

class Header extends Component {
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
                        <Link className="navbar-brand" to="#"><img src="assets/images/logo/logo.png" alt="Niftyland" /></Link>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler--icon"></span></button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            {/* <div className="navbar-nav">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                <Link className="nav-link" to="/blog">Blog</Link>
                                <Link className="nav-link" to="/index-single">OnePage</Link>
                                <Link className="nav-link" to="/coming-soon">Coming soon!</Link>
                                <Link className="nav-link" to="/404">404</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </div> */}
                            <div className="social-btns">
                                <a href="#" className="default-btn">
                                    <span>Join Our Discord</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}
 
export default Header;