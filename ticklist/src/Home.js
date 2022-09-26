import {Link} from "react-router-dom"

export default function Home() {
    return(
        <div className="main" class="has-text-centered">
            <h1 class="is-size-5 is-family-code">Wargen's 2023 Tick List</h1>
            <div className="areas" class="is-size-6 has-text-weight-light is-family-code">
                <ul>
                    <Link to="/Kraft">001 Kraft</Link><br/>
                    <Link to="/RedSprings">002 Red Springs</Link><br/>
                    <Link to="/PriestDraw">003 Priest Draw</Link><br/>
                </ul>  
            </div>
        </div>
    );
}