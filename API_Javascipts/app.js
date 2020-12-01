
// var title = document.getElementById('title')

// async function postData(url) {
//     const response = await fetch(url, {
//       method: 'GET', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin

//       headers: {
//         'Content-Type': 'application/json'
//       },
//     });
//     return response.json(); 
//   }
  
// postData('http://localhost:3000/Shopping/products')
//     .then(data => {
//       console.log(data)
// });

fetch('http://localhost:3000/Shopping/products', {
  //Đây Là POST Data
  // method: 'POST',
  // body: JSON.stringify({name: "janith"}),

  //Đây là GET data
  method: 'GET'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error(err));