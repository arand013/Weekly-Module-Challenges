// Fetch request to Giphy API random endpoint
fetch(
  'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN'
)
  // Convert the response to JSON
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    $('#response-container').append($(`<img src=${response.data.image_url} alt="test">`));
  });
