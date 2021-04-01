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
import { DeploymentTargetResourceCollection } from "../model";
// @ts-ignore
import { MachinePolicyResource } from "../model";
// @ts-ignore
import { MachinePolicyResourceCollection } from "../model";
// @ts-ignore
import { WorkerResourceCollection } from "../model";
/**
 * MachinePoliciesApi - axios parameter creator
 * @export
 */
export const MachinePoliciesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new machine policy.
     * @summary Create a MachinePolicyResource
     * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createMachinePolicy: async (
      body?: MachinePolicyResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/machinepolicies`;
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
     * Creates a new machine policy.
     * @summary Create a MachinePolicyResource
     * @param {string} baseSpaceId ID of the space
     * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createMachinePolicySpaces: async (
      baseSpaceId: string,
      body?: MachinePolicyResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createMachinePolicySpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/machinepolicies`.replace(
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
     * Deletes an existing machine policy.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteMachinePolicy: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteMachinePolicy", "id", id);
      const localVarPath = `/machinepolicies/{id}`.replace(
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
     * Deletes an existing machine policy.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteMachinePolicySpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "deleteMachinePolicySpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteMachinePolicySpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/machinepolicies/{id}`
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
     * @summary Get a Machine Policy by ID
     * @param {string} id ID of the MachinePolicy to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMachinePolicyById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getMachinePolicyById", "id", id);
      const localVarPath = `/machinepolicies/{id}`.replace(
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
     * @summary Get a Machine Policy by ID
     * @param {string} id ID of the MachinePolicy to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMachinePolicyByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getMachinePolicyByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getMachinePolicyByIdSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/machinepolicies/{id}`
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
     * Gets a template for a new Machine Policy, which includes any defaults.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMachinePolicyTemplate: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/machinepolicies/template`;
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
     * Gets a template for a new Machine Policy, which includes any defaults.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMachinePolicyTemplateSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getMachinePolicyTemplateSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/machinepolicies/template`.replace(
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
     * Lists all of the machine policies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of MachinePolicyResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexMachinePolicies: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/machinepolicies`;
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
     * Lists all of the machine policies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of MachinePolicyResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexMachinePoliciesSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexMachinePoliciesSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/machinepolicies`.replace(
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
     *
     * @summary Lists all of the machines that belong to the given Machine Policy
     * @param {string} id ID of the MachinePolicy to load
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexMachinePolicyDeploymentTargets: async (
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexMachinePolicyDeploymentTargets", "id", id);
      const localVarPath = `/machinepolicies/{id}/machines`.replace(
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
     *
     * @summary Lists all of the machines that belong to the given Machine Policy
     * @param {string} id ID of the MachinePolicy to load
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexMachinePolicyDeploymentTargetsSpaces: async (
      id: string,
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexMachinePolicyDeploymentTargetsSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexMachinePolicyDeploymentTargetsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/machinepolicies/{id}/machines`
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
     *
     * @summary Lists all of the workers that belong to the given Machine Policy
     * @param {string} id ID of the Machine Policy to load
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexMachinePolicyWorkers: async (
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexMachinePolicyWorkers", "id", id);
      const localVarPath = `/machinepolicies/{id}/workers`.replace(
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
     *
     * @summary Lists all of the workers that belong to the given Machine Policy
     * @param {string} id ID of the Machine Policy to load
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexMachinePolicyWorkersSpaces: async (
      id: string,
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexMachinePolicyWorkersSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexMachinePolicyWorkersSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/machinepolicies/{id}/workers`
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
     * Lists all the machine policies in the supplied Octopus Deploy Space.
     * @summary Get a list of MachinePolicyResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllMachinePolicies: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/machinepolicies/all`;
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
     * Lists all the machine policies in the supplied Octopus Deploy Space.
     * @summary Get a list of MachinePolicyResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllMachinePoliciesSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "listAllMachinePoliciesSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/machinepolicies/all`.replace(
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
     * Modifies an existing machine policy.
     * @summary Modify a MachinePolicyResource by ID
     * @param {string} id ID of the MachinePolicyResource to modify
     * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMachinePolicy: async (
      id: string,
      body?: MachinePolicyResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateMachinePolicy", "id", id);
      const localVarPath = `/machinepolicies/{id}`.replace(
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
     * Modifies an existing machine policy.
     * @summary Modify a MachinePolicyResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the MachinePolicyResource to modify
     * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMachinePolicySpaces: async (
      baseSpaceId: string,
      id: string,
      body?: MachinePolicyResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "updateMachinePolicySpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateMachinePolicySpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/machinepolicies/{id}`
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
 * MachinePoliciesApi - functional programming interface
 * @export
 */
export const MachinePoliciesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = MachinePoliciesApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Creates a new machine policy.
     * @summary Create a MachinePolicyResource
     * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createMachinePolicy(
      body?: MachinePolicyResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachinePolicyResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createMachinePolicy(
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
     * Creates a new machine policy.
     * @summary Create a MachinePolicyResource
     * @param {string} baseSpaceId ID of the space
     * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createMachinePolicySpaces(
      baseSpaceId: string,
      body?: MachinePolicyResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachinePolicyResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createMachinePolicySpaces(
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
     * Deletes an existing machine policy.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteMachinePolicy(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMachinePolicy(
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
     * Deletes an existing machine policy.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteMachinePolicySpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMachinePolicySpaces(
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
     * @summary Get a Machine Policy by ID
     * @param {string} id ID of the MachinePolicy to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMachinePolicyById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachinePolicyResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getMachinePolicyById(
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
     * @summary Get a Machine Policy by ID
     * @param {string} id ID of the MachinePolicy to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMachinePolicyByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachinePolicyResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getMachinePolicyByIdSpaces(
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
     * Gets a template for a new Machine Policy, which includes any defaults.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMachinePolicyTemplate(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachinePolicyResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getMachinePolicyTemplate(
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
     * Gets a template for a new Machine Policy, which includes any defaults.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMachinePolicyTemplateSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachinePolicyResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getMachinePolicyTemplateSpaces(
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
     * Lists all of the machine policies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of MachinePolicyResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexMachinePolicies(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachinePolicyResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexMachinePolicies(
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
     * Lists all of the machine policies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of MachinePolicyResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexMachinePoliciesSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachinePolicyResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexMachinePoliciesSpaces(
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
     *
     * @summary Lists all of the machines that belong to the given Machine Policy
     * @param {string} id ID of the MachinePolicy to load
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexMachinePolicyDeploymentTargets(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentTargetResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexMachinePolicyDeploymentTargets(
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
     *
     * @summary Lists all of the machines that belong to the given Machine Policy
     * @param {string} id ID of the MachinePolicy to load
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexMachinePolicyDeploymentTargetsSpaces(
      id: string,
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
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexMachinePolicyDeploymentTargetsSpaces(
        id,
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
     *
     * @summary Lists all of the workers that belong to the given Machine Policy
     * @param {string} id ID of the Machine Policy to load
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexMachinePolicyWorkers(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WorkerResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexMachinePolicyWorkers(
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
     *
     * @summary Lists all of the workers that belong to the given Machine Policy
     * @param {string} id ID of the Machine Policy to load
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexMachinePolicyWorkersSpaces(
      id: string,
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
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexMachinePolicyWorkersSpaces(
        id,
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
     * Lists all the machine policies in the supplied Octopus Deploy Space.
     * @summary Get a list of MachinePolicyResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllMachinePolicies(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<MachinePolicyResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllMachinePolicies(
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
     * Lists all the machine policies in the supplied Octopus Deploy Space.
     * @summary Get a list of MachinePolicyResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllMachinePoliciesSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<MachinePolicyResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllMachinePoliciesSpaces(
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
     * Modifies an existing machine policy.
     * @summary Modify a MachinePolicyResource by ID
     * @param {string} id ID of the MachinePolicyResource to modify
     * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateMachinePolicy(
      id: string,
      body?: MachinePolicyResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachinePolicyResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateMachinePolicy(
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
     * Modifies an existing machine policy.
     * @summary Modify a MachinePolicyResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the MachinePolicyResource to modify
     * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateMachinePolicySpaces(
      baseSpaceId: string,
      id: string,
      body?: MachinePolicyResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MachinePolicyResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateMachinePolicySpaces(
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
 * MachinePoliciesApi - factory interface
 * @export
 */
export const MachinePoliciesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = MachinePoliciesApiFp(configuration);
  return {
    /**
     * Creates a new machine policy.
     * @summary Create a MachinePolicyResource
     * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createMachinePolicy(
      body?: MachinePolicyResource,
      options?: any
    ): AxiosPromise<MachinePolicyResource> {
      return localVarFp
        .createMachinePolicy(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new machine policy.
     * @summary Create a MachinePolicyResource
     * @param {string} baseSpaceId ID of the space
     * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createMachinePolicySpaces(
      baseSpaceId: string,
      body?: MachinePolicyResource,
      options?: any
    ): AxiosPromise<MachinePolicyResource> {
      return localVarFp
        .createMachinePolicySpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing machine policy.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteMachinePolicy(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteMachinePolicy(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing machine policy.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteMachinePolicySpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteMachinePolicySpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Machine Policy by ID
     * @param {string} id ID of the MachinePolicy to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMachinePolicyById(
      id: string,
      options?: any
    ): AxiosPromise<MachinePolicyResource> {
      return localVarFp
        .getMachinePolicyById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Machine Policy by ID
     * @param {string} id ID of the MachinePolicy to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMachinePolicyByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<MachinePolicyResource> {
      return localVarFp
        .getMachinePolicyByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a template for a new Machine Policy, which includes any defaults.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMachinePolicyTemplate(
      options?: any
    ): AxiosPromise<MachinePolicyResource> {
      return localVarFp
        .getMachinePolicyTemplate(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a template for a new Machine Policy, which includes any defaults.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMachinePolicyTemplateSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<MachinePolicyResource> {
      return localVarFp
        .getMachinePolicyTemplateSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the machine policies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of MachinePolicyResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexMachinePolicies(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<MachinePolicyResourceCollection> {
      return localVarFp
        .indexMachinePolicies(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the machine policies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of MachinePolicyResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexMachinePoliciesSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<MachinePolicyResourceCollection> {
      return localVarFp
        .indexMachinePoliciesSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Lists all of the machines that belong to the given Machine Policy
     * @param {string} id ID of the MachinePolicy to load
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexMachinePolicyDeploymentTargets(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<DeploymentTargetResourceCollection> {
      return localVarFp
        .indexMachinePolicyDeploymentTargets(id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Lists all of the machines that belong to the given Machine Policy
     * @param {string} id ID of the MachinePolicy to load
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexMachinePolicyDeploymentTargetsSpaces(
      id: string,
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<DeploymentTargetResourceCollection> {
      return localVarFp
        .indexMachinePolicyDeploymentTargetsSpaces(
          id,
          baseSpaceId,
          skip,
          take,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Lists all of the workers that belong to the given Machine Policy
     * @param {string} id ID of the Machine Policy to load
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexMachinePolicyWorkers(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<WorkerResourceCollection> {
      return localVarFp
        .indexMachinePolicyWorkers(id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Lists all of the workers that belong to the given Machine Policy
     * @param {string} id ID of the Machine Policy to load
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexMachinePolicyWorkersSpaces(
      id: string,
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<WorkerResourceCollection> {
      return localVarFp
        .indexMachinePolicyWorkersSpaces(id, baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the machine policies in the supplied Octopus Deploy Space.
     * @summary Get a list of MachinePolicyResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllMachinePolicies(
      options?: any
    ): AxiosPromise<Array<MachinePolicyResource>> {
      return localVarFp
        .listAllMachinePolicies(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the machine policies in the supplied Octopus Deploy Space.
     * @summary Get a list of MachinePolicyResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllMachinePoliciesSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<MachinePolicyResource>> {
      return localVarFp
        .listAllMachinePoliciesSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing machine policy.
     * @summary Modify a MachinePolicyResource by ID
     * @param {string} id ID of the MachinePolicyResource to modify
     * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMachinePolicy(
      id: string,
      body?: MachinePolicyResource,
      options?: any
    ): AxiosPromise<MachinePolicyResource> {
      return localVarFp
        .updateMachinePolicy(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing machine policy.
     * @summary Modify a MachinePolicyResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the MachinePolicyResource to modify
     * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMachinePolicySpaces(
      baseSpaceId: string,
      id: string,
      body?: MachinePolicyResource,
      options?: any
    ): AxiosPromise<MachinePolicyResource> {
      return localVarFp
        .updateMachinePolicySpaces(baseSpaceId, id, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * MachinePoliciesApi - interface
 * @export
 * @interface MachinePoliciesApi
 */
export interface MachinePoliciesApiInterface {
  /**
   * Creates a new machine policy.
   * @summary Create a MachinePolicyResource
   * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  createMachinePolicy(
    body?: MachinePolicyResource,
    options?: any
  ): AxiosPromise<MachinePolicyResource>;

  /**
   * Creates a new machine policy.
   * @summary Create a MachinePolicyResource
   * @param {string} baseSpaceId ID of the space
   * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  createMachinePolicySpaces(
    baseSpaceId: string,
    body?: MachinePolicyResource,
    options?: any
  ): AxiosPromise<MachinePolicyResource>;

  /**
   * Deletes an existing machine policy.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  deleteMachinePolicy(id: string, options?: any): AxiosPromise<void>;

  /**
   * Deletes an existing machine policy.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  deleteMachinePolicySpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   *
   * @summary Get a Machine Policy by ID
   * @param {string} id ID of the MachinePolicy to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  getMachinePolicyById(
    id: string,
    options?: any
  ): AxiosPromise<MachinePolicyResource>;

  /**
   *
   * @summary Get a Machine Policy by ID
   * @param {string} id ID of the MachinePolicy to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  getMachinePolicyByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<MachinePolicyResource>;

  /**
   * Gets a template for a new Machine Policy, which includes any defaults.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  getMachinePolicyTemplate(options?: any): AxiosPromise<MachinePolicyResource>;

  /**
   * Gets a template for a new Machine Policy, which includes any defaults.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  getMachinePolicyTemplateSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<MachinePolicyResource>;

  /**
   * Lists all of the machine policies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of MachinePolicyResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  indexMachinePolicies(
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<MachinePolicyResourceCollection>;

  /**
   * Lists all of the machine policies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of MachinePolicyResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  indexMachinePoliciesSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<MachinePolicyResourceCollection>;

  /**
   *
   * @summary Lists all of the machines that belong to the given Machine Policy
   * @param {string} id ID of the MachinePolicy to load
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 10
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  indexMachinePolicyDeploymentTargets(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<DeploymentTargetResourceCollection>;

  /**
   *
   * @summary Lists all of the machines that belong to the given Machine Policy
   * @param {string} id ID of the MachinePolicy to load
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 10
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  indexMachinePolicyDeploymentTargetsSpaces(
    id: string,
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<DeploymentTargetResourceCollection>;

  /**
   *
   * @summary Lists all of the workers that belong to the given Machine Policy
   * @param {string} id ID of the Machine Policy to load
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 10
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  indexMachinePolicyWorkers(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<WorkerResourceCollection>;

  /**
   *
   * @summary Lists all of the workers that belong to the given Machine Policy
   * @param {string} id ID of the Machine Policy to load
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 10
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  indexMachinePolicyWorkersSpaces(
    id: string,
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<WorkerResourceCollection>;

  /**
   * Lists all the machine policies in the supplied Octopus Deploy Space.
   * @summary Get a list of MachinePolicyResources
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  listAllMachinePolicies(
    options?: any
  ): AxiosPromise<Array<MachinePolicyResource>>;

  /**
   * Lists all the machine policies in the supplied Octopus Deploy Space.
   * @summary Get a list of MachinePolicyResources
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  listAllMachinePoliciesSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<MachinePolicyResource>>;

  /**
   * Modifies an existing machine policy.
   * @summary Modify a MachinePolicyResource by ID
   * @param {string} id ID of the MachinePolicyResource to modify
   * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  updateMachinePolicy(
    id: string,
    body?: MachinePolicyResource,
    options?: any
  ): AxiosPromise<MachinePolicyResource>;

  /**
   * Modifies an existing machine policy.
   * @summary Modify a MachinePolicyResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the MachinePolicyResource to modify
   * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApiInterface
   */
  updateMachinePolicySpaces(
    baseSpaceId: string,
    id: string,
    body?: MachinePolicyResource,
    options?: any
  ): AxiosPromise<MachinePolicyResource>;
}

/**
 * MachinePoliciesApi - object-oriented interface
 * @export
 * @class MachinePoliciesApi
 * @extends {BaseAPI}
 */
export class MachinePoliciesApi
  extends BaseAPI
  implements MachinePoliciesApiInterface {
  /**
   * Creates a new machine policy.
   * @summary Create a MachinePolicyResource
   * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public createMachinePolicy(body?: MachinePolicyResource, options?: any) {
    return MachinePoliciesApiFp(this.configuration)
      .createMachinePolicy(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new machine policy.
   * @summary Create a MachinePolicyResource
   * @param {string} baseSpaceId ID of the space
   * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public createMachinePolicySpaces(
    baseSpaceId: string,
    body?: MachinePolicyResource,
    options?: any
  ) {
    return MachinePoliciesApiFp(this.configuration)
      .createMachinePolicySpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing machine policy.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public deleteMachinePolicy(id: string, options?: any) {
    return MachinePoliciesApiFp(this.configuration)
      .deleteMachinePolicy(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing machine policy.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public deleteMachinePolicySpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return MachinePoliciesApiFp(this.configuration)
      .deleteMachinePolicySpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Machine Policy by ID
   * @param {string} id ID of the MachinePolicy to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public getMachinePolicyById(id: string, options?: any) {
    return MachinePoliciesApiFp(this.configuration)
      .getMachinePolicyById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Machine Policy by ID
   * @param {string} id ID of the MachinePolicy to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public getMachinePolicyByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ) {
    return MachinePoliciesApiFp(this.configuration)
      .getMachinePolicyByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a template for a new Machine Policy, which includes any defaults.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public getMachinePolicyTemplate(options?: any) {
    return MachinePoliciesApiFp(this.configuration)
      .getMachinePolicyTemplate(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a template for a new Machine Policy, which includes any defaults.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public getMachinePolicyTemplateSpaces(baseSpaceId: string, options?: any) {
    return MachinePoliciesApiFp(this.configuration)
      .getMachinePolicyTemplateSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the machine policies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of MachinePolicyResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public indexMachinePolicies(skip?: number, take?: number, options?: any) {
    return MachinePoliciesApiFp(this.configuration)
      .indexMachinePolicies(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the machine policies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of MachinePolicyResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public indexMachinePoliciesSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return MachinePoliciesApiFp(this.configuration)
      .indexMachinePoliciesSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Lists all of the machines that belong to the given Machine Policy
   * @param {string} id ID of the MachinePolicy to load
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 10
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public indexMachinePolicyDeploymentTargets(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return MachinePoliciesApiFp(this.configuration)
      .indexMachinePolicyDeploymentTargets(id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Lists all of the machines that belong to the given Machine Policy
   * @param {string} id ID of the MachinePolicy to load
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 10
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public indexMachinePolicyDeploymentTargetsSpaces(
    id: string,
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return MachinePoliciesApiFp(this.configuration)
      .indexMachinePolicyDeploymentTargetsSpaces(
        id,
        baseSpaceId,
        skip,
        take,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Lists all of the workers that belong to the given Machine Policy
   * @param {string} id ID of the Machine Policy to load
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 10
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public indexMachinePolicyWorkers(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return MachinePoliciesApiFp(this.configuration)
      .indexMachinePolicyWorkers(id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Lists all of the workers that belong to the given Machine Policy
   * @param {string} id ID of the Machine Policy to load
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 10
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public indexMachinePolicyWorkersSpaces(
    id: string,
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return MachinePoliciesApiFp(this.configuration)
      .indexMachinePolicyWorkersSpaces(id, baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the machine policies in the supplied Octopus Deploy Space.
   * @summary Get a list of MachinePolicyResources
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public listAllMachinePolicies(options?: any) {
    return MachinePoliciesApiFp(this.configuration)
      .listAllMachinePolicies(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the machine policies in the supplied Octopus Deploy Space.
   * @summary Get a list of MachinePolicyResources
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public listAllMachinePoliciesSpaces(baseSpaceId: string, options?: any) {
    return MachinePoliciesApiFp(this.configuration)
      .listAllMachinePoliciesSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing machine policy.
   * @summary Modify a MachinePolicyResource by ID
   * @param {string} id ID of the MachinePolicyResource to modify
   * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public updateMachinePolicy(
    id: string,
    body?: MachinePolicyResource,
    options?: any
  ) {
    return MachinePoliciesApiFp(this.configuration)
      .updateMachinePolicy(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing machine policy.
   * @summary Modify a MachinePolicyResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the MachinePolicyResource to modify
   * @param {MachinePolicyResource} [body] The MachinePolicyResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachinePoliciesApi
   */
  public updateMachinePolicySpaces(
    baseSpaceId: string,
    id: string,
    body?: MachinePolicyResource,
    options?: any
  ) {
    return MachinePoliciesApiFp(this.configuration)
      .updateMachinePolicySpaces(baseSpaceId, id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
