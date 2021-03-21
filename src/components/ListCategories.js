import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCocktail,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ nama }) => {
  if (nama === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} className="mr-2" color="grey" />;
  if (nama === "Minuman")
    return <FontAwesomeIcon icon={faCocktail} color="grey" spin />;
  if (nama === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} className="mr-2" color="grey" />;

  return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
};

export default class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        console.log("Response", res);
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { categories } = this.state;
    return (
      <Col md={2} mt="2">
        <h4>
          <strong>Daftar Katergori</strong>
        </h4>
        <hr></hr>
        <ListGroup>
          {categories &&
            categories.map((category) => (
              <ListGroup.Item key={category.id}>
                <Icon nama={category.nama}></Icon>
                {category.nama}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}
