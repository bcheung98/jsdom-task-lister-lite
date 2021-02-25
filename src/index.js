document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // Grabbing elements
  let inputBox = document.getElementById("create-task-form");
  let userInput = document.getElementById("new-task-description");
  let taskList = document.getElementById("tasks");
  let priority = document.getElementById("priority");

  // Event listeners
  inputBox.addEventListener("submit", (e) => {
    e.preventDefault();

    let newTask = document.createElement("li");
    newTask.textContent = userInput.value;
    newTask.setAttribute("contenteditable", "");
    newTask.classList.add(priority.value);
    taskList.appendChild(newTask);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    taskList.appendChild(deleteButton);

    e.target.reset(); 
  });

  // code modified from https://www.w3schools.com/howto/howto_js_sort_list.asp
 /*  function sortList() {
    let switching = true;
    while (switching) {
      switching = false;
      let listItems = taskList.getElementsByTagName("LI");
      for (let i = 0; i < (listItems.length - 1); i++) {
        let shouldSwitch = false;
        if (listItems[i].innerHTML.toLowerCase() > listItems[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {

        listItems[i].parentNode.insertBefore(listItems[i + 1], b[i]);
        switching = true;
      }
    }
  } */

});
