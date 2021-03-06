import "./SpinnerComponent.css";

const SpinnerComponent = () => {
  return (
    <div className="spinner-border spinner-border-red" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default SpinnerComponent;
