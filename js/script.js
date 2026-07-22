const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var btn = document.querySelector('#contactForm button');
        btn.textContent = 'Sending...';
        btn.disabled = true;

        fetch(this.action, {
            method: 'POST',
            body: new FormData(this),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(function(response) {
            form.reset();
            document.getElementById('successMsg').style.display = 'block';
            btn.textContent = 'Send Message';
            btn.disabled = false;
        })
        .catch(function(error) {
            alert('Something went wrong. Please try again.');
            btn.textContent = 'Send Message';
            btn.disabled = false;
        });
    });
}

AOS.init({
    duration: 800,
    easing: "ease-out",
    once: true
});