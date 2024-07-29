const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const addButton = document.getElementById("add-button");
const editButton = document.getElementById("edit-button");
const alertMessage = document.getElementById("alert-message");
const todosBody = document.getElementById("tbody");
const deleteAll = document.getElementById("delete-all-button");
const filterTodoButton = document.querySelectorAll(".filter-todo");

let todos = JSON.parse(localStorage.getItem("todos")) || []; // save task and date

//create Random Id For Task
const generateRandomNumber = () => {
  const id = Math.round(
    Math.random() * Math.random() * Math.pow(10, 10)
  ).toString();
  return id;
};

// Add Button

function addHandler() {
  const task = taskInput.value;
  const date = dateInput.value;
  const todo = {
    id: generateRandomNumber(), //call saveToLocalStorage function
    complited: "false",
    task: task,
    date: date,
  };
  if (task) {
    todos.push(todo);
    saveToLocalStorage(); //call generateRandomNumber Arrow function
    showTodos();
    taskInput.value = "";
    dateInput.value = "";
    showAlert("Add successfuly", "success"); //call showAlert function with message and type
  } else {
    showAlert("Add Faild", "eror"); //call showAlert function with message and type
  }
}

function showAlert(message, type) {
  alertMessage.innerHTML = "";
  const alert = document.createElement("p");
  alert.innerText = message;
  alert.classList.add("alert-message");
  alert.classList.add(`alert-${type}`);
  alertMessage.append(alert);

  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);
}

function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteAllTask() {
  if (todos.length) {
    todos = [];
    saveToLocalStorage();
    showTodos();
    showAlert("All Task is deleted", "success");
  } else {
    showAlert("Not found Task for Delete", "eror");
  }
}

function deleteHandler(id) {
  const newTodo = todos.filter((todo) => todo.id !== id);
  todos = newTodo;
  saveToLocalStorage();
  showTodos();
  showAlert("Delete task successfully", "success");
}

function toggleHandler(id) {
  const newTodos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        complited: !todo.complited,
      };
    } else {
      return todo;
    }
  });
  todos = newTodos;
  saveToLocalStorage();
  showTodos();
}

function editHandler(id) {
  const todo = todos.find((todo) => todo.id === id);
  taskInput.value = todo.task;
  dateInput.value = todo.date;
  addButton.style.display = "none";
  editButton.style.display = "block";
  editButton.dataset.id = id;
}

function showTodos(data) {
  const todoList = data || todos;
  console.log(todoList);
  todosBody.innerHTML = "";
  if (!todoList.length) {
    todosBody.innerHTML = "<tr><td colspan='4'>No Task Found!!</td></tr>";
    return;
  }
  todoList.forEach((todo) => {
    todosBody.innerHTML += `
    <tr>
      <td>${todo.task}</td>
      <td>${todo.date || "No Date"}</td>
      <td>${todo.complited ? "complited" : "pending"}</td>
      <td>
        <button onclick="editHandler('${
          todo.id
        }')" ><i class="fa-solid fa-pen-to-square"></i></button>
        <button onclick="toggleHandler('${todo.id}')" >${
      todo.complited ? "Undo" : "Do"
    }</button>
        <button onclick="deleteHandler('${
          todo.id
        }')"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr> `;
  });
}

function applyEdit(event) {
  const id = event.target.dataset.id;
  const todo = todos.find((todo) => todo.id === id);
  todo.task = taskInput.value;
  todo.date = dateInput.value;
  dateInput.value = "";
  taskInput.value = "";
  addButton.style.display = "block";
  editButton.style.display = "none";
  saveToLocalStorage();
  showTodos();
}

function filterHandler(event) {
  let filteredTodos = null;
  const filter = event.target.dataset.filter;
  switch (filter) {
    case "pending":
      filteredTodos = todos.filter((todo) => todo.complited === false);
      break;

    case "complited":
      filteredTodos = todos.filter((todo) => todo.complited === true);
      break;

    default:
      filteredTodos = todos;
  }
  showTodos(filteredTodos);
}

addButton.addEventListener("click", addHandler);
window.addEventListener("load", () => showTodos());
deleteAll.addEventListener("click", deleteAllTask);
editButton.addEventListener("click", applyEdit);
filterTodoButton.forEach((btn) => {
  btn.addEventListener("click", filterHandler);
});
