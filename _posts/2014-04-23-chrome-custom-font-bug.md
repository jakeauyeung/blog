---
layout: post
title:  "chrome浏览器自定义iconfont显示BUG"
date:   2014-04-23 16:00:58
categories: update
---

####场景

某些chrome版本可能会造成自定义字体默认加载不进来

####解决

```
p{
  -webkit-animation-duration: 0.1s;
  -webkit-animation-name: fontfix;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-timing-function: linear;
  -webkit-animation-delay: 1s;
}
@-webkit-keyframes fontfix{
  from{   opacity: 1; }
  50%{  opacity: 0.8; }
  to{ opacity: 1; }
}
```

p元素可做局部父容器