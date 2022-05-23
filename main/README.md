# react-admin-template

## 技术栈文档

- [qiankun](https://qiankun.umijs.org/zh/guide)

### 跳转

1. 子应用内部之间使用`react-router-dom`的`Link`
2. 子应用之间使用 `history.pushState(null, "app2-demo2", "/app2/demo2")`
3. 主应用需要监听`window.addEventListener('popstate', onPopstate);`用于更新菜单的选中状态
