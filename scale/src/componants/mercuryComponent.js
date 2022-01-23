import mercury from "../mercury.png";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Mercury extends Component {
  render() {
    return (
      <div className="containter">
        <div className="row">
          <div className="col-4">
            <h1>Welcome Back Astronaut</h1>
            <p>
              That should have taken around 3 minutes and 20 seconds to arrive
              at our first destination. Mercury is the closest planet to the
              sun. This is the smallest planet, around the size of the moon. It
              is a rocky planet with a dense iron core making up 70% of the
              planet's mass.
            </p>
          </div>
          <div className="col">
            <img src={mercury} height={200} />
          </div>
        </div>
      </div>
    );
  }
}
export default Mercury;
