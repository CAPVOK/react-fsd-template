import { createBrowserRouter } from "react-router-dom";
import { HomePage, SomePage, SomeByIdPage, NotFoundPage } from "src/pages";

export enum RoutesEnum {
  Home = "/",
  Some = "/Some",
  SomeById = "/some/:id",
}

export const router = createBrowserRouter([
  { path: RoutesEnum.Home, index: true, element: <HomePage /> },
  { path: RoutesEnum.Some, element: <SomePage /> },
  { path: RoutesEnum.SomeById, element: <SomeByIdPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

/**
 * Функция для формирования пути маршрута с подстановкой параметров
 *
 * @param {RoutesEnum} route - маршрут RoutesEnum
 * @param {...string[]} args - аргументы для подстановки в маршрут
 * @returns {string} - сформированный путь
 *
 * Пример использования:
 * getRoute(RoutesEnum.MovieById, "4") -> "/movie/4"
 */
export function getRoute(
  route: RoutesEnum,
  ...args: (string | number)[]
): string {
  let path = route.toString();
  args.forEach((arg) => {
    path = path.replace(/:\w+/, arg.toString());
  });
  return path;
}
