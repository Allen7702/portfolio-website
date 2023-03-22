import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import useWindow from "react-window-size-simple";

import Card from "./tools/browser/Card";
import SmallCard from './tools/mobile/Card';
import InvertedCard from "./tools/browser/InvertedCard";

import {
  amecoreLight,
  mandingaLight,
  AllenPicsLight,
  AllenPicsDark,
  mandingaDark,
} from "./data/photos";
import Title from "../../common/layout/Title";

const Projects = ({
  innerRef,
  // Redux State
  settings: { displayMode },
}) => {

  const { width } = useWindow()

  return (
    <div className='app' ref={innerRef}>
      <div className='projects'>
        <div style={{ marginBottom: "2.5em" }}>
          <Title icon={<FontAwesomeIcon icon={faTools} />} title={"Projects"} />
        </div>
        <div className='body app'>
          {width < 860 ? (
            <div>
              <SmallCard
                pics={amecoreLight}
                title={"amecore.co.tz"}
                link={"https://amecore.co.tz"}
                subTitle={"Website"}
                description={
                  "A website aimed at giving product solutions to various technical problems."
                }
                tech={[
                  "Dual-Mode",
                  "Time management",
                  "Free",
                  "Metrics",
                  "Timeline",
                ]}
                gitUrl={"https://github.com/Allen7702/Amecore-Technology.git"}
              />
              <SmallCard
                pics={displayMode ? mandingaDark : mandingaLight}
                title={"MandingaTravels"}
                link={"https://mandingatravels.netlify.app/"}
                subTitle={"Website"}
                description={
                  "A Travel agency site that promotes and showcases various tourist points of attraction from Tanzania "
                }
                tech={[
                  "Dual-Mode",
                  "Whatsapp API",
                  "React",
                  "Tailwind",
                  "Redux",
                ]}
                gitUrl={"https://github.com/Allen7702/mandingaTravel.git"}
              />
              <SmallCard
                pics={displayMode ? AllenPicsDark : AllenPicsLight}
                title={"Allen.com"}
                link={"https://Allen.com"}
                subTitle={"Portfolio Website"}
                description={
                  "My portfolio website. Includes client side static site."
                }
                tech={["Showcase", "Personal", "Mui", "Javascript"]}
                gitUrl={"https://github.com/Allen7702/portfolio.github.io"}
              />
            </div>
          ) : (
            <>
              <Card
                pics={amecoreLight}
                title={"amecore.co.tz"}
                link={"https://amecore.co.tz"}
                subTitle={"Website"}
                description={
                  "A website aimed at giving product solutions to various technical problems."
                }
                tech={[
                  "Dual-Mode",
                  "management",
                  "Free",
                  "Metrics",
                  "PHP",
                ]}
                gitUrl={"https://github.com/Allen7702/Amecore-Technology.git"}
              />
              <InvertedCard
                pics={displayMode ? mandingaDark : mandingaLight}
                title={"MandingaTravels"}
                link={"https://mandingatravels.netlify.app/"}
                subTitle={"Website"}
                description={
                  "A Travel agency site that promotes and showcases various tourist points of attraction from Tanzania "
                }
                tech={[
                  "Dual-Mode",
                  "Whatsapp API",
                  "React",
                  "Tailwind",
                  "Redux",
                ]}
                gitUrl={"https://github.com/Allen7702/mandingaTravel.git"}
              />
              <Card
                pics={displayMode ? AllenPicsDark : AllenPicsLight}
                title={"Allen.com"}
                link={"https://Allen.com"}
                subTitle={"Portfolio Website"}
                description={
                  "My portfolio website. Includes client side static site and admin overview functionalities to check stats and messages."
                }
                tech={["Showcase", "Personal", "Mui", "Javascript"]}
                gitUrl={"https://github.com/Allen7702/portfolio.github.io"}
              />
            </>
          )}
        </div>
        <div className='read-more flex_middle' style={{ marginTop: "-3em" }}>
          <div className='ft-bold' style={{ marginLeft: "0.5em" }}>
            <a
              href='https://github.com/Allen7702?tab=repositories'
              rel='noreferrer nofollow'
              target='_blank'
            >
              More Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(Projects);
