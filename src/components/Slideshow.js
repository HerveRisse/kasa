import "../styles/Accommodation.css"
import Chevron from '../images/Vector.svg';
import { useState } from "react";
import activeStar from '../images/star-active 1.svg';
import inactiveStar from '../images/star-inactive 1.svg';

const Slideshow = ({ accommodations, index }) => {
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [equipementOpen, setEquipementOpen] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(index);

  const navigateToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    else {
        setCurrentIndex(accommodations.length - 1)
    }
  };
  const navigateToNext = () => {
    if (currentIndex < accommodations.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    else {
        setCurrentIndex(0)
    }
  };

  const accommodationData = accommodations[currentIndex];

  const starsContainer = [];

  // Remplit le tableau avec les étoiles pleines ou vides en fonction du taux de notation
  for (let i = 1; i <= 5; i++) {
    if (i <= accommodationData.rating) {
      starsContainer.push(<li key={i} className="star filled"><img src={activeStar} alt="étoile pleine"/></li>);
    } else {
      starsContainer.push(<li key={i} className="star"><img src={inactiveStar} alt="étoile vide"/></li>);
    }
  }

    return ( 
        <div className="accommodation">
            <button onClick={navigateToPrevious} >
        Précédent
      </button>
      <button
        onClick={navigateToNext}
      >
        Suivant
      </button>
            <img src={accommodationData.cover} alt=""/>
            <section className="accommodation-preview">
                <div>
                    <h1>{currentIndex}</h1>
                    <h2>{accommodationData.title}</h2>
                    <p>{accommodationData.location}</p>
                    <div className="tags">{accommodationData.tags}</div>
                </div>
                <div>
                    <p>{accommodationData.host.name}</p>
                    <ul>
                        {accommodationData.rating}
                        {starsContainer}
                    </ul>
                </div>
            </section>
            <section className="accommodation-info">
                <div className="description">
                    <div onClick={()=>{setDescriptionOpen(!descriptionOpen)}}>
                        <h3>Description</h3>
                        <img className={descriptionOpen ? 'up' : 'down'} src={Chevron} alt="chevron"/>
                    </div>
                    <p className={descriptionOpen ? 'open' : 'close'}>{accommodationData.description}</p>
                </div>
                <div className="equipement">
                    <div onClick={()=>{setEquipementOpen(!equipementOpen)}}>
                        <h3>Equipement</h3>
                        <img className={equipementOpen ? 'up' : 'down'} src={Chevron} alt="chevron"/>
                    </div>
                    <ul className={equipementOpen ? 'open' : 'close'}>
                        {accommodationData.equipments.map((equipement)=>
                        (
                        <li>{equipement}</li>  
                        ))} 
                    </ul>
                </div>
            </section>
        </div>
     );
}
 
export default Slideshow;