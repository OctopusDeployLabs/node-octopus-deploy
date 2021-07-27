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
// @ts-ignore
import { ProxyResource } from "../model";
// @ts-ignore
import { ProxyResourceCollection } from "../model";
/**
 * ProxiesApi - axios parameter creator
 * @export
 */
export const ProxiesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a proxy.
     * @summary Create a ProxyResource
     * @param {ProxyResource} [body] The ProxyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProxy: async (
      body?: ProxyResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/proxies`;
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

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Creates a proxy.
     * @summary Create a ProxyResource
     * @param {string} baseSpaceId ID of the space
     * @param {ProxyResource} [body] The ProxyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProxySpaces: async (
      baseSpaceId: string,
      body?: ProxyResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createProxySpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/proxies`.replace(
        `{${"baseSpaceId"}}`,
        encodeURIComponent(String(baseSpaceId))
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

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Deletes an existing proxy.
     * @summary Delete a ProxyResource by ID
     * @param {string} id ID of the ProxyResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProxy: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteProxy", "id", id);
      const localVarPath = `/proxies/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
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
     * Deletes an existing proxy.
     * @summary Delete a ProxyResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProxyResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProxySpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("deleteProxySpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteProxySpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/proxies/{id}`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
     *
     * @summary Get a Proxy by ID
     * @param {string} id ID of the Proxy to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProxyById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getProxyById", "id", id);
      const localVarPath = `/proxies/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
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
     *
     * @summary Get a Proxy by ID
     * @param {string} id ID of the Proxy to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProxyByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getProxyByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getProxyByIdSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/proxies/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)));
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
     * Lists all of the proxies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of ProxyResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProxies: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/proxies`;
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
    /**
     * Lists all of the proxies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of ProxyResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProxiesSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("indexProxiesSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/proxies`.replace(
        `{${"baseSpaceId"}}`,
        encodeURIComponent(String(baseSpaceId))
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
    /**
     * Lists the name and ID of all of the Proxies in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of Proxies
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllProxies: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/proxies/all`;
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
     * Lists the name and ID of all of the Proxies in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of Proxies
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllProxiesSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("listAllProxiesSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/proxies/all`.replace(
        `{${"baseSpaceId"}}`,
        encodeURIComponent(String(baseSpaceId))
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
     * Modifies an existing proxy.
     * @summary Modify a ProxyResource by ID
     * @param {string} id ID of the ProxyResource to modify
     * @param {ProxyResource} [body] The ProxyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProxy: async (
      id: string,
      body?: ProxyResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateProxy", "id", id);
      const localVarPath = `/proxies/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
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

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Modifies an existing proxy.
     * @summary Modify a ProxyResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProxyResource to modify
     * @param {ProxyResource} [body] The ProxyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProxySpaces: async (
      baseSpaceId: string,
      id: string,
      body?: ProxyResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("updateProxySpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateProxySpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/proxies/{id}`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * ProxiesApi - functional programming interface
 * @export
 */
export const ProxiesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ProxiesApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a proxy.
     * @summary Create a ProxyResource
     * @param {ProxyResource} [body] The ProxyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createProxy(
      body?: ProxyResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProxyResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createProxy(
        body,
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
     * Creates a proxy.
     * @summary Create a ProxyResource
     * @param {string} baseSpaceId ID of the space
     * @param {ProxyResource} [body] The ProxyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createProxySpaces(
      baseSpaceId: string,
      body?: ProxyResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProxyResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createProxySpaces(
          baseSpaceId,
          body,
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
     * Deletes an existing proxy.
     * @summary Delete a ProxyResource by ID
     * @param {string} id ID of the ProxyResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteProxy(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProxy(
        id,
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
     * Deletes an existing proxy.
     * @summary Delete a ProxyResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProxyResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteProxySpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteProxySpaces(
          baseSpaceId,
          id,
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
     *
     * @summary Get a Proxy by ID
     * @param {string} id ID of the Proxy to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getProxyById(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProxyResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getProxyById(
        id,
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
     *
     * @summary Get a Proxy by ID
     * @param {string} id ID of the Proxy to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getProxyByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProxyResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getProxyByIdSpaces(
          id,
          baseSpaceId,
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
     * Lists all of the proxies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of ProxyResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProxies(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProxyResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexProxies(
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
    /**
     * Lists all of the proxies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of ProxyResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProxiesSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProxyResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexProxiesSpaces(
          baseSpaceId,
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
    /**
     * Lists the name and ID of all of the Proxies in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of Proxies
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllProxies(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<ProxyResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllProxies(
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
     * Lists the name and ID of all of the Proxies in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of Proxies
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllProxiesSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<ProxyResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listAllProxiesSpaces(
          baseSpaceId,
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
     * Modifies an existing proxy.
     * @summary Modify a ProxyResource by ID
     * @param {string} id ID of the ProxyResource to modify
     * @param {ProxyResource} [body] The ProxyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateProxy(
      id: string,
      body?: ProxyResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProxyResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateProxy(
        id,
        body,
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
     * Modifies an existing proxy.
     * @summary Modify a ProxyResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProxyResource to modify
     * @param {ProxyResource} [body] The ProxyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateProxySpaces(
      baseSpaceId: string,
      id: string,
      body?: ProxyResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProxyResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateProxySpaces(
          baseSpaceId,
          id,
          body,
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
 * ProxiesApi - factory interface
 * @export
 */
export const ProxiesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ProxiesApiFp(configuration);
  return {
    /**
     * Creates a proxy.
     * @summary Create a ProxyResource
     * @param {ProxyResource} [body] The ProxyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProxy(
      body?: ProxyResource,
      options?: any
    ): AxiosPromise<ProxyResource> {
      return localVarFp
        .createProxy(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a proxy.
     * @summary Create a ProxyResource
     * @param {string} baseSpaceId ID of the space
     * @param {ProxyResource} [body] The ProxyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProxySpaces(
      baseSpaceId: string,
      body?: ProxyResource,
      options?: any
    ): AxiosPromise<ProxyResource> {
      return localVarFp
        .createProxySpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing proxy.
     * @summary Delete a ProxyResource by ID
     * @param {string} id ID of the ProxyResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProxy(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteProxy(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing proxy.
     * @summary Delete a ProxyResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProxyResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProxySpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteProxySpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Proxy by ID
     * @param {string} id ID of the Proxy to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProxyById(id: string, options?: any): AxiosPromise<ProxyResource> {
      return localVarFp
        .getProxyById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Proxy by ID
     * @param {string} id ID of the Proxy to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProxyByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<ProxyResource> {
      return localVarFp
        .getProxyByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the proxies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of ProxyResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProxies(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ProxyResourceCollection> {
      return localVarFp
        .indexProxies(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the proxies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of ProxyResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProxiesSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ProxyResourceCollection> {
      return localVarFp
        .indexProxiesSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the name and ID of all of the Proxies in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of Proxies
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllProxies(options?: any): AxiosPromise<Array<ProxyResource>> {
      return localVarFp
        .listAllProxies(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the name and ID of all of the Proxies in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @summary Get a list of Proxies
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllProxiesSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<ProxyResource>> {
      return localVarFp
        .listAllProxiesSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing proxy.
     * @summary Modify a ProxyResource by ID
     * @param {string} id ID of the ProxyResource to modify
     * @param {ProxyResource} [body] The ProxyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProxy(
      id: string,
      body?: ProxyResource,
      options?: any
    ): AxiosPromise<ProxyResource> {
      return localVarFp
        .updateProxy(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing proxy.
     * @summary Modify a ProxyResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProxyResource to modify
     * @param {ProxyResource} [body] The ProxyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProxySpaces(
      baseSpaceId: string,
      id: string,
      body?: ProxyResource,
      options?: any
    ): AxiosPromise<ProxyResource> {
      return localVarFp
        .updateProxySpaces(baseSpaceId, id, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ProxiesApi - interface
 * @export
 * @interface ProxiesApi
 */
export interface ProxiesApiInterface {
  /**
   * Creates a proxy.
   * @summary Create a ProxyResource
   * @param {ProxyResource} [body] The ProxyResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApiInterface
   */
  createProxy(body?: ProxyResource, options?: any): AxiosPromise<ProxyResource>;

  /**
   * Creates a proxy.
   * @summary Create a ProxyResource
   * @param {string} baseSpaceId ID of the space
   * @param {ProxyResource} [body] The ProxyResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApiInterface
   */
  createProxySpaces(
    baseSpaceId: string,
    body?: ProxyResource,
    options?: any
  ): AxiosPromise<ProxyResource>;

  /**
   * Deletes an existing proxy.
   * @summary Delete a ProxyResource by ID
   * @param {string} id ID of the ProxyResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApiInterface
   */
  deleteProxy(id: string, options?: any): AxiosPromise<void>;

  /**
   * Deletes an existing proxy.
   * @summary Delete a ProxyResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ProxyResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApiInterface
   */
  deleteProxySpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   *
   * @summary Get a Proxy by ID
   * @param {string} id ID of the Proxy to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApiInterface
   */
  getProxyById(id: string, options?: any): AxiosPromise<ProxyResource>;

  /**
   *
   * @summary Get a Proxy by ID
   * @param {string} id ID of the Proxy to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApiInterface
   */
  getProxyByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<ProxyResource>;

  /**
   * Lists all of the proxies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of ProxyResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApiInterface
   */
  indexProxies(
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ProxyResourceCollection>;

  /**
   * Lists all of the proxies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of ProxyResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApiInterface
   */
  indexProxiesSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ProxyResourceCollection>;

  /**
   * Lists the name and ID of all of the Proxies in the supplied Octopus Deploy Space. The results will be sorted by name.
   * @summary Get a list of Proxies
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApiInterface
   */
  listAllProxies(options?: any): AxiosPromise<Array<ProxyResource>>;

  /**
   * Lists the name and ID of all of the Proxies in the supplied Octopus Deploy Space. The results will be sorted by name.
   * @summary Get a list of Proxies
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApiInterface
   */
  listAllProxiesSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<ProxyResource>>;

  /**
   * Modifies an existing proxy.
   * @summary Modify a ProxyResource by ID
   * @param {string} id ID of the ProxyResource to modify
   * @param {ProxyResource} [body] The ProxyResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApiInterface
   */
  updateProxy(
    id: string,
    body?: ProxyResource,
    options?: any
  ): AxiosPromise<ProxyResource>;

  /**
   * Modifies an existing proxy.
   * @summary Modify a ProxyResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ProxyResource to modify
   * @param {ProxyResource} [body] The ProxyResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApiInterface
   */
  updateProxySpaces(
    baseSpaceId: string,
    id: string,
    body?: ProxyResource,
    options?: any
  ): AxiosPromise<ProxyResource>;
}

/**
 * ProxiesApi - object-oriented interface
 * @export
 * @class ProxiesApi
 * @extends {BaseAPI}
 */
export class ProxiesApi extends BaseAPI implements ProxiesApiInterface {
  /**
   * Creates a proxy.
   * @summary Create a ProxyResource
   * @param {ProxyResource} [body] The ProxyResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApi
   */
  public createProxy(body?: ProxyResource, options?: any) {
    return ProxiesApiFp(this.configuration)
      .createProxy(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a proxy.
   * @summary Create a ProxyResource
   * @param {string} baseSpaceId ID of the space
   * @param {ProxyResource} [body] The ProxyResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApi
   */
  public createProxySpaces(
    baseSpaceId: string,
    body?: ProxyResource,
    options?: any
  ) {
    return ProxiesApiFp(this.configuration)
      .createProxySpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing proxy.
   * @summary Delete a ProxyResource by ID
   * @param {string} id ID of the ProxyResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApi
   */
  public deleteProxy(id: string, options?: any) {
    return ProxiesApiFp(this.configuration)
      .deleteProxy(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing proxy.
   * @summary Delete a ProxyResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ProxyResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApi
   */
  public deleteProxySpaces(baseSpaceId: string, id: string, options?: any) {
    return ProxiesApiFp(this.configuration)
      .deleteProxySpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Proxy by ID
   * @param {string} id ID of the Proxy to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApi
   */
  public getProxyById(id: string, options?: any) {
    return ProxiesApiFp(this.configuration)
      .getProxyById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Proxy by ID
   * @param {string} id ID of the Proxy to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApi
   */
  public getProxyByIdSpaces(id: string, baseSpaceId: string, options?: any) {
    return ProxiesApiFp(this.configuration)
      .getProxyByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the proxies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of ProxyResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApi
   */
  public indexProxies(skip?: number, take?: number, options?: any) {
    return ProxiesApiFp(this.configuration)
      .indexProxies(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the proxies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of ProxyResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApi
   */
  public indexProxiesSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ProxiesApiFp(this.configuration)
      .indexProxiesSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the name and ID of all of the Proxies in the supplied Octopus Deploy Space. The results will be sorted by name.
   * @summary Get a list of Proxies
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApi
   */
  public listAllProxies(options?: any) {
    return ProxiesApiFp(this.configuration)
      .listAllProxies(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the name and ID of all of the Proxies in the supplied Octopus Deploy Space. The results will be sorted by name.
   * @summary Get a list of Proxies
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApi
   */
  public listAllProxiesSpaces(baseSpaceId: string, options?: any) {
    return ProxiesApiFp(this.configuration)
      .listAllProxiesSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing proxy.
   * @summary Modify a ProxyResource by ID
   * @param {string} id ID of the ProxyResource to modify
   * @param {ProxyResource} [body] The ProxyResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApi
   */
  public updateProxy(id: string, body?: ProxyResource, options?: any) {
    return ProxiesApiFp(this.configuration)
      .updateProxy(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing proxy.
   * @summary Modify a ProxyResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ProxyResource to modify
   * @param {ProxyResource} [body] The ProxyResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProxiesApi
   */
  public updateProxySpaces(
    baseSpaceId: string,
    id: string,
    body?: ProxyResource,
    options?: any
  ) {
    return ProxiesApiFp(this.configuration)
      .updateProxySpaces(baseSpaceId, id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
