import { Route, Redirect, Switch } from "react-router-dom";
import SplitComponent from "@/utils/splitComponent";
import { pathPrefix } from "@/constants/systemConfig";

const authCheckHOC = (path, component) => {
  return component;
};

export const menus = [
  {
    path: "/demo1",
    component: SplitComponent(() => import("@/pages/Demo1")),
    title: "demo1"
  },
  {
    path: "/demo2",
    component: SplitComponent(() => import("@/pages/Demo2")),
    title: "demo1"
  },
  {
    path: "/403",
    component: SplitComponent(() => import("@/components/Exception/403")),
    title: "403"
  },
  {
    path: "/404",
    component: SplitComponent(() => import("@/components/Exception/404")),
    title: "404"
  }
];

export default function Router() {
  return (
    <Switch>
      {menus.map(({ path, component }) => {
        return (
          <Route
            key={path}
            path={`${pathPrefix}${path}`}
            component={authCheckHOC(path, component)}
          />
        );
      })}
      <Redirect to={`${pathPrefix}/demo1`} />
    </Switch>
  );
}
