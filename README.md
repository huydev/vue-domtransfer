# vue-domtransfer

一个指令用于改变dom位置。

## 安装

``` js
var VueDomtransfer = require('path/vue-domtransfer')
Vue.use(VueDomtransfer)
```

## 使用

#### 使用 `v-domtransfer` 指令

``` html
<div v-domtransfer="target">test</div>

<div v-domtransfer="'body'">test</div>

<div v-domtransfer="'#app'">test</div>
```