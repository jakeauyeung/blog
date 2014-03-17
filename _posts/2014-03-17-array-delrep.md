---
layout: post
title:  "javascript数组去重函数"
date:   2014-03-17 10:00:58
categories: update
---

###javascript数组去重函数

代码：

```
Array.prototype.delrep = function(fun) {
        if(!fun) {
            fun = function(d) {return d;};
        }
        var newArr = [];
        this.sort(function(a, b) {
            return fun(a) > fun(b) ? -1 : 1;
        });
        newArr.push(this[0]);
        this.forEach(function(d) {
            if(fun(d) != fun(newArr[0])) {
                newArr.unshift(d);
            }
        });
        return newArr;
    };
```

1,对于基本类型数组：

```
[1,2,3,4,5,5,6,6,5].delrep();//输出[1, 2, 3, 4, 5, 6]
```

2，对于对象数组：

```
var data = [
        {
            name: "aaa",
            value: 123
        },
        {
            name: "bbb",
            value: 234
        },
        {
            name: "aaa",
            value: 789
        }
    ];
console.log(data2.delrep(function(d) {return d.name;}));
//输出[
        {
            name: "bbb",
            value: 234
        },
        {
            name: "aaa",
            value: 789
        }
    ];
```