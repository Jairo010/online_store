function checkWindowSize() {
    var w = window.innerWidth;
    var backgroundImage = document.querySelector('.background-image');
    var container = document.querySelector('.container');
    var body = document.querySelector('body');    
    var btnCancelar = document.querySelector('.cancel-btn');

    if (w <= 768) {
        backgroundImage.style.display = 'none';
        container.style.width = '90%';
        container.style.maxWidth = 'none';
        container.style.padding = '16px 20px';
        btnCancelar.style.opacity = '1';
        body.style.gridTemplateColumns = '1fr';
        body.style.background = "url('../img/sign\ in.jpeg')";
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
    } else {
        backgroundImage.style.display = 'block';
        container.style.width = '80%';
        container.style.maxWidth = '300px';
        container.style.padding = '16px';
        container.style.backgroundImage = "none";
        body.style.gridTemplateColumns = '1fr 1fr';
        body.style.background = "#183f60";
    }
}

window.onload = function() {
    checkWindowSize();
};

window.addEventListener('resize', function() {
    checkWindowSize();
});

function route() {
    window.location.href = "index.html";
}
