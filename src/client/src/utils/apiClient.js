import {noop} from '../utils/noop';

class Api {
  constructor({url}) {
    this.url = url
  }

  async handleRequest(requestCallback = noop) {
    try {
      const result = await requestCallback();
      return [result, undefined];
    } catch (e) {
      return [undefined, e];
    }
  }

  async get(ops = {}) {
    const response = await this.handleRequest(async () => {
      const result = await fetch(this.url);
      const resultJSON = await result.json();
      return resultJSON;
    });
    return response;
  }
}

export default new Api({url: 'https://jsonplaceholder.typicode.com/todos/1'});