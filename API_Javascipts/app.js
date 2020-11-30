
var title = document.getElementById('title')

async function postData(url) {
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return response.json(); 
  }
  
postData('https://jsonplaceholder.typicode.com/posts/2')
    .then(data => {
      title.innerHTML = data.body
});