import "../styles/Card.css";
import { useNavigate } from 'react-router-dom'; 

const Card = (props) => {
    
        const navigate = useNavigate();
      
        const handleCardClick = (accommodationData) => {
          navigate('/accommodation', { state: { accommodationData } });
        };

    return ( 
        <div className="card" style={ {backgroundImage: `url(${props.data.cover})`} }>
            <div onClick={() => handleCardClick(props.data)}>
                <p>{props.data.title}</p>
            </div>
        </div>
     );
}
 
export default Card;