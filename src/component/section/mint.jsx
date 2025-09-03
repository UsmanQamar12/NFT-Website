import { Component } from "react";

const btnText = "Mint Now";

let mintList = [
  {
    title: "Project Size",
    count: "2373555",
    desc: "VILLAGES",
  },
  {
    title: "GOAL TO ACHIEVE",
    count: "1",
    desc: "CURRENT KING",
  },
  {
    title: "START DATE",
    count: "3rd",
    desc: "Sep 2025",
  },
  {
    title: "SOCIAL GOAL",
    count: "1",
    desc: "A DNEPROVSKY MONUMENT",
  },
];

class Mint extends Component {
  render() {
    return (
      <section
        id="mint"
        className="mint padding-top padding-bottom bg--cover"
        style={{ backgroundImage: "url(/assets/images/mint/bg.jpg)" }}
      >
        <div className="container">
          <div className="mint__wrapper">
            <div className="row g-5 align-items-end">
              <div className="col-lg-6">
                <div
                  className="mint__content aos-animate aos-init"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div className="row gy-5 gx-4 align-items-center">
                    {mintList.map((val, i) => (
                      <div className="col-6" key={i}>
                        <div className="mint__item">
                          <div className="mint__inner">
                            <h6
                              className="mint__sub-title"
                              style={{ color: "white" }}
                            >
                              {val.title}
                            </h6>
                            <h2
                              className="mint__numbers"
                              style={{ fontSize: "30px"}}
                            >
                              {val.count}
                            </h2>
                            <h4
                              className="mint__name text-uppercase"
                              style={{ fontSize: "20px" }}
                            >
                              {val.desc}
                            </h4>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="col-6">
                      <div className="text-start">
                        <a href="http://pump.tires/" className="default-btn">
                          {btnText}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="mint__thumb aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0px", // No gap between images
                    
                  }}
                >
                  <img
                    src="assets/images/mint/mint1.png"
                    alt="Minting Image"
                    style={{ width: "230px", height: "auto" }}
                  />
                  <img
                    src="assets/images/mint/mint2.png"
                    alt="Minting Image"
                    style={{ width: "230px", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Mint;
