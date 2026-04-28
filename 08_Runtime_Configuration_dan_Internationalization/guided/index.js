// require('dotenv').config()

// console.log(`Dalam mode ${process.env.SECRET_KEY}`);

require('dotenv').config();

function ambilKutipan(){
    try {
        const fetched = fetch(process.env.BASE_API)
        .then(response => response.json())
        .then(data => console.log(data['fact']));
    } catch (error) {
        console.error(error);
    }
}
ambilKutipan();