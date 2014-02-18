---
layout: post
title:  "NGINX服务器实现CSS,JS合并功能"
date:   2013-07-11 22:20:58
categories: update
---

功能我已经全部走过一遍，完全实现了，下面记录一些注意的地方。
服务器我目前是采用的nginx，因为淘宝已经提供了开源的合并功能nginx模块，只需要重新编译nginx一次，在configure的时候加载淘宝的合并模块就可以了，nginx安装我已经在前面写过了。
先下载淘宝的nginx_concat_module
{% highlight bash %}
svn checkout http://code.taobao.org/svn/nginx_concat_module/trunk/ $NGINX_CONCAT_MODULE
{% endhighlight %}
 接下来就是进入nginx根目录进行configure：
{% highlight bash %}
./configure --add-module=$NGINX_CONCAT_MODULE
{% endhighlight %}
$NGINX_CONCAT_MODULE 是下载模块的路径 接下来就是配置模块方面。
配置新的 nginx 编译安装好以后，配置 nginx_concat_module 主要有如下的选项
{% highlight bash %}
# nginx_concat_module 主开关
concat on;

# 最大合并文件数
# concat_max_files 10;

# 只允许同类型文件合并
# concat_unique on;

# 允许合并的文件类型，多个以逗号分隔。如：application/x-javascript, text/css
# concat_types text/html;
{% endhighlight %}
（详细察看安装包下 INSTALL 和 README 文件）。其实不用那么复杂，简单的配置
{% highlight bash %}
location / {
     concat    on;
}
{% endhighlight %}
就可以合并 javascript、css 等文件了（顺便注意是否和 rewrite 规则冲突）。

enjoy!!
