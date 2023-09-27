import "../styles/Accommodation.css";
import { useLocation } from "react-router-dom";
import Accommodations from "../data/data.json";
import Slideshow from "../components/Slideshow";

const Accommodation = () => {
  const location = useLocation();
  const { accommodationData } = location.state;

  return (
    <div className="accommodation">
      <Slideshow
        accommodations={Accommodations}
        index={Accommodations.findIndex(
          (element) => element.id === accommodationData.id
        )}
      />
    </div>
  );
};

export default Accommodation;
