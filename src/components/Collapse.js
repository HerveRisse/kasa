import Chevron from '../images/Vector.svg';
import { useState } from "react";

const Collapse = ({styleclass, title, content}) => {
    const [toggleOpen, setToggleOpen] = useState(false);

    return (
        <div className={styleclass}>
            <div onClick={()=>{setToggleOpen(!toggleOpen)}}>
                <h3>{title}</h3>
                <img className={toggleOpen ? 'up' : 'down'} src={Chevron} alt="chevron"/>
            </div>
            {toggleOpen &&
               <p className={'open'}>{content}</p>
            }
        </div>
    )
}

export default Collapse;