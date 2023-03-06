
window.onload = function() {
    // OFFSET
    var links = document.getElementsByClassName('social-link');

    links[1].style.marginLeft = "50px";
    links[2].style.marginLeft = "100px";
    links[3].style.marginLeft = "150px";
  };
  

setInterval(() => {
    
    var links_container = document.getElementById('links').style;
    var links = document.getElementsByClassName('social-link');
    var header = document.getElementById('socials-header');
    if (document.querySelector("#socials-container:hover") != null) {
        LaunchSocials(links_container, links, header);
    }
    else {
        EndSocials(links_container, links, header);
    }
}, 10);

function LaunchSocials(links_container, links, header){
    console.log("Start");
    // CONTAINER 
    links_container.marginTop = "-100px";
    links_container.opacity = "1";
    
    links[0].style.marginTop = "0px";
    links[1].style.marginTop = "-30px";
    links[2].style.marginTop = "-30px";
    links[3].style.marginTop = "0px";

    // @Header - #FBF5F3
    header.style.background = "#353333";
    header.style.border = "#FBF5F3 2px solid";

    // Links - OFFSET
    links[0].style.marginLeft = "0px";
    links[1].style.marginLeft = "50px";
    links[2].style.marginLeft = "100px";
    links[3].style.marginLeft = "150px";

    // Links - Border
    links[0].style.border = "#FBF5F3 2px solid";
    links[1].style.border = "#FBF5F3 2px solid";
    links[2].style.border = "#FBF5F3 2px solid";
    links[3].style.border = "#FBF5F3 2px solid";

}

function EndSocials(links_container, links, header){
    console.log("End");
    // CONTAINER
    links_container.marginTop = "-50px";
    links_container.opacity = "0"; // Change

    // @Header - 
    header.style.border = " #312f2f 2px solid";

    // Reset position to center
    links[0].style.marginLeft = "50px";
    links[3].style.marginLeft = "100px";

    // Links - Border
    links[0].style.border = "#FBF5F3 0px solid";
    links[1].style.border = "#FBF5F3 0px solid";
    links[2].style.border = "#FBF5F3 0px solid";
    links[3].style.border = "#FBF5F3 0px solid";


}