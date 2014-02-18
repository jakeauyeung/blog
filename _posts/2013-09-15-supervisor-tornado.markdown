---
layout: post
title:  "Tornado,supervisor,nginx它们之间的神配合"
date:   2013-09-15 14:00:58
categories: update
---
<h4>Python</h4>
先来说说python,我的服务器是centos，自带的版本太低了（version：2.4),应该有必要升级一下版本。
升级之前先装一下必要的依赖：
{% highlight bash %}
yum groupinstall "Development tools"
yum install zlib-devel
yum install bzip2-devel
yum install openssl-devel
yum install ncurses-devel
{% endhighlight %}

然后下载python编译阶段了：
{% highlight bash %}
cd /opt
wget http://www.python.org/ftp/python/2.7.3/Python-2.7.3.tar.bz2
tar xf Python-2.7.3.tar.bz2
cd Python-2.7.3
./configure --prefix=/usr/local
make && make altinstall
{% endhighlight %}

系统目前还是老版本，需要创建一个软链接：
{% highlight bash %}
mv /usr/bin/python /usr/bin/python2.4
ln -s /usr/local/bin/python2.7 /usr/bin/python
{% endhighlight %}

系统目前使用python -V查询到的是更新版本，但是系统的yum还是基于python2.4版本的，为了yum功能不受影响，我们只需要修改/usr/bin/yum文件，把第一行的#!/usr/bin/python换成#!/usr/bin/python2.4即可

<h4>Tornado</h4>
接下来是安装Tornado，你可以选择easy_install或者pip来，也可以下载包来安装，我这边是下载源码直接编译的
官网：<a href="http://www.tornadoweb.org" target="_bank">http://www.tornadoweb.org</a>
{% highlight bash %}
tar xvzf tornado-3.1.1.tar.gz
cd tornado-3.1.1
python setup.py build
sudo python setup.py install
{% endhighlight %}

<h4>supervisor</h4>
我采用的是easy_install来安装的，那么先安装easy_install吧
{% highlight bash %}
cd /opt
wget http://pypi.python.org/packages/source/d/distribute/distribute-0.6.27.tar.gz
tar xf distribute-0.6.27.tar.gz
cd distribute-0.6.27
python setup.py install
{% endhighlight %}

这步完成来之后就是安装supervisor
{% highlight bash %}
easy_install supervisor
{% endhighlight %}

<h4>nginx</h4>
安装参考我另外一篇

<h4>三者之间的配合</h4>
使用Tornado编写一个web.py程序，我文件路径/var/local/tornado/web.py
{% highlight python %}
import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
	def get(self):
		self.render("index.html", title="Hello,Tornado")

application = tornado.web.Application([
	(r"/", MainHandler),
])

if __name__ == "__main__":
	application.listen(8801)
	tornado.ioloop.IOLoop.instance().start()
{% endhighlight %}
这里我读取来一个Index.html模板，并且监听了8801端口。

Supervisor的配置：
默认配置文件安装到/usr/local/bin。
{% highlight bash %}
echo_supervisord_conf > /etc/supervisord.conf
{% endhighlight %}

添加4个Tornado配置
{% highlight bash %}
[program:api_demo]
command=python /var/local/tornado/web.py 88%(process_num)02d
process_name=%(program_name)s_%(process_num)02d ;process_name expr(default %(program_name)s)
numprocs=4
numprocs_start=1
startretries=3
autostart=true
stdout_logfile=/var/local/tornado/api_demo.log
{% endhighlight %}
这个配置会启动4个Tronado的服务器进程分别监听 8801，8802，8803，8804这四个端口
command这一行是要执行的命令，88%（process_num)02d的用途是通过进程编号来生成端口号，下面的process_name这个参数也会用到。这里要指定的文件名就是上一步我们创建那个web.py文件
process_name是进程的名字，由于这里要启动4个进程，所以要用process_num来区分
startretries这个参数是程序启动的等待时间
stdout_logfile这个发参数是STD流输出日志文件的路径
numprocs表示进程的数量，4表示要启动4个Tornado进程
numprocs_start 这个参数指定来进程号的起始编号，这里是1

启动supervisor
{% highlight bash %}
supervisord -c /etc/supervisord.conf
{% endhighlight %}

查看进程
{% highlight bash %}
ps aux | grep web
{% endhighlight %}

杀掉一个进程，看是不是会自动启动 kill -9 xxxx （PIDxxxx 号）

接下来是配置Nginx反向代理
我的nginx配置文件路径/usr/local/nginx/conf
我在http里面加了upstream frontends
{% highlight bash %}
upstream frontends {
	server 127.0.0.1:8801;
	server 127.0.0.1:8802;
	server 127.0.0.1:8803;
	server 127.0.0.1:8804;
    }
{% endhighlight %}

之后再添加来一个server
{% highlight bash %}
server {
	listen 8080;
	server_name localhost;
	
	location / {
		proxy_pass http://frontends;
	}	
    }
{% endhighlight %}

到此启动nginx，访问localhost:8080就可以了。测试：<a href="0522.org:8080">0522.org:8080</a>


