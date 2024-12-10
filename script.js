


document.querySelectorAll('.start-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();  
        let link = event.target.getAttribute('href');
        window.location.href = link;  
    });
});
