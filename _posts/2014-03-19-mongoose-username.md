---
layout: post
title:  "mongoose查询：判断用户名是否存在"
date:   2014-03-22 10:00:58
categories: update
---

新手碰到这个问题，估计会踩坑吧，我在做数据库管理工具的时候已经碰到过。

刚开始我以为这样的。

```
//检查用户名是否已经存在 
User.get({name: newUser.name}, function (err, users) {
if (users) {     //<--请注意此处
  req.flash('error', '用户已存在!');
  return res.redirect('/reg');//返回注册页
}
// 如果不存在则新增用户
User.save(newUser, function(err){
    if(err){}
        req.session.user = newUser;//用户信息存入 session
      req.flash('success', '注册成功!');
      res.redirect('/');//注册成功后返回主页
  });
});
```

typeof users 都会或者这是object，所以无论mongodb里面是否存在name,都是报“用户已存在”

应该toString()

最后变成

```
//检查用户名是否已经存在 
User.get({name: newUser.name}, function (err, users) {
if (users.toString) {     //<--请注意此处
  req.flash('error', '用户已存在!');
  return res.redirect('/reg');//返回注册页
}
// 如果不存在则新增用户
User.save(newUser, function(err){
    if(err){}
        req.session.user = newUser;//用户信息存入 session
      req.flash('success', '注册成功!');
      res.redirect('/');//注册成功后返回主页
  });
});
```

