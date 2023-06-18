/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
// @ts-nocheck
import Swagger from 'swagger-client';

const { REACT_APP_URL_SPEC, REACT_APP_API_BASE_URL } = process.env;

type SDKType = {
  _api: any;
  _fetch: typeof window.fetch;
  _token: string | boolean | undefined;
  _error: string | undefined | unknown;
  setToken: (argument: string | undefined) => void;
  getApi: () => any;
  init: () => void;
  _requestInteceptor: (request: any) => void;
  _responseInterceptor: (response: any) => void;
  _buildError: (argument: any) => any;
};

const SDK: SDKType = {
  _api: undefined,
  _fetch: window.fetch,
  _token: false,
  _error: undefined,
  setToken: (token: string | undefined) => {
    SDK._token = token;
  },
  getApi: () => {
    if (SDK._api) return SDK._api;
    throw new Error('SDK is not initialized.');
  },
  init: async () => {
    if (!SDK._api) {
      try {
        Swagger.prototype.execute = (...rest: any[]) =>
          Swagger.execute.apply(this, rest).catch((error: Error) => {
            throw SDK._buildError(error);
          });
        const client = await new Swagger({
          url: REACT_APP_URL_SPEC,
          usePromise: true,
          requestInterceptor: SDK._requestInteceptor,
          responseInterceptor: SDK._responseInterceptor,
          userFetch: SDK._fetch,
          skipNormalization: true,
        });
        client.spec.servers[0] = { url: REACT_APP_API_BASE_URL };
        SDK._error = undefined;
        SDK._api = client.apis;
      } catch (error) {
        SDK._error = error;
      }
    }
  },
  _requestInteceptor: (request) => {
    if (SDK._token) {
      request.headers.Authorization = `Bearer ${SDK._token}`;
    } else {
      delete request.headers.Authorization;
    }
  },
  _responseInterceptor: (response) => {},
  _buildError: (error) => {
    if (!error || !error.response) {
      const message = ['Service not available. Please try again.'];
      Object.assign(error, { errorMessages: message });
    } else if (
      error.response.status === 408 ||
      error.response.status === 'ECONNABORTED'
    ) {
      const message = ['The service timed out. Please try again.'];
      Object.assign(error, { errorMessages: message });
    } else if (
      error.response.body &&
      !error.response.ok &&
      error.response.status !== 401
    ) {
      Object.assign(error, {
        errorMessages: error.response.body.errors || [],
      });
    } else {
      Object.assign(error, { errorMessages: [] });
    }
    return error;
  },
};

export default SDK;
export { SDK };
