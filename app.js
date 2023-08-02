const input=document.getElementById("input-box");
const addBtn=document.getElementById("addBtn");
const taskContainer=document.getElementById("list-container")

input.addEventListener("keyup",
(event)=>{
    // console.log(event.key)
    event.key==="Enter" && addTask();
}
)

addBtn.addEventListener("click",addTask);

function addTask(){

    if(input.value.trim()==""){
        alert("Task Cannot Be Empty");
        return;
    }

    const task=document.createElement("li");
    textNode=document.createTextNode(input.value);
    task.appendChild(textNode);
    taskContainer.appendChild(task);

    const cancel=document.createElement("span");
    cancel.innerHTML=`x`;
    task.appendChild(cancel);


    // task.addEventListener("click",
    //     ()=>{
    //         task.classList.toggle("checked");
    //         // console.log(task);
    //     }
    // );

    // cancel.addEventListener("click",
    //     ()=>{
    //         task.remove();
    //     }
    // )

    input.value="";
    saveData();
}

taskContainer.addEventListener("click",

    (e)=>{
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    },
)

function saveData(){
    localStorage.setItem("data",taskContainer.innerHTML);
    // console.log(localStorage.getItem("data"));
}


function displayData(){
    taskContainer.innerHTML=localStorage.getItem("data");
}


displayData();




