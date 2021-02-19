import React from "react";

const TotalWalletValue = ({amount}) => {
  return (
    <>
      <div className="card card-custom">
        <div className="card-header">
          <div className="card-title">
            <h3 className="card-label">Valor total da carteira</h3>
          </div>
        </div>
        <div className="card-body">
          <h1 className="card-label">R$ {amount}</h1>
          <p>O valor das cotações são referentes ao ultimo fechamento da B3.</p>
        </div>
      </div>
    </>
  );
}

export default TotalWalletValue;