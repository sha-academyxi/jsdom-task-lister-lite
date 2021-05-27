document.addEventListener("DOMContentLoaded", () => {
    //form and relevant input fields
    const newTaskForm = document.getElementById("create-task-form");
    newTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const elem = document.createElement('li')
      elem.textContent = document.getElementById("new-task-description").value
      elem.contentEditable = true
      elem.style.color = getBackgroundColorBasedOnPriority(document.getElementById('new-task-priority').value)

      // add delete button
      const deleteBtn = document.createElement('button')
      deleteBtn.textContent = 'X'
      deleteBtn.addEventListener('click', () => {
        elem.remove()
      })

      elem.appendChild(deleteBtn)
      document.getElementById("tasks").appendChild(elem)

      newTaskForm.reset()
    });
});

function getBackgroundColorBasedOnPriority(priority) {
  switch (priority.toLowerCase()) {
    case "high":
      return "red"
    case "medium":
      return "yellow"
    case "low":
      return "green"
  }
}
