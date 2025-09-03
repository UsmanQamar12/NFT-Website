import { Component } from "react";
import { Link } from "react-router-dom";


const title = "Opps! This Page Not Found";
const desc = "We are working hard to bring you new experience";
const btnText = "Go Back To Home";

class ErrorPage extends Component {
    render() { 
        return (
            <section className="error">
                <div className="error__inner">
                    <div className="error__content">
                        <img className="d-block mb-4" src="assets/images/error/404.png" alt="404 image" />
                        <h3 className="color--gradient-y mb-3">{title}</h3>
                        <p>{desc}</p>
                        <div className="text-center mt-5">
                            <Link to="/" className="default-btn">{btnText}</Link>
                        </div>
                    </div>
                    <div className="error__thumb">
                        <Link to="/"><img src="assets/images/error/01.jpg" alt="NFT Image" /> </Link>
                    </div>
                </div>

            </section>
        );
    }
}
 
export default ErrorPage;