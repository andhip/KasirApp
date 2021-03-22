import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Sukses extends Component {
  render() {
    return (
      <div className="mt-4 text-center">
        <Image
          src="assets/images/success.png"
          width="500"
          height="auto"
        ></Image>
        <h2>Thank you for Ordering!</h2>
        <p> </p>
        <Button className="btn btn-primary" as={Link} to="/">
          Home
        </Button>
      </div>
    );
  }
}
