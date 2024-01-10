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

let inputArray = []

function saveInput() {
  let input = document.getElementById("inputTodo").value
  inputArray.push(input)
  displayOutput()
}

function displayOutput() {
   let outputDiv = document.getElementById('output')
   outputDiv.innerHTML = ''
   for (let i = 0; i < inputArray.length; i++) {
     outputDiv.innerHTML += '<div><input type="checkbox" id="checkbox' + i + '" onclick="toggleStrikeThrough(' + i + ')">' + inputArray[i] + ' <span class="close" onclick="deleteRow(' + i + ')">❎</span></div>'
   }
 }
 
 function toggleStrikeThrough(index) {
   let checkbox = document.getElementById('checkbox' + index)
   let text = checkbox.nextSibling
   if (checkbox.checked) {
     text.style.textDecoration = 'line-through'
   } else {
     text.style.textDecoration = 'none'
   }
 }
 
 function deleteRow(index) {
   let div = document.getElementById('output').getElementsByTagName('div')[index]
   div.remove()
 }

 // Event auch bei Drücken der Enter-Taste
//  HIERKOMMT_ID.addEventListener("keydown", function (event) {
//    if (event.key === "Enter") {
//        addTodo();
//    }
// });