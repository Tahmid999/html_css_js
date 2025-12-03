let URL = "https://jsonplaceholder.typicode.com/posts"

let load = document.getElementById("load")
let posts = document.getElementById("posts")

load.addEventListener("click", function() {
    fetch(URL)
    .then(respons => respons.json())
    .then(post => {
        post.forEach((list, index) => {
            let new_li = ligenerator(list, index + 1)
            posts.appendChild(new_li)
        });
    })
    .catch(e => console.log(e.message))
})

function ligenerator(item, indx){
    let li = document.createElement("li")
    li.className = "p-2 bg-blue-50 mb-2"
    li.innerHTML = `${indx} ID: ${item.id} </br> ${item.title}`

    return li
}