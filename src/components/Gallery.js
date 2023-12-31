import "../styles/Gallery.css";
import Card from "./Card";
import Accommodations from "../data/data.json"

const Gallery = () => {
    return ( 
        <div className="gallery">
            {Accommodations.map((accommodation)=> 
            (
                <Card data={accommodation} key={accommodation.id}/>
            ))}
        </div>
     );
}
 
export default Gallery;