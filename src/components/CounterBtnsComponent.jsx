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
  const handleAdd5BtnClick = () => {
    dispatch(counterActions.addNumber(5));
  };
  const handleSub5BtnClick = () => {
    dispatch(counterActions.subNumber(5));
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
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleAdd5BtnClick}
      >
        +5
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleSub5BtnClick}
      >
        -5
      </button>
    </div>
  );
};

export default CounterBtnsComponent;
