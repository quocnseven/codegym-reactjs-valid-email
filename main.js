
function isEmailValid (str){
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/
    if (regexp.test(str)){
        console.log("email hop le")
    }else {
        console.log("email khong hop le")
    }

    

}

isEmailValid("quocng97@gmail.com")