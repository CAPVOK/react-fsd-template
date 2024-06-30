import { Link, useParams } from "react-router-dom";
import { RoutesEnum } from "src/app/routes";

export const SomeByIdPage = () => {
  const { id } = useParams();
  return (
    <div>
      <p>SomeByIdPage, id - {id}</p>
      <Link to={RoutesEnum.Home}>To Home</Link>
    </div>
  );
};
