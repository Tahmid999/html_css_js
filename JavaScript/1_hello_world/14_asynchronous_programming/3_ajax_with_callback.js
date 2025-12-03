// AJAX
// Asynchronous JavaScript And XML (JSON) it's a WebAPI



//extra: by this code we call or use an api
//by this we can get only one request and the object, what if i want multiple, then we should use callback function
// const xhr = new XMLHttpRequest()

// xhr.open('get', 'https://jsonplaceholder.typicode.com/users')


// // e means event
// // 4 means ready state
// // 200 means all is ok
// xhr.onreadystatechange = function(e){
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             let users = JSON.parse(xhr.response)
//             console.log(users)
//         }
//         else {
//             console.log(xhr.status)
//         }
//     }
// }

// xhr.send() //to send the url request


function getrequest(url, callback){
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)

    xhr.onreadystatechange = function(e){
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.response)
                callback(null, response) // null for error showing if any have
            }
            else {
                callback(xhr.status, null)
            }
        }
    }

    xhr.send()
}

getrequest('https://jsonplaceholder.typicode.com/users', (error, res) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log(res)
    }
})

getrequest('https://jsonplaceholder.typicode.com/posts', (error, res) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log(res)
    }
})