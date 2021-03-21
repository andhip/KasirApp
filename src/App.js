import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Hasil, ListCategories, Menus, NavComponent } from "./components";
import { API_URL } from "./utils/constants";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      selectCategory: "Cemilan",
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.selectCategory)
      .then((res) => {
        console.log("Response", res);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeCategory = (value) => {
    this.setState({
      selectCategory: value,
      menus: [],
    });
  };

  render() {
    const { menus } = this.state;
    return (
      <div className="App">
        <NavComponent />
        <div className="mt-4">
          <div className="container-fluid">
            <Row>
              <ListCategories />
              <Col>
                <h4>
                  <strong>Daftar Product</strong>
                </h4>
                <hr></hr>
                <Row>
                  {menus &&
                    menus.map((menu) => <Menus key={menu.id} menu={menu} />)}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
