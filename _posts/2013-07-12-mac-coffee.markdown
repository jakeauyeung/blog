---
layout: post
title:  "MAC ST2如何配置COFFEESCRIPT编译环境"
date:   2013-07-12 6:00:58
categories: update
---

ST2的安装这里就不想说了，官网下载安装即可。

默认情况下面ST2是没有install control面板的，需要开启。

使用快捷键：
{% highlight bash %}
control+`
{% endhighlight %}
打开命令面板，输入
{% highlight bash %}
import urllib2,os;pf='Package Control.sublime-package';ipp=sublime.installed_packages_path();os.makedirs(ipp) if not os.path.exists(ipp) else None;open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read())
{% endhighlight %}
之后安装coffee compile

快捷键：
{% highlight bash %}
shift＋command＋p
{% endhighlight %}
使用package control:install package 查找coffee compile 进行安装

安装之后需要配置下coffee，node路径，打开Terminal使用which查找各自的路径。
{% highlight bash %}
which coffee
which node
{% endhighlight %}
下面是我的配置项： 
<p><a href="{{ site.url }}/src/updateimg/3022407470.png"><img width="300" height="200" src="{{ site.url }}/src/updateimg/3022407470.png"></a></p>
安装之后便可以使用了
{% highlight bash %}
shift＋control+c
{% endhighlight %}
编译成为js
{% highlight bash %}
shift+command+b
{% endhighlight %}
