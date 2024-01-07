var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");


function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
}


// document.getElementById("load-more").onclick = () => {
//     document.getElementsById("lode").style.body = "none";
// }




let div = document.querySelectorAll("#lode");



console.log(div);
console.log(typeof div);



document.getElementById("load-more").onclick = () => {


    for (let i = 0; i <= div.length; i++) {
        document.getElementById("lode").style.display = "block";
    }

}





// setTimeout(() => {
//     window.alert("thank you for visiting our website! :)");

// }, 4000);





setTimeout(() => {
    document.getElementById("right").style.top = "8rem";

}, 3000);


document.getElementById("event-close").onclick = () => {
    document.getElementById("right").style.top = "-58rem";

}