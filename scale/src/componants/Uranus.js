import { Component } from "react";

class Uranus extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(/images/milkyway.jpg)",
        }}
      >
        <div className="containter" id="uranus">
          <div className="row">
            <div className="col-4">
              <h1 style={{ color: "white" }}>New Frontier</h1>
              <p style={{ color: "white" }}>
                The coldest planet at -390 degrees, Uranus is a blue gas giant.
                The methane in the atmosphere causes the blue-green look of the
                planet. This planet is almost exactly the same distance away
                from Saturn as the sun is to Saturn! This planet is unlike any
                other you have visited for one reason, it is the only planet
                that is sideways! The rings and the magnetic poles face
                horizontally and it spins on this same axis. Scientists believe
                this is due to an impact which knocked the planet over!
              </p>
            </div>
            <div className="col">
              <img src={"/images/uranus.png"} height={600} alt="uranus" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Uranus;
