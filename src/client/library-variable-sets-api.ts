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
import { LibraryVariableSetResource } from "../model";
// @ts-ignore
import { LibraryVariableSetResourceCollection } from "../model";
// @ts-ignore
import { LibraryVariableSetUsageResource } from "../model";
/**
 * LibraryVariableSetsApi - axios parameter creator
 * @export
 */
export const LibraryVariableSetsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new library variable set.
     * @summary Create a LibraryVariableSetResource
     * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLibraryVariableSet: async (
      body?: LibraryVariableSetResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/libraryvariablesets`;
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
     * Creates a new library variable set.
     * @summary Create a LibraryVariableSetResource
     * @param {string} baseSpaceId ID of the space
     * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLibraryVariableSetSpaces: async (
      baseSpaceId: string,
      body?: LibraryVariableSetResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createLibraryVariableSetSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/libraryvariablesets`.replace(
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
     * Deletes an existing library variable set.
     * @summary Delete a LibraryVariableSetResource by ID
     * @param {string} id ID of the LibraryVariableSetResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteLibraryVariableSet: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteLibraryVariableSet", "id", id);
      const localVarPath = `/libraryvariablesets/{id}`.replace(
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
     * Deletes an existing library variable set.
     * @summary Delete a LibraryVariableSetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the LibraryVariableSetResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteLibraryVariableSetSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "deleteLibraryVariableSetSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteLibraryVariableSetSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/libraryvariablesets/{id}`
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
     * @summary Get a Library Variable Set by ID
     * @param {string} id ID of the LibraryVariableSet to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLibraryVariableSetById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getLibraryVariableSetById", "id", id);
      const localVarPath = `/libraryvariablesets/{id}`.replace(
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
     * @summary Get a Library Variable Set by ID
     * @param {string} id ID of the LibraryVariableSet to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLibraryVariableSetByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getLibraryVariableSetByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getLibraryVariableSetByIdSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/libraryvariablesets/{id}`
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
     * Lists projects and deployments which are using an library variable set.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLibraryVariableSetUsageList: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getLibraryVariableSetUsageList", "id", id);
      const localVarPath = `/libraryvariablesets/{id}/usages`.replace(
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
     * Lists projects and deployments which are using an library variable set.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLibraryVariableSetUsageListSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getLibraryVariableSetUsageListSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getLibraryVariableSetUsageListSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/libraryvariablesets/{id}/usages`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
     * Lists all of the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LibraryVariableSetResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexLibraryVariableSets: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/libraryvariablesets`;
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
     * Lists all of the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LibraryVariableSetResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexLibraryVariableSetsSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexLibraryVariableSetsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/libraryvariablesets`.replace(
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
     * Lists all the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LibraryVariableSetResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllLibraryVariableSets: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/libraryvariablesets/all`;
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
     * Lists all the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LibraryVariableSetResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllLibraryVariableSetsSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "listAllLibraryVariableSetsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/libraryvariablesets/all`.replace(
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
     * Modifies an existing library variable set.
     * @summary Modify a LibraryVariableSetResource by ID
     * @param {string} id ID of the LibraryVariableSetResource to modify
     * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLibraryVariableSet: async (
      id: string,
      body?: LibraryVariableSetResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateLibraryVariableSet", "id", id);
      const localVarPath = `/libraryvariablesets/{id}`.replace(
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
     * Modifies an existing library variable set.
     * @summary Modify a LibraryVariableSetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the LibraryVariableSetResource to modify
     * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLibraryVariableSetSpaces: async (
      baseSpaceId: string,
      id: string,
      body?: LibraryVariableSetResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "updateLibraryVariableSetSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateLibraryVariableSetSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/libraryvariablesets/{id}`
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
 * LibraryVariableSetsApi - functional programming interface
 * @export
 */
export const LibraryVariableSetsApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator = LibraryVariableSetsApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Creates a new library variable set.
     * @summary Create a LibraryVariableSetResource
     * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createLibraryVariableSet(
      body?: LibraryVariableSetResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LibraryVariableSetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createLibraryVariableSet(
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
     * Creates a new library variable set.
     * @summary Create a LibraryVariableSetResource
     * @param {string} baseSpaceId ID of the space
     * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createLibraryVariableSetSpaces(
      baseSpaceId: string,
      body?: LibraryVariableSetResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LibraryVariableSetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createLibraryVariableSetSpaces(
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
     * Deletes an existing library variable set.
     * @summary Delete a LibraryVariableSetResource by ID
     * @param {string} id ID of the LibraryVariableSetResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteLibraryVariableSet(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteLibraryVariableSet(
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
     * Deletes an existing library variable set.
     * @summary Delete a LibraryVariableSetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the LibraryVariableSetResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteLibraryVariableSetSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteLibraryVariableSetSpaces(
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
     * @summary Get a Library Variable Set by ID
     * @param {string} id ID of the LibraryVariableSet to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLibraryVariableSetById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LibraryVariableSetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getLibraryVariableSetById(
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
     * @summary Get a Library Variable Set by ID
     * @param {string} id ID of the LibraryVariableSet to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLibraryVariableSetByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LibraryVariableSetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getLibraryVariableSetByIdSpaces(
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
     * Lists projects and deployments which are using an library variable set.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLibraryVariableSetUsageList(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LibraryVariableSetUsageResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getLibraryVariableSetUsageList(
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
     * Lists projects and deployments which are using an library variable set.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLibraryVariableSetUsageListSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LibraryVariableSetUsageResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getLibraryVariableSetUsageListSpaces(
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
     * Lists all of the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LibraryVariableSetResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexLibraryVariableSets(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LibraryVariableSetResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexLibraryVariableSets(
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
     * Lists all of the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LibraryVariableSetResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexLibraryVariableSetsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LibraryVariableSetResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexLibraryVariableSetsSpaces(
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
     * Lists all the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LibraryVariableSetResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllLibraryVariableSets(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<LibraryVariableSetResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllLibraryVariableSets(
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
     * Lists all the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LibraryVariableSetResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllLibraryVariableSetsSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<LibraryVariableSetResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllLibraryVariableSetsSpaces(
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
     * Modifies an existing library variable set.
     * @summary Modify a LibraryVariableSetResource by ID
     * @param {string} id ID of the LibraryVariableSetResource to modify
     * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateLibraryVariableSet(
      id: string,
      body?: LibraryVariableSetResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LibraryVariableSetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateLibraryVariableSet(
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
     * Modifies an existing library variable set.
     * @summary Modify a LibraryVariableSetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the LibraryVariableSetResource to modify
     * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateLibraryVariableSetSpaces(
      baseSpaceId: string,
      id: string,
      body?: LibraryVariableSetResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LibraryVariableSetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateLibraryVariableSetSpaces(
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
 * LibraryVariableSetsApi - factory interface
 * @export
 */
export const LibraryVariableSetsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = LibraryVariableSetsApiFp(configuration);
  return {
    /**
     * Creates a new library variable set.
     * @summary Create a LibraryVariableSetResource
     * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLibraryVariableSet(
      body?: LibraryVariableSetResource,
      options?: any
    ): AxiosPromise<LibraryVariableSetResource> {
      return localVarFp
        .createLibraryVariableSet(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new library variable set.
     * @summary Create a LibraryVariableSetResource
     * @param {string} baseSpaceId ID of the space
     * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLibraryVariableSetSpaces(
      baseSpaceId: string,
      body?: LibraryVariableSetResource,
      options?: any
    ): AxiosPromise<LibraryVariableSetResource> {
      return localVarFp
        .createLibraryVariableSetSpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing library variable set.
     * @summary Delete a LibraryVariableSetResource by ID
     * @param {string} id ID of the LibraryVariableSetResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteLibraryVariableSet(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteLibraryVariableSet(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing library variable set.
     * @summary Delete a LibraryVariableSetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the LibraryVariableSetResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteLibraryVariableSetSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteLibraryVariableSetSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Library Variable Set by ID
     * @param {string} id ID of the LibraryVariableSet to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLibraryVariableSetById(
      id: string,
      options?: any
    ): AxiosPromise<LibraryVariableSetResource> {
      return localVarFp
        .getLibraryVariableSetById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Library Variable Set by ID
     * @param {string} id ID of the LibraryVariableSet to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLibraryVariableSetByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<LibraryVariableSetResource> {
      return localVarFp
        .getLibraryVariableSetByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists projects and deployments which are using an library variable set.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLibraryVariableSetUsageList(
      id: string,
      options?: any
    ): AxiosPromise<LibraryVariableSetUsageResource> {
      return localVarFp
        .getLibraryVariableSetUsageList(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists projects and deployments which are using an library variable set.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLibraryVariableSetUsageListSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<LibraryVariableSetUsageResource> {
      return localVarFp
        .getLibraryVariableSetUsageListSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LibraryVariableSetResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexLibraryVariableSets(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<LibraryVariableSetResourceCollection> {
      return localVarFp
        .indexLibraryVariableSets(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LibraryVariableSetResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexLibraryVariableSetsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<LibraryVariableSetResourceCollection> {
      return localVarFp
        .indexLibraryVariableSetsSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LibraryVariableSetResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllLibraryVariableSets(
      options?: any
    ): AxiosPromise<Array<LibraryVariableSetResource>> {
      return localVarFp
        .listAllLibraryVariableSets(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LibraryVariableSetResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllLibraryVariableSetsSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<LibraryVariableSetResource>> {
      return localVarFp
        .listAllLibraryVariableSetsSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing library variable set.
     * @summary Modify a LibraryVariableSetResource by ID
     * @param {string} id ID of the LibraryVariableSetResource to modify
     * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLibraryVariableSet(
      id: string,
      body?: LibraryVariableSetResource,
      options?: any
    ): AxiosPromise<LibraryVariableSetResource> {
      return localVarFp
        .updateLibraryVariableSet(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing library variable set.
     * @summary Modify a LibraryVariableSetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the LibraryVariableSetResource to modify
     * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLibraryVariableSetSpaces(
      baseSpaceId: string,
      id: string,
      body?: LibraryVariableSetResource,
      options?: any
    ): AxiosPromise<LibraryVariableSetResource> {
      return localVarFp
        .updateLibraryVariableSetSpaces(baseSpaceId, id, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * LibraryVariableSetsApi - interface
 * @export
 * @interface LibraryVariableSetsApi
 */
export interface LibraryVariableSetsApiInterface {
  /**
   * Creates a new library variable set.
   * @summary Create a LibraryVariableSetResource
   * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApiInterface
   */
  createLibraryVariableSet(
    body?: LibraryVariableSetResource,
    options?: any
  ): AxiosPromise<LibraryVariableSetResource>;

  /**
   * Creates a new library variable set.
   * @summary Create a LibraryVariableSetResource
   * @param {string} baseSpaceId ID of the space
   * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApiInterface
   */
  createLibraryVariableSetSpaces(
    baseSpaceId: string,
    body?: LibraryVariableSetResource,
    options?: any
  ): AxiosPromise<LibraryVariableSetResource>;

  /**
   * Deletes an existing library variable set.
   * @summary Delete a LibraryVariableSetResource by ID
   * @param {string} id ID of the LibraryVariableSetResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApiInterface
   */
  deleteLibraryVariableSet(id: string, options?: any): AxiosPromise<void>;

  /**
   * Deletes an existing library variable set.
   * @summary Delete a LibraryVariableSetResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the LibraryVariableSetResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApiInterface
   */
  deleteLibraryVariableSetSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   *
   * @summary Get a Library Variable Set by ID
   * @param {string} id ID of the LibraryVariableSet to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApiInterface
   */
  getLibraryVariableSetById(
    id: string,
    options?: any
  ): AxiosPromise<LibraryVariableSetResource>;

  /**
   *
   * @summary Get a Library Variable Set by ID
   * @param {string} id ID of the LibraryVariableSet to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApiInterface
   */
  getLibraryVariableSetByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<LibraryVariableSetResource>;

  /**
   * Lists projects and deployments which are using an library variable set.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApiInterface
   */
  getLibraryVariableSetUsageList(
    id: string,
    options?: any
  ): AxiosPromise<LibraryVariableSetUsageResource>;

  /**
   * Lists projects and deployments which are using an library variable set.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApiInterface
   */
  getLibraryVariableSetUsageListSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<LibraryVariableSetUsageResource>;

  /**
   * Lists all of the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of LibraryVariableSetResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApiInterface
   */
  indexLibraryVariableSets(
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<LibraryVariableSetResourceCollection>;

  /**
   * Lists all of the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of LibraryVariableSetResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApiInterface
   */
  indexLibraryVariableSetsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<LibraryVariableSetResourceCollection>;

  /**
   * Lists all the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of LibraryVariableSetResources
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApiInterface
   */
  listAllLibraryVariableSets(
    options?: any
  ): AxiosPromise<Array<LibraryVariableSetResource>>;

  /**
   * Lists all the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of LibraryVariableSetResources
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApiInterface
   */
  listAllLibraryVariableSetsSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<LibraryVariableSetResource>>;

  /**
   * Modifies an existing library variable set.
   * @summary Modify a LibraryVariableSetResource by ID
   * @param {string} id ID of the LibraryVariableSetResource to modify
   * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApiInterface
   */
  updateLibraryVariableSet(
    id: string,
    body?: LibraryVariableSetResource,
    options?: any
  ): AxiosPromise<LibraryVariableSetResource>;

  /**
   * Modifies an existing library variable set.
   * @summary Modify a LibraryVariableSetResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the LibraryVariableSetResource to modify
   * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApiInterface
   */
  updateLibraryVariableSetSpaces(
    baseSpaceId: string,
    id: string,
    body?: LibraryVariableSetResource,
    options?: any
  ): AxiosPromise<LibraryVariableSetResource>;
}

/**
 * LibraryVariableSetsApi - object-oriented interface
 * @export
 * @class LibraryVariableSetsApi
 * @extends {BaseAPI}
 */
export class LibraryVariableSetsApi
  extends BaseAPI
  implements LibraryVariableSetsApiInterface {
  /**
   * Creates a new library variable set.
   * @summary Create a LibraryVariableSetResource
   * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApi
   */
  public createLibraryVariableSet(
    body?: LibraryVariableSetResource,
    options?: any
  ) {
    return LibraryVariableSetsApiFp(this.configuration)
      .createLibraryVariableSet(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new library variable set.
   * @summary Create a LibraryVariableSetResource
   * @param {string} baseSpaceId ID of the space
   * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApi
   */
  public createLibraryVariableSetSpaces(
    baseSpaceId: string,
    body?: LibraryVariableSetResource,
    options?: any
  ) {
    return LibraryVariableSetsApiFp(this.configuration)
      .createLibraryVariableSetSpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing library variable set.
   * @summary Delete a LibraryVariableSetResource by ID
   * @param {string} id ID of the LibraryVariableSetResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApi
   */
  public deleteLibraryVariableSet(id: string, options?: any) {
    return LibraryVariableSetsApiFp(this.configuration)
      .deleteLibraryVariableSet(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing library variable set.
   * @summary Delete a LibraryVariableSetResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the LibraryVariableSetResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApi
   */
  public deleteLibraryVariableSetSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return LibraryVariableSetsApiFp(this.configuration)
      .deleteLibraryVariableSetSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Library Variable Set by ID
   * @param {string} id ID of the LibraryVariableSet to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApi
   */
  public getLibraryVariableSetById(id: string, options?: any) {
    return LibraryVariableSetsApiFp(this.configuration)
      .getLibraryVariableSetById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Library Variable Set by ID
   * @param {string} id ID of the LibraryVariableSet to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApi
   */
  public getLibraryVariableSetByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ) {
    return LibraryVariableSetsApiFp(this.configuration)
      .getLibraryVariableSetByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists projects and deployments which are using an library variable set.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApi
   */
  public getLibraryVariableSetUsageList(id: string, options?: any) {
    return LibraryVariableSetsApiFp(this.configuration)
      .getLibraryVariableSetUsageList(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists projects and deployments which are using an library variable set.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApi
   */
  public getLibraryVariableSetUsageListSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return LibraryVariableSetsApiFp(this.configuration)
      .getLibraryVariableSetUsageListSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of LibraryVariableSetResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApi
   */
  public indexLibraryVariableSets(skip?: number, take?: number, options?: any) {
    return LibraryVariableSetsApiFp(this.configuration)
      .indexLibraryVariableSets(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of LibraryVariableSetResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApi
   */
  public indexLibraryVariableSetsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return LibraryVariableSetsApiFp(this.configuration)
      .indexLibraryVariableSetsSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of LibraryVariableSetResources
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApi
   */
  public listAllLibraryVariableSets(options?: any) {
    return LibraryVariableSetsApiFp(this.configuration)
      .listAllLibraryVariableSets(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of LibraryVariableSetResources
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApi
   */
  public listAllLibraryVariableSetsSpaces(baseSpaceId: string, options?: any) {
    return LibraryVariableSetsApiFp(this.configuration)
      .listAllLibraryVariableSetsSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing library variable set.
   * @summary Modify a LibraryVariableSetResource by ID
   * @param {string} id ID of the LibraryVariableSetResource to modify
   * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApi
   */
  public updateLibraryVariableSet(
    id: string,
    body?: LibraryVariableSetResource,
    options?: any
  ) {
    return LibraryVariableSetsApiFp(this.configuration)
      .updateLibraryVariableSet(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing library variable set.
   * @summary Modify a LibraryVariableSetResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the LibraryVariableSetResource to modify
   * @param {LibraryVariableSetResource} [body] The LibraryVariableSetResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LibraryVariableSetsApi
   */
  public updateLibraryVariableSetSpaces(
    baseSpaceId: string,
    id: string,
    body?: LibraryVariableSetResource,
    options?: any
  ) {
    return LibraryVariableSetsApiFp(this.configuration)
      .updateLibraryVariableSetSpaces(baseSpaceId, id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
