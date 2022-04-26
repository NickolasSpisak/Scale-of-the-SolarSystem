import {
  SUN,
  MERCURY,
  VENUS,
  EARTH,
  MARS,
  JUPITER,
  SATURN,
  URANUS,
  NEPTUNE,
} from "../planets";
export const Sun = () => {
  return (
    <div className="componantBackground">
      <div className="containter">
        <div className="row">
          <div className="col">
            <h1>Welcome</h1>
            <p>{SUN.description}</p>
          </div>
          <div className="col">
            <img src={SUN.image} alt="sun" />
          </div>
        </div>
      </div>
    </div>
  );
};
export const Mercury = () => {
  return (
    <div className="container" id="mercury">
      <div className="row">
        <div className="col-4 px-5">
          <h1>Welcome Back Astronaut</h1>
          <p>{MERCURY.description}</p>
        </div>
        <div className="col px-5">
          <img src={MERCURY.image} height={600} alt="mercury" />
        </div>
      </div>
    </div>
  );
};
export const Venus = () => {
  return (
    <div className="containter">
      <div className="row">
        <div className="col px-5">
          <img src={VENUS.image} height={600} alt="sun" />
        </div>
        <div className="col-4 px-5">
          <h1>Take a Breather</h1>
          <p>{VENUS.description}</p>
        </div>
      </div>
    </div>
  );
};
export const Earth = () => {
  return (
    <div className="containter">
      <div className="row">
        <div className="col-4 px-5">
          <h1>Welcome Home</h1>
          <p>{EARTH.description}</p>
        </div>
        <div className="col px-5">
          <img src={EARTH.image} height={600} alt="earth" />
        </div>
      </div>
    </div>
  );
};
export const Mars = () => {
  return (
    <div className="containter">
      <div className="row">
        <div className="col px-5">
          <img src={MARS.image} height={600} alt="mars" />
        </div>
        <div className="col-4 px-5">
          <h1>Take a Break You're Halfway</h1>
          <p>{MARS.description}</p>
        </div>
      </div>
    </div>
  );
};
export const Jupiter = () => {
  return (
    <div className="containter">
      <div className="row">
        <div className="col px-5">
          <h1>Far Away From Home</h1>
          <p>{JUPITER.description}</p>
        </div>
        <div className="row">
          <div className="col">
            <span></span>
          </div>
          <div className="col align-self-right">
            <img src={JUPITER.image} height={800} alt="jupiter" />
          </div>
        </div>
      </div>
    </div>
  );
};
export const Saturn = () => {
  return (
    <div className="containter">
      <div className="row">
        <div className="col">
          <img src={SATURN.image} height={300} alt="saturn" />
        </div>
        <div className="col px-5">
          <h1>Reaching New Heights</h1>
          <p>{SATURN.description}</p>
        </div>
      </div>
    </div>
  );
};
export const Uranus = () => {
  return (
    <div className="containter">
      <div className="row">
        <div className="col-4">
          <h1>New Frontier</h1>
          <p>{URANUS.description}</p>
        </div>
        <div className="col">
          <img src={URANUS.image} height={600} alt="uranus" />
        </div>
      </div>
    </div>
  );
};
export const Neptune = () => {
  return (
    <div className="containter" id="neptune">
      <div className="row">
        <div className="col">
          <img src={NEPTUNE.image} height={600} alt="neptune" />
        </div>
        <div className="col-4">
          <h1>The Edge of Our Known World</h1>
          <p>{NEPTUNE.description}</p>
        </div>
      </div>
    </div>
  );
};
