let tasklist = document.getElementById("task-list");
let userinput = document.getElementById("userinput");

let Addbtn = document.querySelector("button");

Addbtn.addEventListener("click", function () {
    let div = document.createElement("div");
    div.setAttribute('id', "task")
    let btn = document.createElement("button");
    btn.innerHTML = '<i class="bi bi-trash"></i>';
    let li = document.createElement("li");
    li.innerText = userinput.value;
    div.append(li);
    div.append(btn);
    tasklist.append(div);
    userinput.value = "";

    btn.addEventListener('click', function(e){
        let target = e.target;
        target.parentElement.parentElement.remove();
    });
});

