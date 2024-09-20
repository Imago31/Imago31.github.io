const tasks = document.querySelector(".tasks");
const tasks_box = document.querySelector(".tasks_box");

tasks.addEventListener("click", function(){
  if(tasks_box.classList.contains("closed")){
    tasks_box.style = "display: flex";
    tasks_box.classList.remove("closed");
  }
  else{
    tasks_box.classList.add("closed");
    tasks_box.style = "display: none";
  }
})