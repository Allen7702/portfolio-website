import React, { useState } from "react";
import PropTypes from "prop-types";
import validator from "email-validator";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

import { sendEmail } from "../../../redux/actions/contact";

import Footer from "../../common/layout/Footer";
import Title from "../../common/layout/Title";

import Card from "./tools/Card";
import DetailsCard from "./tools/DetailsCard";
import EmailCard from "./tools/EmailCard";

const Contact = ({
  refSec,
  show,
  changeDialog,
  innerRef,
  // Redux State
  contact: { emailLoading, emailError, emailSuccess, emailMessage },
  settings: { displayMode },
  // Redux Actions
  sendEmail,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    message: "Hi!",
  });

  const [messageEmptyError, setMessageEmptyError] = useState(false);
  const [nameEmptyError, setNameEmptyError] = useState(false);
  const [emailEmptyError, setEmailEmptyError] = useState(false);
  const [emailInvalidError, setEmailInvalidError] = useState(false);

  const { name, email, organisation, message } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (name.length === 0) {
      setNameEmptyError(true);
      setTimeout(() => setNameEmptyError(false), 3000);
    } else if (email.length === 0) {
      setEmailEmptyError(true);
      setTimeout(() => setEmailEmptyError(false), 3000);
    } else if (message.length === 0) {
      setMessageEmptyError(true);
      setTimeout(() => setMessageEmptyError(false), 3000);
    } else if (!validator.validate(email)) {
      setEmailInvalidError(true);
      setTimeout(() => setEmailInvalidError(false), 3000);
    } else {
      sendEmail(name, email, organisation, message);
    }
  };

  return (
    <>
      <div className='app'>
        <div className='contact app' ref={innerRef}>
          <div style={{ marginBottom: '2.5em' }} >
            <Title
              icon={<FontAwesomeIcon icon={faMobileAlt} />}
              title={"Contact"}
            />
          </div>
          <EmailCard displayMode={displayMode} />
          <div className='or'>OR</div>
          <Card
            displayMode={displayMode}
            messageEmptyError={messageEmptyError}
            emailEmptyError={emailEmptyError}
            nameEmptyError={nameEmptyError}
            emailInvalidError={emailInvalidError}
            onChange={onChange}
            onSubmit={onSubmit}
            emailLoading={emailLoading}
            name={name}
            email={email}
            organisation={organisation}
            message={message}
          />
          <div ref={refSec} />
          <DetailsCard displayMode={displayMode} />
          <Footer />
        </div>
      </div>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  sendEmail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contact: state.contact,
  settings: state.settings,
});

const mapActionsToProps = {
  sendEmail,
};

export default connect(mapStateToProps, mapActionsToProps)(Contact);
