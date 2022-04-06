import { Fragment } from "react";
import { useLocation } from "react-router-dom";
const CardsNumberPage = () => {
  const location = useLocation();
  return (
    <Fragment>
      <h1>Cards: {location.state.cardsNumber}</h1>
    </Fragment>
  );
};

export default CardsNumberPage;
