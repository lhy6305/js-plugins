<script class="script-custom" style="display:none;">
//include libcrypto.js
//include libencapi.js
</script>

<script class="script-custom" style="display:none;">
(function(){
window.ge=function(id){
return document.getElementById(id);
};
window.addEventListener("load",function(){
var load_start=function(){
window.ge("span-error-tip").innerHTML="";
window.ge("div-token-login").style.display="none";
window.ge("div-error-message").style.display="none";
window.ge("div-processing-tip").style.display="block";
};
var load_fail=function(str){
if(str.length<=0){
str="未定义的错误消息";
}
window.ge("span-error-tip").innerHTML=str;
window.ge("div-error-message").style.display="block";
window.ge("div-processing-tip").style.display="none";
window.ge("div-token-login").style.display="block";
};
var load_succ=function(){
var a;
(a=window.ge("div-error-message")).parentNode.removeChild(a);
(a=window.ge("div-processing-tip")).parentNode.removeChild(a);
(a=window.ge("div-token-login")).parentNode.removeChild(a);
(a=window.ge("div-content-container")).style.display="block";
};
window.ge("button-submit-token").addEventListener("click",function(){
load_start();
var a=window.ge("input-token").value;
window.ge("input-token").value="";
if(a.length<=0){
a="ly65";
}
var flag=window.encapi.setToken(a);
a=null;
if(flag==false){
show_error("encapi.set_token失败！请检查输入是否为合法字符");
return false;
}
a=window.location.pathname.match(new RegExp("/*archives/*([0-9]+)/*"));
if(a.length!=2){
show_error("location.pathname匹配文章id失败！请联系管理员");
return false;
}
a=a[1];
alert(a);
});
});
})();
</script>

<script id="script-custom-loader" style="display:none;">
(function(){
window.addEventListener("load",function(){
var a;
do{
a=document.getElementsByClassName("script-custom");
a[0].parentNode.removeChild(a[0]);
}while(a.length>0);
(a=window.ge("div-script-loading-tip")).parentNode.removeChild(a);
window.ge("div-token-login").style.display="block";
window.setTimeout(function(){
(a=window.ge("script-custom-loader")).parentNode.removeChild(a);
},0);
});
})();
</script>

<div id="div-script-loading-tip" style="font-size:26px;">
正在加载资源...
<br>
如果本条消息长时间无变化请检查是否已启用浏览器javascript
<br>
</div>

<div id="div-error-message" style="display:none;font-size:26px;font-weight:bold;border:2px solid #4bccff;margin:20px auto 20px auto;color:#ff3b3b;background-color:#fff343;">
错误：<span id="span-error-tip"></span>
<br>
</div>

<div id="div-token-login" style="display:none;font-size:20px;border:2px solid #4bccff;text-align:center;margin:20px auto 20px auto;">
<br>
<span style="font-size:30px;">L.D.B数据库登录页面</span>
<br>
<span style="color:#888888;">提示：大部分文档可以不填密码直接访问</span>
<br>
<br>
请输入密码：<input id="input-token" placeholder="或许可以留空...？">
<br>
<br>
<button id="button-submit-token" style="border:2px solid #4bccff;background-color:#dffff8;">提交访问申请</button>
<br>
<br>
</div>

<div id="div-processing-tip" style="display:none;font-size:26px;font-weight:bold;border:2px solid #4bccff;margin:20px auto 20px auto;color:#6db517;background-color:#ffeefb;">
正在处理您的请求，请稍后...
<br>
注意：本登录模板尚未编写完成，这条消息之后页面将无变化，请停止等待
<br>
</div>

<div id="div-content-container" style="display:none;"></div>
