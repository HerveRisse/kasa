import "../styles/Accommodation.css";
import { useParams, Navigate } from "react-router-dom";
import Accommodations from "../data/data.json";
import Slideshow from "../components/Slideshow";
import Stars from "../components/Stars";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";
import React from "react";

const Accommodation = () => {
    const { id } = useParams();

    const accommodationData = Accommodations.find((accommodation) => accommodation.id === id);
    
    if (!accommodationData) {
        return <Navigate to="/not-found"/>
    }

    const equipmentsContent = accommodationData.equipments.map((equipement, index) => (
        <React.Fragment key={index}>
          {index > 0 && <br />}
          {equipement}
        </React.Fragment>
    ));

  return (
    <div className="accommodation">
        <Slideshow data={accommodationData.pictures}/>
        <section className="accommodation-preview">
            <div>
                <h2>{accommodationData.title}</h2>
                <p>{accommodationData.location}</p>
                <Tags tags={accommodationData.tags}/>
            </div>
            <div>
                <p className="host-name">{accommodationData.host.name}<img src={accommodationData.host.picture} alt="annonceur"/></p>
                <Stars rating={accommodationData.rating}/>
            </div>
        </section>
        <section className="accommodation-info">
            <Collapse styleclass={'description'} title={'Description'} content={accommodationData.description}/>
            <Collapse styleclass={'equipement'} title={'Equipement'} content={equipmentsContent}/>
        </section>
    </div>
    );
};

export default Accommodation;
