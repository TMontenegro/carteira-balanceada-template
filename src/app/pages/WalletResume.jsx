import React from "react";
import { useSubheader } from "../../_metronic/layout";
import TotalWalletValue from "../components/wallet-resume/total-wallet-value";
import AssetsClasses from "../components/wallet-resume/assets-classes";

export const WalletResume = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Resumo da carteira");

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <TotalWalletValue amount="3,589,15"></TotalWalletValue>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <AssetsClasses title="Classe de ativos | Atual"></AssetsClasses>
        </div>
        <div className="col-md-6">
          <AssetsClasses title="Classe de ativos | Meta"></AssetsClasses>
        </div>
      </div>
    </>
  );
};
