function backspace()  
{  
var exp = document.form1.answer.value;  
document.form1.answer.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */  
}  