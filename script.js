//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let ul = touristSpots.map(item => item.replace(/^(a|an|the)\s+/i, ''));
    let li = ul.sort();
    console.log(li);