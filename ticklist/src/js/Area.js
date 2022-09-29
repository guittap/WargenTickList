import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import Footer from "./Footer";

const Area = (props) => {
    const area = props.area
    const areaName = props.areaName
    let displayClimbs
    const [climbs, setClimbs] = useState(null);
    const [isModal, setModal] = useState(false);

    console.log(isModal)

    let fetchData = async() => {
        let res = await fetch(area);
        let final = await res.text();
        return final;
    }

    useEffect(() => {
        fetchData().then(data => {
            console.log(data)
            setClimbs(data.split(/\r?\n/))
        })
    });

    try {displayClimbs = climbs.map((climbs) => <li>{climbs}</li>)}
    catch(err) {console.log(err.message)}

    
    let handleClick = () => {
        setModal(!isModal);
    };

    const active = isModal ? "is-active" : "";

    return(
        <div className="is-area-container">
            <div className="main is-family-code has-text-centered">

                <div className="columns is-mobile">
                    <div className="column">
                        <Link to="/"><div className="is-size-6 link-color">⏪</div></Link>
                    </div>
                    <div className="column is-two-thirds"><h1 className="is-size-5 is-black has-text-centered">{areaName}</h1></div>
                    <div className="column has-text-right is-size-6">
                        <button className="no-button" onClick={handleClick}>ℹ️</button>
                    </div>
                </div>
                
                <div className="is-size-6 is-light home-margin">
                    <ul>
                        {displayClimbs}
                    </ul> 
                </div>

                <div className="has-text-bottom">
                    <Footer/>
                </div>
            </div>

            <div id="info-modal" className={`modal ${active}`}>
                <div onClick={handleClick} className="modal-background"></div>
                <div class="modal-card">
                    <section class="modal-card-body is-family-code">
                        <h1 className="is-black is-size-5 home-margin">dictionary</h1>
                        <p>5🌟: Projecting until I DIE</p>
                        <p>4🌟: Project until I send</p>
                        <p>3🌟: Must Try for 1-2 sessions</p>
                        <p>2🌟: Will go out of my way to try</p>
                        <p>1🌟: Will get on if I pass by</p>


                    </section>
                </div>
                <button onClick={handleClick} className="modal-close is-large" aria-label="close"></button>
            </div>

        </div>
    );
}

export default Area;