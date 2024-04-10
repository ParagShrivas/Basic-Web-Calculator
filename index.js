const cal = document.querySelector(".calBtn");
cal.onclick = () => {
    const firstNumber = parseFloat(document.getElementById("num1").value);
    const secondNumber = parseFloat(document.getElementById("num2").value);

    const SelectOption = document.getElementById("Options").value;

    switch (SelectOption) {
        case "Addition":
            var result = firstNumber + secondNumber;
            document.getElementById("result").textContent = "Result : " + result;
            break;

        case "Subtraction":
            var result = firstNumber - secondNumber;
            document.getElementById("result").textContent = "Result : " + result;
            break;

        case "Multiplication":
            var result = firstNumber * secondNumber;
            document.getElementById("result").textContent = "Result : " + result;
            break;

        case "Division":
            var result = firstNumber / secondNumber;
            document.getElementById("result").textContent = "Result : " + result;
            break;
    }
}