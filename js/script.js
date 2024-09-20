const tasks_button = document.querySelector(".tasks_button");
const tasks_box = document.querySelector(".tasks_box");

tasks_button.addEventListener("click", function(){
  if(tasks_box.classList.contains("closed")){
    tasks_box.style = "display: flex";
    tasks_box.classList.remove("closed");
  }
  else{
    tasks_box.classList.add("closed");
    tasks_box.style = "display: none";
  }
})