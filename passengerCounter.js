// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let clearBtn = document.getElementById("clear-btn");
let saveBtn = document.getElementById("save-btn");
let count = 0;

saveBtn.style.display="none" 
clearBtn.style.display="none"



function increment() { 
    count += 1;
    countEl.innerText = count;
    saveBtn.style.display="inline" 
    saveBtn.style.position="absolute"
    saveBtn.style.display.left = "50%"

};

function save() { 
   let countStr = "+ " + count + "  ";

   saveEl.innerText += countStr; 

   countEl.innerText = 0;
   count = 0;
   console.log("saved")
   clearBtn.style.display="inline"
  
};



function wipe() { 
  console.log("wipe")
  saveEl.innerText = " "
clearBtn.style.display="none"
saveBtn.style.display="none"

};