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
import { DeploymentTargetResource } from "../model";
// @ts-ignore
import { DeploymentTargetResourceCollection } from "../model";
// @ts-ignore
import { MachineConnectionStatus } from "../model";
// @ts-ignore
import { MachineResource } from "../model";
// @ts-ignore
import { TaskResourceCollection } from "../model";
/**
 * MachinesApi - axios parameter creator
 * @export
 */
export const MachinesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new machine.
     * @summary Create a DeploymentTargetResource
     * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDeploymentTarget: async (
      body?: DeploymentTargetResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/machines`;
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
     * Creates a new machine.
     * @summary Create a DeploymentTargetResource
     * @param {string} baseSpaceId ID of the space
     * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDeploymentTargetSpaces: async (
      baseSpaceId: string,
      body?: DeploymentTargetResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createDeploymentTargetSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/machines`.replace(
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
     * Deletes an existing machine.
     * @summary Delete a DeploymentTargetResource by ID
     * @param {string} id ID of the DeploymentTargetResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDeploymentTarget: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteDeploymentTarget", "id", id);
      const localVarPath = `/machines/{id}`.replace(
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
     * Deletes an existing machine.
     * @summary Delete a DeploymentTargetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the DeploymentTargetResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDeploymentTargetSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "deleteDeploymentTargetSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteDeploymentTargetSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/machines/{id}`
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
     * Get the status of the network connection between the Octopus server and a machine.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentTargetConnectionStatus: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getDeploymentTargetConnectionStatus", "id", id);
      const localVarPath = `/machines/{id}/connection`.replace(
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
     * Get the status of the network connection between the Octopus server and a machine.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentTargetConnectionStatusSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getDeploymentTargetConnectionStatusSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getDeploymentTargetConnectionStatusSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/machines/{id}/connection`
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
     * Gets all operating system names for deployment targets. The result will be a string array.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentTargetOperatingSystemNamesListAll: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/machines/operatingsystem/names/all`;
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
     * Gets all operating system names for deployment targets. The result will be a string array.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentTargetOperatingSystemNamesListAllSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getDeploymentTargetOperatingSystemNamesListAllSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/machines/operatingsystem/names/all`.replace(
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
     * Gets all operating system shell names for deployment targets. The result will be a string array.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentTargetOperatingSystemShellNameListAll: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/machines/operatingsystem/shells/all`;
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
     * Gets all operating system shell names for deployment targets. The result will be a string array.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentTargetOperatingSystemShellNameListAllSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getDeploymentTargetOperatingSystemShellNameListAllSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/machines/operatingsystem/shells/all`.replace(
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
     * Interrogate a machine for communication details so that it may be added to the installation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDiscoverDeploymentTarget: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/machines/discover`;
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
    getDiscoverDeploymentTargetSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getDiscoverDeploymentTargetSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/machines/discover`.replace(
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
     * @summary Get a Machine by ID
     * @param {string} id ID of the Machine to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMachineResourceById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getMachineResourceById", "id", id);
      const localVarPath = `/machines/{id}`.replace(
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
     * @summary Get a Machine by ID
     * @param {string} id ID of the Machine to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMachineResourceByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getMachineResourceByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getMachineResourceByIdSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/machines/{id}`
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
     * Get the history of related tasks for a machine.
     * @summary Get a list of TaskResources for the given DeploymentTargetResource
     * @param {string} id ID of the DeploymentTarget
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexDeploymentTargetTasks: async (
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexDeploymentTargetTasks", "id", id);
      const localVarPath = `/machines/{id}/tasks`.replace(
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
     * Get the history of related tasks for a machine.
     * @summary Get a list of TaskResources for the given DeploymentTargetResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the DeploymentTarget
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexDeploymentTargetTasksSpaces: async (
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexDeploymentTargetTasksSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexDeploymentTargetTasksSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/machines/{id}/tasks`
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
     * Lists all of the registered machines in the supplied Octopus Deploy Space, from all environments. The results will be sorted alphabetically by name.
     * @summary Get a list of DeploymentTargetResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexDeploymentTargets: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/machines`;
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
     * Lists all of the registered machines in the supplied Octopus Deploy Space, from all environments. The results will be sorted alphabetically by name.
     * @summary Get a list of DeploymentTargetResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexDeploymentTargetsSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexDeploymentTargetsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/machines`.replace(
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
     * Lists all of the deployment targets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of DeploymentTargetResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllDeploymentTargets: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/machines/all`;
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
     * Lists all of the deployment targets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of DeploymentTargetResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllDeploymentTargetsSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "listAllDeploymentTargetsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/machines/all`.replace(
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
     * Modifies an existing machine.
     * @summary Modify a DeploymentTargetResource by ID
     * @param {string} id ID of the DeploymentTargetResource to modify
     * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDeploymentTarget: async (
      id: string,
      body?: DeploymentTargetResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateDeploymentTarget", "id", id);
      const localVarPath = `/machines/{id}`.replace(
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
     * Modifies an existing machine.
     * @summary Modify a DeploymentTargetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the DeploymentTargetResource to modify
     * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDeploymentTargetSpaces: async (
      baseSpaceId: string,
      id: string,
      body?: DeploymentTargetResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "updateDeploymentTargetSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateDeploymentTargetSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/machines/{id}`
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
 * MachinesApi - functional programming interface
 * @export
 */
export const MachinesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = MachinesApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a new machine.
     * @summary Create a DeploymentTargetResource
     * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createDeploymentTarget(
      body?: DeploymentTargetResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentTargetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createDeploymentTarget(
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
     * Creates a new machine.
     * @summary Create a DeploymentTargetResource
     * @param {string} baseSpaceId ID of the space
     * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createDeploymentTargetSpaces(
      baseSpaceId: string,
      body?: DeploymentTargetResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentTargetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createDeploymentTargetSpaces(
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
     * Deletes an existing machine.
     * @summary Delete a DeploymentTargetResource by ID
     * @param {string} id ID of the DeploymentTargetResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteDeploymentTarget(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteDeploymentTarget(
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
     * Deletes an existing machine.
     * @summary Delete a DeploymentTargetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the DeploymentTargetResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteDeploymentTargetSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteDeploymentTargetSpaces(
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
     * Get the status of the network connection between the Octopus server and a machine.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentTargetConnectionStatus(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachineConnectionStatus>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDeploymentTargetConnectionStatus(
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
     * Get the status of the network connection between the Octopus server and a machine.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentTargetConnectionStatusSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachineConnectionStatus>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDeploymentTargetConnectionStatusSpaces(
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
     * Gets all operating system names for deployment targets. The result will be a string array.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentTargetOperatingSystemNamesListAll(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDeploymentTargetOperatingSystemNamesListAll(
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
     * Gets all operating system names for deployment targets. The result will be a string array.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentTargetOperatingSystemNamesListAllSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDeploymentTargetOperatingSystemNamesListAllSpaces(
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
     * Gets all operating system shell names for deployment targets. The result will be a string array.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentTargetOperatingSystemShellNameListAll(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDeploymentTargetOperatingSystemShellNameListAll(
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
     * Gets all operating system shell names for deployment targets. The result will be a string array.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentTargetOperatingSystemShellNameListAllSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDeploymentTargetOperatingSystemShellNameListAllSpaces(
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
     * Interrogate a machine for communication details so that it may be added to the installation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDiscoverDeploymentTarget(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachineResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDiscoverDeploymentTarget(
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
    async getDiscoverDeploymentTargetSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachineResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDiscoverDeploymentTargetSpaces(
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
     * @summary Get a Machine by ID
     * @param {string} id ID of the Machine to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMachineResourceById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentTargetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getMachineResourceById(
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
     * @summary Get a Machine by ID
     * @param {string} id ID of the Machine to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMachineResourceByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentTargetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getMachineResourceByIdSpaces(
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
     * Get the history of related tasks for a machine.
     * @summary Get a list of TaskResources for the given DeploymentTargetResource
     * @param {string} id ID of the DeploymentTarget
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexDeploymentTargetTasks(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<TaskResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexDeploymentTargetTasks(
        id,
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
     * Get the history of related tasks for a machine.
     * @summary Get a list of TaskResources for the given DeploymentTargetResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the DeploymentTarget
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexDeploymentTargetTasksSpaces(
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<TaskResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexDeploymentTargetTasksSpaces(
        baseSpaceId,
        id,
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
     * Lists all of the registered machines in the supplied Octopus Deploy Space, from all environments. The results will be sorted alphabetically by name.
     * @summary Get a list of DeploymentTargetResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexDeploymentTargets(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentTargetResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexDeploymentTargets(
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
     * Lists all of the registered machines in the supplied Octopus Deploy Space, from all environments. The results will be sorted alphabetically by name.
     * @summary Get a list of DeploymentTargetResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexDeploymentTargetsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentTargetResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexDeploymentTargetsSpaces(
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
     * Lists all of the deployment targets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of DeploymentTargetResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllDeploymentTargets(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<DeploymentTargetResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllDeploymentTargets(
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
     * Lists all of the deployment targets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of DeploymentTargetResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllDeploymentTargetsSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<DeploymentTargetResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllDeploymentTargetsSpaces(
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
     * Modifies an existing machine.
     * @summary Modify a DeploymentTargetResource by ID
     * @param {string} id ID of the DeploymentTargetResource to modify
     * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDeploymentTarget(
      id: string,
      body?: DeploymentTargetResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentTargetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateDeploymentTarget(
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
     * Modifies an existing machine.
     * @summary Modify a DeploymentTargetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the DeploymentTargetResource to modify
     * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDeploymentTargetSpaces(
      baseSpaceId: string,
      id: string,
      body?: DeploymentTargetResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentTargetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateDeploymentTargetSpaces(
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
 * MachinesApi - factory interface
 * @export
 */
export const MachinesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = MachinesApiFp(configuration);
  return {
    /**
     * Creates a new machine.
     * @summary Create a DeploymentTargetResource
     * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDeploymentTarget(
      body?: DeploymentTargetResource,
      options?: any
    ): AxiosPromise<DeploymentTargetResource> {
      return localVarFp
        .createDeploymentTarget(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new machine.
     * @summary Create a DeploymentTargetResource
     * @param {string} baseSpaceId ID of the space
     * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDeploymentTargetSpaces(
      baseSpaceId: string,
      body?: DeploymentTargetResource,
      options?: any
    ): AxiosPromise<DeploymentTargetResource> {
      return localVarFp
        .createDeploymentTargetSpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing machine.
     * @summary Delete a DeploymentTargetResource by ID
     * @param {string} id ID of the DeploymentTargetResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDeploymentTarget(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteDeploymentTarget(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing machine.
     * @summary Delete a DeploymentTargetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the DeploymentTargetResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDeploymentTargetSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteDeploymentTargetSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get the status of the network connection between the Octopus server and a machine.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentTargetConnectionStatus(
      id: string,
      options?: any
    ): AxiosPromise<MachineConnectionStatus> {
      return localVarFp
        .getDeploymentTargetConnectionStatus(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get the status of the network connection between the Octopus server and a machine.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentTargetConnectionStatusSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<MachineConnectionStatus> {
      return localVarFp
        .getDeploymentTargetConnectionStatusSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all operating system names for deployment targets. The result will be a string array.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentTargetOperatingSystemNamesListAll(
      options?: any
    ): AxiosPromise<Array<string>> {
      return localVarFp
        .getDeploymentTargetOperatingSystemNamesListAll(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all operating system names for deployment targets. The result will be a string array.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentTargetOperatingSystemNamesListAllSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<string>> {
      return localVarFp
        .getDeploymentTargetOperatingSystemNamesListAllSpaces(
          baseSpaceId,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all operating system shell names for deployment targets. The result will be a string array.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentTargetOperatingSystemShellNameListAll(
      options?: any
    ): AxiosPromise<Array<string>> {
      return localVarFp
        .getDeploymentTargetOperatingSystemShellNameListAll(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all operating system shell names for deployment targets. The result will be a string array.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentTargetOperatingSystemShellNameListAllSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<string>> {
      return localVarFp
        .getDeploymentTargetOperatingSystemShellNameListAllSpaces(
          baseSpaceId,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Interrogate a machine for communication details so that it may be added to the installation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDiscoverDeploymentTarget(options?: any): AxiosPromise<MachineResource> {
      return localVarFp
        .getDiscoverDeploymentTarget(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Interrogate a machine for communication details so that it may be added to the installation.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDiscoverDeploymentTargetSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<MachineResource> {
      return localVarFp
        .getDiscoverDeploymentTargetSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Machine by ID
     * @param {string} id ID of the Machine to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMachineResourceById(
      id: string,
      options?: any
    ): AxiosPromise<DeploymentTargetResource> {
      return localVarFp
        .getMachineResourceById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Machine by ID
     * @param {string} id ID of the Machine to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMachineResourceByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<DeploymentTargetResource> {
      return localVarFp
        .getMachineResourceByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get the history of related tasks for a machine.
     * @summary Get a list of TaskResources for the given DeploymentTargetResource
     * @param {string} id ID of the DeploymentTarget
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexDeploymentTargetTasks(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<TaskResourceCollection> {
      return localVarFp
        .indexDeploymentTargetTasks(id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get the history of related tasks for a machine.
     * @summary Get a list of TaskResources for the given DeploymentTargetResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the DeploymentTarget
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexDeploymentTargetTasksSpaces(
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<TaskResourceCollection> {
      return localVarFp
        .indexDeploymentTargetTasksSpaces(baseSpaceId, id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the registered machines in the supplied Octopus Deploy Space, from all environments. The results will be sorted alphabetically by name.
     * @summary Get a list of DeploymentTargetResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexDeploymentTargets(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<DeploymentTargetResourceCollection> {
      return localVarFp
        .indexDeploymentTargets(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the registered machines in the supplied Octopus Deploy Space, from all environments. The results will be sorted alphabetically by name.
     * @summary Get a list of DeploymentTargetResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexDeploymentTargetsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<DeploymentTargetResourceCollection> {
      return localVarFp
        .indexDeploymentTargetsSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the deployment targets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of DeploymentTargetResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllDeploymentTargets(
      options?: any
    ): AxiosPromise<Array<DeploymentTargetResource>> {
      return localVarFp
        .listAllDeploymentTargets(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the deployment targets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of DeploymentTargetResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllDeploymentTargetsSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<DeploymentTargetResource>> {
      return localVarFp
        .listAllDeploymentTargetsSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing machine.
     * @summary Modify a DeploymentTargetResource by ID
     * @param {string} id ID of the DeploymentTargetResource to modify
     * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDeploymentTarget(
      id: string,
      body?: DeploymentTargetResource,
      options?: any
    ): AxiosPromise<DeploymentTargetResource> {
      return localVarFp
        .updateDeploymentTarget(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing machine.
     * @summary Modify a DeploymentTargetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the DeploymentTargetResource to modify
     * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDeploymentTargetSpaces(
      baseSpaceId: string,
      id: string,
      body?: DeploymentTargetResource,
      options?: any
    ): AxiosPromise<DeploymentTargetResource> {
      return localVarFp
        .updateDeploymentTargetSpaces(baseSpaceId, id, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * MachinesApi - interface
 * @export
 * @interface MachinesApi
 */
export interface MachinesApiInterface {
  /**
   * Creates a new machine.
   * @summary Create a DeploymentTargetResource
   * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  createDeploymentTarget(
    body?: DeploymentTargetResource,
    options?: any
  ): AxiosPromise<DeploymentTargetResource>;

  /**
   * Creates a new machine.
   * @summary Create a DeploymentTargetResource
   * @param {string} baseSpaceId ID of the space
   * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  createDeploymentTargetSpaces(
    baseSpaceId: string,
    body?: DeploymentTargetResource,
    options?: any
  ): AxiosPromise<DeploymentTargetResource>;

  /**
   * Deletes an existing machine.
   * @summary Delete a DeploymentTargetResource by ID
   * @param {string} id ID of the DeploymentTargetResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  deleteDeploymentTarget(id: string, options?: any): AxiosPromise<void>;

  /**
   * Deletes an existing machine.
   * @summary Delete a DeploymentTargetResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the DeploymentTargetResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  deleteDeploymentTargetSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   * Get the status of the network connection between the Octopus server and a machine.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  getDeploymentTargetConnectionStatus(
    id: string,
    options?: any
  ): AxiosPromise<MachineConnectionStatus>;

  /**
   * Get the status of the network connection between the Octopus server and a machine.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  getDeploymentTargetConnectionStatusSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<MachineConnectionStatus>;

  /**
   * Gets all operating system names for deployment targets. The result will be a string array.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  getDeploymentTargetOperatingSystemNamesListAll(
    options?: any
  ): AxiosPromise<Array<string>>;

  /**
   * Gets all operating system names for deployment targets. The result will be a string array.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  getDeploymentTargetOperatingSystemNamesListAllSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<string>>;

  /**
   * Gets all operating system shell names for deployment targets. The result will be a string array.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  getDeploymentTargetOperatingSystemShellNameListAll(
    options?: any
  ): AxiosPromise<Array<string>>;

  /**
   * Gets all operating system shell names for deployment targets. The result will be a string array.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  getDeploymentTargetOperatingSystemShellNameListAllSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<string>>;

  /**
   * Interrogate a machine for communication details so that it may be added to the installation.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  getDiscoverDeploymentTarget(options?: any): AxiosPromise<MachineResource>;

  /**
   * Interrogate a machine for communication details so that it may be added to the installation.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  getDiscoverDeploymentTargetSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<MachineResource>;

  /**
   *
   * @summary Get a Machine by ID
   * @param {string} id ID of the Machine to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  getMachineResourceById(
    id: string,
    options?: any
  ): AxiosPromise<DeploymentTargetResource>;

  /**
   *
   * @summary Get a Machine by ID
   * @param {string} id ID of the Machine to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  getMachineResourceByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<DeploymentTargetResource>;

  /**
   * Get the history of related tasks for a machine.
   * @summary Get a list of TaskResources for the given DeploymentTargetResource
   * @param {string} id ID of the DeploymentTarget
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  indexDeploymentTargetTasks(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<TaskResourceCollection>;

  /**
   * Get the history of related tasks for a machine.
   * @summary Get a list of TaskResources for the given DeploymentTargetResource
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the DeploymentTarget
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  indexDeploymentTargetTasksSpaces(
    baseSpaceId: string,
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<TaskResourceCollection>;

  /**
   * Lists all of the registered machines in the supplied Octopus Deploy Space, from all environments. The results will be sorted alphabetically by name.
   * @summary Get a list of DeploymentTargetResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  indexDeploymentTargets(
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<DeploymentTargetResourceCollection>;

  /**
   * Lists all of the registered machines in the supplied Octopus Deploy Space, from all environments. The results will be sorted alphabetically by name.
   * @summary Get a list of DeploymentTargetResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  indexDeploymentTargetsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<DeploymentTargetResourceCollection>;

  /**
   * Lists all of the deployment targets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of DeploymentTargetResources
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  listAllDeploymentTargets(
    options?: any
  ): AxiosPromise<Array<DeploymentTargetResource>>;

  /**
   * Lists all of the deployment targets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of DeploymentTargetResources
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  listAllDeploymentTargetsSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<DeploymentTargetResource>>;

  /**
   * Modifies an existing machine.
   * @summary Modify a DeploymentTargetResource by ID
   * @param {string} id ID of the DeploymentTargetResource to modify
   * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  updateDeploymentTarget(
    id: string,
    body?: DeploymentTargetResource,
    options?: any
  ): AxiosPromise<DeploymentTargetResource>;

  /**
   * Modifies an existing machine.
   * @summary Modify a DeploymentTargetResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the DeploymentTargetResource to modify
   * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApiInterface
   */
  updateDeploymentTargetSpaces(
    baseSpaceId: string,
    id: string,
    body?: DeploymentTargetResource,
    options?: any
  ): AxiosPromise<DeploymentTargetResource>;
}

/**
 * MachinesApi - object-oriented interface
 * @export
 * @class MachinesApi
 * @extends {BaseAPI}
 */
export class MachinesApi extends BaseAPI implements MachinesApiInterface {
  /**
   * Creates a new machine.
   * @summary Create a DeploymentTargetResource
   * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public createDeploymentTarget(
    body?: DeploymentTargetResource,
    options?: any
  ) {
    return MachinesApiFp(this.configuration)
      .createDeploymentTarget(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new machine.
   * @summary Create a DeploymentTargetResource
   * @param {string} baseSpaceId ID of the space
   * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public createDeploymentTargetSpaces(
    baseSpaceId: string,
    body?: DeploymentTargetResource,
    options?: any
  ) {
    return MachinesApiFp(this.configuration)
      .createDeploymentTargetSpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing machine.
   * @summary Delete a DeploymentTargetResource by ID
   * @param {string} id ID of the DeploymentTargetResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public deleteDeploymentTarget(id: string, options?: any) {
    return MachinesApiFp(this.configuration)
      .deleteDeploymentTarget(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing machine.
   * @summary Delete a DeploymentTargetResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the DeploymentTargetResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public deleteDeploymentTargetSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return MachinesApiFp(this.configuration)
      .deleteDeploymentTargetSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get the status of the network connection between the Octopus server and a machine.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public getDeploymentTargetConnectionStatus(id: string, options?: any) {
    return MachinesApiFp(this.configuration)
      .getDeploymentTargetConnectionStatus(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get the status of the network connection between the Octopus server and a machine.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public getDeploymentTargetConnectionStatusSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return MachinesApiFp(this.configuration)
      .getDeploymentTargetConnectionStatusSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all operating system names for deployment targets. The result will be a string array.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public getDeploymentTargetOperatingSystemNamesListAll(options?: any) {
    return MachinesApiFp(this.configuration)
      .getDeploymentTargetOperatingSystemNamesListAll(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all operating system names for deployment targets. The result will be a string array.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public getDeploymentTargetOperatingSystemNamesListAllSpaces(
    baseSpaceId: string,
    options?: any
  ) {
    return MachinesApiFp(this.configuration)
      .getDeploymentTargetOperatingSystemNamesListAllSpaces(
        baseSpaceId,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all operating system shell names for deployment targets. The result will be a string array.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public getDeploymentTargetOperatingSystemShellNameListAll(options?: any) {
    return MachinesApiFp(this.configuration)
      .getDeploymentTargetOperatingSystemShellNameListAll(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all operating system shell names for deployment targets. The result will be a string array.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public getDeploymentTargetOperatingSystemShellNameListAllSpaces(
    baseSpaceId: string,
    options?: any
  ) {
    return MachinesApiFp(this.configuration)
      .getDeploymentTargetOperatingSystemShellNameListAllSpaces(
        baseSpaceId,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Interrogate a machine for communication details so that it may be added to the installation.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public getDiscoverDeploymentTarget(options?: any) {
    return MachinesApiFp(this.configuration)
      .getDiscoverDeploymentTarget(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Interrogate a machine for communication details so that it may be added to the installation.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public getDiscoverDeploymentTargetSpaces(baseSpaceId: string, options?: any) {
    return MachinesApiFp(this.configuration)
      .getDiscoverDeploymentTargetSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Machine by ID
   * @param {string} id ID of the Machine to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public getMachineResourceById(id: string, options?: any) {
    return MachinesApiFp(this.configuration)
      .getMachineResourceById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Machine by ID
   * @param {string} id ID of the Machine to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public getMachineResourceByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ) {
    return MachinesApiFp(this.configuration)
      .getMachineResourceByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get the history of related tasks for a machine.
   * @summary Get a list of TaskResources for the given DeploymentTargetResource
   * @param {string} id ID of the DeploymentTarget
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public indexDeploymentTargetTasks(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return MachinesApiFp(this.configuration)
      .indexDeploymentTargetTasks(id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get the history of related tasks for a machine.
   * @summary Get a list of TaskResources for the given DeploymentTargetResource
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the DeploymentTarget
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public indexDeploymentTargetTasksSpaces(
    baseSpaceId: string,
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return MachinesApiFp(this.configuration)
      .indexDeploymentTargetTasksSpaces(baseSpaceId, id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the registered machines in the supplied Octopus Deploy Space, from all environments. The results will be sorted alphabetically by name.
   * @summary Get a list of DeploymentTargetResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public indexDeploymentTargets(skip?: number, take?: number, options?: any) {
    return MachinesApiFp(this.configuration)
      .indexDeploymentTargets(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the registered machines in the supplied Octopus Deploy Space, from all environments. The results will be sorted alphabetically by name.
   * @summary Get a list of DeploymentTargetResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public indexDeploymentTargetsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return MachinesApiFp(this.configuration)
      .indexDeploymentTargetsSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the deployment targets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of DeploymentTargetResources
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public listAllDeploymentTargets(options?: any) {
    return MachinesApiFp(this.configuration)
      .listAllDeploymentTargets(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the deployment targets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of DeploymentTargetResources
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public listAllDeploymentTargetsSpaces(baseSpaceId: string, options?: any) {
    return MachinesApiFp(this.configuration)
      .listAllDeploymentTargetsSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing machine.
   * @summary Modify a DeploymentTargetResource by ID
   * @param {string} id ID of the DeploymentTargetResource to modify
   * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public updateDeploymentTarget(
    id: string,
    body?: DeploymentTargetResource,
    options?: any
  ) {
    return MachinesApiFp(this.configuration)
      .updateDeploymentTarget(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing machine.
   * @summary Modify a DeploymentTargetResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the DeploymentTargetResource to modify
   * @param {DeploymentTargetResource} [body] The DeploymentTargetResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinesApi
   */
  public updateDeploymentTargetSpaces(
    baseSpaceId: string,
    id: string,
    body?: DeploymentTargetResource,
    options?: any
  ) {
    return MachinesApiFp(this.configuration)
      .updateDeploymentTargetSpaces(baseSpaceId, id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
