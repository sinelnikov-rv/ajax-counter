
var timerId = setTimeout(function tick() {
    var result = document.getElementById("result").innerText;
    var arg = document.getElementById("arg").value;
    result = +result + +arg;
    console.log(result);
    document.getElementById("result").innerHTML = result;
    timerId = setTimeout(tick, 2000);
}, 2000);
document.getElementById("minus").onclick = function(){
    arg.value -=1;
    console.log(arg.value);
};
document.getElementById("plus").onclick = function(){
    arg.value -=-1;
    console.log(arg.value);
};