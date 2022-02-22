import { Component } from "react";

class Earth extends Component {
  render() {
    return (
      <div
        className="containter"
        id="earth"
        style={{
          backgroundImage: "url(/images/milkyway.jpg)",
        }}
      >
        <div className="row">
          <div className="col-4 px-5">
            <h1 style={{ color: "white" }}>Welcome Home</h1>
            <p style={{ color: "white" }}>
              Earth is our home planet and is very unique amongst the solar
              system. It is currently the only planet with life. Life relys on
              the amount of water, strong magnetic field, and stable temperature
              that Earth has.
            </p>
          </div>
          <div className="col px-5">
            <img src={"/images/earth.png"} height={600} alt="earth" />
          </div>
        </div>
      </div>
    );
  }
}
export default Earth;
