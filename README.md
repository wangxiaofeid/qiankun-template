# qiankun-template
## 技术栈文档

- [qiankun](https://qiankun.umijs.org/zh/guide)
- [别人发现的一些问题，值的借鉴](https://www.csdn.net/tags/OtDaYgzsNjkwOTgtYmxvZwO0O0OO0O0O.html)
- [关于样式隔离](https://juejin.cn/post/6992944363798003743)

### 跳转

1. 子应用内部之间使用`react-router-dom`的`Link`
2. 子应用之间使用 `history.pushState(null, "app2-demo2", "/app2/demo2")`
3. 主应用需要监听`window.addEventListener('popstate', onPopstate);`用于更新菜单的选中状态

### 计划

1. 搭建基础框架  - 100%
2. 样式隔离方案  - 子应用之间可以设置成不共存、父子应用之间使用插件`postcss-plugin-namespace`增加前缀
3. 公共包抽取  - 通过`getTemplate`方法把子应用中的配置为`external`的三方包不加载