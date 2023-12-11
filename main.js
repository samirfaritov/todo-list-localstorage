const inpTodo = document.querySelector('#todo')
const addTodo = document.querySelector('#addTodo')
const todoItems = document.querySelector('.todoItems')

let state = {
    todos: [],
}

let title = ''

inpTodo.addEventListener('keyup', (e) => {
    title = e.target.value
})

let counter = 0

addTodo.addEventListener('click', (e) => {
    e.preventDefault()
    
    let newTodo = {
        id: counter,
        title,
    }
    let todoHtml = `
    <div class="item">
    <h1 class="itemCount" >${newTodo.id}</h1>
    <p class="itemText">${newTodo.title}</p>
    </div>
    `
    
    todoItems.insertAdjacentHTML('beforeend', todoHtml)
    
    state.todos.push(newTodo)
    
    counter++
    newTodo.id = counter
    localStorage.setItem('todos', JSON.stringify(state.todos))
    inpTodo.value = ''
})

function local() {

    state.todos = JSON.parse(localStorage.getItem('todos') || '[]')

    for (let i = 0; i < state.todos.length; i++) {
        let todoHtml = `
        <div class="item">
        <h1 class="itemCount" >${state.todos[i].id}</h1>
        <p class="itemText">${state.todos[i].title}</p>
        </div>
        `

        todoItems.insertAdjacentHTML('beforeend', todoHtml)

    }
}

local()
