import { useDispatch } from "react-redux";

import { counterActions } from "../store/counter.redux";

const CounterBtnsComponent = () => {
  const dispatch = useDispatch();
  const handleAddBtnClick = () => {
    dispatch(counterActions.add1());
  };
  const handleSubBtnClick = () => {
    dispatch(counterActions.sub1());
  };
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleAddBtnClick}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleSubBtnClick}
      >
        -1
      </button>
    </div>
  );
};

export default CounterBtnsComponent;
