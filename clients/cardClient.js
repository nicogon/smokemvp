const AbstractClient = require('./abstractClient');

class CardClient extends AbstractClient {
  createNewCard({ username, name, lastName }) {
    return this.post({ url: 'cards', body: { username, name, lastName } });
  }

  getCards() {
    return this.get({ url: 'cards' });
  }

  getCard({ cardId }) {
    const url = `cards/${cardId}`;
    return this.get({ url });
  }
}

module.exports = CardClient;
