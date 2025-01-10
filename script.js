// Check if farmers data exists in localStorage, otherwise initialize it as an empty array
let farmers = JSON.parse(localStorage.getItem('farmers')) || [];

// Function to display farmer list
function displayFarmers() {
    const farmerList = document.getElementById('farmerList');
    farmerList.innerHTML = '';
    
    farmers.forEach(farmer => {
        const li = document.createElement('li');
        li.textContent = `${farmer.name} - ${farmer.voterid}`;
        farmerList.appendChild(li);
    });
}

// Function to add a new farmer
document.getElementById('farmerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const farmer = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        voterid: document.getElementById('voterid').value,
        mother: document.getElementById('mother').value,
        father: document.getElementById('father').value,
        project: document.getElementById('project').value,
        demo: document.getElementById('demo').value,
    };

    // Add farmer to the array and update localStorage
    farmers.push(farmer);
    localStorage.setItem('farmers', JSON.stringify(farmers));

    // Clear form fields and update the list
    document.getElementById('farmerForm').reset();
    displayFarmers();
});

// Function to search for a farmer by name or voter ID
function searchFarmer() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const resultContainer = document.getElementById('searchResult');
    resultContainer.innerHTML = '';

    const results = farmers.filter(farmer =>
        farmer.name.toLowerCase().includes(searchValue) || 
        farmer.voterid.includes(searchValue)
    );

    if (results.length > 0) {
        results.forEach(farmer => {
            const div = document.createElement('div');
            div.textContent = `${farmer.name} - ${farmer.voterid}`;
            resultContainer.appendChild(div);
        });
    } else {
        resultContainer.textContent = 'No farmers found.';
    }
}

// Initial display of farmers
displayFarmers();
