let ml =100

    setInterval(function(){
    document.getElementById("cursor").style.marginLeft = -ml+"%";
    document.getElementById("cursor").style.transition ="1s";
    ml =ml+100;

    if(ml>700){
        setTimeout(function(){
            document.getElementById("cursor").style.transition ="0s";
            document.getElementById("cursor").style.marginLeft = "0%";
            ml =100;
        },1000)
    }

},3000)

                              // popup|||||||||||||||||||||||||

// setTimeout(function(){
//     document.getElementById("popup").style.display="flex";
//     // document.body.style.overflow = "hidden";
    
    
// },3000)

// function closePopup() {
//     document.getElementById("popup").style.display = "none";
//     // document.body.style.overflow = "";
// }



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("main-l").addEventListener("click", function () {
        document.getElementById("main").scrollIntoView({ behavior: "smooth"});
    });

    document.getElementById("Cast-l").addEventListener("click", function () {
        document.getElementById("Cast").scrollIntoView({ behavior: "smooth"});
    });

    document.getElementById("poster-l").addEventListener("click", function () {
        document.getElementById("poster").scrollIntoView({ behavior: "smooth"});
    });

    document.getElementById("Trailer-l").addEventListener("click", function () {
        document.getElementById("Trailer").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("musics-l").addEventListener("click", function () {
        document.getElementById("musics").scrollIntoView({ behavior: "smooth" });
    });
    document.getElementById("behind-l").addEventListener("click", function () {
        document.getElementById("behind").scrollIntoView({ behavior: "smooth"});
    });

    document.getElementById("cursor-l").addEventListener("click", function () {
        document.getElementById("cursor").scrollIntoView({ behavior: "smooth"});
    });

    document.getElementById("fans-l").addEventListener("click", function () {
        document.getElementById("fans").scrollIntoView({ behavior: "smooth"});
    });
});







function toggleMenu() {
  const navList = document.getElementById('nav-list');
  navList.classList.toggle('show');
}


