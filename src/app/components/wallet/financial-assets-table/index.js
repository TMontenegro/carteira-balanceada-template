/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import AddFinancialAsset from "../add-financial-asset";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import {Dropdown, Form} from "react-bootstrap";

import DropdownOrderBy from "../dropdown-order-by";

const FinancialAssetsTable = ({ className }) => {
  return (
    <div className={`card card-custom ${className}`}>
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            Meus ativos
          </span>
          <span className="text-muted mt-3 font-weight-bold font-size-sm">
            Listagem de todos os ativos cadastrados
          </span>
        </h3>
        <div className="card-toolbar">
          <div
            className="quick-search-custom quick-search quick-search-offcanvas"
            id="kt_quick_search_offcanvas"
          >
            <form
              method="get"
              className="quick-search-form border-bottom mr-5 mt-3"
            >
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <span className="svg-icon svg-icon-lg">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Search.svg"
                        )}
                      />
                    </span>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Pesquisar..."
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="quick-search-close ki ki-close icon-sm text-muted"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <Dropdown className="dropdown-inline mr-5" drop="down" alignRight>
            <Dropdown.Toggle
              id="dropdown-toggle-top2"
              variant="transparent"
              className="btn btn-light-primary btn-sm font-weight-bolder dropdown-toggle"
            >
              Ordenar por
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
              <DropdownOrderBy />
            </Dropdown.Menu>
          </Dropdown>
          <AddFinancialAsset />
        </div>
      </div>
      {/* Body */}
      <div className="card-body pt-3 pb-0">
        <div className="table-responsive">
          <table className="table table-borderless table-vertical-center">
            <thead>
              <tr>
                <th className="p-0" style={{ width: "50px" }} />
                <th className="p-0" />
                <th className="p-0" />
                <th className="p-0" />
                <th className="p-0" />
                <th className="p-0" />
                <th className="p-0" />
                <th className="p-0" />
                <th className="p-0" />
                <th className="p-0" />
                <th className="p-0" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pl-0 py-4">
                  <div className="symbol symbol-50 symbol-light mr-1">
                    <span className="symbol-label">
                      <img
                        src={toAbsoluteUrl("/media/company-logo/weg.jpg")}
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                </td>
                <td className="pl-0">
                  <div>
                    <a
                      className="text-muted font-weight-bold text-hover-primary"
                      href="#"
                    >
                      Código
                    </a>
                  </div>
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    WEGE3
                  </a>
                </td>
                <td className="text-center">
                  <span className="text-muted font-weight-bold">Cotação</span>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    R$ 83,38
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-muted font-weight-bold">Nota</span>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    10
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-muted font-weight-bold">Qtd atual</span>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    2
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-muted font-weight-bold">% atual</span>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    15%
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-muted font-weight-bold">
                    % objetivo
                  </span>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    50%
                  </span>
                </td>
                <td className="text-center">
                  <span className="label label-lg label-light-success label-inline">
                    Comprar
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-muted font-weight-bold">
                    Qtd compra
                  </span>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    10
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-muted font-weight-bold">
                    Aportar?
                  </span>
                  <span className="">
                    <Form.Check />
                  </span>
                </td>
                <td className="text-right pr-0">
                  <a href="#" className="btn btn-icon btn-light btn-sm mx-3">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a href="#" className="btn btn-icon btn-light btn-sm">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pl-0 py-4">
                  <div className="symbol symbol-50 symbol-light">
                    <span className="symbol-label">
                      <img
                        src={toAbsoluteUrl("/media/company-logo/abev3.jpeg")}
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                </td>
                <td className="pl-0">
                  <div>
                    <a
                      className="text-muted font-weight-bold text-hover-primary"
                      href="#"
                    >
                      Código
                    </a>
                  </div>
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    ABEV3
                  </a>
                </td>
                <td className="text-center">
                  <span className="text-muted font-weight-bold">Cotação</span>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    R$ 14,79
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-muted font-weight-bold">Nota</span>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    10
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-muted font-weight-bold">Qtd atual</span>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    5
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-muted font-weight-bold">% atual</span>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    50%
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-muted font-weight-bold">
                    % objetivo
                  </span>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    50%
                  </span>
                </td>
                <td className="text-center">
                  <span className="label label-lg label-light-warning label-inline">
                    Aguardar
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-muted font-weight-bold">
                    Qtd compra
                  </span>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    0
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-muted font-weight-bold">
                    Aportar?
                  </span>
                  <span className="">
                    <Form.Check />
                  </span>
                </td>
                <td className="text-right pr-0">
                  <a href="#" className="btn btn-icon btn-light btn-sm mx-3">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a href="#" className="btn btn-icon btn-light btn-sm">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FinancialAssetsTable;
