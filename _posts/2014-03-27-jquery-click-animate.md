---
layout: post
title:  "animate如果避免鼠标快速点击造成的问题"
date:   2014-03-27 16:00:58
categories: update
---

####场景

我们往往给点击时间添加animate动画，可能一些情况需要动画执行完毕才能再次点击。

####解决

```
function clickFunction(obj) {

//If animated than we wait the animation to be over
if ($(':animated').length) {
    return false;
}
 
obj.animate({
//Animation here that is executed one but if clicked before
//this one is over won't be reached
}, 4000);

}
```