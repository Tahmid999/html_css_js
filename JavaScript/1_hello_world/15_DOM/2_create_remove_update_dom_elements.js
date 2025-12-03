
//=====Element Create and append Section=====

const list = document.getElementById('main_ul')
console.log(list)

let newli = document.createElement('li')
console.log(newli)
newli.setAttribute('title', 'i am new li')
newli.className = "new_li"
newli.innerHTML = "Four"

// now add this new element to list
list.appendChild(newli)

//function for creating new element
function createElement(tagName, className, innerHTML){
    let tag = document.createElement(tagName)
    tag.className = className || ""
    tag.innerHTML = innerHTML || ""

    return tag
}

//function for appending child element
function append(parent, children){
    children.forEach(child => parent.appendChild(child));
}

let p1 = createElement("p", "new_p", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione molestiae mollitia delectus perspiciatis doloribus? Itaque, sapiente? Temporibus, harum. Dolore reiciendis quod expedita neque similique! Commodi hic asperiores fugit voluptatibus doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias, nam eligendi impedit dolorem nostrum enim excepturi")

let p2 = createElement("p", "new_p", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione molestiae mollitia delectus perspiciatis doloribus? Itaque, sapiente? Temporibus, harum. Dolore reiciendis quod expedita neque similique! Commodi hic asperiores fugit voluptatibus doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias, nam eligendi impedit dolorem nostrum enim excepturi")

let div1 = createElement('div', "new_div")

append(div1, [p1,p2])

let container = document.getElementById('cont')
console.log(container)

// container.appendChild(div1)

//update version of appendChild()
// list.insertAdjacentElement("beforebegin",div1)
// list.insertAdjacentElement("afterbegin",div1)
// list.insertAdjacentElement("beforeend",div1)
list.insertAdjacentElement("afterend",div1)


//=====Element update and remove section=====

setTimeout(() => {
    list.firstElementChild.innerHTML += ' (Modified)'
}, 5000)

// setTimeout(() => {
//     list.lastElementChild.remove()
// }, 3000);



//===clone node====

// if we want force clone like with innerhtml then set true like cloneNode(true)
let lastlist = list.lastElementChild.cloneNode()
lastlist.innerHTML = 'Five'
list.appendChild(lastlist)


//=====Attribute======

// console.log(list.attributes)
// console.log(list.getAttributeNames())
// console.log(list.getAttributeNode('id'))
// console.log(list.getAttribute('id'))
list.className = 'ul_class'
console.log(list.className)
console.log(list.id)

lastlist.setAttribute('id', 'last-list')
console.log(lastlist.id)

let att = document.createAttribute('class')
att.value = 'last-list-class'
lastlist.setAttributeNode(att)


//=====Style section=======

let head = document.getElementById('headline')
head.style.color = "red"
head.style.fontSize = "50px"
head.style.background = 'grey'


let styleObj = {
    color : 'yellow',
    fontSize : '30px',
    background : 'grey',
    borderColor : "red"
}

let ul_list = document.getElementById('main_ul');
Object.assign(ul_list.style, styleObj);

[...ul_list.children].forEach(li => Object.assign(li.style, styleObj))

