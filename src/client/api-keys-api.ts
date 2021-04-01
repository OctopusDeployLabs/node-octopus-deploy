/* tslint:disable */
/* eslint-disable */
// Octopus REST API v2021.2.1290

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
// @ts-ignore
import { ApiKeyCreatedResource } from "../model";
// @ts-ignore
import { ApiKeyResource } from "../model";
// @ts-ignore
import { ApiKeyResourceCollection } from "../model";
/**
 * ApiKeysApi - axios parameter creator
 * @export
 */
export const ApiKeysApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Generates a new API key for the specified user. The API key returned in the result must be saved by the caller, as it cannot be retrieved subsequently from the Octopus server.
     * @param {string} userId ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createApiKey: async (
      userId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'userId' is not null or undefined
      assertParamExists("createApiKey", "userId", userId);
      const localVarPath = `/users/{userId}/apikeys`.replace(
        `{${"userId"}}`,
        encodeURIComponent(String(userId))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
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
     * Revokes an existing API key.
     * @summary Delete a ApiKeyResource by ID
     * @param {string} id ID of the ApiKeyResource to delete
     * @param {string} userId ID of the User that owns the ApiKey to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteApiKey: async (
      id: string,
      userId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteApiKey", "id", id);
      // verify required parameter 'userId' is not null or undefined
      assertParamExists("deleteApiKey", "userId", userId);
      const localVarPath = `/users/{userId}/apikeys/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
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
     * Gets a API key by ID.
     * @summary Get a ApiKeyResource by ID
     * @param {string} id ID of the ApiKeyResource to load
     * @param {string} userId ID of the User that owns the ApiKey
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiKeyById: async (
      id: string,
      userId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getApiKeyById", "id", id);
      // verify required parameter 'userId' is not null or undefined
      assertParamExists("getApiKeyById", "userId", userId);
      const localVarPath = `/users/{userId}/apikeys/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
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
     * Lists all API keys for a user, returning the most recent results first.
     * @summary Get a list of ApiKeyResources
     * @param {string} userId ID of the user
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexApiKeys: async (
      userId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'userId' is not null or undefined
      assertParamExists("indexApiKeys", "userId", userId);
      const localVarPath = `/users/{userId}/apikeys`.replace(
        `{${"userId"}}`,
        encodeURIComponent(String(userId))
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

      if (skip !== undefined) {
        localVarQueryParameter["skip"] = skip;
      }

      if (take !== undefined) {
        localVarQueryParameter["take"] = take;
      }

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
 * ApiKeysApi - functional programming interface
 * @export
 */
export const ApiKeysApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ApiKeysApiAxiosParamCreator(configuration);
  return {
    /**
     * Generates a new API key for the specified user. The API key returned in the result must be saved by the caller, as it cannot be retrieved subsequently from the Octopus server.
     * @param {string} userId ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createApiKey(
      userId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ApiKeyCreatedResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createApiKey(
        userId,
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
     * Revokes an existing API key.
     * @summary Delete a ApiKeyResource by ID
     * @param {string} id ID of the ApiKeyResource to delete
     * @param {string} userId ID of the User that owns the ApiKey to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteApiKey(
      id: string,
      userId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteApiKey(
        id,
        userId,
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
     * Gets a API key by ID.
     * @summary Get a ApiKeyResource by ID
     * @param {string} id ID of the ApiKeyResource to load
     * @param {string} userId ID of the User that owns the ApiKey
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getApiKeyById(
      id: string,
      userId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiKeyResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getApiKeyById(
        id,
        userId,
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
     * Lists all API keys for a user, returning the most recent results first.
     * @summary Get a list of ApiKeyResources
     * @param {string} userId ID of the user
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexApiKeys(
      userId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ApiKeyResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexApiKeys(
        userId,
        skip,
        take,
        options
      );
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
 * ApiKeysApi - factory interface
 * @export
 */
export const ApiKeysApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ApiKeysApiFp(configuration);
  return {
    /**
     * Generates a new API key for the specified user. The API key returned in the result must be saved by the caller, as it cannot be retrieved subsequently from the Octopus server.
     * @param {string} userId ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createApiKey(
      userId: string,
      options?: any
    ): AxiosPromise<ApiKeyCreatedResource> {
      return localVarFp
        .createApiKey(userId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Revokes an existing API key.
     * @summary Delete a ApiKeyResource by ID
     * @param {string} id ID of the ApiKeyResource to delete
     * @param {string} userId ID of the User that owns the ApiKey to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteApiKey(
      id: string,
      userId: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteApiKey(id, userId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a API key by ID.
     * @summary Get a ApiKeyResource by ID
     * @param {string} id ID of the ApiKeyResource to load
     * @param {string} userId ID of the User that owns the ApiKey
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiKeyById(
      id: string,
      userId: string,
      options?: any
    ): AxiosPromise<ApiKeyResource> {
      return localVarFp
        .getApiKeyById(id, userId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all API keys for a user, returning the most recent results first.
     * @summary Get a list of ApiKeyResources
     * @param {string} userId ID of the user
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexApiKeys(
      userId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ApiKeyResourceCollection> {
      return localVarFp
        .indexApiKeys(userId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ApiKeysApi - interface
 * @export
 * @interface ApiKeysApi
 */
export interface ApiKeysApiInterface {
  /**
   * Generates a new API key for the specified user. The API key returned in the result must be saved by the caller, as it cannot be retrieved subsequently from the Octopus server.
   * @param {string} userId ID of the user
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiKeysApiInterface
   */
  createApiKey(
    userId: string,
    options?: any
  ): AxiosPromise<ApiKeyCreatedResource>;

  /**
   * Revokes an existing API key.
   * @summary Delete a ApiKeyResource by ID
   * @param {string} id ID of the ApiKeyResource to delete
   * @param {string} userId ID of the User that owns the ApiKey to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiKeysApiInterface
   */
  deleteApiKey(id: string, userId: string, options?: any): AxiosPromise<void>;

  /**
   * Gets a API key by ID.
   * @summary Get a ApiKeyResource by ID
   * @param {string} id ID of the ApiKeyResource to load
   * @param {string} userId ID of the User that owns the ApiKey
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiKeysApiInterface
   */
  getApiKeyById(
    id: string,
    userId: string,
    options?: any
  ): AxiosPromise<ApiKeyResource>;

  /**
   * Lists all API keys for a user, returning the most recent results first.
   * @summary Get a list of ApiKeyResources
   * @param {string} userId ID of the user
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiKeysApiInterface
   */
  indexApiKeys(
    userId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ApiKeyResourceCollection>;
}

/**
 * ApiKeysApi - object-oriented interface
 * @export
 * @class ApiKeysApi
 * @extends {BaseAPI}
 */
export class ApiKeysApi extends BaseAPI implements ApiKeysApiInterface {
  /**
   * Generates a new API key for the specified user. The API key returned in the result must be saved by the caller, as it cannot be retrieved subsequently from the Octopus server.
   * @param {string} userId ID of the user
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiKeysApi
   */
  public createApiKey(userId: string, options?: any) {
    return ApiKeysApiFp(this.configuration)
      .createApiKey(userId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Revokes an existing API key.
   * @summary Delete a ApiKeyResource by ID
   * @param {string} id ID of the ApiKeyResource to delete
   * @param {string} userId ID of the User that owns the ApiKey to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiKeysApi
   */
  public deleteApiKey(id: string, userId: string, options?: any) {
    return ApiKeysApiFp(this.configuration)
      .deleteApiKey(id, userId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a API key by ID.
   * @summary Get a ApiKeyResource by ID
   * @param {string} id ID of the ApiKeyResource to load
   * @param {string} userId ID of the User that owns the ApiKey
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiKeysApi
   */
  public getApiKeyById(id: string, userId: string, options?: any) {
    return ApiKeysApiFp(this.configuration)
      .getApiKeyById(id, userId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all API keys for a user, returning the most recent results first.
   * @summary Get a list of ApiKeyResources
   * @param {string} userId ID of the user
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiKeysApi
   */
  public indexApiKeys(
    userId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ApiKeysApiFp(this.configuration)
      .indexApiKeys(userId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
