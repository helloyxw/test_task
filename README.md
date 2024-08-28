# DOM 变化跟踪器

这个项目包含一个浏览器扩展和一个本地服务器,用于跟踪网页 DOM 变化并记录这些变化。

## 安装说明

### 浏览器扩展

1. 打开 Chrome 浏览器,进入 `chrome://extensions/`
2. 启用"开发者模式"
3. 点击"加载已解压的扩展程序"
4. 选择包含 manifest.json 和 content.js 的文件夹

### 本地服务器

1. 确保已安装 Node.js
2. 在项目目录中运行 `npm install express body-parser`
3. 运行 `node server.js` 启动服务器

## 测试

1. 启动本地服务器
2. 打开任意网页
3. 观察服务器控制台输出和 notifications.json 文件中的变化记录

