import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Subscription from "./views/Subscription";
import List from "./views/List";
import NotFound from "./views/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Subscription />} />
      <Route path="/list" element={<List />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
