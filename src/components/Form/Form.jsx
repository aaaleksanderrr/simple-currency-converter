import "./Form.css";
import { useForm } from "react-hook-form";

const Form = ({ setCurrency, setValue, setErrorMessage, setLoadingState }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  setErrorMessage(errors?.amount?.message);

  const onSubmit = (data) => {
    setCurrency(data.currency);
    setValue(data.amount);
    setLoadingState(true);
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
