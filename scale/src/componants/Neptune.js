import { Component } from "react";
class Neptune extends Component {
  render() {
    return (
      <div className="containter" id="neptune">
        <div className="row">
          <div className="col">
            <img src={"/images/neptune.png"} height={200} />
          </div>
          <div className="col-4">
            <h1>The Edge of Our Known World</h1>
            <p>
              The last planet of our solar system is Neptune. It was discovered
              in 1846, quite recently in the grand scheme. Neptune and Uranas
              are very similar in terms of size and composition. Scientists
              believe that on both planets near their core the methane
              decomposes into diamonds that rain near the core.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Neptune;
