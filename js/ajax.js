var timerId = setTimeout(function calculation(){
var result = $('#result').html();
var arg = $('#arg').prop('value');
if(arg === ''){
    arg = $('#arg').prop('defaultValue');
}
result = +result + +arg;
$('#result').html(result);
timerId = setTimeout(calculation, 2000);
}, 2000);
$('.button').click(function(){
    operand = $(this).prop('value');
    if(operand === "-"){
        $('#arg').val(+($('#arg').prop('value')) - 1)
    }else {
        $('#arg').val(+($('#arg').prop('value')) + 1)
    }
});