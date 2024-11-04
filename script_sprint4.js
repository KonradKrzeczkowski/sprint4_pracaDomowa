const ul = document.getElementById("list");
const array = [];
let userText = "";
document.getElementById("buttonList").onclick = function () {
    userText = document.getElementById("inputWork").value;
    if (userText <= 1) { alert("Nazwa zadania nie może być pusta.") }
    else {
        document.getElementById('inputWork').value = null;
        const li = document.createElement("li");
        const buttonEdit = document.createElement("button",);
        const buttonSecond = document.createElement("button");
        const saveButton = document.createElement("button");
        const input = document.createElement("input");
        const userTextspan = document.createElement("span", userText)
        array.push({ userText, buttonEdit, buttonSecond, saveButton, input, });
        ul.appendChild(li);
        userTextspan.textContent = userText;
        li.appendChild(userTextspan);
        li.appendChild(buttonEdit);
        li.appendChild(buttonSecond);
        buttonSecond.textContent = "Usuń";
        buttonEdit.textContent = "Edytuj";
        saveButton.textContent = "Zatwierdź zmiany"
        for (let i = array.length - 1; i < array.length; i++) {
            const arraysecound = array;
            arraysecound[i].buttonSecond.onclick = function () {
                const list = document.getElementById('list');
                const secondItem = list.children[i];
                li.remove(secondItem);
            }
            arraysecound[i].buttonEdit.onclick = function () {
                li.removeChild(userTextspan);
                li.appendChild(input, saveButton);
                li.prepend(input);
                li.removeChild(buttonEdit);
                li.appendChild(saveButton);
                input.value = arraysecound[i].userText;
            }
            arraysecound[i].saveButton.onclick = function () {
                if (input.value <= 0) { alert("Nazwa zadania nie może być pusta.") }
                else {
                    li.appendChild(userTextspan);
                    li.removeChild(input);
                    li.removeChild(saveButton);
                    arraysecound[i].userText = input.value;
                    userTextspan.textContent = arraysecound[i].userText;
                    li.appendChild(buttonEdit);
                    li.appendChild(buttonSecond);
                }
            }
        }
    }

}















