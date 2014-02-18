---
layout: post
title:  "Jquery动态增加行的操作"
date:   2013-10-18 14:00:58
categories: update
---

脑瓜子有的时候就会卡壳呀，谢谢<a href="http://blog.yeeh.org">@叶子</a>指导

```
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>addAndDel</title>
    <script type="text/javascript" src="http://js.shengpay.com/js/fanli/jquery-1.8.2.min.js" ></script>
    <style type="text/css">
        .list{list-style: none;}
        .list a{padding:0 10px;}
        .list li{margin-bottom: 10px;}
        .list li input{border:1px solid 000;height: 20px;line-height: 20px;}
    </style>
</head>
<body>
    <ul class="list">
        <li><input type="text"><a href="javascript:void(0)" class="add">Add</a></li>
    </ul>
<script type="text/javascript">
    $(function(){
        $('.list').on('click','.add',function(){
            if($('.list').find('li').length < 2){
                $('.list li input').eq(0).after(function(n){
                    return "<a href='javascript:void(0)' class='del'>Del</a>";
                });
            }
            $('.list').append(function(n){
                return "<li><input type='text'><a href='javascript:void(0)' class='del'>Del</a><a href='javascript:void(0)' class='add'>Add</a></li>";
            });
        }).on('click','.del',function(){
            $(this).parent().remove();
            if($('.list').find('li').length < 2){
                $('.list li input').eq(0).next().hide();
            }
        });
    });
</script>
</body>
</html>
```
<script type="text/javascript" src="http://js.shengpay.com/js/fanli/jquery-1.8.2.min.js" ></script>
<style type="text/css">
    .list{list-style: none;}
    .list a{padding:0 10px;}
    .list li{margin-bottom: 10px;}
    .list li input{border:1px solid 000;height: 20px;line-height: 20px;}
</style>
<ul class="list">
   <li><input type="text"><a href="javascript:void(0)" class="add">Add</a></li>
</ul>
<script type="text/javascript">
    $(function(){
        $('.list').on('click','.add',function(){
            if($('.list').find('li').length < 2){
                $('.list li input').eq(0).after(function(n){
                    return "<a href='javascript:void(0)' class='del'>Del</a>";
                });
            }
            $('.list').append(function(n){
                return "<li><input type='text'><a href='javascript:void(0)' class='del'>Del</a><a href='javascript:void(0)' class='add'>Add</a></li>";
            });
        }).on('click','.del',function(){
            $(this).parent().remove();
            if($('.list').find('li').length < 2){
                $('.list li input').eq(0).next().hide();
            }
        });
    });
</script>

