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

setTimeout(rotate_blocks,50);
function rotate_blocks() {
	document.querySelector('.block_right').style="transform:scale(1) rotate(1800deg); transition: 0.3s"
  document.querySelector('.block_left').style="transform:scale(1) rotate(360deg); transition: 0.3s"
}

const cmdstr="C:/Windows/System32";
const cmdarr=[];
let b=0;
const cmd_text = document.querySelector(".cmd_text");
cmd_start();
function cmd_start(){
    if(b<cmdstr.length){
        cmdarr.push(cmdstr[b]);
        b++;
        cmd_text.innerHTML=cmdarr.join("");
        setTimeout(cmd_start,50);
    }
}

const cmd_line = document.querySelector(".cmd_line");
function cmd_line_start(){
  cmd_line.innerHTML="";
  setTimeout(function(){cmd_line.innerHTML="_"},500);
}
setInterval(cmd_line_start,1000);
