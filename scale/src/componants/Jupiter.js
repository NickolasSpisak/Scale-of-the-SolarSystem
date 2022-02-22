import { Component } from "react";

class Jupiter extends Component {
  render() {
    return (
      <div
        className="containter"
        id="jupiter"
        style={{
          backgroundImage: "url(/images/milkyway.jpg)",
        }}
      >
        <div className="row">
          <div className="col px-5">
            <h1 style={{ color: "white" }}>Far Away From Home</h1>
            <p style={{ color: "white" }}>
              The gap between Mars and Jupiter is so large due to the fact that
              there used to be another planet between. This planet was destroyed
              and became the astaroid belt. Jupiter is the first of the gas
              giant planets that make up the second half of the solar system.
              Jupiter is the largest planet in the solar system, Earth could fit
              inside of the red storm. It is made of mostly hydrogen and helium
              gas just like the sun.
            </p>
          </div>
          <div className="row">
            <div className="col">
              <span></span>
            </div>
            <div className="col align-self-right">
              <img src={"/images/jupiter.png"} height={700} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Jupiter;
