//fetch and save as json format
const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const sortTodos =() => {
    
  }
  

  //func that populates fecth titles and inserts them in html list item
  const populateTodos = () => {

    remove();

    //gets the ol element
    const element = document.getElementById("todo-list")

    for(i=0; i<=199;i++){
    
      let item =  document.createElement("LI");// creates li element and assigns to var item//
      //checking for status of completed//

      if(arrayOfTodos[i].completed == true){
        item.innerHTML = arrayOfTodos[i].title;//using the item because its the easiest to work with, is a string//
        $(item).css('color', 'blue');//assigns all items that meat condition to the color blue with jQuery//

      } else{
        item.innerHTML = arrayOfTodos[i].title;
        $(item).css('color', 'red');
      }
      //appending other object items to the var item
      item.append(' ');
      item.append(arrayOfTodos[i].userId);
      item.append(' ');
      item.append(arrayOfTodos[i].id);
      item.append(' ');
      item.append(arrayOfTodos[i].completed);

      // doComplete = item;
      // console.log(doComplete);
      element.appendChild(item);//appending what ive done to the html ol element above

    }

  }

  const filter = (element) => {

  remove();//removes li ele

  const newElement = document.getElementById("todo-list")
//getting user input
  const newId = document.getElementById("userId").value;//gets value from user
//filtering array and creating new array
  const filtered = arrayOfTodos.filter(value => value.userId == newId);
    
  for(i=0; i <= 19; i++){
    let PooPoo =  document.createElement("LI");// creates li every cycle
    PooPoo.innerHTML = filtered[i].title; //putting content into li//
    PooPoo.append(' ');
    PooPoo.append(filtered[i].userId);
    PooPoo.append(' ');
    PooPoo.append(filtered[i].id);
    PooPoo.append(' ');
    PooPoo.append(filtered[i].completed);
    newElement.appendChild(PooPoo);
   } 
    
}

const completeOrNot = () => {
  remove();
  
  const compElement = document.getElementById("todo-list");
  const done = arrayOfTodos.filter(value => value.completed == true);
  console.log(done[0].completed);

  for(i=0;i <=199;i++){
    let yes = document.createElement("LI");
    yes.innerHTML = done[i].title;
    yes.append(' ');
    yes.append(done[i].userId);
    yes.append(' ');
    yes.append(done[i].id);
    yes.append(' ');
    yes.append(done[i].completed); 
    compElement.appendChild(yes);

  }
}

const completeOrNotNo = () => {
  remove();
  
  const compElementNo = document.getElementById("todo-list");
  const Notdone = arrayOfTodos.filter(value => value.completed == false);
  console.log(Notdone[0].completed);

  for(i=0;i <=199;i++){
    let no = document.createElement("LI");
    no.innerHTML = Notdone[i].title;
    no.append(' ');
    no.append(Notdone[i].userId);
    no.append(' ');
    no.append(Notdone[i].id);
    no.append(' ');
    no.append(Notdone[i].completed); 
    compElementNo.appendChild(no);


}
}


const remove = () => {
  //Removes created list elements
  $("li").remove();
}

