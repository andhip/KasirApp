import React, { Component } from "react";
import { Row, Col, ListGroup, Badge } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import TotalBayar from "./TotalBayar";

export default class Hasil extends Component {
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
              <ListGroup.Item>
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
          </ListGroup>
        )}
        <TotalBayar keranjangs={keranjangs} {...this.props}></TotalBayar>
      </Col>
    );
  }
}
