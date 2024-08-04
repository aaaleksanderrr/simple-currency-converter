import "./ConverterContainer.css";
import Form from "../Form/Form";
import FetchCurrency from "../FetchCurrency/FetchCurrency";
import Status from "../Status/Status";
import { useState } from "react";

const ConverterContainer = () => {
  const [currency, setCurrency] = useState("");
  const [value, setValue] = useState(0);
  const [loadingState, setLoadingState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="container">
      <h1>Przelicznik walut</h1>
      <Form
        setCurrency={setCurrency}
        setValue={setValue}
        setErrorMessage={setErrorMessage}
        setLoadingState={setLoadingState}
      />

      {currency && (
        <FetchCurrency getCurrency={currency} getValue={value} setLoadingState={setLoadingState} />
      )}

      <Status getErrorMessage={errorMessage} getLoadingState={loadingState} />
    </div>
  );
};

export default ConverterContainer;
