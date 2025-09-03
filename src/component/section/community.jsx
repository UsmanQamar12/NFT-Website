import { Component } from "react";


const title = <h2 className="text--3d"><span className="color--gradient-y d-block">JOIN CRYPTO </span>  DNEPROVSKIY GANG.</h2>;
const desc = "We want two million followers, no cap! Time to get the whole gang lit and make the numbers skyrocket!";
const btnText = "Join Our Tik Tok";


class Community extends Component {
    render() { 
        return (
            <section className="community padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/community/bg.jpg)"}}>
                <div className="container">
                    <div className="comminity__wrapper">
                        <div className="community__content text-center" data-aos="zoom-in" data-aos-duration="1000">
                            {title}
                            <p>{desc}</p>
                            <a href="https://www.tiktok.com/@artem_dneprovskiy777?_t=zm-8ywaqyfwsws&_r=1" className="default-btn"><span>{btnText}</span></a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Community;