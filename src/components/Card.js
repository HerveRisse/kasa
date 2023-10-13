import "../styles/Card.css";
import { useNavigate } from 'react-router-dom'; 

const Card = (props) => {
    
        const navigate = useNavigate();
      
        const handleCardClick = () => {
          navigate(`/accommodation/${props.data.id}`);
        };

    return ( 
        <div className="card" style={ {backgroundImage: `url(${props.data.cover})`} }>
            <div onClick={handleCardClick}>
                <p>{props.data.title}</p>
            </div>
        </div>
     );
}
 
export default Card;