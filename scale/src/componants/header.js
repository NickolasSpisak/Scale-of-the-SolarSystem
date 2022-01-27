import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Header extends Component {
  render() {
    return (
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
        }}
      >
        <li>
          <Link activeClass="active" to="sun" spy={true} smooth={false}>
            Sun
          </Link>
        </li>
        <li>
          <Link to="mercury" spy={true} smooth={true}>
            Mercury
          </Link>
        </li>
        <li>
          <Link to="venus" spy={true} smooth={true}>
            Venus
          </Link>
        </li>
        <li>
          <Link to="earth" spy={true} smooth={true}>
            Earth
          </Link>
        </li>
        <li>
          <Link to="mars" spy={true} smooth={true}>
            Mars
          </Link>
        </li>
        <li>
          <Link to="jupiter" spy={true} smooth={true}>
            Jupiter
          </Link>
        </li>
        <li>
          <Link to="saturn" spy={true} smooth={true}>
            Saturn
          </Link>
        </li>
        <li>
          <Link to="uranus" spy={true} smooth={true}>
            Uranus
          </Link>
        </li>
        <li>
          <Link to="neptune" spy={true} smooth={false}>
            Neptune
          </Link>
        </li>
      </ul>
    );
  }
}
