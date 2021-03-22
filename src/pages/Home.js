import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Hasil, ListCategories, Menus } from "../components";
import { API_URL } from "../utils/constants";
import axios from "axios";
import swal from "sweetalert";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      selectCategory: "Makanan",
      keranjangs: [],
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

    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        console.log("Response", res);
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevState) {
    if (this.state.keranjangs !== prevState.keranjangs) {
      axios
        .get(API_URL + "keranjangs")
        .then((res) => {
          console.log("Response", res);
          const keranjangs = res.data;
          this.setState({ keranjangs });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  changeCategory = (value) => {
    this.setState({
      selectCategory: value,
      menus: [],
    });

    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        console.log("Response", res);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addToCart = (value) => {
    axios
      .get(API_URL + "keranjangs?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const cart = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };

          axios
            .post(API_URL + "keranjangs", cart)
            .then((res) => {
              swal({
                title: "Success add to cart!",
                text: "Menu has been added",
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log("Error cui", error);
            });
        } else {
          const cart = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };

          axios
            .put(API_URL + "keranjangs/" + res.data[0].id, cart)
            .then((res) => {
              swal({
                title: "Success add to cart!",
                text: "Menu has been added",
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log("Error cui", error);
            });
        }
      })
      .catch((error) => {
        console.log("Error cui", error);
      });
  };

  render() {
    const { menus, selectCategory, keranjangs } = this.state;
    return (
      <div className="mt-4">
        <div className="container-fluid">
          <Row>
            <ListCategories
              changeCategory={this.changeCategory}
              selectCategory={selectCategory}
            />
            <Col>
              <h4>
                <strong>Product List</strong>
              </h4>
              <hr></hr>
              <Row>
                {menus &&
                  menus.map((menu) => (
                    <Menus
                      key={menu.id}
                      menu={menu}
                      addToCart={this.addToCart}
                    />
                  ))}
              </Row>
            </Col>
            <Hasil keranjangs={keranjangs} />
          </Row>
        </div>
      </div>
    );
  }
}
