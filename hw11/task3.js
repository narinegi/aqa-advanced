async function fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return response.json()

}

async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    return response.json()
}

async function executeRequests()
{
    try {

        const [todo, user] = await Promise.all([fetchTodo(), fetchUser()])

        console.log("Results using async/await:")
        console.log("Todo:", todo)
        console.log("User:", user)

        const result = await Promise.race([fetchTodo(), fetchUser()])
        console.log("Result from Promise.race (first resolved promise):'")
        console.log(result)
    }
    catch (error) {
        console.error("Error:", error)
    }
}

executeRequests();