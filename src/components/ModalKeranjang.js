import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

export const ModalKeranjang = ({
  showModal,
  handleClose,
  keranjangDetail,
  jumlah,
}) => {
  if (keranjangDetail) {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {keranjangDetail.product.nama}
            <strong className="ml-2">
              Rp. {numberWithCommas}
              {keranjangDetail.product.harga}
            </strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Total Harga:</Form.Label>
              <p>
                <strong>
                  Rp. {numberWithCommas}
                  {keranjangDetail.total_harga}
                </strong>
              </p>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Jumlah:</Form.Label>
              <Button className="ml-2 mr-2" variant="primary" size="sm">
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </Button>
              <strong>{jumlah}</strong>
              <Button className="ml-2" variant="primary" size="sm">
                <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
              </Button>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                placeholder="Pedas, Manis, Hot, Ice"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart is Empty!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Cart is Empty!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};
