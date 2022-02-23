import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <>
      <ul className="footer">
        <div className="footer-names">
          <div className="name">
            <li>Kielvin Bariso</li>
            <li className="icons">
              <a
                href="https://www.linkedin.com/in/kielvin-bariso/"
                target="_blank"
              >
                <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" />
              </a>
              <a href="https://github.com/kbariso" target="_blank">
                <img src="https://res.cloudinary.com/dd9qejhag/image/upload/v1644768274/Potionable/GitHub-Mark-32px_cpn8bb.png" />
              </a>
            </li>
          </div>
        </div>
      </ul>
    </>
  );
};

export default Footer;
