import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/Home";
import LeadListSelector from "../components/LeadListSelector";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/lead-list-selector",
        element: <LeadListSelector />,
      },
    ],
  },
]);
export default router;
