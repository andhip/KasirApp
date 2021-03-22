import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

export default class TotalBayar extends Component {
  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <div className="fixed-bottom">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-5">
            <h6 className="TotalBayar">
              Total Harga : {""}
              Rp. {numberWithCommas(totalBayar)}
              <Button variant="primary" block className="mt-2 mb-3">
                <strong>Bayar</strong>
              </Button>
            </h6>
          </Col>
        </Row>
      </div>
    );
  }
}
