
function htmlEncode(html){
    var temp = document.createElement("div");
    temp.textContent = html;
    var output = temp.innerHTML;
    temp = null;
    return output;
}


export {
    htmlEncode
}