import { Link } from "react-router-dom";
import { getRoute, RoutesEnum } from "src/app/routes";

export const HomePage = () => {
  return (
    <div>
      <p>Home page</p>
      <Link to={getRoute(RoutesEnum.SomeById, 1)}>To 1 SomePge</Link>
      <Link to={getRoute(RoutesEnum.SomeById, 2)}>To 2 SomePge</Link>
      <Link to={getRoute(RoutesEnum.SomeById, 3)}>To 3 SomePge</Link>
    </div>
  );
};
