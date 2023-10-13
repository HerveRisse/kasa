import "../styles/Slideshow.css"
import { useState } from "react";
import prevChevron from "../images/slidevector-left.svg"
import nextChevron from "../images/slidevector-right.svg"

const Slideshow = (props) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
      if (currentImageIndex < props.data.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
      if (currentImageIndex === props.data.length - 1) {
        setCurrentImageIndex(0);
      }
    };
  
    const prevImage = () => {
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
      if (currentImageIndex === 0) {
        setCurrentImageIndex(props.data.length - 1);
      }
    };

    const backgroundImageStyle = {
      backgroundImage: `url(${props.data[currentImageIndex]})`,
    };

    const slideCount = `${currentImageIndex + 1} / ${props.data.length}`;

    return ( 
        <div className="slideshow" style={backgroundImageStyle}>
            <img onClick={prevImage} src={prevChevron} alt="precedent"/>
            <p className="slide-counter">{slideCount}</p>
            <img onClick={nextImage} src={nextChevron} alt="suivant"/>
        </div>
    );
}
 
export default Slideshow;