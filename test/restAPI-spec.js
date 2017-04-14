var restAPI = require("../index.js");
var frisby = require('frisby');
describe("API Testing", function() {
  frisby.create('GET HTML search page from an endpoint')
    .get('http://localhost:80/location-search.html')
    .expectStatus(200)
    .expectHeader('Content-Type', 'text/html; charset=utf-8')
  .toss();

  // frisby.create('POST zipCode to ')
  //   .post('http://localhost:80/location-search', {
  //     zipCode: 12345
  //   })
  //   .expectJSONTypes('args', {
  //     zipCode: Number
  //   })
  // .toss();

});
