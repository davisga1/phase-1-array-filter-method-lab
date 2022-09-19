function findMatching(drivers, name){
    return drivers.filter((el) =>
     el.toLowerCase().includes(name.toLowerCase()))
    
}
function fuzzyMatch(drivers, initial){
    return drivers.filter((el) =>
     el.toLowerCase().substring(0, initial.length) === initial.toLowerCase())
    
}
function matchName(drivers, pname){
    return drivers.filter(function (drivers) {return drivers.name === pname})
}