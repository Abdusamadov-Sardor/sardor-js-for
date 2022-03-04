var numbers = [1,3,5,9];

function sum(num) {
  var number = 0 
  for(var i = 0; i < num.length; i++){
    number += num[i]
  }
  return number;
}

console.log(sum(numbers));




elForm = document.querySelector(".form");
elInput = document.querySelector(".input");
elInput = document.querySelector(".List");

var ToDoArr = []

var elInputVal = elInput.value.trim();

elNode = document.createTextNode("Inputval");




elForm.addEventListener("submit", function(evt){

  evt.preventDefault();
  var todo = {
    id: todoArr.length,
    title: inputVal
  }

  todoArr.push(todo);
  elList.innerHTML = " ";

  for (var item of todoArr){
    var newItem = document.createElement("li");
    newItem.textContent = item.id + 1 + ". " + item.title;
    elFormList.appendChild(newItem);

    elFormInput.value = " ";
  }


});
