export class HttpRequest {
  constructor({ method, url, headers, body, timeout, retries }) {
    Object.defineProperties(this, {
      method: { value: method, enumerable: true },
      url: { value: url, enumerable: true },
      headers: { value: Object.freeze({ ...headers }), enumerable: true },
      body: { value: body, enumerable: true },
      timeout: { value: timeout, enumerable: true },
      retries: { value: retries, enumerable: true },
    });

    Object.freeze(this);
  }

  toString() {
    return `${this.method} ${this.url}`;
  }
}
