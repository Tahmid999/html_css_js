let URL = "https://jsonplaceholder.typicode.com/posts"

let form = document.getElementById("form")
let post = document.getElementById("posts")

form.addEventListener("submit", function(e) {
    e.preventDefault()
    // console.log(this.title)
    // console.log(this.body)

    let title = this.title.value || undefined
    let body = this.body.value || undefined

    if (title && body) {
        let postObj = {
            userId: 100,
            title,
            body
        }

        fetch(URL, {
            method: "post",
            headers : {
                "Content-type" : "Application/JSON"
            },
            body : JSON.stringify(postObj)
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            let new_li = ligenerator(data)
            post.appendChild(new_li)
        })
        .catch(error => console.log(error.message))
    } else {
        alert("Fill Form Correctly!")
    }
    this.reset()
})

function ligenerator(item){
    let li = document.createElement("li")
    li.className = "p-2 bg-blue-50 mb-2"
    li.innerHTML = `ID: ${item.id} Title: ${item.title} </br> Body: ${item.body}`

    return li
}