import "./ConverterContainer.css";
import Form from "../Form/Form";
import Result from "../Result/Result";
import { useState } from "react";

const ConverterContainer = () => {
  return (
    <div className="container">
      <h1>Przelicznik walut</h1>
      <Form />
    </div>
  );
};

export default ConverterContainer;
