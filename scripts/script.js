function sideDivDisp()
{
    var disp = document.getElementById("p2").style.display; //getting side panel element
    
    if(disp == "none") document.getElementById("p2").style.display = "block";
    else document.getElementById("p2").style.display = "none";
}

function calculateSquareEquation() //calculate equation like x^2+2x+4=0
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
    document.getElementById('resultPSquareEquation').innerHTML = result;
}

function calculateTriangleSide() //get one side of triangle with 90 angle
{
    //getting values
    var a = document.getElementById("ipt1").value;
    var b = document.getElementById("ipt2").value;
    
    var result = "Результат: <br>";
    
    //if user used text like 7a, 8.99q etc
    a = parseFloat(a);
    b = parseFloat(b);
    
    var c = Math.pow((Math.pow(a, 2) + Math.pow(b, 2)), 0.5);
    result += "Гіпотенуза = "+c.toFixed(2);
    
    //showing result
    document.getElementById('resultPTriangleSide').innerHTML = result;
}

function calculateCombinationsCount() //how much numbers we can make 
{
    //getting value
    var numbersCount = document.getElementById('inc').value;
    var numbersLenght = document.getElementById('inl').value;
    var canRepeat = document.getElementById('inr').checked;
    var result = 1;
    
    for(var i = 0; i < numbersLenght; i++)
    {
        if(canRepeat) result *= numbersCount;
        else result *= (numbersCount-i);
    }
    
    document.getElementById('resultPCombinationsCount').innerHTML = "Загалом можна скласти " + result + " комбінацій";
}

function calculateEnemyDeathTime() //kill time CSGO
{
    var option = document.getElementById('weaponsOptionCS').value; //getting chosed weapons value(damage per second)
    
    document.getElementById('resultPEnemyDeathTime').innerHTML = "За "+(100/option).toFixed(2)+"c";
}

function calculatePUBGLootWeight() //loot weight pugb
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
    document.getElementById('resultPPUBGItemsWeight').innerHTML = "Загалом: "+result+"кг"
}

function calculateFuelCount() //smelting furnace calculator
{
    var fuelEffectivity = document.getElementById('fuelOption').value;
    var items = document.getElementById('objectCount').value;
    
    //getting chosen option text
    var e = document.getElementById("fuelOption");
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    
    document.getElementById('resultPFuelCount').innerHTML = "Необхідно витратити " + parseInt(items/fuelEffectivity) + " " + text;
}

function calculateDepositIncome() //bank deposit profit
{
    //getting all data user logged
    var time = parseInt(document.getElementById('depositTime').value);
    var money = parseFloat(document.getElementById('depositInvestment').value);
    var yearProcent = parseFloat(document.getElementById('depositProcent').value);
    
    //getting one month procent
    var monthProcent = (Math.pow(((100+yearProcent)/100), (1/12))-1)*100;
    
    //calculating total deposit
    var total = (money*Math.pow((1+(monthProcent/100)), time)).toFixed(2);
    document.getElementById('resultPDepositeIncome').innerHTML = "За "+time+" місяців на депозиті буде "+total;
}

function calculateStonksIncome() //company stocks profit !!!!!FIX IT!!!!!!!
{
    //getting all data user logged
    var time = parseInt(document.getElementById('stockTime').value);
    var money = parseFloat(document.getElementById('stockInvestment').value);
    var procent = parseFloat(document.getElementById('stockProcent').value);
    
    //calculating year statistic
    var yearTotal = 100*Math.pow((1+(procent/100)), 4);
    var yearProcent = yearTotal-100;
    
    var total = (money*Math.pow((1+(yearProcent/100)), time)).toFixed(2);
    document.getElementById('resultPStoksIncome').innerHTML = "За "+time+" років у вас буде "+total;
}

function calculateSavings() //savings calculator
{
    var money = parseFloat(document.getElementById('savingsCount').value);
    var time = parseInt(document.getElementById('savingsTime').value);
    
    document.getElementById('resultPSavings').innerHTML = "За "+time+" місяців у вас буде "+(time*money).toFixed(2);
}