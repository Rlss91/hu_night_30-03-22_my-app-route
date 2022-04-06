import { useParams } from "react-router-dom";
const ParamsPage = () => {
  const { key } = useParams();
  return <h1>Params page, key={key}</h1>;
};

export default ParamsPage;
