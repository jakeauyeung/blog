---
layout: post
title:  "cscart破解"
date:   2014-03-08 10:00:58
categories: update
---

* 1. 破解步骤
* 2. 代码分析

####1 破解步骤

* 1.$config['updatesserver'] = ''; //config.php
* 2.utf8.php
```
$key = 'crash'; //这里的值用一次要改一次，或清缓存
fn_set_storage_data('store_mode', 'full');
if (empty($_SESSION[$key])) {
    $_SESSION[$key] = true;
    $_SESSION[fn_simple_decode_str('npef`sfdifdl')] = true;
}

if (!empty($_SESSION[fn_simple_decode_str('npef`sfdifdl')])) {
    //....
}
```
* 3.把上面代码删掉还原utf8.php :)

* 4.design/backend/templates/index.tpl, 第41行，删掉或注释掉

```
{$stats|default:"" nofilter}
```

####2 代码分析:

* 1.那个30天过期js弹窗在mainbox.tpl中

```
<script type="text/javascript">
//<![CDATA[
// Init ajax callback (rebuild)
var menu_content = {$data|unescape|default:"''" nofilter};

//]]>
</script>
```

* 2.而对应的后端数据在backend/init.php中

```
// Check if we need translate characters to UTF-8 format
$schema = fn_get_schema('literal_converter', 'utf8');
if (isset($schema['need_converting']) && $schema['need_converting']) {
    Registry::get('view')->assign('data', $schema['data']);
}
```
* 3.最终限制的核心在utf8中

* 4.app/controllers/common/helpdeskconnector.php

此处会生成一个图片，并与远程通信。
app/controllers/common/auth.php
235行: Helpdesk::auth();
Helpdesk::auth() -> Helpdesk::initHelpdeskRequest()
注意生成图片的src地址对应的就是
helpdeskconnector中的auth

* 5.controller/backend/index.php

```
if (!empty($_SESSION['stats'])) {
    $stats .= implode('', $_SESSION['stats']);
    unset($_SESSION['stats']);
}
…
Registry::get('view')->assign('stats', $stats);
if (!defined('HTTPS')) {
    $stats .= base64_decode('PGltZyBzcmM9Imh0dHA6Ly93d3cuY3MtY2FydC5jb20vaW1hZ2VzL2JhY2tncm91bmQuZ2lmIiBoZWlnaHQ9IjEiIHdpZHRoPSIxIiBhbHQ9IiIgLz4=');
}
```
以上代码生成图片估计用于统计哪些域名使用了cscart
```
<img src="http://www.cs-cart.com/images/background.gif" height="1" width="1" alt="" />
```
* 6.design/backend/templates/index.tpl
```
<div class="admin-content-wrap">
  {hook name="index:main_content"}{/hook}
  {$content nofilter}
  {$stats|default:"" nofilter}  <!-- 这行输出检查licence的图片 -->
</div>
```
