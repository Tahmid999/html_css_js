
//====Selectors====

// let headline = document.getElementById('headline')
// console.log(headline)

// let para = document.getElementsByClassName('para')
// console.log(para)

// let list1 = document.getElementsByTagName('li')
// console.log(list1)

// let name = document.getElementsByName('main_ul')
// console.log(name)

//query selector
// let headline = document.querySelector('#headline')
// console.log(headline)

// let para = document.querySelectorAll('.para')
// console.log(para)

// let list2 = document.querySelectorAll('li')
// console.log(list2)

// let ul = document.querySelector('ul')

// console.log(list1.constructor.name)
// console.log(list2.constructor.name)

// console.log(ul.children)
// console.log(ul.childNodes)


//===Travarsing===

// let ul = document.getElementById('main_ul')

// console.log(ul.parentElement)
// console.log(ul.children)
// console.log(ul.previousElementSibling)
// console.log(ul.nextElementSibling)
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)

// let list = document.getElementsByClassName('lists')
// console.log(list)

//===looping on HTML collection

let list = document.getElementsByTagName('li')
console.log(list)

//make actual array method 1
// let listitem = Array.from(list)
// console.log(listitem) //now it's actual array

//make actual array method 2
// let listitem = Array.prototype.slice.apply(list)
// console.log(listitem) //now it's actual array

//make actual array method 3 most easy
let listitem = [...list]
console.log(listitem) //now it's actual array

listitem.forEach((listitem, ind) => {
    let txt = listitem.innerHTML
    listitem.innerHTML = `(${ind + 1}) ${txt}`
})

