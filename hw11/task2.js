

function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
}

Promise.all([fetchTodo(), fetchUser()])
    .then(results => {
        const [todo, user] = results
        console.log('Result from all:')
        console.log("Todo:", todo)
        console.log("User", user)
    })
    .catch(error => {
        console.error("Error:", error)
    }
    )

Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
        console.log("Promise res:")
        console.log(result)
    })
    .catch(error => {
        console.error("Error:", error)
    })