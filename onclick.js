let string = ""
let get = document.querySelectorAll(".trying");
Array.from(get).forEach((num) => {
    num.addEventListener("click", (e) => {

        if (e.target.value == "=") {
            string = eval(string);
            document.querySelector('.result_display').value = string;
        }
        else if (e.target.value == "AC") {
            string = "";
            document.querySelector('.result_display').value = string;

        }
        else if (e.target.value == "DE") {
            string = string.substring(0, string.length - 1);
            document.querySelector('.result_display').value = string;

        }
        else {
            string += e.target.value;
            document.querySelector('.result_display').value = string;
        }
    })
})