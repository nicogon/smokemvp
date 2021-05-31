const fetch = require('node-fetch');

class AbstractClient {
  constructor({ apiHost, authToken }) {
    this.apiHost = apiHost;
    this.authToken = authToken;
  }

  get({ url, headers }) {
    /*
        console.log('about to get', `${this.apiHost}/${url}`,
        { url, headers: { authorization: this.authToken, ...headers }
     });
    */
    return fetch(`${this.apiHost}/${url}`, { headers: { authorization: this.authToken, ...headers } });
  }

  post({ url, body, headers }) {
    /*
        console.log('about to post', `${this.apiHost}/${url}`,
         { body, url, headers: { authorization: this.authToken, ...headers }
         });
    */
    return fetch(`${this.apiHost}/${url}`,
      { method: 'POST', body, headers: { authorization: this.authToken, ...headers } });
  }
}

module.exports = AbstractClient;
