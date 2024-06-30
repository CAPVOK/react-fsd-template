import { Link } from "react-router-dom";
import { RoutesEnum } from "src/app/routes";

export const SomePage = () => {
  return (
    <div>
      <p>SomeByIdPage</p>
      <Link to={RoutesEnum.Home}>To Home</Link>
    </div>
  );
};
