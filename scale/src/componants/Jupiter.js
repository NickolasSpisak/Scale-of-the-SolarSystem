import jupiter from "../jupiter.jpg";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Jupiter extends Component {
  render() {
    return (
      <div className="containter">
        <div className="row">
          <div className="col-4">
            <h1>Far Away From Home</h1>
            <p>
              The gap between Mars and Jupiter is so large due to the fact that
              there used to be another planet between. This planet was destroyed
              and became the astaroid belt. Jupiter is the first of the gas
              giant planets that make up the second half of the solar system.
              Jupiter is the largest planet in the solar system, Earth could fit
              inside of the red storm. It is made of mostly hydrogen and helium
              gas just like the sun.
            </p>
          </div>
          <div className="col">
            <img src={jupiter} height={200} />
          </div>
        </div>
      </div>
    );
  }
}
export default Jupiter;
