fetch((url = "https://api.ipstack.com/160.39.144.19?hostname=1"), {
  method: "GET", // default, so we can ignore
})
.then((response) => {
  console.log("Status Code:", response.status); // Log the status code
  return response.json();
})
.then((json) => console.log(json))
.catch((error) => console.error('Error:', error)); // Handle any errors