import "../styles/About.css"
import Chevron from '../images/Vector.svg';
import { useState } from "react";
import mountainImg from '../images/mountain.svg';
import Banner from "../components/Banner";

const About = () => {

    const [fiabiliteOpen, setFiabiliteOpen] = useState(false);
    const [respectOpen, setRespectOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);
    const [securiteOpen, setSecuriteOpen] = useState(false);

    return ( 
        <div className="about">
            <Banner id="about-banner" img={mountainImg} title={''}/>
            <div className="fiabilite">
                <div onClick={()=>{setFiabiliteOpen(!fiabiliteOpen)}}>
                    <h3>Fiabilité</h3>
                    <img className={fiabiliteOpen ? 'up' : 'down'} src={Chevron} alt="chevron"/>
                </div>
                <p className={fiabiliteOpen ? 'open' : 'close'}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
            </div>
            <div className="respect">
                <div onClick={()=>{setRespectOpen(!respectOpen)}}>
                    <h3>Respect</h3>
                    <img className={respectOpen ? 'up' : 'down'} src={Chevron} alt="chevron"/>
                </div>
                <p className={respectOpen ? 'open' : 'close'}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
            <div className="service">
                <div onClick={()=>{setServiceOpen(!serviceOpen)}}>
                    <h3>Service</h3>
                    <img className={serviceOpen ? 'up' : 'down'} src={Chevron} alt="chevron"/>
                </div>
                <p className={serviceOpen ? 'open' : 'close'}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </div>
            <div className="securite">
                <div onClick={()=>{setSecuriteOpen(!securiteOpen)}}>
                    <h3>Sécurité</h3>
                    <img className={securiteOpen ? 'up' : 'down'} src={Chevron} alt="chevron"/>
                </div>
                <p className={securiteOpen ? 'open' : 'close'}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
        </div>
     );
}
 
export default About;