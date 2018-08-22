
var p = document.getElementById("test");

// var s = document.createElement("script");
// s.innerHTML = "alert('bbb')";
// p.appendChild(s);


function htmlEncode(html){
    var temp = document.createElement("div");
    temp.textContent = html;
    var output = temp.innerHTML;
    temp = null;
    return output;
}

var text = "<script>alert('aaa')</script>";
p.innerHTML = htmlEncode(text);
