// Check if farmers data exists in localStorage, otherwise initialize it as an empty array
let farmers = JSON.parse(localStorage.getItem('farmers')) || [];

// Function to display farmer list
function displayFarmers() {
    const farmerList = document.getElementById('farmerList');
    farmerList.innerHTML = ''; // Clear current list

    farmers.forEach(farmer => {
        const li = document.createElement('li');
        li.textContent = `${farmer.name} - ${farmer.voterid} - ${farmer.mobile}`;
        farmerList.appendChild(li);
    });
}

// Function to add a new farmer
document.getElementById('farmerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const farmer = {
        name: document.getElementById('name').value,
        father: document.getElementById('father').value,
        mother: document.getElementById('mother').value,
        address: document.getElementById('address').value,
        voterid: document.getElementById('voterid').value,
        project: document.getElementById('project').value,
        demo: document.getElementById('demo').value,
        mobile: document.getElementById('mobile').value // New mobile number field
    };

    // Add farmer to the array and update localStorage
    farmers.push(farmer);
    localStorage.setItem('farmers', JSON.stringify(farmers));

    // Clear form fields and update the list
    document.getElementById('farmerForm').reset();
    displayFarmers();
});

// Function to search for a farmer by name, voter ID, or mobile number
function searchFarmer() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const resultContainer = document.getElementById('searchResult');
    resultContainer.innerHTML = ''; // Clear previous search results

    const results = farmers.filter(farmer =>
        farmer.name.toLowerCase().includes(searchValue) || 
        farmer.voterid.includes(searchValue) || 
        farmer.mobile.includes(searchValue) // Allow search by mobile number
    );

    if (results.length > 0) {
        results.forEach(farmer => {
            const div = document.createElement('div');
            div.textContent = `${farmer.name} - ${farmer.voterid} - ${farmer.mobile}`;
            resultContainer.appendChild(div);
        });
    } else {
        resultContainer.textContent = 'No farmers found.';
    }
}

// Initial display of farmers
displayFarmers();

// Search input event listener
document.getElementById('searchInput').addEventListener('input', searchFarmer);

// Function to display farmer list with delete button
function displayFarmers() {
    const farmerList = document.getElementById('farmerList');
    farmerList.innerHTML = '';
    
    farmers.forEach((farmer, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${farmer.name} - ${farmer.voterid} 
                        <button class="delete-btn" onclick="deleteFarmer(${index})">❌</button>`;
        farmerList.appendChild(li);
    });
}

// Function to delete a farmer
function deleteFarmer(index) {
    farmers.splice(index, 1); // Remove farmer from the array
    localStorage.setItem('farmers', JSON.stringify(farmers)); // Update localStorage
    displayFarmers(); // Refresh the list
}

// Initial display of farmers
displayFarmers();