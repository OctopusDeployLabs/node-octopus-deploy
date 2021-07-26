/* tslint:disable */
/* eslint-disable */
// Octopus REST API v2021.2.1387

import globalAxios, { AxiosPromise, AxiosInstance } from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
/**
 * LetsEncryptApi - axios parameter creator
 * @export
 */
export const LetsEncryptApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Returns the current Let\'s Encrypt configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLetsEncryptConfiguration: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/letsencryptconfiguration`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-Octopus-ApiKey",
        configuration
      );

      // authentication APIKeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration);

      // authentication NugetApiKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-NuGet-ApiKey",
        configuration
      );

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Returns the computed HTTP challenge for a given token
     * @param {string} token LetsEncrypt response token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLetsEncryptHttpChallenge: async (
      token: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'token' is not null or undefined
      assertParamExists("getLetsEncryptHttpChallenge", "token", token);
      const localVarPath = `/.well-known/acme-challenge//{token}`.replace(
        `{${"token"}}`,
        encodeURIComponent(String(token))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-Octopus-ApiKey",
        configuration
      );

      // authentication APIKeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration);

      // authentication NugetApiKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-NuGet-ApiKey",
        configuration
      );

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Updates the Let\'s Encrypt configuration used by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLetsEncryptConfiguration: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/letsencryptconfiguration`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-Octopus-ApiKey",
        configuration
      );

      // authentication APIKeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration);

      // authentication NugetApiKeyHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-NuGet-ApiKey",
        configuration
      );

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * LetsEncryptApi - functional programming interface
 * @export
 */
export const LetsEncryptApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    LetsEncryptApiAxiosParamCreator(configuration);
  return {
    /**
     * Returns the current Let\'s Encrypt configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLetsEncryptConfiguration(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getLetsEncryptConfiguration(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Returns the computed HTTP challenge for a given token
     * @param {string} token LetsEncrypt response token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLetsEncryptHttpChallenge(
      token: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getLetsEncryptHttpChallenge(
          token,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Updates the Let\'s Encrypt configuration used by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateLetsEncryptConfiguration(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateLetsEncryptConfiguration(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * LetsEncryptApi - factory interface
 * @export
 */
export const LetsEncryptApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = LetsEncryptApiFp(configuration);
  return {
    /**
     * Returns the current Let\'s Encrypt configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLetsEncryptConfiguration(options?: any): AxiosPromise<void> {
      return localVarFp
        .getLetsEncryptConfiguration(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns the computed HTTP challenge for a given token
     * @param {string} token LetsEncrypt response token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLetsEncryptHttpChallenge(
      token: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .getLetsEncryptHttpChallenge(token, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates the Let\'s Encrypt configuration used by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLetsEncryptConfiguration(options?: any): AxiosPromise<void> {
      return localVarFp
        .updateLetsEncryptConfiguration(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * LetsEncryptApi - object-oriented interface
 * @export
 * @class LetsEncryptApi
 * @extends {BaseAPI}
 */
export class LetsEncryptApi extends BaseAPI {
  /**
   * Returns the current Let\'s Encrypt configuration
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LetsEncryptApi
   */
  public getLetsEncryptConfiguration(options?: any) {
    return LetsEncryptApiFp(this.configuration)
      .getLetsEncryptConfiguration(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns the computed HTTP challenge for a given token
   * @param {string} token LetsEncrypt response token
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LetsEncryptApi
   */
  public getLetsEncryptHttpChallenge(token: string, options?: any) {
    return LetsEncryptApiFp(this.configuration)
      .getLetsEncryptHttpChallenge(token, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates the Let\'s Encrypt configuration used by the Octopus Server.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LetsEncryptApi
   */
  public updateLetsEncryptConfiguration(options?: any) {
    return LetsEncryptApiFp(this.configuration)
      .updateLetsEncryptConfiguration(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
