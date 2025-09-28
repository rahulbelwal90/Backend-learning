function Add(a,b) {
    return a+b
}

function Sub(a,b){
    return a-b
}

// module.exports = Add
// if we have to export both method

module.exports = {
    Add,
    Sub
}