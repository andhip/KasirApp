import React, { Component } from "react";
import { Row, Col, ListGroup, Badge } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

export default class Hasil extends Component {
  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={3} mt="2">
        <h4>
          <strong>Hasil</strong>
        </h4>
        <hr></hr>
        {keranjangs.length !== 0 && (
          <ListGroup variant="flush">
            {keranjangs.map((menuCart) => (
              <ListGroup.Item>
                <Row>
                  <Col xs="2">
                    <h5>
                      <Badge pill variant="success">
                        {menuCart.jumlah}
                      </Badge>
                    </h5>
                  </Col>
                  <Col>
                    <h5>{menuCart.product.nama}</h5>
                    <p>Rp. {numberWithCommas(menuCart.product.harga)}</p>
                  </Col>
                  <Col>Rp. {numberWithCommas(menuCart.total_harga)}</Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    );
  }
}
