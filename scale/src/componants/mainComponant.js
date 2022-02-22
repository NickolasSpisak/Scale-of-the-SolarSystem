import { Component } from "react";
import Sun from "./sunComponant";
import SunToMercury from "./sunToMercuryComponent";
import Mercury from "./mercuryComponent";
import MercuryToVenus from "./mercuryToVenus";
import Venus from "./venusComponent";
import VenusToEarth from "./VenusToEarth";
import Earth from "./earth";
import EarthToMars from "./EarthToMars";
import Mars from "./mars";
import MarsToJupiter from "./MarsToJupiter";
import Jupiter from "./Jupiter";
import JupiterToSaturn from "./JupiterToSaturn";
import Saturn from "./Saturn";
import SaturnToUranus from "./SaturnToUranus";
import Uranus from "./Uranus";
import UranusToNeptune from "./UranusToNeptune";
import Neptune from "./Neptune";
// import Header from "./header";
class Main extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Sun />
        <SunToMercury />
        <Mercury />
        <MercuryToVenus />
        <Venus />
        <VenusToEarth />
        <Earth />
        <EarthToMars />
        <Mars />
        <MarsToJupiter />
        <Jupiter />
        <JupiterToSaturn />
        <Saturn />
        <SaturnToUranus />
        <Uranus />
        <UranusToNeptune />
        <Neptune />
      </div>
    );
  }
}
export default Main;
