import { useState } from "react";
import Result from "../Result/Result";
import "./Form.css";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [value, setValue] = useState(0);

  let amount, currency, errorMessage;

  errorMessage = errors?.amount?.message;

  return (
    <>
      <form
        noValidate
        className="form"
        onSubmit={handleSubmit((data) => {
          amount = data.amount;
          currency = data.currency;
          setValue(amount);
        })}
      >
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
      <Result result={value} errors={errorMessage} />
    </>
  );
};

export default Form;
