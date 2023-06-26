function multiplyBy() {
    const num1 = document.getElementById("value1").value;
    const num2 = document.getElementById("value2").value;
    document.getElementById("result").innerHTML = num1 * num2;
    console.log(result)
}

function divideBy() { 
    const num1 = document.getElementById("value1").value;
    const num2 = document.getElementById("value2").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

function addNumbers()   {
    const num1 = document.getElementById("value1").value;
    const num2 = document.getElementById("value2").value;
    document.getElementById("result").innerHTML = +num1 + +num2; // this is beacuse the simple + will give something like 2+2=22
}

function subtractNumbers()   {
    const num1 = document.getElementById("value1").value;
    const num2 = document.getElementById("value2").value;
    document.getElementById("result").innerHTML = num1 - num2;
}

