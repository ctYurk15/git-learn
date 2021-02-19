function sideDivDisp()
{
    var disp = document.getElementById("p2").style.display; //getting side panel element
    
    if(disp == "none") document.getElementById("p2").style.display = "block";
    else document.getElementById("p2").style.display = "none";
}

function cSE()
{
    //getting values
    var a = document.getElementById("ise1").value;
    var b = document.getElementById("ise2").value;
    var c = document.getElementById("ise3").value;
    
    var result = "Результат: <br>";
    
    //if user used text like 7a, 8.99q etc
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    
    //calculating result
    var D = (b*b) - 4*a*c;
    if(D < 0)
    {
        result += "Дискримінант менший за нуль. Розв'язків немає.";
    }
    else
    {
        result += "D = b<sup>2</sup> - 4*a*c = "+b+"<sup>2</sup> - 4*"+a+"*"+c+" = "+D+"<br>";
        
        var x1 = (-b-Math.pow(D, 0.5))/(2*a);
        var x2 = (-b+Math.pow(D, 0.5))/(2*a);
        
        result += "X1 = "+x1 + ", X2 = "+x2;
    }
    
    //showing result
    document.getElementById('resultPSE').innerHTML = result;
}

function cPT()
{
    //getting values
    var a = document.getElementById("ipt1").value;
    var b = document.getElementById("ipt2").value;
    
    var result = "Результат: <br>";
    
    //if user used text like 7a, 8.99q etc
    a = parseFloat(a);
    b = parseFloat(b);
    
    var c = Math.pow((Math.pow(a, 2) + Math.pow(b, 2)), 0.5);
    result += "Гіпотенуза = "+c;
    
    //showing result
    document.getElementById('resultPPT').innerHTML = result;
}

function cEDT()
{
    var option = document.getElementById('weaponsOptionCS').value; //getting chosed weapons value(damage per second)
    
    document.getElementById('resultPEDT').innerHTML = "За "+(100/option).toFixed(2)+"c";
}