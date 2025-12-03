const baseURL = 'https://jsonplaceholder.typicode.com/'

let res = fetch(`${baseURL}/users/1`)
// console.log(res)

//if we do this way then there have no difference between promise and callback
// res.then((res) => {
//     console.log(res.json()
//     .then(data => {console.log(data)})
// )
// })
// .catch((e) => {
//     console.log(e)
// })

//instead of above we make chain of then to get direct json data or response instead of promise. flow is fetch_res -> data in json -> final data
// res.then((res) => res.json())
// .then(data => {
//     console.log(data)
//     return Promise.resolve("something.")
// })
// .then(res2 => {
//     console.log(res2)
//     return Promise.resolve("another.")
// })
// .then(res3 => {
//     console.log(res3)
// })
// .catch(e =>{
//     console.log(e)
// })

function getRequest(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('get', url)

        xhr.onreadystatechange = function(e){
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let response = JSON.parse(xhr.response)
                    resolve(response) //instead of callback
                }
                else {
                    reject(new Error("error occoured!"))
                }
            }
        }
        xhr.send()
    })
}

let getres = getRequest(`${baseURL}/users/1`)
// console.log(getres) //checking on browser promise returning or not

getres.then(data => {
    console.log(data)
})
.catch(e => {
    console.log(e.message)
})