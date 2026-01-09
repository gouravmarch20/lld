import { HttpRequest } from "../models/HttpRequest.js";
import { validateHttpRequestFields } from "../validators/HttpRequestValidators.js";

export class HttpRequestBuilder {
  constructor() {
    this._data = {
      method: null,
      url: null,
      headers: {},
      body: null,
      timeout: 5000, // ms
      retries: 0,
    };
  }

  static builder() {
    return new HttpRequestBuilder();
  }

  // ---- Fluent setters ----
  method(method) {
    this._data.method = method.toUpperCase();
    return this;
  }

  url(url) {
    this._data.url = url;
    return this;
  }

  header(name, value) {
    this._data.headers[name] = value;
    return this;
  }

  headers(headersObj) {
    this._data.headers = { ...this._data.headers, ...headersObj };
    return this;
  }

  body(content) {
    this._data.body = content;
    return this;
  }

  timeout(ms) {
    this._data.timeout = ms;
    return this;
  }

  retries(count) {
    this._data.retries = count;
    return this;
  }

  // ---- Convenience methods ----
  get(url) {
    this._data.method = "GET";
    this._data.url = url;
    return this;
  }

  post(url, body) {
    this._data.method = "POST";
    this._data.url = url;
    this._data.body = body;
    return this;
  }

  put(url, body) {
    this._data.method = "PUT";
    this._data.url = url;
    this._data.body = body;
    return this;
  }

  patch(url, body) {
    this._data.method = "PATCH";
    this._data.url = url;
    this._data.body = body;
    return this;
  }

  delete(url) {
    this._data.method = "DELETE";
    this._data.url = url;
    return this;
  }

  // ---- Build ----
  build() {
    const errors = validateHttpRequestFields(this._data);
    if (errors.length) {
      const message = `HttpRequestBuilder failed:\n - ${errors.join("\n - ")}`;
      throw new Error(message);
    }

    // Return immutable HttpRequest
    return new HttpRequest(this._data);
  }
}
