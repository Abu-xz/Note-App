const noteContainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
// let note = document.querySelectorAll(".input-box");

// function showNotes(){
//   noteContainer.innerHTML = localStorage.getItem("notes");
// }
// showNotes();

// function dataStorage(){
//   localStorage.setItem("notes", noteContainer.innerHTML);
// }

createbtn.addEventListener("click", ()=>{
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.setAttribute("contenteditable", "true");
  inputBox.className = "input-box";
  img.src = "images/delete.png";
  noteContainer.appendChild(inputBox).appendChild(img);
})

noteContainer.addEventListener("click",function(e){
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove() ;
  //  dataStorage();
  }
  // else if(e.target === "P"){
  //     note = document.querySelectorAll(".input-box");
  //     note.foreach(nt=>{
  //       nt.onkeyup = function(){
  //         dataStorage()
  //       }
  //     })
  //   }
  } 
);