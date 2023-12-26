import activeStar from '../images/star-active 1.svg';
import inactiveStar from '../images/star-inactive 1.svg';
import "../styles/Stars.css";

const Stars = ({rating}) => {
    const starsContainer = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          starsContainer.push(<li key={i} className="star filled"><img src={activeStar} alt="étoile pleine"/></li>);
        } else {
          starsContainer.push(<li key={i} className="star"><img src={inactiveStar} alt="étoile vide"/></li>);
        }
    }
    
    return (
        <ul className='stars-container'>
            {starsContainer}
        </ul>     
    )
}

export default Stars;