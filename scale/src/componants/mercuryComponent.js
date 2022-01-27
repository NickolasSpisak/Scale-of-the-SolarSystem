import { Component } from "react";

class Mercury extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(/images/milkyway.jpg)",
        }}
      >
        <div className="container" id="mercury">
          <div className="row">
            <div className="col-4 px-5">
              <h1 style={{ color: "white" }}>Welcome Back Astronaut</h1>
              <p style={{ color: "white" }}>
                That should have taken around 3 minutes and 20 seconds to arrive
                at our first destination. Mercury is the closest planet to the
                sun. This is the smallest planet, around the size of the moon.
                It is a rocky planet with a dense iron core making up 70% of the
                planet's mass.
              </p>
            </div>
            <div className="col px-5">
              <img src={"/images/mercury.png"} height={600} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Mercury;
