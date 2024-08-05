import "./Status.css";

const Status = ({ getResult, getErrorMessage, getLoadingState }) => {
  return (
    <>
      <p className="message result">{getResult}</p>
      <p className="message error">{getErrorMessage}</p>
      {getLoadingState && <span className="loading-text"></span>}
    </>
  );
};

export default Status;
