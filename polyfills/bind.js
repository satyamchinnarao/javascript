const details = {
    name: "Satyam",
    organization: "Pyramid IT Consulting pvt Ltd"
}

myPrint = function(args){
console.log(args);
}

let displayDetails = function (empcode, location, role) {
    const txt = "\nName: " + details.name + "\nCompany: "+ details.organization + "\nEmpcode:  " + empcode +"\nLocation: " + location +"\nDesignation: " + role
    myPrint(txt);
}
Function.prototype.bindFunc = function(...args) {
    let context = this, parameter = args.slice(1);
    return function(...arguments2) {
        context.apply(args[0], [...parameter, ...arguments2]);
    }
}
let printDetails = displayDetails.bindFunc(details, 'H0424',"Hyderabad","Tech Lead")
printDetails();

// displayDetails();