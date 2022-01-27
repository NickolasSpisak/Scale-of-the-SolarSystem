import { Component } from "react";

class Saturn extends Component {
  render() {
    return (
      <div
        className="containter"
        id="saturn"
        style={{
          backgroundImage: "url(/images/saturn-background.jpg)",
        }}
      >
        <div className="row">
          <div className="col">
            <img src={"/images/saturn.png"} height={200} />
          </div>
          <div className="col-4">
            <h1>Reaching New Heights</h1>
            <p>
              Saturn's main feature is the large rings that surround it. All
              four of the gas giants have rings, but Saturn's are the largest.
              They are made of ice and rocks, while the planet itself is made of
              hydrogen and helium just like Jupiter. Saturn is made of so much
              gas that if you had a pool of water large enough, Saturn would
              float in it. This is the last planet that can be seen by the naked
              eye. After you begin to scroll again, you will be traveling to
              heights unseen by mankind for thousands of years!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Saturn;
