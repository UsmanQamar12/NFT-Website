import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";


let blogList = [
    {
        imgUrl: 'assets/images/blog/01.jpg',
        imgAlt: 'Blog Images',
        title: 'Distinct Resource Maximizing',
        Name: 'Jhon Doe',
        Date: '30 May 2022',
        desc: 'Unique conceptua visionar proces ariwith tactical ramatica uthorita generate frontend niches after one centered quaty vectoris with outofthebox scenario is ompelling',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/blog/02.jpg',
        imgAlt: 'Blog Images',
        title: 'How Mint Bored Apes?',
        Name: 'Jhon Doe',
        Date: '30 May 2022',
        desc: 'Unique conceptua visionar proces ariwith tactical ramatica uthorita generate frontend niches after one centered quaty vectoris with outofthebox scenario is ompelling',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/blog/03.jpg',
        imgAlt: 'Blog Images',
        title: 'Upcoming Drops of Bore Apes',
        Name: 'Jhon Doe',
        Date: '30 May 2022',
        desc: 'Unique conceptua visionar proces ariwith tactical ramatica uthorita generate frontend niches after one centered quaty vectoris with outofthebox scenario is ompelling',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/blog/04.jpg',
        imgAlt: 'Blog Images',
        title: 'Distinct Resource Maximizing',
        Name: 'Jhon Doe',
        Date: '30 May 2022',
        desc: 'Unique conceptua visionar proces ariwith tactical ramatica uthorita generate frontend niches after one centered quaty vectoris with outofthebox scenario is ompelling',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/blog/05.jpg',
        imgAlt: 'Blog Images',
        title: 'How Buy Bored Apes?',
        Name: 'Jhon Doe',
        Date: '30 May 2022',
        desc: 'Unique conceptua visionar proces ariwith tactical ramatica uthorita generate frontend niches after one centered quaty vectoris with outofthebox scenario is ompelling',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/blog/06.jpg',
        imgAlt: 'Blog Images',
        title: 'Distinct Resource Maximizing',
        Name: 'Jhon Doe',
        Date: '30 May 2022',
        desc: 'Unique conceptua visionar proces ariwith tactical ramatica uthorita generate frontend niches after one centered quaty vectoris with outofthebox scenario is ompelling',
        btnText: 'Read More',
    },
]


class Blog extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Our Blog Post'} curPage='Blog' />
                <div className="blog padding-top padding-bottom">
                    <div className="container">
                        <div className="blog__wrapper">
                            <div className="row g-4">
                                {blogList.map((val, i) => (
                                    <div className="col-lg-6" key={i}>
                                        <div className="blog__item">
                                            <div className="blog__inner">
                                                <div className="blog__thumb">
                                                    <Link to="/blog-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                </div>
                                                <div className="blog__content">
                                                    <div className="blog__content-top">
                                                        <h4><Link to="/blog-single">{val.title}</Link></h4>
                                                        <ul className="blog__meta d-flex flex-wrap align-items-center">
                                                            <li className="blog__meta-author">
                                                                <a href="#">{val.Name}</a>
                                                            </li>
                                                            <li className="blog__meta-date">
                                                                <a href="#">{val.Date}</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p>{val.desc}</p>
                                                    <Link to="/blog-single" className="default-btn"><span>{val.btnText}</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default Blog;