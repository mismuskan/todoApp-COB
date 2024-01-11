let btn=document.querySelector("#add");
let input=document.querySelector("#taskInput");
let list=document.querySelector("#taskList");
let count=0;
    let maxCount=10;
btn.addEventListener("click",()=>{
    let taskValue=input.value;
    
    if (taskValue.trim() !== "" && count<=maxCount) {
        let listItem = document.createElement("li");
        listItem.textContent = taskValue;

        let removeButton = document.createElement("button");
        removeButton.classList.add("remove");
        removeButton.innerHTML = "&times;"; 
        removeButton.addEventListener("click", () => {
          list.removeChild(listItem);
          count--;
          input.placeholder="Add Task";
          btn.disabled = false;
          input.disabled=false;
        });
  
        listItem.appendChild(removeButton);

        list.appendChild(listItem);
        count++;
        input.value = "";
      } 
      if (count === maxCount) {
        btn.disabled = true;
        input.disabled=true;
        input.placeholder="Ohh! Limit Exceeded..";
        input.classList.add("input");
        // input.style.color="white";
      }
      else {
        removeButton.disabled=true;
        
        console.log("Please enter a valid task!");
      }

});
