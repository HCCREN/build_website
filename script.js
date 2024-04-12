const documents = [
    { content: "John studied Computer Science in college." },
    { content: "Jane majored in Biology and minored in Chemistry." },
    { content: "Mike wrote a thesis on Data Structures." }
];

function performSearch() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const results = documents.filter(doc => doc.content.toLowerCase().includes(query));
    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        const resultList = document.createElement('ul');
        results.forEach(result => {
            const item = document.createElement('li');
            item.textContent = result.content;
            resultList.appendChild(item);
        });
        resultsContainer.appendChild(resultList);
    }
}
