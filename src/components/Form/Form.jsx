import "./Form.css";
import { useForm } from "react-hook-form";

import React from "react";

const Form = ({ setResult, setErrorMessage, setLoadingState }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let currency, value, result;

  setErrorMessage(errors?.amount?.message);

  const onSubmit = (data) => {
    currency = data.currency;
    value = data.amount;
    setLoadingState(true);

    fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${currency}`)
      .then((res) => res.json())
      .catch((err) => {
        setLoadingState(false);
        setErrorMessage("Wystąpił błąd, spróbuj ponownie później");
        console.error(err);
      })

      .then((data) => {
        const rates = data?.rates?.[0]?.mid;

        if (rates) {
          result = rates * value;
          setResult(result.toFixed(2));
        } else {
          setLoadingState(false);
          setErrorMessage("Wystąpił błąd, spróbuj ponownie później");
        }

        if (result > 0) {
          setLoadingState(false);
        }
      });
  };

  return (
    <form noValidate className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("amount", {
          required: "Wpisz kwotę do przeliczenia",
          min: { value: 0.01, message: "Kwota nie może być mniejsza od 0.01" },
        })}
        type="number"
        placeholder="Podaj kwotę"
      />
      <select {...register("currency")}>
        <option value="eur">EUR</option>
        <option value="usd">USD</option>
        <option value="chf">CHF</option>
      </select>
      <button type="submit">Przelicz na PLN</button>
    </form>
  );
};

export default Form;
