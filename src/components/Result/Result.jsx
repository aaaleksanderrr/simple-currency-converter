import "./Result.css";

const Result = ({ result, errors }) => {
  return (
    <>
      <p>{result}</p>
      <p className="error">{errors}</p>
    </>
  );
};

export default Result;
