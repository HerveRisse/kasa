import "../styles/Footer.css";
import logo from '../images/LOGO.svg';

const Footer = () => {
    return ( 
        <div className="footer">
            <img src={logo} alt="logo kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
     );
}
 
export default Footer;