import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import HeaderTwo from "../component/layout/header-2";
import Banner from "../component/section/banner";
import Collection from "../component/section/collection";
import Community from "../component/section/community";
import Faq from "../component/section/faq";
import Mint from "../component/section/mint";
import RoadMap from "../component/section/roadmap";
import Team from "../component/section/team";


class OnePage extends Component {
    render() { 
        return (
            <Fragment>
                <HeaderTwo />
                <Banner />
                <Collection />
				<Mint />
				<RoadMap />
				<Team />
				<Faq />
				<Community />
                <Footer />
            </Fragment>
        );
    }
}
 
export default OnePage;