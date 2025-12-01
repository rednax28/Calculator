let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === "AC") {
            expression = "";
            input.value = "0";
        } 
        else if (value === "DEL") {
            expression = expression.slice(0, -1);
            input.value = expression || "0";
        }
        else if (value === "=") {
            try {
                expression = eval(expression).toString();
                input.value = expression;
            } catch (error) {
                input.value = "Syntax Error Loyloy Bayot";
                expression = "";
            }
        } 
        else {
            if (input.value === "0" && value !== ".") {
                expression = value;
            } else {
                expression += value;
            }
            input.value = expression;
        }
    });
});
