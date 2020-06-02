# PwaDemo

## 用Angular来构建PWA应用

1. 创建一个Angular项目   `ng new pwa-demo`
2. 添加pwa支持 `ng add @angular/pwa`
3. 添加本地服务器 `npm install http-server -g`
4. 构建项目 `ng build --prod`
5. 启动服务 `http-server -p 8080 -c-1 dist/pwa-demo` 

## 运行PwaDemo项目
1. 下载[后端项目](https://github.com/liner60/pwa-demo-backend) `git clone git@github.com:liner60/pwa-demo-backend.git`
2. 运行后端项目 `node index.js`
3. 下载[前端项目](https://github.com/liner60/angular-pwa-demo) `git clone git@github.com:liner60/angular-pwa-demo.git`
4. 下载依赖 `npm install`
5. 添加本地服务器 `npm install http-server -g`
6. 构建项目 `ng build --prod`
7. 启动服务并设置反向代理 `http-server -p 8080 -c-1 -P http://localhost:4000 dist/pwa-demo`
8. 浏览器打开地址 `http://localhost:8080`
