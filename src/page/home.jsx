import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import Banner from "../component/section/banner";
import Collection from "../component/section/collection";
import Community from "../component/section/community";
import Faq from "../component/section/faq";
import Mint from "../component/section/mint";
import RoadMap from "../component/section/roadmap";
import Team from "../component/section/team";


class Home extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
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
 
export default Home;