// script.js
document.getElementById('factButton').addEventListener('click', function() {
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(response => response.json())
        .then(data => {
            document.getElementById('factDisplay').innerText = data.text;
        })
        .catch(error => {
            console.error('Error fetching the fact:', error);
            document.getElementById('factDisplay').innerText = 'Failed to fetch a fact. Try again.';
        });
});