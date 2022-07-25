# css scope & css in js

## css scope 解决了什么

在未做css scope的应用下，多人协作、或者作为一个微前端的子应用，一不小心就写了一个样式，把其他人的覆盖了

寻求一种方法，无需考虑样式覆盖，只需要关注自己的样式需要使用在哪个文件或者哪个组件，在其他地方绝对不会生效

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
