function soma()
{
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = document.getElementById('resp');
    var op = '';

    op = num1+num2;
    result.value = op;    
}

function sub()
{
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = document.getElementById('resp');
    var op = '';

    op = num1-num2;
    result.value = op;
}

function mult()
{
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = document.getElementById('resp');
    var op = '';

    op = num1*num2;
    result.value = op;
}

function divs()
{
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = document.getElementById('resp');
    var op = '';

    op = num1/num2;
    result.value = op;
}