import React, { Component } from "react";
import { Link } from "react-scroll";
import { Navbar } from "reactstrap";
import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <Navbar fixed="top" className="Nav">
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "space-around",
          }}
        >
          <li className="Sun">
            <Link to="sun" spy={true} smooth={true}>
              Sun
            </Link>
          </li>
          <li className="Mercury">
            <Link to="mercury" spy={true} smooth={true}>
              Mercury
            </Link>
          </li>
          <li className="Venus">
            <Link to="venus" spy={true} smooth={true}>
              Venus
            </Link>
          </li>
          <li className="Earth">
            <Link to="earth" spy={true} smooth={true}>
              Earth
            </Link>
          </li>
          <li className="Mars">
            <Link to="mars" spy={true} smooth={true}>
              Mars
            </Link>
          </li>
          <li className="Jupiter">
            <Link to="jupiter" spy={true} smooth={true}>
              Jupiter
            </Link>
          </li>
          <li className="Saturn">
            <Link to="saturn" spy={true} smooth={true}>
              Saturn
            </Link>
          </li>
          <li className="Uranus">
            <Link to="uranus" spy={true} smooth={false}>
              Uranus
            </Link>
          </li>
          <li className="Neptune">
            <Link to="neptune" spy={true} smooth={false}>
              Neptune
            </Link>
          </li>
        </ul>
      </Navbar>
    );
  }
}
