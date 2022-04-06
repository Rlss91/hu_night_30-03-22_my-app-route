import CounterBtnsComponent from "../components/CounterBtnsComponent";
import CounterTxtComponent from "../components/CounterTxtComponent";

const CounterPage = () => {
  return (
    <div className="row">
      <div className="col">
        <CounterTxtComponent />
      </div>
      <div className="col">
        <CounterBtnsComponent />
      </div>
    </div>
  );
};
export default CounterPage;
