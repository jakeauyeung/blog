---
layout: post
title:  "我跟CSS不得不说的事之清除浮动"
date:   2013-07-19 14:00:58
categories: update
---

<b>清除浮动的那点事</b><br>
这样写IE6/7你是清除不了浮动的
{% highlight css %}
.clearfix:after{content: "";display: table;clear: both;}
{% endhighlight %}

还必须加上这个
{% highlight css %}
.clearfix{*zoom:1}
{% endhighlight %}


