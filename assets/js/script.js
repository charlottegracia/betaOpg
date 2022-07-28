function menu(action) {
    console.log("hej");
    console.log(action);
    if (action == "open") {
        document.getElementById("mobileMenu").style.display = "block";
        
    } else {
        document.getElementById("mobileMenu").style.display = "none";
    }
}