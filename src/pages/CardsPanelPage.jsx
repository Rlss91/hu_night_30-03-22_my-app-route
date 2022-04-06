import { useState, useEffect } from "react";
import { cloneDeep } from "lodash";
import { useHistory } from "react-router-dom";
import axios from "axios";

import CardComponent from "../components/CardComponent";
import SpinnerComponent from "../components/SpinnerComponent/SpinnerComponent";

const CardsPanelPage = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [dataArr, setDataArr] = useState([]);

  const history = useHistory();

  useEffect(() => {
    console.log("dataArr changed");
    setShowSpinner(false);
  }, [dataArr]);

  useEffect(() => {
    axios.get("/cards/myCards").then((dataFromServer) => {
      console.log("dataFromServer", dataFromServer);
      setDataArr(dataFromServer.data);
    });
  }, []);

  const handleDeleteCard = (id) => {
    setShowSpinner(true);
    setTimeout(() => {
      console.log("from father", id);
      let newDataArr = cloneDeep(dataArr);
      newDataArr = newDataArr.filter((item) => {
        return item.id !== id;
      });
      setDataArr(newDataArr);
    }, 3000);
  };
  const handleGotoClick = () => {
    history.push("/cardsnumber", { cardsNumber: dataArr.length });
  };
  return (
    <div>
      {showSpinner && <SpinnerComponent />}
      {dataArr.map((item) => {
        return (
          <CardComponent
            name={item.bizName}
            desc={item.bizDescription}
            id={item._id}
            key={item._id}
            onDeleteCard={handleDeleteCard}
          />
        );
      })}
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleGotoClick}
      >
        Go to cards counter
      </button>
    </div>
  );
};

export default CardsPanelPage;
