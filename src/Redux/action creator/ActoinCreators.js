


//action are js object which must have type property 

const { A, B } = require("../constants/Constants")

//action Creatpr are function that return actions


let loginActionCreator =()=>{
    return {
        type: A,
    }
}
let registerActionCreator =()=>{
    return {
        type: B,

    }
}

module.exports ={loginActionCreator,registerActionCreator}