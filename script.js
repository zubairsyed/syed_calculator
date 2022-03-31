var buttons = document.getElementsByClassName("button");  //returns an array (i.e nodelist).
var display = document.getElementById("answer");
console.log("value of display"+display);
var operand1 = 0;
var operator = null;
var operand2 = null;

console.log("Js file opened");
for (var i = 0; i < buttons.length; i++){
    console.log("buttons[0]"+buttons[0]);
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        
        if (value == "+") {
            operand1 = display.textContent;
            operator = "+";
            display.innerHTML="";
        } else if (value == "-") {
            operand1 = display.textContent;
            operator = "-";
            display.innerHTML="";
            
        } else if (value == "*") {
            operand1 = display.textContent;
            operator = "*";
            display.innerHTML="";
            
        } else if (value == "/") {
            operand1 = display.textContent;
            operator = "/";
            display.innerHTML="";
            
        } else if (value == "%") {
            operand1 = display.textContent;
            operator = "%";
            display.innerHTML="";
            
        } else if (value == "=") {
            operand2 = display.textContent;
            var result=eval(operand1+operator+operand2);
            display.innerHTML = result;
            
        } else if (value == "ac") {
            display.innerHTML = "";
        }
        else if (value == "clr") {
                var oprnd11 = display.textContent;
                var clr1=oprnd11.slice(0, oprnd11.length - 1);
                console.log(clr1);
                display.innerHTML = clr1;   
        }
        else if (value=="zz") {
            display.innerHTML += "-";
           
            }
        else {
            var rslt=(display.innerHTML += value);
            console.log(rslt);
        }
    });
}

document.addEventListener("keydown", function (event) {

    var keyrslt = ("keyCode", event.keyCode);
    if (keyrslt === 49 || keyrslt === 97) {
        console.log(parseFloat("1"));
        display.innerHTML += parseFloat("1");
    }
    else if (keyrslt == 50 || keyrslt === 98) {
        console.log(parseFloat("2"));
        display.innerHTML += parseFloat("2");
    }
    else if (keyrslt == 51 || keyrslt === 99) {
        console.log(parseFloat("3"));
        display.innerHTML += parseFloat("3");
    }
    else if (keyrslt == 52 || keyrslt === 100) {
        console.log(parseFloat("4"));
        display.innerHTML += parseFloat("4");
    }
    else if (keyrslt == 53 || keyrslt === 101) {
        console.log(parseFloat("5"));
        display.innerHTML += parseFloat("5");
    }
    else if (keyrslt == 54 || keyrslt === 102) {
        console.log(parseFloat("6"));
        display.innerHTML += parseFloat("6");
    }
    else if (keyrslt == 55 || keyrslt === 103) {
        console.log(parseFloat("7"));
        display.innerHTML += parseFloat("7");
    }
    else if (keyrslt == 56 || keyrslt === 104) {
        console.log(parseFloat("8"));
        display.innerHTML += parseFloat("8");
    }
    else if (keyrslt == 57 || keyrslt === 105) {
        console.log(parseFloat("9"));
        display.innerHTML += parseFloat("9");
    }
    else if (keyrslt == 48 || keyrslt === 96) {
        console.log(parseFloat("0"));
        display.innerHTML += parseFloat("0");
    }
    else if (keyrslt == 107) {
        operand1 = display.textContent;
        operator = "+";
        display.innerHTML = "";
    }
    else if (keyrslt == 109) {
        operand1 = display.textContent;
        operator = "-";
        display.innerHTML = "";
        
    } else if (keyrslt == 106) {
        operand1 = display.textContent;
        operator = "*";
        display.innerHTML = "";
        
    } else if (keyrslt == 111) {
        operand1 = display.textContent;
        operator = "/";
        display.innerHTML = "";
        
    }
    else if (keyrslt == 110) {
        console.log(parseFloat("."));
        display.innerHTML += ".";
    }
        
    else if (keyrslt == 13) {
        operand2 = display.textContent;
        var result = eval(operand1 + operator + operand2);
        display.innerHTML = result;
        
    } else if (keyrslt == 27) {
        display.innerHTML = "";
    }
    else if (keyrslt == 8) {
        var oprnd11 = display.textContent;
        var clr1 = oprnd11.slice(0, oprnd11.length - 1);
        console.log(clr1);
        display.innerHTML = clr1;
    }
    else if (keyrslt == 189) {
        display.innerHTML += "-";
    }
   
    console.log("keypressed"+keyrslt);
})
