import { Component } from "react";
import { SUN } from "../planets";
import sun from "./images/sun.png";
import Mercury from "./mercuryComponent";
import Venus from "./venusComponent";
import Earth from "./earth";
import {
  EarthToMars,
  MarsToJupiter,
  JupiterToSaturn,
  SaturnToUranus,
  SunToMercury,
  MercuryToVenus,
  VenusToEarth,
  UranusToNeptune,
} from "./imbetweenPlanets";
import Mars from "./mars";
import Jupiter from "./Jupiter";
import Saturn from "./Saturn";
import Neptune from "./Neptune";

class Main extends Component {
  render() {
    return (
      <div>
        <div className="componantBackground">
          <div className="containter">
            <div className="row">
              <div className="col">
                <strong>
                  <h1 style={{ color: "white" }}>Welcome</h1>
                </strong>
                <p style={{ color: "white" }}>{SUN.description}</p>
              </div>
              <div className="col">
                <img src={sun} alt="sun" />
              </div>
            </div>
          </div>
        </div>
        {SunToMercury()}
        <Mercury />
        {MercuryToVenus()}
        <Venus />
        {VenusToEarth()}
        <Earth />
        {EarthToMars()}
        <Mars />
        {MarsToJupiter()}
        <Jupiter />
        {JupiterToSaturn()}
        <Saturn />
        {SaturnToUranus()}
        <div style={{ backgroundImage: "url(./images/spaceBackground.webp)" }}>
          <div className="containter" id="uranus">
            <div className="row">
              <div className="col-4">
                <h1 style={{ color: "white" }}>New Frontier</h1>
                <p style={{ color: "white" }}>
                  The coldest planet at -390 degrees, Uranus is a blue gas
                  giant. The methane in the atmosphere causes the blue-green
                  look of the planet. This planet is almost exactly the same
                  distance away from Saturn as the sun is to Saturn! This planet
                  is unlike any other you have visited for one reason, it is the
                  only planet that is sideways! The rings and the magnetic poles
                  face horizontally and it spins on this same axis. Scientists
                  believe this is due to an impact which knocked the planet
                  over!
                </p>
              </div>
              <div className="col">
                <img src={"/images/uranus.png"} height={600} alt="uranus" />
              </div>
            </div>
          </div>
        </div>
        {UranusToNeptune()}
        <Neptune />
      </div>
    );
  }
}
export default Main;
