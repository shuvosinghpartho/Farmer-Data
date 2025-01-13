
document.getElementById("searchBtn").addEventListener("click", function (event) {
    var number = document.getElementById("searchInput").value;
    if (number.length !== 11 || isNaN(number)) {
        alert("Mobile number must be 11 digits long!");
        return; // Exit the function if mobile is not 11 digits
    }
    findByNumber(number);
});

function populateCard(data) {
    document.getElementById("name").textContent = data.name;
    document.getElementById("father-name").textContent = data.father;
    document.getElementById("mother-name").textContent = data.mother;
    document.getElementById("address").textContent = data.address;
    document.getElementById("mobile").textContent = data.mobile;
    document.getElementById("voter-id").textContent = data.voterid;
    document.getElementById("project").textContent = data.project;
    document.getElementById("demo").textContent = data.demo;
    document.getElementById("result-card").style.display = "block";
}
