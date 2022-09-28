import {Link} from "react-router-dom"

export default function Home() {
    return(
        <div className="main" class="has-text-centered is-home-container">
            <div class="home-margin">
                <h1 class="is-black is-size-5 is-family-code">Wargen's 2023 Tick List</h1>
            </div>
            
            <div className="areas" class="is-size-6 is-family-code link-color" >
                <Link to="/Standouts">000 Standouts</Link><br/>
                <Link to="/Kraft">001 Kraft</Link><br/>
                <Link to="/RedSprings">002 Red Springs</Link><br/>
                <Link to="/PriestDraw">003 Priest Draw</Link><br/>
                <Link to="/MoesValley">004 Moe's Valley</Link><br/>
                <Link to="/WillowSpings">005 Willow Spings</Link><br/>
                <Link to="/Buttermilks">006 Buttermilks</Link><br/>
                <Link to="/SuperMarioLand">007 Super Mario Land</Link><br/>
                <Link to="/BlackVelvet">008 Black Velvet</Link><br/>
                <Link to="/CalicoBasin">009 Calico Basin</Link><br/>
                <Link to="/Gateway">010 Gateway</Link><br/>
                <Link to="/MtCharleston">011 Mt Charleston</Link><br/>
                <Link to="/HappyBoulders">012 Happy Boulders</Link><br/>
                <Link to="/SadBoulders">013 Sad Boulders</Link><br/>
                <Link to="/WestCluster">014 West Cluster</Link><br/>

            </div>
        </div>
    );
}