import { Component } from "react";

const title = (
  <h2 className="mx-0">
    {" "}
    <span className="d-block"> F.A.Q</span> Questions
  </h2>
);

class Faq extends Component {
  render() {
    return (
      <section id="faq" className="faq padding-top padding-bottom">
        <div className="container">
          <div className="faq__wrapper">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="section-header">
                  <div className="section-header__content text-start">
                    {title}
                  </div>
                </div>
                <div className="accordion" id="faqAccordion2">
                  <div className="row g-3">
                    <div className="col-12">
                      <div
                        className="accordion__item"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <div className="accordion__header" id="faq1">
                          <button
                            className="accordion__button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqBody1"
                            aria-expanded="false"
                            aria-controls="faqBody1"
                          >
                            01 What’s the message behind this project?
                            <span className="plus-icon"></span>
                          </button>
                        </div>
                        <div
                          id="faqBody1"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq1"
                          data-bs-parent="#faqAccordion2"
                        >
                          <div className="accordion__body">
                            There are 2,373,555 villages out there. In every
                            single one, there’s folks like Ivan and Artem — true
                            legends of the daily grind. Let’s find these heroes
                            and show ‘em off to the world. The world deserves a
                            village army of everyday legends!
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="accordion__item"
                        data-aos="fade-up"
                        data-aos-duration="1100"
                      >
                        <div className="accordion__header" id="faq2">
                          <button
                            className="accordion__button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqBody2"
                            aria-expanded="true"
                            aria-controls="faqBody2"
                          >
                            02 Why should I join this project?{" "}
                            <span className="plus-icon"></span>
                          </button>
                        </div>
                        <div
                          id="faqBody2"
                          className="accordion-collapse collapse show"
                          aria-labelledby="faq2"
                          data-bs-parent="#faqAccordion2"
                        >
                          <div className="accordion__body">
                            Because our project grows strong with the crew
                            behind it! We got hundreds of thousands of active
                            members rollin’ through our channels. Come squad up,
                            dive into the village universe, vibe out and cash in
                            on our hype!
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="accordion__item"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                      >
                        <div className="accordion__header" id="faq3">
                          <button
                            className="accordion__button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqBody3"
                            aria-expanded="false"
                            aria-controls="faqBody3"
                          >
                            03 Do you drink while making content?
                            <span className="plus-icon"></span>
                          </button>
                        </div>
                        <div
                          id="faqBody3"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq3"
                          data-bs-parent="#faqAccordion2"
                        >
                          <div className="accordion__body">
                            Nah… Yeah... Sometimes. Depends on the mood, the
                            weather, and what’s poppin’ on the calendar. If the
                            moment’s right, we get into a controlled state of
                            lit-ness. Those promiles (percentages and mgs) in
                            our blood fuel the creative flow.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="accordion__item"
                        data-aos="fade-up"
                        data-aos-duration="1300"
                      >
                        <div className="accordion__header" id="faq4">
                          <button
                            className="accordion__button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqBody4"
                            aria-expanded="false"
                            aria-controls="faqBody4"
                          >
                            04 Does Papa Ivan make grumpy face?
                            <span className="plus-icon"></span>
                          </button>
                        </div>
                        <div
                          id="faqBody4"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq4"
                          data-bs-parent="#faqAccordion2"
                        >
                          <div className="accordion__body">
                            Always, bro. He’s seen it all and drank an ocean of
                            booze. Life leaves its mark — on your vibe and your
                            mug. Still, he’s a real OG and the best homie to
                            party with
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="accordion__item"
                        data-aos="fade-up"
                        data-aos-duration="1400"
                      >
                        <div className="accordion__header" id="faq5">
                          <button
                            className="accordion__button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqBody5"
                            aria-expanded="false"
                            aria-controls="faqBody5"
                          >
                            05 I wanna join your gang!
                            <span className="plus-icon"></span>
                          </button>
                        </div>
                        <div
                          id="faqBody5"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq5"
                          data-bs-parent="#faqAccordion2"
                        >
                          <div className="accordion__body">
                            Already in, mate, if you know the rules of the
                            village streets! We ride together and never snitch,
                            no dawg with the prosecutor!
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="accordion__item"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        <div className="accordion__header" id="faq6">
                          <button
                            className="accordion__button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqBody6"
                            aria-expanded="false"
                            aria-controls="faqBody6"
                          >
                            06 Can I meetup and grab a drink with all?
                            <span className="plus-icon"></span>
                          </button>
                        </div>
                        <div
                          id="faqBody6"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq6"
                          data-bs-parent="#faqAccordion2"
                        >
                          <div className="accordion__body">
                            Sure can! We’re real people, dropping vids, having a
                            blast, and building our village-hero fam. Hit us up
                            on socials. Oh, and heads up… You’re buying the
                            first round!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="faq__thumb text-center aos-init aos-animate"
                  data-aos-duration="2000"
                  data-aos="zoom-in-right"
                >
                  <img src="assets/images/faq/02.png" alt="FAQ Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Faq;
