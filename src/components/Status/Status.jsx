import "./Status.css";

const Status = ({ getErrorMessage, getLoadingState }) => {
  return (
    <>
      <p className="error">{getErrorMessage}</p>
      {getLoadingState && <span className="loading-text"></span>}
    </>
  );
};

export default Status;
