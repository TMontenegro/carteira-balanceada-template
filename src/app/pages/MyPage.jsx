import React from "react";
import { useSubheader } from "../../_metronic/layout";
import TotalWalletValue from "../components/total-wallet-value/total-wallet-value";

export const MyPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Resumo da carteira");

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <TotalWalletValue amount="3,589,15"></TotalWalletValue>
        </div>
        <div className="col-md-6">
          Charts
        </div>
      </div>
    </>
  );
};
