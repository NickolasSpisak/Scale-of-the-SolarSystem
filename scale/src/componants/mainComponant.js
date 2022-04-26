import { Component } from "react";

import {
  Sun,
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
} from "./planets";
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

class Main extends Component {
  render() {
    return (
      <div>
        <Sun />
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
        <Uranus />
        {UranusToNeptune()}
        <Neptune />
      </div>
    );
  }
}
export default Main;
