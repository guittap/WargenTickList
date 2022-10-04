import {Link} from "react-router-dom"
import Footer from "./Footer"

export default function Home() {
    return(
        <div className="main has-text-centered is-home-container">
            <div className="home-margin">
                <h1 className="is-black is-size-5 is-family-code">🥳 Wargen's 2023 Tick List 💯</h1>
            </div>
            
            <div className="areas is-size-6 is-family-code link-color home-margin" >
                <Link to="/Standouts">000 Standouts</Link><br/>
                <Link to="/Kraft">001 Kraft</Link><br/>
                <Link to="/RedSprings">002 Red Springs</Link><br/>
                <Link to="/PriestDraw">003 Priest Draw</Link><br/>
                <Link to="/MoesValley">004 Moes Valley</Link><br/>
                <Link to="/WillowSprings">005 Willow Springs</Link><br/>
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

            <Footer/>
        </div>
    );
}