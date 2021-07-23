import React from 'react';



const Footer = () => {
    return (
        <div>
          <footer>
          <ul>
            <li className="link"><a href="https://github.com/ishitakeshawani" target="_blank" rel="noreferrer" ><i className="fab fa-github"></i></a></li>
            <li className="link"><a href="https://twitter.com/ishitakeshawani" target="_blank" rel="noreferrer" ><i className="fab fa-twitter"></i></a></li>
            <li className="link"><a href="https://www.linkedin.com/in/ishitakeshawani/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
            <li className="link"><a href="https://ishitakeshawani.netlify.app/" target="_blank" rel="noreferrer"><i className="fas fa-briefcase"></i></a></li>
          </ul>
          <div className="text">
          © 2020 | IshitaK |&nbsp;
          <a href="#alertBox" style={{cursor: "pointer", color: "black"}}>Privacy Policy</a>
          </div>
        </footer>
        </div>
    );
}

export default Footer;