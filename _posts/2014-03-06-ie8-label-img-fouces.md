---
layout: post
title:  "IE8,7下面使用LABEL+IMG方式会产生的BUG问题"
date:   2014-03-06 10:00:58
categories: update
---

如果你的项目用如下结构的话，那么你可能碰到一下几个BUG

```
<ul>
    <li>
        <label for="one"><img src="logo.png" alt=""></label>
        <input type="text" id="one">
    </li>
    <li>
        <label for="two"><img src="logo.png" alt=""></label>
        <textarea cols="10" rows="3" id="two"></textarea>
    </li>
    <li>
        <label for="three"><img src="logo.png" alt=""></label>
        <input type="checkbox" id="three">
    </li>
    <li>
        <label for="four"><img src="logo.png" alt=""></label>
        <input type="radio" name="foo" id="four">
    </li>
</ul>
```

###BUG one
label一定要加for属性，然后input也必须加id，才能产生效果

###BUG two
当有img存在的情况下IE7.8下面无法出发点击事件，解决方法是加一个span标签，设置背景或者用滤镜
如

```
<span style="position:relative;
        top:-180px;display:block;height:180px;width:280px;
        z-index:1;background-color:Aqua;
        -ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=1)';
        background: rgba(255, 255, 255, 0.0);">
</span>
```

###BUG three
如果你input ```display:none``` 那么在IE8下面你无法点击，而且input值无法跟着表单传递过去
解决方法是让input 显示 然后用top之类移出页面视觉范围之内
