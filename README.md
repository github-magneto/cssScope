# css scope & css in js

## css scope 实现方法

· webpack css-loader配置
· css in js
· 约定命名规范

## webpack css-loader 实现 css scope

· 开启css-loader moudles
· 每一个样式文件重新赋予hash命名
· 导入变量使用样式文件：import name from './style.css'
· 一个样式文件可被多次导入，hash命名不变
· 扩展样式语法需提前使用less-loader、scss-loader解析

· css-loader moudles 整体处理流程：
  
webpack启动 -> import ... from './style.css' -> loader解析、产生hash名称、产生output name map -> 组件文件内使用name map、将hash name绑定到标签

## css in js 初步实践

· styled-components
· radium
