import React from "react";

const AssetsClasses = ({title}) => {
  return (
    <>
      <div className="card card-custom">
        <div className="card-header">
          <div className="card-title">
            <h3 className="card-label">{title}</h3>
          </div>
        </div>
        <div className="card-body">
            card body
        </div>
      </div>
    </>
  );
};

export default AssetsClasses;