
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


const links = [
  {name:"Store website",link:"https://imago31.github.io/skypro-frontend-ruben-sarkisyan/", id:"coursetask"},
  {name:"The game",link:"https://imago31.github.io/sarkisyan-frontend-game/", id:"coursetask"},
  {name:"The card game",link:"https://imago31.github.io/sarkisyn-frontend-git/", id:"coursetask"},
  {name:"Youtudrive",link:"https://ruben3182.github.io/youtudrive/", id:"mytask"},
  {name:"Youtudrive(React)",link:"https://imago31.github.io/youtudrive-react/", id:"mytask"},
  {name:"Appointment planer(React)",link:"https://imago31.github.io/appointment-planer/", id:"mytask"},
  {name:"Interactive website",link:"https://imago31.github.io/interactive_website/", id:"mytask"},
  {name:"Weather-api",link:"https://imago31.github.io/weather-api/", id:"mytask"},
  {name:"Youtudrive(React source code)",link:"https://github.com/Imago31/youtudrive-react", id:"myreacttask"},
  {name:"Appointment planer(React source code)",link:"https://github.com/Imago31/appointment-planer", id:"myreacttask"},
]

const tasks_button = document.querySelectorAll(".tasks_button");
const tasks_box = document.querySelector(".tasks_box");

for(button of tasks_button){
button.addEventListener("click", function(event){
  document.querySelector('.modal_block').style="display:flex";
    const linkBox = links.map(function(item){
      if(event.target.id == item.id){
        return `
          <a class="task_link" href="${item.link}">${item.name}</a>
          `
      }
    })
  document.querySelector(".links_block").innerHTML =linkBox.join("");
})
}

document.querySelector(".close").onclick=function(){
  document.querySelector('.modal_block').style="display:none";
}
document.querySelector(".modal_over").onclick=function(){
  document.querySelector('.modal_block').style="display:none";
}



