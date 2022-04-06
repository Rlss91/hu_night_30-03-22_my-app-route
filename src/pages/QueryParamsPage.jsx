import { Fragment } from "react";
import { useLocation } from "react-router-dom";

const QueryParamsPage = () => {
  const location = useLocation();
  const qParamsObj = new URLSearchParams(location.search);
  return (
    <Fragment>
      <h3>k1={qParamsObj.get("k1")}</h3>
      <h3>k2={qParamsObj.get("k2")}</h3>
    </Fragment>
  );
};

export default QueryParamsPage;
