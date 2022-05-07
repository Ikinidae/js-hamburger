const button = document.querySelector (".fas");
const closedButton = document.querySelector(".close");

button.addEventListener('click',
    function () {
        document.querySelector(".hamburger-menu").className = "hamburger-menu active";
    }
);

closedButton.addEventListener('click',
    function () {
        document.querySelector(".hamburger-menu").className = "hamburger-menu";
    }
);