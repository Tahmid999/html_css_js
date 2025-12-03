let form = document.getElementById("form")

form.addEventListener("submit", function(e) {
    e.preventDefault();
    // console.log(e)
    // console.log(this.elements[0])
    // console.log(this["email"])
    let isValid = false //for validation checking
    let form_info = {};
    [...this.elements].forEach(ele => {

        // console.log(ele.type, ele.name ,ele.value)
        if (ele.type !== 'submit') {
            
            //checking the validation
            isValid = validornot(ele)

            if (isValid) {
                form_info[ele.name] = ele.value
            } else {
                alert(`${ele.name} is Invalid`)
            }

        }
    });
    if (isValid) {
        console.log(form_info)
        this.reset()
    }
})

//validation function
function validornot(element){
    if (element.value === "" ){
        return false
    }

    return true
}