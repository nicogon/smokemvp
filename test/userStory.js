const { expect } = require('chai');
const CardClient = require('../clients/cardClient');

describe('cards test', () => {
  let cardClient;

  before(() => {
    const apiHost = 'http://0.0.0.0:3000';
    const authToken = process.env.ACCESS_TOKEN;
    cardClient = new CardClient({ apiHost, authToken });
  });

  describe('get user list', () => {
    let response;
    let responseBody;
    let expectedBody;

    before(async () => {
      expectedBody = [{ id: 1234 }];
      response = await cardClient.getCards();
      responseBody = await response.json();
    });

    it('response code should be 200', () => expect(response.status).to.eql(200));
    it('response body should eql the card list', () => expect(responseBody).to.eql(expectedBody));
  });

  describe('get inexistent user', () => {
    let response;
    let responseBody;
    let expectedBody;

    before(async () => {
      expectedBody = { message: 'could not find card' };
      response = await cardClient.getCard({ cardId: 999 });
      responseBody = await response.json();
    });

    it('response code should be 404',
      () => expect(response.status).to.eql(404));
    it('response body should be the correct error message',
      () => expect(responseBody).to.eql(expectedBody));
  });

  describe('create a new card', () => {
    let response;
    let responseBody;
    let expectedBody;

    before(async () => {
      const username = 'judli';
      const name = 'julieta';
      const lastName = 'benitez';
      expectedBody = { id: 8888 };
      response = await cardClient.createNewCard({ username, name, lastName });
      responseBody = await response.json();
    });

    it('response code should be 200', () => expect(response.status).to.eql(200));
    it('response body should eql the created user id', () => expect(responseBody).to.eql(expectedBody));
  });
});
