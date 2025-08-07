const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") {
    alert(" please type a task !");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = "";
  input.focus();
});
