import venus from "../venus.jpeg";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Venus extends Component {
  render() {
    return (
      <div className="containter">
        <div className="row">
          <div className="col">
            <img src={venus} height={200} />
          </div>
          <div className="col-4">
            <h1>Take a Breather</h1>
            <p>
              That should have taken around 6 minutes to arrive at our second
              planet. Venus is the hottest planet, with its' surface temperature
              being 900 degrees, even hotter than Mercury! This is due to Venus'
              thick atomosphere of carbon dioxide. This gas traps heat inside
              almost like a thick blanket. With a similar size to Earth and
              relatively close, scientists have been exploring the possibility
              of colonization. Currently, Venus resembles Earth when life first
              started to appear as extremophile microbes. Someday we may be
              calling this neighbor planet "home"
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Venus;
