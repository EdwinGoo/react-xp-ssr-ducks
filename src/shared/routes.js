import List from "Shared/containers/ListContainer";
import Detail from "Shared/containers/DetailContainer";

export default [
  {
    path: "/",
    component: List,
    exact: true
  },
  {
    path: "/coin/:name",
    component: Detail,
    exact: true
  }
];
