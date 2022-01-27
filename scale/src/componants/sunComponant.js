import { Component } from "react";

class Sun extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(/images/milkyway.jpg)",
        }}
      >
        <div className="containter" id="sun">
          <div className="row">
            <div className="col-5 px-5">
              <strong>
                <h1 style={{ color: "white" }}>Welcome</h1>
              </strong>
              <p style={{ color: "white" }}>
                This is scale of the Solar System. We start out at the sun, the
                center of the Solar System. Gravity from this star is what binds
                all these planets together. This star is fueled by nuclear
                fusion which is the process of Hygrogen is super heated and
                becomes helium. This process releases tons of heat energy. Light
                from here travels at 186,000 miles per hour. We will begin
                traveling at light speed. Scroll down at a normal pace.
              </p>
            </div>
            <div className="col">
              <img src={"/images/sun.png"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sun;
