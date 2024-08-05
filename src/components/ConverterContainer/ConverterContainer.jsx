import "./ConverterContainer.css";
import Form from "../Form/Form";
import Status from "../Status/Status";
import { useState } from "react";

const ConverterContainer = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="container">
      <h1>Przelicznik walut</h1>
      <Form
        setResult={setResult}
        setErrorMessage={setErrorMessage}
        setLoadingState={setLoadingState}
      />
      <Status getResult={result} getErrorMessage={errorMessage} getLoadingState={loadingState} />
    </div>
  );
};

export default ConverterContainer;
