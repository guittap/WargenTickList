import {Link} from "react-router-dom"

export default function Home() {
    return(
        <div className="main" class="has-text-centered">
            <h1 class="is-size-5 is-family-code">Wargen's 2023 Tick List</h1>
            <div className="areas" class="is-size-6 has-text-weight-light is-family-code">
                <ul>
                    <li>
                        <Link to="/Standouts">000 Standouts</Link>
                    </li>
                    <li>
                        <Link to="/Kraft">001 Kraft</Link>
                    </li>
                    <li>
                        <Link to="/RedSprings">002 Red Springs</Link>
                    </li>
                    <li>
                        <Link to="/PriestDraw">003 Priest Draw</Link>
                    </li>
                    <li>
                        <Link to="/MoesValley">004 Moe's Valley</Link>
                    </li>

                </ul>  
            </div>
        </div>
    );
}