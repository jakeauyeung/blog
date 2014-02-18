---
layout: post
title:  "兼容浏览器插件ZeroClipboard"
date:   2013-10-17 14:00:58
categories: update
---

Github:https://github.com/zeroclipboard/zeroclipboard 

<b>在本地调试浪费太多时间，原因FLASH安全机制必须要在服务器上面访问</b>

```
<script type="text/javascript" src="http://js.shengpay.com/js/fanli/jquery-1.8.2.min.js" ></script>
<script type="text/javascript" src="http://js.shengpay.com/js/fanli/ZeroClipboard.js"></script>
<!-- 引入 Zero Clipboard 类库 -->   



<script language="javascript">   
    function copyToClipboard(txt) {   
        //引入 Zero Clipboard flash文件   
        //ZeroClipboard.setMoviePath( "http://js.shengpay.com/js/fanli/ZeroClipboard.swf" );   
        //新建对象   
        clip = new ZeroClipboard.Client();   
        //设置指向光标为手型   
        clip.setHandCursor( true );   
        //通过传入的参数设置剪贴板内容   
        clip.setText(txt);   
        //添加监听器，完成点击复制后弹出警告   
        clip.addEventListener("complete", function (client, text) {   
            alert("您复制了本文URL地址为：\n" + text );   
        });   
        //绑定触发对象按钮ID   
        clip.glue("invite_copy");   
    }   
</script> 


<a id="invite_copy" onmouseover="copyToClipboard('Hello World')" >Hello World</a>
```

<script type="text/javascript" src="http://js.shengpay.com/js/fanli/jquery-1.8.2.min.js" ></script>
<script type="text/javascript" src="http://js.shengpay.com/js/fanli/ZeroClipboard.js"></script>
<!-- 引入 Zero Clipboard 类库 -->   



<script language="javascript">   
    function copyToClipboard(txt) {   
        //引入 Zero Clipboard flash文件   
        //ZeroClipboard.setMoviePath( "http://js.shengpay.com/js/fanli/ZeroClipboard.swf" );   
        //新建对象   
        clip = new ZeroClipboard.Client();   
        //设置指向光标为手型   
        clip.setHandCursor( true );   
        //通过传入的参数设置剪贴板内容   
        clip.setText(txt);   
        //添加监听器，完成点击复制后弹出警告   
        clip.addEventListener("complete", function (client, text) {   
            alert("您复制了本文URL地址为：\n" + text );   
        });   
        //绑定触发对象按钮ID   
        clip.glue("invite_copy");   
    }   
</script> 


<a id="invite_copy" onmouseover="copyToClipboard('Hello World')" >Hello World</a>