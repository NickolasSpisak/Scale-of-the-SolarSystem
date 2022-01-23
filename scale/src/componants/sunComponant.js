import Star from "../sun.jpeg";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Sun extends Component {
  render() {
    return (
      <div className="containter">
        <div className="row">
          <div className="col-4">
            <h1>Welcome</h1>
            <p>
              This is scale of the Solar System. We start out at the sun, the
              center of the Solar System. Light from here travels at 186,000
              miles per hour. We will begin traveling at light speed. Scroll
              down at a normal pace.
            </p>
          </div>
          <div className="col">
            <img src={Star} />
          </div>
        </div>
      </div>
    );
  }
}
export default Sun;
