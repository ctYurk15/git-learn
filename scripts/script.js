function sideDivDisp()
{
    var disp = document.getElementById("p2").style.display; //getting side panel element
    
    if(disp == "none") document.getElementById("p2").style.display = "block";
    else document.getElementById("p2").style.display = "none";
}

function cSE() //calculate equation like x^2+2x+4=0
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

function cPT() //get one side of triangle with 90 angle
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

function cEDT() //kill time CSGO
{
    var option = document.getElementById('weaponsOptionCS').value; //getting chosed weapons value(damage per second)
    
    document.getElementById('resultPEDT').innerHTML = "За "+(100/option).toFixed(2)+"c";
}

function cPIW() //loot weight pugb
{
    var options = document.getElementsByName('pubgItem'); //getting all the options
    var result = 0;
    
    for(var i = 0; i < options.length; i++)
    {
        if(options[i].checked)
        {
            result += parseFloat(options[i].value); //if option is checked, adding value to total
        }
    }
    
    //printing result
    document.getElementById('resultPPIW').innerHTML = "Загалом: "+result+"кг"
}

function cCP() //bank deposit profit
{
    //getting all data user logged
    var time = parseInt(document.getElementById('depositTime').value);
    var money = parseInt(document.getElementById('depositInvestment').value);
    var yearProcent = parseFloat(document.getElementById('depositProcent').value);
    
    //getting one month procent
    var monthProcent = (Math.pow(((100+yearProcent)/100), (1/12))-1)*100;
    
    //calculating total deposit
    var total = (money*Math.pow((1+(monthProcent/100)), time)).toFixed(2);
    document.getElementById('resultPCP').innerHTML = "За "+time+" місяців на депозиті буде "+total;
}

function cCSP() //company stocks profit !!!!!FIX IT!!!!!!!
{
    //getting all data user logged
    var time = parseInt(document.getElementById('stockTime').value);
    var money = parseInt(document.getElementById('stockInvestment').value);
    var procent = parseFloat(document.getElementById('stockProcent').value);
    
    //calculating year statistic
    var yearTotal = 100*Math.pow((1+(procent/100)), 4);
    var yearProcent = yearTotal-100;
    
    var total = money*Math.pow((1+(yearProcent/100)), time);
    document.getElementById('resultPCSP').innerHTML = "За "+time+" років у вас буде "+total;
}