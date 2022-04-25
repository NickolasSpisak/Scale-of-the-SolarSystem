import { Component } from "react";

class Mars extends Component {
  render() {
    return (
      <div
        id="mars"
        className="containter"
        style={{
          backgroundImage: "url(./images/milkyway.jpg)",
        }}
      >
        <div className="row">
          <div className="col px-5">
            <img src={"/images/mars.png"} height={600} alt="mars" />
          </div>
          <div className="col-4 px-5">
            <h1 style={{ color: "white" }}>Take a Break You're Halfway</h1>
            <p style={{ color: "white" }}>
              "The Red Planet" Mars is called this due to its' iron which
              oxidizes. The same affect as rusting on a bike. Mars is smaller
              than one would expect, only 4,220 miles in radius, making it
              slightly larger than the moon at 2,159 miles. Mars is the only
              other planet in the solar system with large amounts of water on
              it, mostly contained within its' polar ice caps. Scientists
              believe that Mars used to have a stronger atomosphere, but lost it
              possibily due to solar winds. Back then, Mars might have looked a
              lot more similar to Earth.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Mars;
