import "../styles/Gallery.css";
import Card from "./Card";
import Alldata from "../data/data.json"

const Gallery = () => {
    return ( 
        <div className="gallery">
            {Alldata.map((data)=> 
            (
                <Card data={data}></Card>
            ))}
        </div>
     );
}
 
export default Gallery;