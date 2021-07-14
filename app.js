let todos = [];

function makeTodo(id, name, done) {
    return {
        "name": name,
        "id": id,
        "done": done
    }
}

// function 어떻게 사용하는건지.
function todo(todoItem, id) {
    let todoContainerEl = document.querySelector(".todo-container");
    let todoEl = document.createElement("div");
    
    todoEl.innerHTML = '<input type="checkbox" onclick="calctodo()"> <label>' + todoItem + '</label> <button class="btn btn-danger" id="'+ id +'" style="float: right;" onclick="deleteTodo(this.id);">DEL</button>';
    todoEl.className = 'todo';
    todoContainerEl.appendChild(todoEl);
}

// plus button 요소 가져오기
let plusBtn = document.querySelector('.add-todo button');

// click event bind
plusBtn.addEventListener("click", function() {
    // user input 값을 가져와서 todo("독서하기")
    let userInput = document.querySelector('input[type=text][name=todo]');
    // console.log(userInput.value);
    
    // todos에 추가하기
    // console.log(makeTodo(todos.length, userInput.value, "done"));
    todos.push(makeTodo(todos.length, userInput.value, "done"));

    view(todos);

    // userInput 비우기
    userInput.value = "";
    // userInput 포커스 하기
    userInput.focus();
    calctodo();
});

// enter event bind
let userInput = document.querySelector('input[type=text][name=todo]');
userInput.addEventListener("keydown", function(event){
    // Enter를 눌렀을때,
    if (event.keyCode === 13) {

        document.querySelector(".todo-container").innerHTML = "";

        todos.push(makeTodo(todos.length, userInput.value, "done"));
        
        view(todos);
        
        // userInput 비우기
        userInput.value = "";
        // userInput 포커스 하기
        userInput.focus();
        calctodo();
    }
});

// 오늘 할일 중 남은 것 구해보기.
function calctodo() {
    let remaintodos = 0;
    document.querySelectorAll('input[type=checkbox]').forEach(function(el){
        if (el.checked === true) {
            remaintodos++;
        }
        document.querySelector('.success').innerText = remaintodos;
    });
}

function view(todos) {
    console.log(todos.length);
    for(let i = 0; i < todos.length; i++) {
        // console.log(todos[i].name);
        todo(todos[i].name, todos[i].id);
    }
}

function deleteTodo(id) {
    let index = todos.findIndex(function(el){
        return el.id === id-1;
    });
    todos.splice(index+1, 1);
    // console.log(todos);
    document.querySelector(".todo-container").innerHTML = "";
    view(todos);
}

// checkbox click bind (error)
// document.querySelector('input[type=checkbox]').addEventListener("click", calctodo);
























// let todos = [
//     { todo: "공부하기1111", done: false },
//     { todo: "놀기2222", done: true },
//     { todo: "밥먹기3333", done: false }
// ];



















// let todoContainerEl = document.querySelector(".todo-container");

// for (let i = 0; i < todos.length; i++) {
//     let todoEl = document.createElement("div");
//     todoEl.innerHTML = '<input type="checkbox"> <label>' + todos[i].todo + '</label>';
//     todoEl.className = 'todo';
//     todoContainerEl.appendChild(todoEl);
// }

// todos.forEach(function(el) {
//     let todoEl = document.createElement("div");
//     todoEl.innerHTML = '<input type="checkbox"> <label>' + el.todo + '</label>';
//     todoEl.className = 'todo';
//     todoContainerEl.appendChild(todoEl);
// });

// function App() {
//     let todoContainerEl = document.querySelector(".todo-container")
//     todoEl = document.createElement("div");
//     todoEl.innerHTML = '<input type="checkbox"> <label>강의듣기</label>'; todoEl.className = 'todo';
//     todoContainerEl.appendChild(todoEl)
// }

// App();

// let plusBtnEl = document.querySelector(".add-todo button");

// document.querySelector('input[type=text]').addEventListener('keydown', (e)=>{
//     if (e.keyCode === 13) {
//         // code for enter
//         alert('enter');
//   }  
// });

// console.log(todos.filter(function(el){return el.done === true}).length);

// document.querySelector('.success').innerHTML = todos.filter(function(el){return el.done === true}).length;
