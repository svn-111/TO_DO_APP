const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const submitButton = document.getElementById('addButton');

// function addTaskPointer()
// {
//     if(inputBox.value ===''){
//         alert("You must write something");
//     }
//     else
//     {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value="";
//     saveData();
// }
// function addTaskPress()
// {
//     console.log("Hi");
//     if(inputBox.value ===''){
//         alert("You must write something");
//     }
//     else
//     {
//         inputBox.addEventListener("keypress", function(event) {
//             // If the user presses the "Enter" key on the keyboard
//             if (event.key === "Enter") {
//                 let li = document.createElement("li");
//                 li.innerHTML = inputBox.value;
//                 listContainer.appendChild(li);
//             //   document.getElementById("myBtn").click();
//             }
//           });
//     }
//     inputBox.value="";
//     saveData();
// }
function handleKeyPress(event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.keyCode === 13) {
      // Trigger the button click
      if(inputBox.value ===''){
                alert("You must write something");
            }
            else
            {
                let li = document.createElement("li");
                li.innerHTML = inputBox.value;
                listContainer.appendChild(li);
                let span = document.createElement("span");
                span.innerHTML = "\u00d7";
                li.appendChild(span);
                saveData();
            }
            
            inputBox.value="";
    }
    
  }
  
function handleClick(event) {
    
    if(inputBox.value ===''){
              alert("You must write something");
          }
          else
          {
              let li = document.createElement("li");
              li.innerHTML = inputBox.value;
              listContainer.appendChild(li);
              let span = document.createElement("span");
              span.innerHTML = "\u00d7";
              li.appendChild(span);
              saveData();
          }
          inputBox.value="";
            
          
  }
submitButton.addEventListener('click', handleClick);
inputBox.addEventListener('keypress', handleKeyPress);
//document.addEventListener('keypress', handleKeyPress);

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

