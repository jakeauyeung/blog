---
layout: post
title:  "MAC下面安装asciinema出现的问题与解决方法"
date:   2014-03-06 21:00:58
categories: update
---
asciinema是录制terminal命令的服务网站，可分享。

<script type="text/javascript" src="https://asciinema.org/a/8034.js" id="asciicast-8034" async></script>

在MAC安装asciiname服务会碰到一点问题，安装asciinema:

```
sudo pip install --upgrade asciinema
```

之后你运行asciinema会出现如下错误

```
➜  ~  asciinema 
Traceback (most recent call last):
  File "/usr/local/bin/asciinema", line 5, in <module>
    from pkg_resources import load_entry_point
  File "/System/Library/Frameworks/Python.framework/Versions/2.7/Extras/lib/python/pkg_resources.py", line 2603, in <module>
    working_set.require(__requires__)
  File "/System/Library/Frameworks/Python.framework/Versions/2.7/Extras/lib/python/pkg_resources.py", line 666, in require
    needed = self.resolve(parse_requirements(requirements))
  File "/System/Library/Frameworks/Python.framework/Versions/2.7/Extras/lib/python/pkg_resources.py", line 565, in resolve
    raise DistributionNotFound(req)  # XXX put more info here
pkg_resources.DistributionNotFound: requests>=1.1.0
```

修复：

```
sudo pip install --upgrade https://github.com/sickill/asciinema/tarball/master
```

