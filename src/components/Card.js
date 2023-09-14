import "../styles/Card.css";

const Card = (props) => {
    
    return ( 
        <div className="card" style={ {backgroundImage: `url(${props.data.cover})`} }>
            <div>
                <p>{props.data.title}</p>
            </div>
        </div>
     );
}
 
export default Card;