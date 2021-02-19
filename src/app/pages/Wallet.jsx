import React from "react";
import { useSubheader } from "../../_metronic/layout";
import FinancialAssetsTable from "../components/wallet/financial-assets-table"

export const Wallet = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Ativos da carteira");

  return (
    <>
      <FinancialAssetsTable/>
    </>
  );
};
