import { Component } from "react";

class Venus extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./images/milkyway.jpg)",
        }}
      >
        <div className="containter" id="venus">
          <div className="row">
            <div className="col px-5">
              <img src={"/images/venus.png"} height={600} alt="sun" />
            </div>
            <div className="col-4 px-5">
              <h1 style={{ color: "white" }}>Take a Breather</h1>
              <p style={{ color: "white" }}>
                That should have taken around 6 minutes to arrive at our second
                planet. Venus is the hottest planet, with its' surface
                temperature being 900 degrees, even hotter than Mercury! This is
                due to Venus' thick atomosphere of carbon dioxide. This gas
                traps heat inside almost like a thick blanket. With a similar
                size to Earth and relatively close, scientists have been
                exploring the possibility of colonization. Currently, Venus
                resembles Earth when life first started to appear as
                extremophile microbes. Someday we may be calling this neighbor
                planet "home"
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Venus;
