import {Link} from "react-router-dom"
import { useEffect, useState } from "react";

const Area = (props) => {
    const area = props.area
    const areaName = props.areaName
    let displayClimbs
    const [climbs, setClimbs] = useState(null);

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

    return(
        <div class="is-area-container">
            <div className="main" class="has-text-centered is-size-5 is-family-code ">

                <div class="columns is-mobile no-margin">
                    <div class="column">
                        <Link to="/"><div class="has-text-left is-size-5 link-color"><a href="" class="link-color">⬅</a></div></Link>
                    </div>
                    <div class="column is-four-fifths"><h1 class="is-black has-text-centered">{areaName}</h1></div>
                    <div class="column"></div>
                </div>
                
                <div class="is-size-6 is-light">
                    <ul>
                        {displayClimbs}
                    </ul> 
                </div>
            </div>
        </div>
    );
}

export default Area;