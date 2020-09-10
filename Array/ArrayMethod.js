// this array function takes an number as a arg and checks in a array has a greaterThenOR Equal
// value and returns the array again, if its an object it checks the "value" key in the object and
//adds that to the array 

//NOTE: there is always a better approch, improvment and correction are most welcome
// this function is all about how to create a Array function, not the login here.
Array.prototype.getNumGE = function (num) {
    var reqArr = [];
    this.filter((arrItem) => {
        if ((!isNaN(arrItem) && arrItem >= num)) {
            reqArr.push(arrItem)
        } else if (typeof arrItem === 'object') {
                  if ((arrItem.value && !isNaN(arrItem.value) && arrItem.value >= num)) {
                      reqArr.push(arrItem.value)
                   }
                }
    })
    return reqArr;
}
let arr = [2, 4, 5, 7, [9], { name: "satyam", value: 5 }, function () { }];
console.log(arr.getNumGE(4));