import CounterBtnsComponent from "../components/CounterTxtComponent";
import CounterTxtComponent from "../components/CounterBtnsComponent";

const CounterPage = () => {
  return (
    <div className="row">
      <div className="col">
        <CounterBtnsComponent />
      </div>
      <div className="col">
        <CounterTxtComponent />
      </div>
    </div>
  );
};
export default CounterPage;
