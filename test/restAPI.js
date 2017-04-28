var restAPI = require("../index.js");
var frisby = require('frisby');
describe("API Testing", function() {
  frisby.create('GET HTML search page from an endpoint')
    .get('http://localhost:80/directory-search.html')
    .expectStatus(200)
    .expectHeader('Content-Type', 'text/html; charset=utf-8')
    .toss();

  frisby.create('POST search results from an endpoint')
    .post('http://localhost:80/directory-search.html')
    .expectStatus(200)
    .expectHeader('Content-Type', 'text/html; charset=utf-8')
    .toss();

});
