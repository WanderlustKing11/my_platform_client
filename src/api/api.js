document.addEventListener('DOMContentLoaded', function () {
  const fetchButton = document.getElementById('fetchButton');
  //   const result = document.getElementById('result');

  fetchButton.addEventListener('click', function () {

    ////// Test API //////

    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     result.innerText = JSON.stringify(data, null, 2);
    //   })
    //   .catch(function (error) {
    //     result.innerText = "Error: " + error;
    //   });

    ///// GET requests /////

    // fetch('http://34.42.125.145:8080/api/home')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    ///// POST requests /////

    const data = {
      service: "service1",
      username: "Doug",
      password: "Goku",
    };

    fetch("http://34.42.125.145:8080/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json));
  });
});
