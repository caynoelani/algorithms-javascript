// Given an array of words, capitalize the first letter of each word

const capitalize = (array) => {
    return array.map( (name) => {
        return name[0].toUpperCase() + name.slice(1)
    })
}

const names = ["alice", "bob", "charlie", "danielle"]
console.log(capitalize(names));