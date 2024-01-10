// - Lernziel:
//     - Tieferes Verständnis von JavaScript.
//     - Praktische Anwendung von addEventListener in Kombination.
//     - Praktische Anwendung von Markieren als erledigt und Löschen in Kombination.
// - In dieser Übung sollst du dir mit Hilfe von JavaScript eine To-Do Liste erstellen.

// ☝🏼 **Hinweise**
// - Für diese Aufgabe benötigst du möglicherweise die folgenden Methoden:
//     - push()
//     - splice()
//     - map()
//     - forEach()
// - Du benötigst ein neues, leeres Array, um deine neuen To-dos zu speichern.
// - Unser neues To-do soll als Objekt mit den beiden Eigenschaften "text" und "done" hinzugefügt werden.
// - Leere und aktualisiere die To-do-Liste im DOM.

// ✨ **Bonus**
// - Erstelle ein schöneres Design.
// - Prüfe, ob das To-do auch wirklich erledigt ist.
//     - Nutze dafür alert() oder eine andere Weise.

 const todos = []
 document.getElementById("input-box").addEventListener("submit", function(event) {
    event.preventDefault()
    const todoInput = document.getElementById("todo-output")
    todos.push(todoInput)
    displayTodos()
 })

 function displayTodos() {
    const todoOutput = document.getElementById("todo-output")
    todoOutput.innerHTML = ""
    todos.forEach(function(todo, index) {
        const totoItem = document.createElement("p")
        totdoItem.textContent = `${index + 1}. ${todo}`
        todoOutput.appendChild(totoItem)
    })
 }
