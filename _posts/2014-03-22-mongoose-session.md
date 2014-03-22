---
layout: post
title:  "mongoose保存用户session操作记录"
date:   2014-03-22 16:00:58
categories: update
---
使用的中间件是：session-mongo

```
var SessionStore = require('session-mongoose')(express);
var store = new SessionStore({
  url: 'mongodb://localhost/session',
  intercal: 120000
})
...
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({
  secret: settings.cookieSecret,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//30 days
  store: store
}));
app.use(app.router);
```

假设场景是登录页面，包含用户名，密码
前提需要获得页面表单域

```
var newUser = {
     name:req.body.name,
     password:password
};

//用户名密码都匹配后，将用户信息存入 session
req.session.user = newUser;
```

如果页面需要判断用户是否登录，那么需要读取刚才存储到数据库的session

```
res.render('index', {
     title: '登录',
     User: req.session.user,    //<—此处读取User 传递到ejs
success: req.flash('success').toString(),
error: req.flash('error').toString()
});
```

ejs获得User来做用户是否登录判断


```
<% if (User) { %>
…  //当登录成功操作的代码
<% } else { %>
… //当登录失败操作的代码
<% } %>
```