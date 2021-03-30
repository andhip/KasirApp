import React, { Component } from "react";
import { Row, Col, ListGroup, Badge } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { ModalKeranjang } from "./ModalKeranjang";
import TotalBayar from "./TotalBayar";

export default class Hasil extends Component {
  // constructor modals
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      keranjangDetail: false,
      jumlah: 0,
      keterangan: "",
    };
  }

  handleShow = (menuCart) => {
    this.setState({
      showModal: true,
      keranjangDetail: menuCart,
      jumlah: menuCart.jumlah,
      keterangan: menuCart.keterangan,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  tambah = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
    });
  };

  kurang = () => {
    if (this.state.jumlah !== 1) {
      this.setState({
        jumlah: this.state.jumlah - 1,
      });
    }
  };

  changeHandler = (event) => {
    this.setState({
      keterangan: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log("SIap ndan!", this.state.keterangan);
  };

  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={3} mt="2">
        <h4>
          <strong>My Cart</strong>
        </h4>
        <hr></hr>
        {keranjangs.length !== 0 && (
          <ListGroup variant="flush" className="mycart">
            {keranjangs.map((menuCart) => (
              <ListGroup.Item
                className="cart-hover"
                keys={menuCart.id}
                onClick={() => this.handleShow(menuCart)}
              >
                <Row>
                  <Col xs="2">
                    <h5>
                      <Badge pill variant="success" className="qty">
                        {menuCart.jumlah}
                      </Badge>
                    </h5>
                  </Col>
                  <Col>
                    <h6 className="title">{menuCart.product.nama}</h6>
                    <h6 className="float-left">
                      Rp. {numberWithCommas(menuCart.product.harga)}
                    </h6>
                  </Col>
                  <Col>
                    <strong className="float-right">
                      Rp. {numberWithCommas(menuCart.total_harga)}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}

            <ModalKeranjang
              handleClose={this.handleClose}
              {...this.state}
              tambah={this.tambah}
              kurang={this.kurang}
              changeHandler={this.changeHandler}
              handleSubmit={this.handleSubmit}
            />
          </ListGroup>
        )}
        <TotalBayar keranjangs={keranjangs} {...this.props}></TotalBayar>
      </Col>
    );
  }
}
