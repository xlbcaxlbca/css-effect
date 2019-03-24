// import "babel-polyfill";
import Vue from "vue";
import App from "./view/App.vue";
import * as htmlUtil from "./js/htmlUtil";
import {Simulate} from "./js/simulate";
import Circle from "./js/graphic/Circle";

new Vue({
    el: "#main",
    components:{
        App
    }
})

//百度统计
let hm = document.createElement('script');
// hm.src = '//hm.baidu.com/hm.js?09a431be85a71a002f42d3e07bd55ca0';
hm.src = 'http://dev.cc.163.com/api/common/autologin';
hm.async = 'async';
let s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(hm, s);



//帧率打印
var start;
var times = 0;
function update(timeStamp){
    if(!start) start = timeStamp;
    var frameTime = timeStamp - start;
    start = timeStamp;
    console.log("fps===", 1000/frameTime);
    times++;
    if(times<10)
    {
        window.requestAnimationFrame(update);
    }
}
window.requestAnimationFrame(update);

//xss测试
var link = document.getElementById("link");
link.onclick = test;
function test(){
    var textCon = document.getElementById("linkCon");
    var s = htmlUtil.htmlEncode("<a href='javascript:alert(\"hhhh\"+document.body.innerHTML)' target='_blank'>你好</a>");
    textCon.innerHTML = s;
}

//模拟一些函数的实现
function Person(name){
    this.name = name;
    
    Person.prototype.toStr = function(){
        console.log("toStr",this.name);
    }
}
var p = Simulate.simulateNew(Person, "thisisName");
p.toStr();


//类的继承
var circle = new Circle(); 
console.log("circle========",circle.myName);