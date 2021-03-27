import React, { Component } from "react";
import axios from "axios";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";

export default class Sukses extends Component {
  // Delete Cart and push to pesanan
  componentDidMount() {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        keranjangs.map(function (item) {
          return axios
            .delete(API_URL + "keranjangs/" + item.id)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="mt-4 text-center">
        <Image
          src="assets/images/success.png"
          width="500"
          height="auto"
        ></Image>
        <h2>Thank you for Order!</h2>
        <p> </p>
        <Button className="btn btn-primary" as={Link} to="/">
          Home
        </Button>
      </div>
    );
  }
}
