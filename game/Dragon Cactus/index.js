function jump() {
    var dragon = document.getElementById("dragon").classList.add("animates")
    setTimeout(()=>{

        var dragon = document.getElementById("dragon").classList.remove("animates")

    }, 500);
        console.log(dragon);
}