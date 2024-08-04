import { useEffect, useState } from "react";
import "./FetchCurrency.css";

const FetchCurrency = ({ getCurrency, getValue, setLoadingState, setErrorMessage }) => {
  const [result, setResult] = useState(0);

  useEffect(() => {
    fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${getCurrency}`)
      .then((res) => res.json())
      .catch((err) => {
        setLoadingState(false);
        setErrorMessage("Wystąpił błąd, spróbuj ponownie później");
        console.error(err);
      })

      .then((data) => {
        const rates = data?.rates?.[0]?.mid;

        if (rates) {
          setResult(rates * getValue);
        } else {
          setLoadingState(false);
          setErrorMessage("Wystąpił błąd, spróbuj ponownie później");
        }
      });
    if (result > 0) {
      setLoadingState(false);
    }
  });

  return <p className="result">{result}</p>;
};

export default FetchCurrency;
