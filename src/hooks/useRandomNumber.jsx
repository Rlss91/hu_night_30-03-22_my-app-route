import { useState, useEffect } from "react";
const useRandomNumber = (fromNumber, toNumber) => {
  const [rndNumber, setRndNumber] = useState(undefined);
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  useEffect(() => {
    setRndNumber(getRandomIntInclusive(fromNumber, toNumber));
  }, [fromNumber, toNumber]);
  return rndNumber;
};

export default useRandomNumber;
