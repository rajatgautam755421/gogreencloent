import React from "react";
import { TailSpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <TailSpin color="#000" height={60} width={60} timeout={2500} />
      </div>
    </>
  );
};

export default Spinner;
