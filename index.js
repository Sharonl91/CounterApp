//Title = "School Counter App"
//background-image: url(images/bths.png) sets the images as the background of the webpage
let count = 0;
function increment() {
    count = count + 1;
    document.getElementById("count-el").innerHTML = count
    //console.log(countJS)
}
function save() {
    document.getElementById("entered").append(" " + count + " -")
}