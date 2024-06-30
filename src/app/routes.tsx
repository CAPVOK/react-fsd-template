import { createBrowserRouter } from "react-router-dom";

import { HomePage, NotFoundPage, SomePage } from "pages";

export const router = createBrowserRouter([
  { path: "/", index: true, element: <HomePage /> },
  { path: "/some", element: <SomePage /> },
  { path: "*", element: <NotFoundPage /> },
]);
