//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let ul = touristSpots.map(item => item.replace(/^(a|an|the)\s+/i, ''));
let li = ul.sort();
function displayTouristSpots(touristSpots) {
    let bandList = document.getElementById('band');
    
    sortTouristSpots(touristSpots).forEach(name => {
        let listItem = document.createElement('li');
        listItem.textContent = name;
        bandList.appendChild(listItem);
    });
}

// Call the function to display the sorted tourist spots
displayTouristSpots(touristSpots);
