//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let updatedArray = touristSpots.map(item => item.replace(/^(a|an|the)\s+/i, ''));
    let arr = updatedArray.sort();
    console.log(arr);