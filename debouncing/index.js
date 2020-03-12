var counter = 0
const callSearchService = () => {
// Api Calling for searching
    console.log("Geting Search Results...", );
}

const debouncing = function (fn, delay) {
    let timer;
let context = this;
args = arguments
    return function () {
        clearTimeout(timer);
      timer = setTimeout(()=> {
        fn.apply(context, arguments);
        }, delay);
}
}
const SearchKeyWord  = debouncing(callSearchService, 300)