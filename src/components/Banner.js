import "../styles/Banner.css";

const Banner = (props) => {
    return ( 
        <div id={props.id} className="banner">
            <img src={props.img} alt="bannière"/>
            <div>
                <h1>{props.title}</h1>
            </div>
        </div>
     );
}
 
export default Banner;