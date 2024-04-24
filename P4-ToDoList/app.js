let inp = document.querySelector("input");
let add = document.querySelector("button");
let ul = document.querySelector("ul");

add.addEventListener("click", function() {
    let li = document.createElement("li");
    
    let comp = document.createElement("button");
    comp.classList.add("complete", "fa-solid", "fa-check", "btn");
    
    let delbtn = document.createElement("button");
    delbtn.classList.add("delete", "fa-solid", "fa-trash-can", "btn");
    
    li.innerText = inp.value;
    
    li.appendChild(comp);
    li.appendChild(delbtn);
   
    if(inp.value == "") {
        alert("Please add task first");
    }
    else {
        ul.appendChild(li);
    }
    inp.value = "";
});


// but this will not work on btns we create newly 
// let delbtns = document.querySelectorAll(".delete");

// for (delbtn of delbtns) {
//     delbtn.addEventListener("click", function() {
//         let fun = this.parentElement;
//         fun.remove();
//     });
// }

// so need to use event delegation (targeting parent instead of that perticular ele)
let count = 0;
ul.addEventListener("click", function(event) {
    
    if(event.target.classList.contains("complete")) {
        if(event.target.style.backgroundColor == "orange") {
            event.target.parentElement.style.textDecoration = "none";
            event.target.style.backgroundColor = "rgba(16, 16, 16, 0.8)";
        }
        else{
            // here event.target is button presssed
        event.target.parentElement.style.textDecoration = "line-through";
        event.target.style.backgroundColor = "orange";
        }
    }
    if(event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
});

// let lis = document.querySelectorAll("li");
// for(li of lis) {
//     li.addEventListener("click", function(event){
//         if(event.target.classList.contains("delete")) {
//             event.target.parentElement.remove();
//         }
//         if(event.target.classList.contains("complete")) {
//             event.target.parentElement.style.textDecoration = "line-through";
//         }

//     })
// }
