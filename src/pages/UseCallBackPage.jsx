import { Fragment, useState, useEffect, useCallback } from "react";

const UseCallBackPage = () => {
  const [txt, setTxt] = useState("");

  const memoizedCallback = useCallback(() => {
    console.log("txt", txt);
    // setTxt(txt + "$");
  }, [txt]);

  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);
  const handleBtnClick = () => {
    setTxt("something");
    // console.log("txt", txt);
  };
  return (
    <Fragment>
      <h1>{txt}</h1>
      <button className="btn btn-info" onClick={handleBtnClick}>
        click me
      </button>
    </Fragment>
  );
};

export default UseCallBackPage;
