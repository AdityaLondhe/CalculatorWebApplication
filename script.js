let str = document.querySelectorAll("button");
let dis = document.querySelector(".display");

Array.from(str).forEach((e) => {
    e.addEventListener("click", () => {
        // console.log(e.value);
        if (e.value == "C") {
            dis.value = "";
        }
        else if (e.value == "=") {
            dis.value = eval(dis.value);
        }
        else {
            dis.value += e.value;
        }

    })
})


