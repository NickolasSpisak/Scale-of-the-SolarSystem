import { Component } from "react";
class Neptune extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(/images/milkyway.jpg)",
        }}
      >
        <div className="containter" id="neptune">
          <div className="row">
            <div className="col">
              <img src={"/images/neptune.png"} height={600} />
            </div>
            <div className="col-4">
              <h1 style={{ color: "white" }}>The Edge of Our Known World</h1>
              <p style={{ color: "white" }}>
                The last planet of our solar system is Neptune. It was
                discovered in 1846, quite recently in the grand scheme. Neptune
                and Uranas are very similar in terms of size and composition.
                Scientists believe that on both planets near their core the
                methane decomposes into diamonds that rain near the core.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Neptune;
