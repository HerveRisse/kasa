import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import falaiseImg from '../images/falaise.jpg';


const Home = () => {
    return ( 
        <div className="home">
            <Banner img={falaiseImg} title={'Chez vous, partout et ailleurs'}/>
            <Gallery />
        </div>
     );
}

export default Home;