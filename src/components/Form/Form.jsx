import "./Form.css";

const Form = () => {
  return (
    <form className="form">
      <input type="number" placeholder="Podaj kwotę" required min={0.01} step={0.01} />
      <select>
        <option value="eur">EUR</option>
        <option value="usd">USD</option>
        <option value="chf">CHF</option>
      </select>
      <button type="submit">Przelicz na PLN</button>
    </form>
  );
};

export default Form;
