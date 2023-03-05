
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
    if (document.querySelector("#socials-container:hover") != null) {
        LaunchSocials(links_container, links);
    }
    else {
        EndSocials(links_container, links);
    }
}, 10);

function LaunchSocials(links_container, links){
    console.log("Start");
    // CONTAINER 
    links_container.marginTop = "-100px";
    links_container.opacity = "1";
    
    links[0].style.marginTop = "0px";
    links[1].style.marginTop = "-30px";
    links[2].style.marginTop = "-30px";
    links[3].style.marginTop = "0px";

    // OFFSET
    links[0].style.marginLeft = "0px";
    links[1].style.marginLeft = "50px";
    links[2].style.marginLeft = "100px";
    links[3].style.marginLeft = "150px";

}

function EndSocials(links_container, links){
    console.log("End");
    // CONTAINER
    links_container.marginTop = "-50px";
    links_container.opacity = "0"; // Change

    // Reset position to center
    links[0].style.marginLeft = "50px";
    links[3].style.marginLeft = "100px";


}