import React from "react";
import styled from "styled-components";
const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        max-width: 50rem;
        margin: auto;
      }
      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid rgba(98, 84, 243, 0.5);
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  `;
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Feel free to Contact </h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.048986428772!2d75.88629987383138!3d22.614645831430767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fb28a5660d8b%3A0x2a7a0698a930c80f!2sChameli%20Devi%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1703517257498!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xjvnbdbb"
            className="contact-inputs"
            method="POST"
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              placeholder="Enter your message here"
              id=""
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value=" send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
