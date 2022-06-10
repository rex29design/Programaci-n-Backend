function exampleFunction() {
    // x solo se puede utilizar en exampleFunction
    const x = 'declarada en el scope local'
    console.log(x)
}

console.log(x) //ReferenceError: x is not defined