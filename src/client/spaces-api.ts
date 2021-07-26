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
import { SpaceResource } from "../model";
// @ts-ignore
import { SpaceResourceCollection } from "../model";
// @ts-ignore
import { SpaceSearchResult } from "../model";
/**
 * SpacesApi - axios parameter creator
 * @export
 */
export const SpacesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new Space.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSpace: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/spaces`;
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
     * Updates the logo associated with the space.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSpaceLogo: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createSpaceLogo", "id", id);
      const localVarPath = `/spaces/{id}/logo`.replace(
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
     * Deletes an existing space.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSpace: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteSpace", "id", id);
      const localVarPath = `/spaces/{id}`.replace(
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
     *
     * @summary Get a Space by ID
     * @param {string} id ID of the Space to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSpaceById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getSpaceById", "id", id);
      const localVarPath = `/spaces/{id}`.replace(
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
     * Gets the logo associated with the space.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSpaceLogo: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getSpaceLogo", "id", id);
      const localVarPath = `/spaces/{id}/logo`.replace(
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
     * Lists all of the spaces in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of SpaceResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexSpaces: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/spaces`;
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
     * Lists all of the spaces in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of SpaceResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllSpaces: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/spaces/all`;
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
     * @summary Searches in the supplied Octopus Deploy Space using the given keyword.
     * @param {string} id ID of the Space to search
     * @param {string} keyword A keyword to search. Example: ABC
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSpace: async (
      id: string,
      keyword: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("searchSpace", "id", id);
      // verify required parameter 'keyword' is not null or undefined
      assertParamExists("searchSpace", "keyword", keyword);
      const localVarPath = `/spaces/{id}/search`.replace(
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

      if (keyword !== undefined) {
        localVarQueryParameter["keyword"] = keyword;
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
     *
     * @summary Searches in the supplied Octopus Deploy Space using the given keyword.
     * @param {string} id ID of the Space to search
     * @param {string} keyword A keyword to search. Example: ABC
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSpaceSpaces: async (
      id: string,
      keyword: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("searchSpaceSpaces", "id", id);
      // verify required parameter 'keyword' is not null or undefined
      assertParamExists("searchSpaceSpaces", "keyword", keyword);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("searchSpaceSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/spaces/{id}/search`
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

      if (keyword !== undefined) {
        localVarQueryParameter["keyword"] = keyword;
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
     * Modifies an existing space.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateModifySpace: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateModifySpace", "id", id);
      const localVarPath = `/spaces/{id}`.replace(
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
     * Updates the logo associated with the space.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSpaceLogo: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateSpaceLogo", "id", id);
      const localVarPath = `/spaces/{id}/logo`.replace(
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
 * SpacesApi - functional programming interface
 * @export
 */
export const SpacesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = SpacesApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a new Space.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSpace(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SpaceResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createSpace(
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
     * Updates the logo associated with the space.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSpaceLogo(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createSpaceLogo(
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
     * Deletes an existing space.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteSpace(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSpace(
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
     * @summary Get a Space by ID
     * @param {string} id ID of the Space to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSpaceById(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SpaceResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSpaceById(
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
     * Gets the logo associated with the space.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSpaceLogo(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSpaceLogo(
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
     * Lists all of the spaces in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of SpaceResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexSpaces(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<SpaceResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexSpaces(
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
     * Lists all of the spaces in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of SpaceResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllSpaces(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<SpaceResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllSpaces(
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
     * @summary Searches in the supplied Octopus Deploy Space using the given keyword.
     * @param {string} id ID of the Space to search
     * @param {string} keyword A keyword to search. Example: ABC
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchSpace(
      id: string,
      keyword: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<SpaceSearchResult>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.searchSpace(
        id,
        keyword,
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
     * @summary Searches in the supplied Octopus Deploy Space using the given keyword.
     * @param {string} id ID of the Space to search
     * @param {string} keyword A keyword to search. Example: ABC
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchSpaceSpaces(
      id: string,
      keyword: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<SpaceSearchResult>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.searchSpaceSpaces(
          id,
          keyword,
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
     * Modifies an existing space.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateModifySpace(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SpaceResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateModifySpace(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Updates the logo associated with the space.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSpaceLogo(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateSpaceLogo(
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
  };
};

/**
 * SpacesApi - factory interface
 * @export
 */
export const SpacesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = SpacesApiFp(configuration);
  return {
    /**
     * Creates a new Space.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSpace(options?: any): AxiosPromise<SpaceResource> {
      return localVarFp
        .createSpace(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates the logo associated with the space.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSpaceLogo(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .createSpaceLogo(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing space.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSpace(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteSpace(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Space by ID
     * @param {string} id ID of the Space to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSpaceById(id: string, options?: any): AxiosPromise<SpaceResource> {
      return localVarFp
        .getSpaceById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets the logo associated with the space.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSpaceLogo(id: string, options?: any): AxiosPromise<any> {
      return localVarFp
        .getSpaceLogo(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the spaces in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of SpaceResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexSpaces(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<SpaceResourceCollection> {
      return localVarFp
        .indexSpaces(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the spaces in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of SpaceResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllSpaces(options?: any): AxiosPromise<Array<SpaceResource>> {
      return localVarFp
        .listAllSpaces(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Searches in the supplied Octopus Deploy Space using the given keyword.
     * @param {string} id ID of the Space to search
     * @param {string} keyword A keyword to search. Example: ABC
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSpace(
      id: string,
      keyword: string,
      options?: any
    ): AxiosPromise<Array<SpaceSearchResult>> {
      return localVarFp
        .searchSpace(id, keyword, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Searches in the supplied Octopus Deploy Space using the given keyword.
     * @param {string} id ID of the Space to search
     * @param {string} keyword A keyword to search. Example: ABC
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSpaceSpaces(
      id: string,
      keyword: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<SpaceSearchResult>> {
      return localVarFp
        .searchSpaceSpaces(id, keyword, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing space.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateModifySpace(id: string, options?: any): AxiosPromise<SpaceResource> {
      return localVarFp
        .updateModifySpace(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates the logo associated with the space.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSpaceLogo(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .updateSpaceLogo(id, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * SpacesApi - object-oriented interface
 * @export
 * @class SpacesApi
 * @extends {BaseAPI}
 */
export class SpacesApi extends BaseAPI {
  /**
   * Creates a new Space.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpacesApi
   */
  public createSpace(options?: any) {
    return SpacesApiFp(this.configuration)
      .createSpace(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates the logo associated with the space.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpacesApi
   */
  public createSpaceLogo(id: string, options?: any) {
    return SpacesApiFp(this.configuration)
      .createSpaceLogo(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing space.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpacesApi
   */
  public deleteSpace(id: string, options?: any) {
    return SpacesApiFp(this.configuration)
      .deleteSpace(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Space by ID
   * @param {string} id ID of the Space to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpacesApi
   */
  public getSpaceById(id: string, options?: any) {
    return SpacesApiFp(this.configuration)
      .getSpaceById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets the logo associated with the space.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpacesApi
   */
  public getSpaceLogo(id: string, options?: any) {
    return SpacesApiFp(this.configuration)
      .getSpaceLogo(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the spaces in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of SpaceResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpacesApi
   */
  public indexSpaces(skip?: number, take?: number, options?: any) {
    return SpacesApiFp(this.configuration)
      .indexSpaces(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the spaces in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of SpaceResources
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpacesApi
   */
  public listAllSpaces(options?: any) {
    return SpacesApiFp(this.configuration)
      .listAllSpaces(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Searches in the supplied Octopus Deploy Space using the given keyword.
   * @param {string} id ID of the Space to search
   * @param {string} keyword A keyword to search. Example: ABC
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpacesApi
   */
  public searchSpace(id: string, keyword: string, options?: any) {
    return SpacesApiFp(this.configuration)
      .searchSpace(id, keyword, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Searches in the supplied Octopus Deploy Space using the given keyword.
   * @param {string} id ID of the Space to search
   * @param {string} keyword A keyword to search. Example: ABC
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpacesApi
   */
  public searchSpaceSpaces(
    id: string,
    keyword: string,
    baseSpaceId: string,
    options?: any
  ) {
    return SpacesApiFp(this.configuration)
      .searchSpaceSpaces(id, keyword, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing space.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpacesApi
   */
  public updateModifySpace(id: string, options?: any) {
    return SpacesApiFp(this.configuration)
      .updateModifySpace(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates the logo associated with the space.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpacesApi
   */
  public updateSpaceLogo(id: string, options?: any) {
    return SpacesApiFp(this.configuration)
      .updateSpaceLogo(id, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
