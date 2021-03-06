import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faCocktail,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ nama }) => {
  if (nama === "Makanan")
    return <FontAwesomeIcon icon={faHamburger} className="mr-2" />;
  if (nama === "Minuman")
    return <FontAwesomeIcon icon={faCocktail} className="mr-2" />;
  if (nama === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} className="mr-2" />;

  return <FontAwesomeIcon icon={faHamburger} className="mr-2" />;
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
    const { changeCategory, selectCategory } = this.props;
    return (
      <Col md={2} mt="2">
        <h4>
          <strong>Categories</strong>
        </h4>
        <hr></hr>
        <ListGroup className="list-category">
          {categories &&
            categories.map((category) => (
              <ListGroup.Item
                key={category.id}
                onClick={() => changeCategory(category.nama)}
                className={
                  selectCategory === category.nama && "category-active"
                }
              >
                <h5>
                  {" "}
                  <Icon nama={category.nama}></Icon>
                  {category.nama}
                </h5>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}
