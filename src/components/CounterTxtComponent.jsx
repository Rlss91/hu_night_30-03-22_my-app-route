import { useSelector } from "react-redux";

const CounterTxtComponent = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        #
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="number"
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={count}
      />
    </div>
  );
};

export default CounterTxtComponent;
