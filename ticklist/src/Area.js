//import {Link} from "react-router-dom"
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
        <div className="main" class="has-text-centered is-size-5 is-family-code">
            <h1>{areaName}</h1>
            <div class="is-size-6">
                <ul>
                    {displayClimbs}
                </ul> 
            </div>
        </div>
    );
}

export default Area;