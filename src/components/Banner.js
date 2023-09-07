import "../styles/Banner.css";
import falaiseImg from '../images/falaise.svg';

const Banner = () => {
    return ( 
        <div className="banner">
            <img src={falaiseImg} alt="falaise"/>
            <div>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
     );
}
 
export default Banner;