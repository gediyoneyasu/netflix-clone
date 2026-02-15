import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Audio and Subtitles",
      links: [
        { name: "Audio Description", url: "#" },
        { name: "Help Center", url: "#" },
        { name: "Gift Cards", url: "#" },
        { name: "Media Center", url: "#" }
      ]
    },
    {
      title: "Audio Description",
      links: [
        { name: "Investor Relations", url: "#" },
        { name: "Jobs", url: "#" },
        { name: "Terms of Use", url: "#" },
        { name: "Privacy", url: "#" }
      ]
    },
    {
      title: "Legal Notices",
      links: [
        { name: "Cookie Preferences", url: "#" },
        { name: "Corporate Information", url: "#" },
        { name: "Contact Us", url: "#" }
      ]
    },
    {
      title: "Corporate Information",
      links: [
        { name: "Speed Test", url: "#" },
        { name: "Legal Guarantee", url: "#" },
        { name: "Netflix Originals", url: "#" }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer_container">
        
        {/* Social Media Icons */}
        <div className="footer_social">
          <a href="#" className="social_icon" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="#" className="social_icon" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" className="social_icon" aria-label="Twitter">
            <TwitterIcon />
          </a>
          <a href="#" className="social_icon" aria-label="YouTube">
            <YouTubeIcon />
          </a>
        </div>

        {/* Footer Links Grid */}
        <div className="footer_links_grid">
          {footerLinks.map((section, index) => (
            <div key={index} className="footer_link_section">
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url} className="footer_link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Code Button */}
        <div className="footer_service_code">
          <button className="service_code_btn">Service Code</button>
        </div>

        {/* Copyright */}
        <div className="footer_copyright">
          <p>&copy; {currentYear} Netflix, Inc. and its affiliates. All rights reserved.</p>
          <p className="footer_trademark">Netflix™ is a registered trademark.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
