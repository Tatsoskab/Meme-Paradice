    const DarkMode = document.querySelector('.Dark');
    const LightMode = document.querySelector('.Light');
    const Background = document.querySelector('.Background');
    const Contact = document.querySelector('.Contact');
    const Nav = document.querySelector('header');
    const Content = document.querySelectorAll('.Back');
    const About = document.querySelector('footer');
    const Colors = document.querySelector(".bottomHeader").querySelectorAll("li");
    const H1 = document.querySelector("footer").querySelector("h1");

    LightMode.addEventListener('click',light);
    DarkMode.addEventListener('click',dark);

//Dark To light Mode 
//Dark To light Mode 
function dark(){
    DarkMode.style.display = "none";
    LightMode.style.display = "block";
    Background.style.background = "#A4A4A4";
    Colors[0].style.color = "rgb(32, 32, 32)";
    Colors[1].style.color = "rgb(32, 32, 32)";
    Colors[2].style.color = "rgb(32, 32, 32)";
    Colors[3].style.color = "rgb(32, 32, 32)";
    Contact.style.background = "#D4D3D3";
    Nav.style.background = "#555555";
    Content[0].style.background = "#878787";
    Content[1].style.background = "#878787";
    About.style.background = "#878787";
    H1.style.color = "#000";
}

function light(){
    DarkMode.style.display = "block";
    LightMode.style.display = "none";
    Background.style.background = "#222327";
    Contact.style.background = "#222327";
    Nav.style.background = "#303136";
    Content[0].style.background = "#3c3e44";
    Content[1].style.background = "#3c3e44";
    About.style.background = "#303136";
    Colors[0].style.color = "rgb(119, 119, 119)";
    Colors[1].style.color = "rgb(119, 119, 119)";
    Colors[2].style.color = "rgb(119, 119, 119)";
    Colors[3].style.color = "rgb(119, 119, 119)";
    H1.style.color = "#77d5e6";
}
