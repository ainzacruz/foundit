const request = require("request"); //import request module which we will use to make requests to server during our tests
const server = require("../../src/server"); //require server
const base = "http://localhost:3000/"; //define base URL that we use for our requests
const base_2 = "http://localhost3000/about";

//write test for root path
describe("routes : static", () => {
  //#1
  describe("GET /", () => {
    //#2 test when requesting server using that route we get...
    it("should return status code 200 and have 'Welcome to foundit' in the body of the response", done => {
      //#3 use request to send a GET request to the base URL. Set expectation that the statusCode property of the response should be 200
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Welcome to foundit");

        //#4 call done method to let Jasmine know our test is completed.
        done();
      });
    });

    it("should return status code 200 for route /about", () => {
      request.get(base_2, (err, res, body) => {
        expect(res.statusCode).toBe(200);
      });
    });
  });
});
