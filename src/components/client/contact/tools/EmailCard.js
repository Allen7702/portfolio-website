import React from 'react'

const EmailCard = ({ displayMode }) => {
  return (
    <div
      className={
        displayMode ? "card-contact card-contact--dark flex_middle" : "card-contact flex_middle"
      }
      style={{ minHeight: "74px" }}
    >
      <div className='title' style={{ margin: "0.5em 1em 0 0" }}>
        Get in touch!
      </div>
      <a
        href='mailto:allen22052000@gmail.com'
        alt='allen22052000@gmail.com'
      >
        <div className='email-button'>Send Email</div>
      </a>
    </div>
  );
}

export default EmailCard