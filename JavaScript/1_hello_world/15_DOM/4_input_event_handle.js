let name_in = document.getElementById("name")
let skills = document.getElementsByName("Skills")
let result = document.getElementById("result")
let list = document.getElementById("main_ul")
// console.log(name_in)

name_in.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        // console.log(e.target.value)
        document.getElementById("show_name").innerHTML = `Your Name is: ${e.target.value}`
        // setTimeout((e) => {
        //     document.getElementById("show_name").innerHTML = ""
        // }, 2000);

        e.target.value = ""

        document.getElementById("show_name").addEventListener("click", function(e) {
            document.getElementById("show_name").innerHTML = ""
        })
    }
});


//==chack btn event
let checkedSkills = [];

[ ...skills].forEach(skill => {
    skill.addEventListener('change', function(event) {
        // console.log(event.target.checked)
        if (event.target.checked) {
            checkedSkills.push(event.target.value)
            // console.log(checkedSkills)
            outputresult(result, checkedSkills)
        }
        else {
            let index = checkedSkills.indexOf(event.target.value)
            checkedSkills.splice(index, 1)
            // console.log(checkedSkills)
            outputresult(result, checkedSkills)
        }
    })
})

function outputresult(parent, skills) {
    let result = ``
    skills.forEach((skill, indx) => {
        result += ` (${indx + 1}) ${skill} `
    })
    parent.innerHTML = result
}

//==list value change event
list.addEventListener("dblclick", function(event) {
    // console.log("dbl clicked")
    // console.log(event)
    if (event.isTrusted) {
        let temp = event.target.innerHTML
        event.target.innerHTML = ""
        let inputBox = createInput(temp)
        event.target.appendChild(inputBox)

        inputBox.addEventListener("keypress", function(e) {
            if (e.key === 'Enter') {
                event.target.innerHTML = e.target.value 
            }
        })
    }
})

function createInput(value){
    let input = document.createElement("input")
    input.type = "text"
    input.className = "edited_list"
    input.value = value

    return input
}