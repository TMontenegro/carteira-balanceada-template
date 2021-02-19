import React, { useState } from "react";
import {
  Button,
  ButtonToolbar,
} from "react-bootstrap";
import AddFinancialAssetModal from "./add-financial-asset-modal"

const AddFinancialAsset = () => {
  const [showModal, setShowModal] = useState(false);
  
  const handleShowModal = () => {
    setShowModal(false);
  }

  return (
    <ButtonToolbar>
      <Button
        variant="primary"
        onClick={() => setShowModal(true)}
      >
        Adicionar ativo
      </Button>

      <AddFinancialAssetModal
        showModal={showModal}
        onShowModal={() => handleShowModal()}
      />
    </ButtonToolbar>
  );
}

export default AddFinancialAsset;