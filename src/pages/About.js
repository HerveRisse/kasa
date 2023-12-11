import "../styles/About.css"
import mountainImg from '../images/mountain.jpg';
import Banner from "../components/Banner";
import Collapse from "../components/Collapse"

const About = () => {
    const fiabiliteContent = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
    const respectContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const serviceContent = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const securiteContent = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
    
    return ( 
        <div className="about">
            <Banner id="about-banner" img={mountainImg} title={''}/>
            <Collapse styleclass={'fiabilite'} title={'Fiabilité'} content={fiabiliteContent}/>
            <Collapse styleclass={'respect'} title={'Respect'} content={respectContent}/>
            <Collapse styleclass={'service'} title={'Service'} content={serviceContent}/>
            <Collapse styleclass={'securite'} title={'Sécurité'} content={securiteContent}/>
        </div>
     );
}
 
export default About;