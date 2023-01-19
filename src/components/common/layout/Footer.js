import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Footer = ({  }) => {
  return (
    <div className='footer app'>
      <div className='text cursor_pointer'>
        <span style={{ marginBottom: "0.5em", fontSize: "0.8em" }}>
          Handcrafted with &#10084; by{" "}
          <a
            href='https://admin.Allen.com/login'
            target={"_blank"}
            rel='noreferrer nofollow'
            style={{ fontSize: "0.95em", marginRight: "0.3em" }}
          >
            Allen B
          </a>{" "}
        </span>
      </div>
      <div className='text' style={{ fontSize: "0.55em", fontWeight: "200", marginTop: '0.5em' }}>
        v2.0.1 &middot; Update 26 Nov 22 &middot;
        All rights reserved
      </div>
    </div>
  );
};

Footer.propTypes = {};  

export default Footer;
