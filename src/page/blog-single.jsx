import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Author from "../component/sidebar/author";
import Comments from "../component/sidebar/comments";
import Respond from "../component/sidebar/respond";


let socialList = [
    {
        imgUrl: 'assets/images/social/discord.png',
        imgAlt: 'Social Thumb',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/social/twitter.png',
        imgAlt: 'Social Thumb',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/social/instagram.png',
        imgAlt: 'Social Thumb',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/social/twitch.png',
        imgAlt: 'Social Thumb',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/social/youtube.png',
        imgAlt: 'Social Thumb',
        siteLink: '#',
    },
]


class BlogSingle extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Serenity hassir taken...'} curPage={'Blog Details'} />
                <div className="blog padding-top padding-bottom">
                    <div className="container">
                        <div className="blog__wrapper">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-12">
                                    <article>
                                        <div className="post-item-2">
                                            <div className="post-inner">
                                                <div className="post-thumb px-30 ty--40">
                                                    <img src="assets/images/blog/single/01.jpg" alt="blog" />
                                                </div>
                                                <div className="post-content pt-0">
                                                    <p>Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe wonderful.</p>

                                                    <blockquote className="single-quote mb-30">
                                                        <div className="quotes">
                                                            Dynamicaly recaptiuaze distribute technologies wherease
                                                            turnkey channels and onotonec provide aces to resource
                                                            levelng expert vias worldwide deverabes uoliticly extend
                                                            aserser are diverse vortals.
                                                            <span>...Melissa Hunter</span>
                                                        </div>
                                                    </blockquote>

                                                    <p>Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe wonderful.</p>

                                                    <div className="post-thumb mb-30">
                                                        <img src="assets/images/blog/single/03.jpg" alt="blog-img" />
                                                    </div>

                                                    <p>Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe wonderful.</p>

                                                    <div className="post-thumb mb-30">
                                                        <img src="assets/images/blog/single/02.jpg" alt="blog" />
                                                        <a href="https://www.youtube.com/embed/pVoh0l6_dJg" className="play-btn" target="_blank">
                                                            <i className="icofont-ui-play"></i>
                                                        </a>
                                                    </div>

                                                    <p>Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe wonderful.</p>

                                                    <div className="tags-area">
                                                        <ul className="tags lab-ul justify-content-center">
                                                            <li>
                                                                <a href="#">NFTs</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="active">Landing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Portfolio</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="social justify-content-center">
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
                                        <div className="article-pagination">
                                            <div className="prev-article">
                                                <a href="#"><i className="fa-solid fa-angles-left"></i> Previous Article</a>
                                                <p>Evisculate Parallel Processes via Technica Sound Models Authoritative</p>
                                            </div>
                                            <div className="next-article">
                                                <a href="#">Next Article <i className="fa-solid fa-angles-right"></i></a>
                                                <p>Qvisculate Parallel Processes via Technica Sound Models Authoritative</p>
                                            </div>
                                        </div>
                                        <Author />
                                        <Comments />
                                        <Respond />
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default BlogSingle;