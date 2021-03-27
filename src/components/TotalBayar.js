import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { API_URL } from "../utils/constants";

export default class TotalBayar extends Component {
  submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_Bayar: totalBayar,
      menus: this.props.keranjangs,
    };

    axios.post(API_URL + "pesanans", pesanan).then((res) => {
      this.props.history.push("/sukses");
    });
  };

  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <div className="fixed-bottom">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-5">
            <h6 className="TotalBayar">
              Total Pesanan : {""}
              <strong className="float-right mr-1">
                Rp. {numberWithCommas(totalBayar)}
              </strong>
              <Button
                variant="primary"
                block
                className="mt-2 mb-3"
                onClick={() => this.submitTotalBayar(totalBayar)}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                <strong>Bayar</strong>
              </Button>
            </h6>
          </Col>
        </Row>
      </div>
    );
  }
}
