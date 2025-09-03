import { Component, Fragment } from "react";
import FooterTwo from "../component/layout/footer-2";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import GoogleMap from "../component/sidebar/googlemap";


const title = "Get In Touch";
const desc = "We're Always Eaer To Hear From You!";
const btnText = "Send Your Message";


let infoList = [
    {
        imgUrl: 'assets/images/contact/01.png',
        imgAlt: 'info Thumb',
        title: 'Office Address',
        desc: '1208 part Street Fifth Avenue',
    },
    {
        imgUrl: 'assets/images/contact/02.png',
        imgAlt: 'info Thumb',
        title: 'Phone Number',
        desc: '+22698745622',
    },
    {
        imgUrl: 'assets/images/contact/03.png',
        imgAlt: 'info Thumb',
        title: 'Send Email',
        desc: 'email@example.com',
    },
]


class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            contactName: '',
            contactEmail: '',
            contactSubject: '',
            contactNumber: '',
            contactMassage: '',
        };
    }
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Contact Us'} curPage={'Contact'} />
                <div className="info padding-top padding-bottom">
                    <div className="container">
                        <div className="info__wrapper">
                            <div className="row justify-content-center g-4">
                                {infoList.map((val, i) => (
                                    <div className="col-lg-4 col-md-6" key={i}>
                                        <div className="info__item">
                                            <div className="info__item-inner">
                                                <div className="info__item-icon">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="info__item-content">
                                                    <h6>{val.title}</h6>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <section className="contact padding-top padding-bottom">
                    <div className="container">
                        <div className="section-header">
                            <div className="section-header__content">
                                <h3>{title}</h3>
                                <p>{desc}</p>
                            </div>
                        </div>
                        <div className="contact__wrapper">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <form className="form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="item01"
                                                    value={this.state.contactName}
                                                    onChange={(e)=>{this.setState({contactName: e.target.value});}}
                                                    placeholder="Your Name *"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="item02"
                                                    value={this.state.contactEmail}
                                                    onChange={(e)=>{this.setState({contactEmail: e.target.value});}}
                                                    placeholder="Your Email *"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    name="number"
                                                    id="item04"
                                                    value={this.state.contactNumber}
                                                    onChange={(e)=>{this.setState({contactNumber: e.target.value});}}
                                                    placeholder="Mobile Number *"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    id="item03"
                                                    value={this.state.contactSubject}
                                                    onChange={(e)=>{this.setState({contactSubject: e.target.value});}}
                                                    placeholder="Your Subject *"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <textarea 
                                                    rows="8" 
                                                    type="text"
                                                    id="item05"
                                                    name="message"
                                                    value={this.state.respondMassage}
                                                    onChange={(e)=>{this.setState({respondMassage: e.target.value});}}
                                                    placeholder="Your Message"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="default-btn"><span>{btnText}</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <GoogleMap />
                <FooterTwo />
            </Fragment>
        );
    }
}
 
export default Contact;