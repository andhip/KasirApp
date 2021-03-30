import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

export const ModalKeranjang = ({
  showModal,
  handleClose,
  keranjangDetail,
  jumlah,
  keterangan,
  tambah,
  kurang,
  changeHandler,
  handleSubmit,
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
          <Form onSubmit={handleSubmit}>
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
              <Button
                className="ml-2 mr-2"
                variant="primary"
                size="sm"
                onClick={() => tambah()}
              >
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </Button>
              <strong>{jumlah}</strong>
              <Button
                className="ml-2"
                variant="primary"
                size="sm"
                onClick={() => kurang()}
              >
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
                value={keterangan}
                onChange={(event) => changeHandler(event)}
              />
            </Form.Group>
            <Button variant="primary" type="sbumit">
              Simpan
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger">
            <FontAwesomeIcon icon={faTrash} className="mr-1" />
            Delete Pesanan
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
