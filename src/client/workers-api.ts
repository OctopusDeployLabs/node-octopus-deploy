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
import { MachineConnectionStatus } from "../model";
// @ts-ignore
import { MachineResource } from "../model";
// @ts-ignore
import { WorkerResource } from "../model";
// @ts-ignore
import { WorkerResourceCollection } from "../model";
/**
 * WorkersApi - axios parameter creator
 * @export
 */
export const WorkersApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new worker.
     * @summary Create a WorkerResource
     * @param {WorkerResource} [body] The WorkerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createWorker: async (
      body?: WorkerResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/workers`;
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
     * Creates a new worker.
     * @summary Create a WorkerResource
     * @param {string} baseSpaceId ID of the space
     * @param {WorkerResource} [body] The WorkerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createWorkerSpaces: async (
      baseSpaceId: string,
      body?: WorkerResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createWorkerSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/workers`.replace(
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
     * Deletes an existing worker machine.
     * @summary Delete a WorkerResource by ID
     * @param {string} id ID of the WorkerResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteWorker: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteWorker", "id", id);
      const localVarPath = `/workers/{id}`.replace(
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
     * Deletes an existing worker machine.
     * @summary Delete a WorkerResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the WorkerResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteWorkerSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("deleteWorkerSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteWorkerSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/workers/{id}`
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
     * Interrogate a machine for communication details so that it may be added to the installation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDiscoverWorker: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/workers/discover`;
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
     * Interrogate a machine for communication details so that it may be added to the installation.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDiscoverWorkerSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getDiscoverWorkerSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/workers/discover`.replace(
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
     *
     * @summary Get a Worker by ID
     * @param {string} id ID of the Worker to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWorkerById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getWorkerById", "id", id);
      const localVarPath = `/workers/{id}`.replace(
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
     * @summary Get a Worker by ID
     * @param {string} id ID of the Worker to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWorkerByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getWorkerByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getWorkerByIdSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/workers/{id}`
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
     * Get the status of the network connection between the Octopus server and a worker.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWorkerConnectionStatus: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getWorkerConnectionStatus", "id", id);
      const localVarPath = `/workers/{id}/connection`.replace(
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
     * Get the status of the network connection between the Octopus server and a worker.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWorkerConnectionStatusSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getWorkerConnectionStatusSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getWorkerConnectionStatusSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/workers/{id}/connection`
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
     * Gets all operating system names for workers. The result will be a string array.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWorkerOperatingSystemNamesListAll: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/workers/operatingsystem/names/all`;
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
     * Gets all operating system names for workers. The result will be a string array.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWorkerOperatingSystemNamesListAllSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getWorkerOperatingSystemNamesListAllSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/workers/operatingsystem/names/all`.replace(
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
     * Gets all operating system shell names for workers. The result will be a string array.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWorkerOperatingSystemShellNameListAll: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/workers/operatingsystem/shells/all`;
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
     * Gets all operating system shell names for workers. The result will be a string array.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWorkerOperatingSystemShellNameListAllSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getWorkerOperatingSystemShellNameListAllSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/workers/operatingsystem/shells/all`.replace(
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
     * Lists all of the registered worker machines in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of WorkerResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexWorkers: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/workers`;
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
     * Lists all of the registered worker machines in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of WorkerResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexWorkersSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("indexWorkersSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/workers`.replace(
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
     * Lists all of the workers in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of WorkerResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllWorkers: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/workers/all`;
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
     * Lists all of the workers in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of WorkerResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllWorkersSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("listAllWorkersSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/workers/all`.replace(
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
     * Modifies an existing worker machine.
     * @summary Modify a WorkerResource by ID
     * @param {string} id ID of the WorkerResource to modify
     * @param {WorkerResource} [body] The WorkerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWorker: async (
      id: string,
      body?: WorkerResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateWorker", "id", id);
      const localVarPath = `/workers/{id}`.replace(
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
     * Modifies an existing worker machine.
     * @summary Modify a WorkerResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the WorkerResource to modify
     * @param {WorkerResource} [body] The WorkerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWorkerSpaces: async (
      baseSpaceId: string,
      id: string,
      body?: WorkerResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("updateWorkerSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateWorkerSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/workers/{id}`
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
 * WorkersApi - functional programming interface
 * @export
 */
export const WorkersApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = WorkersApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a new worker.
     * @summary Create a WorkerResource
     * @param {WorkerResource} [body] The WorkerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createWorker(
      body?: WorkerResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createWorker(
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
     * Creates a new worker.
     * @summary Create a WorkerResource
     * @param {string} baseSpaceId ID of the space
     * @param {WorkerResource} [body] The WorkerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createWorkerSpaces(
      baseSpaceId: string,
      body?: WorkerResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createWorkerSpaces(
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
     * Deletes an existing worker machine.
     * @summary Delete a WorkerResource by ID
     * @param {string} id ID of the WorkerResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteWorker(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWorker(
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
     * Deletes an existing worker machine.
     * @summary Delete a WorkerResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the WorkerResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteWorkerSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWorkerSpaces(
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
     * Interrogate a machine for communication details so that it may be added to the installation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDiscoverWorker(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachineResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDiscoverWorker(
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
     * Interrogate a machine for communication details so that it may be added to the installation.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDiscoverWorkerSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachineResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDiscoverWorkerSpaces(
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
     *
     * @summary Get a Worker by ID
     * @param {string} id ID of the Worker to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWorkerById(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkerById(
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
     * @summary Get a Worker by ID
     * @param {string} id ID of the Worker to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWorkerByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkerByIdSpaces(
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
     * Get the status of the network connection between the Octopus server and a worker.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWorkerConnectionStatus(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachineConnectionStatus>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkerConnectionStatus(
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
     * Get the status of the network connection between the Octopus server and a worker.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWorkerConnectionStatusSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachineConnectionStatus>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkerConnectionStatusSpaces(
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
     * Gets all operating system names for workers. The result will be a string array.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWorkerOperatingSystemNamesListAll(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkerOperatingSystemNamesListAll(
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
     * Gets all operating system names for workers. The result will be a string array.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWorkerOperatingSystemNamesListAllSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkerOperatingSystemNamesListAllSpaces(
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
     * Gets all operating system shell names for workers. The result will be a string array.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWorkerOperatingSystemShellNameListAll(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkerOperatingSystemShellNameListAll(
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
     * Gets all operating system shell names for workers. The result will be a string array.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWorkerOperatingSystemShellNameListAllSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkerOperatingSystemShellNameListAllSpaces(
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
     * Lists all of the registered worker machines in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of WorkerResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexWorkers(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WorkerResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexWorkers(
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
     * Lists all of the registered worker machines in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of WorkerResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexWorkersSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WorkerResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexWorkersSpaces(
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
     * Lists all of the workers in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of WorkerResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllWorkers(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<WorkerResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllWorkers(
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
     * Lists all of the workers in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of WorkerResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllWorkersSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<WorkerResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllWorkersSpaces(
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
     * Modifies an existing worker machine.
     * @summary Modify a WorkerResource by ID
     * @param {string} id ID of the WorkerResource to modify
     * @param {WorkerResource} [body] The WorkerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateWorker(
      id: string,
      body?: WorkerResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateWorker(
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
     * Modifies an existing worker machine.
     * @summary Modify a WorkerResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the WorkerResource to modify
     * @param {WorkerResource} [body] The WorkerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateWorkerSpaces(
      baseSpaceId: string,
      id: string,
      body?: WorkerResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkerResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateWorkerSpaces(
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
 * WorkersApi - factory interface
 * @export
 */
export const WorkersApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = WorkersApiFp(configuration);
  return {
    /**
     * Creates a new worker.
     * @summary Create a WorkerResource
     * @param {WorkerResource} [body] The WorkerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createWorker(
      body?: WorkerResource,
      options?: any
    ): AxiosPromise<WorkerResource> {
      return localVarFp
        .createWorker(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new worker.
     * @summary Create a WorkerResource
     * @param {string} baseSpaceId ID of the space
     * @param {WorkerResource} [body] The WorkerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createWorkerSpaces(
      baseSpaceId: string,
      body?: WorkerResource,
      options?: any
    ): AxiosPromise<WorkerResource> {
      return localVarFp
        .createWorkerSpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing worker machine.
     * @summary Delete a WorkerResource by ID
     * @param {string} id ID of the WorkerResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteWorker(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteWorker(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing worker machine.
     * @summary Delete a WorkerResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the WorkerResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteWorkerSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteWorkerSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Interrogate a machine for communication details so that it may be added to the installation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDiscoverWorker(options?: any): AxiosPromise<MachineResource> {
      return localVarFp
        .getDiscoverWorker(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Interrogate a machine for communication details so that it may be added to the installation.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDiscoverWorkerSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<MachineResource> {
      return localVarFp
        .getDiscoverWorkerSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Worker by ID
     * @param {string} id ID of the Worker to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWorkerById(id: string, options?: any): AxiosPromise<WorkerResource> {
      return localVarFp
        .getWorkerById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Worker by ID
     * @param {string} id ID of the Worker to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWorkerByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<WorkerResource> {
      return localVarFp
        .getWorkerByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get the status of the network connection between the Octopus server and a worker.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWorkerConnectionStatus(
      id: string,
      options?: any
    ): AxiosPromise<MachineConnectionStatus> {
      return localVarFp
        .getWorkerConnectionStatus(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get the status of the network connection between the Octopus server and a worker.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWorkerConnectionStatusSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<MachineConnectionStatus> {
      return localVarFp
        .getWorkerConnectionStatusSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all operating system names for workers. The result will be a string array.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWorkerOperatingSystemNamesListAll(
      options?: any
    ): AxiosPromise<Array<string>> {
      return localVarFp
        .getWorkerOperatingSystemNamesListAll(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all operating system names for workers. The result will be a string array.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWorkerOperatingSystemNamesListAllSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<string>> {
      return localVarFp
        .getWorkerOperatingSystemNamesListAllSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all operating system shell names for workers. The result will be a string array.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWorkerOperatingSystemShellNameListAll(
      options?: any
    ): AxiosPromise<Array<string>> {
      return localVarFp
        .getWorkerOperatingSystemShellNameListAll(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all operating system shell names for workers. The result will be a string array.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWorkerOperatingSystemShellNameListAllSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<string>> {
      return localVarFp
        .getWorkerOperatingSystemShellNameListAllSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the registered worker machines in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of WorkerResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexWorkers(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<WorkerResourceCollection> {
      return localVarFp
        .indexWorkers(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the registered worker machines in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of WorkerResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexWorkersSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<WorkerResourceCollection> {
      return localVarFp
        .indexWorkersSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the workers in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of WorkerResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllWorkers(options?: any): AxiosPromise<Array<WorkerResource>> {
      return localVarFp
        .listAllWorkers(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the workers in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of WorkerResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllWorkersSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<WorkerResource>> {
      return localVarFp
        .listAllWorkersSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing worker machine.
     * @summary Modify a WorkerResource by ID
     * @param {string} id ID of the WorkerResource to modify
     * @param {WorkerResource} [body] The WorkerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWorker(
      id: string,
      body?: WorkerResource,
      options?: any
    ): AxiosPromise<WorkerResource> {
      return localVarFp
        .updateWorker(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing worker machine.
     * @summary Modify a WorkerResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the WorkerResource to modify
     * @param {WorkerResource} [body] The WorkerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWorkerSpaces(
      baseSpaceId: string,
      id: string,
      body?: WorkerResource,
      options?: any
    ): AxiosPromise<WorkerResource> {
      return localVarFp
        .updateWorkerSpaces(baseSpaceId, id, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * WorkersApi - interface
 * @export
 * @interface WorkersApi
 */
export interface WorkersApiInterface {
  /**
   * Creates a new worker.
   * @summary Create a WorkerResource
   * @param {WorkerResource} [body] The WorkerResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  createWorker(
    body?: WorkerResource,
    options?: any
  ): AxiosPromise<WorkerResource>;

  /**
   * Creates a new worker.
   * @summary Create a WorkerResource
   * @param {string} baseSpaceId ID of the space
   * @param {WorkerResource} [body] The WorkerResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  createWorkerSpaces(
    baseSpaceId: string,
    body?: WorkerResource,
    options?: any
  ): AxiosPromise<WorkerResource>;

  /**
   * Deletes an existing worker machine.
   * @summary Delete a WorkerResource by ID
   * @param {string} id ID of the WorkerResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  deleteWorker(id: string, options?: any): AxiosPromise<void>;

  /**
   * Deletes an existing worker machine.
   * @summary Delete a WorkerResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the WorkerResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  deleteWorkerSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   * Interrogate a machine for communication details so that it may be added to the installation.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  getDiscoverWorker(options?: any): AxiosPromise<MachineResource>;

  /**
   * Interrogate a machine for communication details so that it may be added to the installation.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  getDiscoverWorkerSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<MachineResource>;

  /**
   *
   * @summary Get a Worker by ID
   * @param {string} id ID of the Worker to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  getWorkerById(id: string, options?: any): AxiosPromise<WorkerResource>;

  /**
   *
   * @summary Get a Worker by ID
   * @param {string} id ID of the Worker to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  getWorkerByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<WorkerResource>;

  /**
   * Get the status of the network connection between the Octopus server and a worker.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  getWorkerConnectionStatus(
    id: string,
    options?: any
  ): AxiosPromise<MachineConnectionStatus>;

  /**
   * Get the status of the network connection between the Octopus server and a worker.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  getWorkerConnectionStatusSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<MachineConnectionStatus>;

  /**
   * Gets all operating system names for workers. The result will be a string array.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  getWorkerOperatingSystemNamesListAll(
    options?: any
  ): AxiosPromise<Array<string>>;

  /**
   * Gets all operating system names for workers. The result will be a string array.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  getWorkerOperatingSystemNamesListAllSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<string>>;

  /**
   * Gets all operating system shell names for workers. The result will be a string array.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  getWorkerOperatingSystemShellNameListAll(
    options?: any
  ): AxiosPromise<Array<string>>;

  /**
   * Gets all operating system shell names for workers. The result will be a string array.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  getWorkerOperatingSystemShellNameListAllSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<string>>;

  /**
   * Lists all of the registered worker machines in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of WorkerResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  indexWorkers(
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<WorkerResourceCollection>;

  /**
   * Lists all of the registered worker machines in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of WorkerResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  indexWorkersSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<WorkerResourceCollection>;

  /**
   * Lists all of the workers in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of WorkerResources
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  listAllWorkers(options?: any): AxiosPromise<Array<WorkerResource>>;

  /**
   * Lists all of the workers in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of WorkerResources
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  listAllWorkersSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<WorkerResource>>;

  /**
   * Modifies an existing worker machine.
   * @summary Modify a WorkerResource by ID
   * @param {string} id ID of the WorkerResource to modify
   * @param {WorkerResource} [body] The WorkerResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  updateWorker(
    id: string,
    body?: WorkerResource,
    options?: any
  ): AxiosPromise<WorkerResource>;

  /**
   * Modifies an existing worker machine.
   * @summary Modify a WorkerResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the WorkerResource to modify
   * @param {WorkerResource} [body] The WorkerResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApiInterface
   */
  updateWorkerSpaces(
    baseSpaceId: string,
    id: string,
    body?: WorkerResource,
    options?: any
  ): AxiosPromise<WorkerResource>;
}

/**
 * WorkersApi - object-oriented interface
 * @export
 * @class WorkersApi
 * @extends {BaseAPI}
 */
export class WorkersApi extends BaseAPI implements WorkersApiInterface {
  /**
   * Creates a new worker.
   * @summary Create a WorkerResource
   * @param {WorkerResource} [body] The WorkerResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public createWorker(body?: WorkerResource, options?: any) {
    return WorkersApiFp(this.configuration)
      .createWorker(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new worker.
   * @summary Create a WorkerResource
   * @param {string} baseSpaceId ID of the space
   * @param {WorkerResource} [body] The WorkerResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public createWorkerSpaces(
    baseSpaceId: string,
    body?: WorkerResource,
    options?: any
  ) {
    return WorkersApiFp(this.configuration)
      .createWorkerSpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing worker machine.
   * @summary Delete a WorkerResource by ID
   * @param {string} id ID of the WorkerResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public deleteWorker(id: string, options?: any) {
    return WorkersApiFp(this.configuration)
      .deleteWorker(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing worker machine.
   * @summary Delete a WorkerResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the WorkerResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public deleteWorkerSpaces(baseSpaceId: string, id: string, options?: any) {
    return WorkersApiFp(this.configuration)
      .deleteWorkerSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Interrogate a machine for communication details so that it may be added to the installation.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public getDiscoverWorker(options?: any) {
    return WorkersApiFp(this.configuration)
      .getDiscoverWorker(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Interrogate a machine for communication details so that it may be added to the installation.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public getDiscoverWorkerSpaces(baseSpaceId: string, options?: any) {
    return WorkersApiFp(this.configuration)
      .getDiscoverWorkerSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Worker by ID
   * @param {string} id ID of the Worker to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public getWorkerById(id: string, options?: any) {
    return WorkersApiFp(this.configuration)
      .getWorkerById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Worker by ID
   * @param {string} id ID of the Worker to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public getWorkerByIdSpaces(id: string, baseSpaceId: string, options?: any) {
    return WorkersApiFp(this.configuration)
      .getWorkerByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get the status of the network connection between the Octopus server and a worker.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public getWorkerConnectionStatus(id: string, options?: any) {
    return WorkersApiFp(this.configuration)
      .getWorkerConnectionStatus(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get the status of the network connection between the Octopus server and a worker.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public getWorkerConnectionStatusSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return WorkersApiFp(this.configuration)
      .getWorkerConnectionStatusSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all operating system names for workers. The result will be a string array.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public getWorkerOperatingSystemNamesListAll(options?: any) {
    return WorkersApiFp(this.configuration)
      .getWorkerOperatingSystemNamesListAll(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all operating system names for workers. The result will be a string array.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public getWorkerOperatingSystemNamesListAllSpaces(
    baseSpaceId: string,
    options?: any
  ) {
    return WorkersApiFp(this.configuration)
      .getWorkerOperatingSystemNamesListAllSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all operating system shell names for workers. The result will be a string array.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public getWorkerOperatingSystemShellNameListAll(options?: any) {
    return WorkersApiFp(this.configuration)
      .getWorkerOperatingSystemShellNameListAll(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all operating system shell names for workers. The result will be a string array.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public getWorkerOperatingSystemShellNameListAllSpaces(
    baseSpaceId: string,
    options?: any
  ) {
    return WorkersApiFp(this.configuration)
      .getWorkerOperatingSystemShellNameListAllSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the registered worker machines in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of WorkerResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public indexWorkers(skip?: number, take?: number, options?: any) {
    return WorkersApiFp(this.configuration)
      .indexWorkers(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the registered worker machines in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of WorkerResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public indexWorkersSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return WorkersApiFp(this.configuration)
      .indexWorkersSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the workers in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of WorkerResources
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public listAllWorkers(options?: any) {
    return WorkersApiFp(this.configuration)
      .listAllWorkers(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the workers in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of WorkerResources
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public listAllWorkersSpaces(baseSpaceId: string, options?: any) {
    return WorkersApiFp(this.configuration)
      .listAllWorkersSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing worker machine.
   * @summary Modify a WorkerResource by ID
   * @param {string} id ID of the WorkerResource to modify
   * @param {WorkerResource} [body] The WorkerResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public updateWorker(id: string, body?: WorkerResource, options?: any) {
    return WorkersApiFp(this.configuration)
      .updateWorker(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing worker machine.
   * @summary Modify a WorkerResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the WorkerResource to modify
   * @param {WorkerResource} [body] The WorkerResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkersApi
   */
  public updateWorkerSpaces(
    baseSpaceId: string,
    id: string,
    body?: WorkerResource,
    options?: any
  ) {
    return WorkersApiFp(this.configuration)
      .updateWorkerSpaces(baseSpaceId, id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
