import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:a4dil.efx@gmail.com" data-cursor="disable">
                a4dil.efx@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917050561814" data-cursor="disable">
                +91 70505 61814
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://wa.me/917050561814"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Whstsapp  <MdArrowOutward />
            </a>


            <a
              href="https://www.instagram.com/a4dil.efx"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <a href="https://www.instagram.com/sm4adill" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'var(--accentColor)' }}><span>sm4adill</span></a>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
