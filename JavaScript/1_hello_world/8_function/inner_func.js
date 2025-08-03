function tamplate(greet, name)
{
    //this inner function must be called in outer function/ mother function, because we can't call this inner function at outside of main function
    function getFirstName() 
    {
        if (name) {
            return name.split(" ")[0]
        }
        else
            return ""
    }
    var txt = greet + ' ' + getFirstName()
    console.log(txt)
}

tamplate("good night,", 'Tahmidur Rahman Muhtadee')
tamplate("good night")