---
layout: post
title:  "Jekyll实现博客文章键盘快捷键"
date:   2014-04-23 18:00:58
categories: update
---

####场景

用户浏览页面的时候可以使用键盘左右方向键导航到上一篇，下一篇

####解决

{% gist 11239106 %}

```
$(function(){
      $(document).keydown(function(e) {
        var url = false;
        if (e.which == 37 || e.which == 72) {  // Left arrow and J
          {% if page.previous %}
            url = '{{page.previous.url}}';
          {% endif %}
        } else if (e.which == 39 || e.which == 76) {  // Right arrow and K
          {% if page.next %}
            url = '{{page.next.url}}';
          {% endif %}
        }
        if (url) {
          window.location = url;
        }
      }
    );
  })
```
