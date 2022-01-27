import { Component } from "react";

class Earth extends Component {
  render() {
    return (
      <div
        className="containter"
        id="earth"
        style={{
          backgroundImage: "url(/images/earth-background.jpg)",
        }}
      >
        <div className="row">
          <div className="col-4">
            <h1>Welcome Home</h1>
            <p>
              Earth is our home planet and is very unique amongst the solar
              system. It is currently the only planet with life. Life relys on
              the amount of water, strong magnetic field, and stable temperature
              that Earth has.
            </p>
          </div>
          <div className="col">
            <img src={"/images/earth.png"} height={200} />
          </div>
        </div>
      </div>
    );
  }
}
export default Earth;
