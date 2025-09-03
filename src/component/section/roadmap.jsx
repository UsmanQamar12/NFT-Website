import { Component } from "react";


const title = <h2> <span> DNEPROVSKIY &</span> GANG ROADMAP</h2>;
const desc = "Fingers up, swagger on — this gang’s moving, nothing’s stopping us!";

let roadmapList = [
    {
        imgUrl: 'assets/images/roadmap/01.png',
        imgAlt: 'Roadmap Icon',
        title: 'PUMP.TIRES LAUNCH',
        desc: 'We drop on PUMP.TIRES and put the platform to the gang test.',
    },
    {
        imgUrl: 'assets/images/roadmap/02.png',
        imgAlt: 'Roadmap Icon',
        title: 'CURRENT KING',
        desc: 'Aiming for #1 everywhere. Bring the hype, squad!',
    },
    {
        imgUrl: 'assets/images/roadmap/03.png',
        imgAlt: 'Roadmap Icon',
        title: 'INCUBATOR MODE',
        desc: 'We hold steady, stack “promiles” and get ready for the grand launch.',
    },
    {
        imgUrl: 'assets/images/roadmap/04.png',
        imgAlt: 'Roadmap Icon',
        title: 'PulseX – TURN IT UP',
        desc: 'We storm PulseX, break the system, and chase that win.',
    },
    {
        imgUrl: 'assets/images/roadmap/05.png',
        imgAlt: 'Roadmap Icon',
        title: 'GAME & NFT DROP',
        desc: 'NFTs hit OpenSea — grab yours to play “Last Shot.” Only legends win!',
    },
    {
        imgUrl: 'assets/images/roadmap/06.png',
        imgAlt: 'Roadmap Icon',
        title: 'TOP SECRET MOVE',
        desc: 'The big play’s coming. Roll with us and be proud when it drops!',
    },
]



class RoadMap extends Component {
    render() { 
        return (
            <section className="roadmap padding-top padding-bottom" id="roadmap">
                <div className="container">
                    <div className="section-header aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                        <div className="section-header__content" style={{color: "white"}}>
                            {title}
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className="roadmap__wrapper">
                        <div className="row g-4">
                            {roadmapList.map((val, i) => (
                                <div className="col-lg-4 col-md-6" key={i}>
                                    <div className="roadmap__item aos-animate aos-init" data-aos="fade-left" data-aos-duration="1000" >
                                        <div className="roadmap__inner" >
                                            <div className="roadmap__thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="roadmap__content">
                                                <h4>{val.title}</h4>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default RoadMap;