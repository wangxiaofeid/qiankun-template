import { useEffect } from "react";
import ReactDOM from "react-dom";
import { registerMicroApps, start, setDefaultMountApp } from "qiankun";
import Layout from "./Layout";
import "./index.less";

window.isQiankun = true;

function App() {
  useEffect(() => {
    // 模仿异步注册子应用
    setTimeout(() => {
      registerMicroApps([
        {
          name: "react app1", // app name registered
          entry: "//0.0.0.0:8081",
          container: "#subapp-viewport",
          activeRule: "/app1"
        },
        {
          name: "react app2",
          entry: "//0.0.0.0:8082",
          container: "#subapp-viewport",
          activeRule: "/app2"
        }
      ]);
      start();
      setDefaultMountApp("/app1");
    }, 1000);
  }, []);
  return (
    <Layout>
      <div id="subapp-viewport"></div>
    </Layout>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
