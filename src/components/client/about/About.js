import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Title from "../../common/layout/Title";
import useWindow from 'react-window-size-simple';
import  allen  from '../about/allen.jpg';

const About = ({ innerRef }) => {

  const { width } = useWindow

  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div className='app' ref={innerRef}>
        <div className='about' style={{ justifyContent: "center" }}>
          <div style={{ marginBottom: '2.5em' }} >
            <Title
              icon={<FontAwesomeIcon icon={faUser} />}
              title={"About Me"}
            />
          </div>
          <div className='body app' style={{ alignItems: "flex-start" }}>
            <div className='details'>
              <div>
                My name is Allen and I like gaining new experiences and
                creating stuff.  As a 22-year-old computer science student, 
                I specialize in software development and have a keen 
                 in mobile development.
              </div>
              <div style={{ marginTop: "2em" }}>
                I believe that technology should be as ergonomic as it is
                complex. Currently, I work as a software developer 
              </div>
              <div style={{ marginTop: "2em" }}>
                In my free time, I enjoy listening to music .
              </div>
            </div>
            <div
              className={width < 1028 ? "image flex_middle" : "image flex_left"}
            >
              <div
                style={{
                  display: isLoading ? "block" : "none",
                }}
                className='loader-about flex_middle'
              >
                <div className='loader-me' />
              </div>
              <div style={{ display: isLoading ? "none" : "block" }}>
                <img
                  src={allen}
                  alt='Allen Profile Pic'
                  onLoad={onLoad}
                />
              </div>
              <div className='border' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

About.propTypes = {}

export default About