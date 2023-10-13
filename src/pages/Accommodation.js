import "../styles/Accommodation.css";
import { useParams } from "react-router-dom";
import Accommodations from "../data/data.json";
import Slideshow from "../components/Slideshow";
import Chevron from '../images/Vector.svg';
import { useState, useEffect } from "react";
import activeStar from '../images/star-active 1.svg';
import inactiveStar from '../images/star-inactive 1.svg';
import { useNavigate } from 'react-router-dom'; 



const Accommodation = () => {
    const { id } = useParams();

    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [equipementOpen, setEquipementOpen] = useState(false);

    const starsContainer = [];

    const accommodationData = Accommodations.find((accommodation) => accommodation.id === id);
    if(accommodationData === undefined) {
        window.location.replace('/not-found')
        return
    }

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
        <Slideshow data={accommodationData.pictures}/>
        <section className="accommodation-preview">
            <div>
                <h2>{accommodationData.title}</h2>
                <p>{accommodationData.location}</p>
                <ul className="tags">
                    {accommodationData.tags.map((tag)=>
                    (
                    <li>{tag}</li>  
                    ))} 
                </ul>
            </div>
            <div>
                <p className="host-name">{accommodationData.host.name}<img src={accommodationData.host.picture} alt="annonceur"/></p>
                <ul>
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
};

export default Accommodation;
