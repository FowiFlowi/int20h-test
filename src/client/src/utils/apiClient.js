import axios from 'axios';
import { noop } from '../utils/noop';

class ApiClient {
  constructor({url}) {
    this.api = axios.create({
      baseURL: url,
    });
  }

  requestOptionsValidator(ops) {
    if (!ops.path) {
      throw new Error('Path option is not defined!');
    }
  }

  async handleRequest(requestCallback = noop, fallbackResponse = undefined) {
    try {
      const result = await requestCallback();
      return [result, undefined];
    } catch (error) {
      return [fallbackResponse, error];
    }
  }

  async get(ops = {}) {
    this.requestOptionsValidator(ops);
    return this.handleRequest(async () => {
      const result = await this.api.get(ops.path, { params: ops.queryParams });
      return result.data;
    }, ops.fallbackResponse);
  }
}

const defaultApiURL = 'http://localhost:3000/api'; // move to env variable
export default new ApiClient({url: defaultApiURL});