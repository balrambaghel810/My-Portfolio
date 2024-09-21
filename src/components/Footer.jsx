import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to me today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink
              to="https://drive.google.com/file/d/1pB0sl6L-rJPMALyCzEQwnlmzFg6ELqyc/view?usp=drivesdk"
              target="_blank"
            >
              <Button>Get my CV</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Balram Baghel</h3>
            <p>
              I design and code beautifully simple things, and i love what I do.
            </p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Send your email to connect with me.</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Send" />
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows me</h3>
            <div className="footer-social--icons">
              <div>
                <a
                  href="https://www.linkedin.com/in/balram-baghel-3a09b6222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                >
                  <FaLinkedin className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/balrambaghel810/?igsh=NTc4MTIwNjQ2YQ%3D%3D"
                  target="_blank"
                >
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/918109880815/?text=Hello%21%20I%20want%20to%20connect%20with%20you."
                  target="_blank"
                >
                  <FaWhatsapp className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call me</h3>
            <h3>+918109880815</h3>
            <h3>balrambaghel810@gmail.com</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              Copyright @ {new Date().getFullYear()} Balram Baghel. All Rights
              Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          
        
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(50%);


      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
