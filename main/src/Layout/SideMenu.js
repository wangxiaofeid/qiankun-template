import { useState, useEffect, useCallback } from "react";
import { Menu, Icon } from "antd";
import { filter, find, get } from "lodash";
import logoImg from "./logo.svg";

const { SubMenu, Item: MenuItem } = Menu;
const menuTree = [
  {
    name: "应用1-分组1",
    code: "app1-group1",
    icon: "mail",
    children: [
      {
        name: "app1-demo1",
        code: "app1-demo1",
        url: "/app1/demo1"
      },
      {
        name: "app1-demo2",
        code: "app1-demo2",
        url: "/app1/demo2"
      }
    ]
  },
  {
    name: "应用1-分组2",
    code: "app1-group2",
    icon: "exclamation-circle",
    children: [
      {
        name: "403",
        code: "app1-403",
        url: "/app1/403"
      },
      {
        name: "404",
        code: "app1-404",
        url: "/app1/404"
      }
    ]
  },
  {
    name: "应用2-分组1",
    code: "app2-group1",
    icon: "mail",
    children: [
      {
        name: "demo1",
        code: "app2-demo1",
        url: "/app2/demo1"
      },
      {
        name: "demo2",
        code: "app2-demo2",
        url: "/app2/demo2"
      }
    ]
  },
  {
    name: "应用2-分组2",
    code: "app2-group2",
    icon: "exclamation-circle",
    children: [
      {
        name: "403",
        code: "app2-403",
        url: "/app2/403"
      },
      {
        name: "404",
        code: "app2-404",
        url: "/app2/404"
      }
    ]
  }
];

const findKeyPath = (pathname) => {
  for (let i = 0; i < menuTree.length; i++) {
    const { code, children } = menuTree[i];
    for (let j = 0; j < children.length; j++) {
      const { url, code: cCode } = children[j];
      if (url === pathname) {
        return [cCode, code];
      }
    }
  }
};

export default function SideMenu({ collapsed }) {
  const [openKeys, setOpenKeys] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(false);

  const onOpenChange = useCallback((newKeys) => {
    setOpenKeys((openKeys) => {
      return filter(newKeys, (key) => !openKeys.includes(key));
    });
  }, []);

  const onMenuClick = useCallback(({ keyPath }) => {
    const { name, code, url } = find(
      get(
        find(menuTree, (m) => m.code === keyPath[1]),
        "children"
      ),
      (m) => m.code === keyPath[0]
    );
    history.pushState(null, name, url);
    setSelectedKeys([code]);
  }, []);

  const onPopstate = useCallback(() => {
    const keyPath = findKeyPath(window.location.pathname);
    if (keyPath) {
      setOpenKeys([keyPath[1]]);
      setSelectedKeys([keyPath[0]]);
    }
  }, []);

  useEffect(() => {
    const keyPath = findKeyPath(window.location.pathname);
    if (keyPath) {
      setOpenKeys([keyPath[1]]);
      setSelectedKeys([keyPath[0]]);
    }
  }, [window.location.pathname]);

  useEffect(() => {
    window.addEventListener("popstate", onPopstate);
    return () => {
      window.removeEventListener("popstate", onPopstate);
    };
  }, []);

  return (
    <>
      <div className="logo">
        <img src={logoImg} />
        {!collapsed && "后台管理"}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onOpenChange={onOpenChange}
        onClick={onMenuClick}
      >
        {menuTree.map(({ code, name, icon, children }) => (
          <SubMenu
            key={code}
            title={
              <span>
                <Icon type={icon} />
                <span>{name}</span>
              </span>
            }
          >
            {children?.map(({ code, name }) => (
              <MenuItem key={code}>{name}</MenuItem>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </>
  );
}
