// How do you create a private variable in Javascript ?

function secretVariable() {

    var private = "This_My_PassWord";

    return function() {
        return private
    }
}

var getPrivateVariable = secretVariable()

console.log(getPrivateVariable())