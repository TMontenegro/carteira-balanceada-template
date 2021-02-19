import React from "react";
import { Button, Modal } from "react-bootstrap";

const AddFinancialAssetModal = ({ showModal, onShowModal }) => {
  const handleShowModal = () => {
    onShowModal();
  };

  return (
    <Modal
      show={showModal}
      onHide={!showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Adicionar ativo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleShowModal()}>Adicionar e continuar adicionando</Button>
        <Button onClick={() => handleShowModal()}>Adicionar</Button>
        <Button onClick={() => handleShowModal()}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddFinancialAssetModal;
