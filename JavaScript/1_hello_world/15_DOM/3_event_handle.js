let btn = document.getElementById("one_btn")
// console.dir(btn)

//event and to control event the function is called handler. so we are handleing the event now
// btn.onclick = function(e){
//     // console.log(e)
//     alert("Button clicked!")
// }


//one more convinient way to handle event, inside addEventListner take two argument one is the event and other is the callback function to handle this event.
btn.addEventListener("click", function(e) {
    // console.log(e)
    // alert("I have clicked!")


})


//====cursor axis project
let box = document.getElementById("axis")
box.addEventListener("mousemove", function(e) {
    // console.log(e)
    // let x_axis = document.getElementById("x_axis")
    // let y_axis = document.getElementById("y_axis")

    // //clientx and clienty for hole document cursor point
    // // x_axis.innerHTML = e.clientX
    // // y_axis.innerHTML = e.clientY

    // //offsetx and offsety for only that div cursor point
    // x_axis.innerHTML = e.offsetX
    // y_axis.innerHTML = e.offsetY

    //the hole above process in one line is
    document.getElementById("x_axis").innerHTML = e.offsetX
    document.getElementById("y_axis").innerHTML = e.offsetY

    // if (e.offsetX == 50 && e.offsetY == 50) {
    //     alert("you win!")
    // }

})


//====add list project
// function createElement(tagName){
//     let new_tag = document.createElement(tagName)
//     new_tag.innerHTML = "New"
//     new_tag.style.border = "2px"
//     return new_tag
// }

// function append(parent, children){
//     children.forEach(child => parent.appendChild(child));
// }

// let ul = document.getElementById("main_ul")

// btn.addEventListener("click", function(e) {
//     let new_list = createElement("li")
//     append(ul, [new_list])
// })


    //we can do this with clone node, more readable and easy
    let list = document.getElementById("main_ul")

    btn.addEventListener("click", function(e) {
        let new_list = list.lastElementChild.cloneNode(true)
        new_list.innerHTML = "New list"
        list.appendChild(new_list)
    });

//==add remove event 
//it's removing only preveous li not newly added li, this problem is called Event Delegation, to solve this problem we have to add event on their parent
// [...list.children].forEach(li => {
//     li.addEventListener("click", function(e) {
//         e.target.remove()
//     })
// })

//solve
list.addEventListener("click", function(e) {
    // console.log(this.contains(e.target)) //to check the node is under this element or not
    if (this.contains(e.target)) {
        e.target.remove()
    }
})