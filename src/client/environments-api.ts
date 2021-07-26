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
import { DeploymentEnvironmentSettingsMetadata } from "../model";
// @ts-ignore
import { DeploymentTargetResourceCollection } from "../model";
// @ts-ignore
import { EnvironmentResource } from "../model";
// @ts-ignore
import { EnvironmentResourceCollection } from "../model";
// @ts-ignore
import { EnvironmentsSummaryResource } from "../model";
// @ts-ignore
import { VariablesScopedToEnvironmentResponse } from "../model";
/**
 * EnvironmentsApi - axios parameter creator
 * @export
 */
export const EnvironmentsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new environment.
     * @summary Create a EnvironmentResource
     * @param {EnvironmentResource} [body] The EnvironmentResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createEnvironment: async (
      body?: EnvironmentResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/environments`;
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
     * Creates a new environment.
     * @summary Create a EnvironmentResource
     * @param {string} baseSpaceId ID of the space
     * @param {EnvironmentResource} [body] The EnvironmentResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createEnvironmentSpaces: async (
      baseSpaceId: string,
      body?: EnvironmentResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createEnvironmentSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/environments`.replace(
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
     * Deletes an existing environment.
     * @summary Delete a EnvironmentResource by ID
     * @param {string} id ID of the EnvironmentResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteEnvironment: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteEnvironment", "id", id);
      const localVarPath = `/environments/{id}`.replace(
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
     * Deletes an existing environment.
     * @summary Delete a EnvironmentResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the EnvironmentResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteEnvironmentSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("deleteEnvironmentSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteEnvironmentSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/environments/{id}`
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
     * Gets the custom settings metadata from the extensions.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentEnvironmentSettingsMetadata: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getDeploymentEnvironmentSettingsMetadata", "id", id);
      const localVarPath = `/environments/{id}/metadata`.replace(
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
     * Gets the custom settings metadata from the extensions.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentEnvironmentSettingsMetadataSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getDeploymentEnvironmentSettingsMetadataSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        "getDeploymentEnvironmentSettingsMetadataSpaces",
        "id",
        id
      );
      const localVarPath = `/{baseSpaceId}/environments/{id}/metadata`
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
     *
     * @summary Get an Environment by ID
     * @param {string} id ID of the Environment to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEnvironmentById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getEnvironmentById", "id", id);
      const localVarPath = `/environments/{id}`.replace(
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
     * @summary Get an Environment by ID
     * @param {string} id ID of the Environment to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEnvironmentByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getEnvironmentByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getEnvironmentByIdSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/environments/{id}`
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
     * Lists all environments, including a summary of machine information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEnvironmentsSummary: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/environments/summary`;
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
     * Lists all environments, including a summary of machine information
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEnvironmentsSummarySpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getEnvironmentsSummarySpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/environments/summary`.replace(
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
     * Lists all the variable set names (projects and library variable sets) that have variables that are scoped to only the given environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariablesScopedToEnvironment: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getVariablesScopedToEnvironment", "id", id);
      const localVarPath =
        `/environments/{id}/singlyScopedVariableDetails`.replace(
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
     * Lists all the variable set names (projects and library variable sets) that have variables that are scoped to only the given environment
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariablesScopedToEnvironmentSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getVariablesScopedToEnvironmentSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getVariablesScopedToEnvironmentSpaces", "id", id);
      const localVarPath =
        `/{baseSpaceId}/environments/{id}/singlyScopedVariableDetails`
          .replace(
            `{${"baseSpaceId"}}`,
            encodeURIComponent(String(baseSpaceId))
          )
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
     * Lists all of the machines that belong to the given environment.
     * @summary Get a list of DeploymentTargetResources for the given EnvironmentResource
     * @param {string} id ID of the Environment
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexEnvironmentDeploymentTargets: async (
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexEnvironmentDeploymentTargets", "id", id);
      const localVarPath = `/environments/{id}/machines`.replace(
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
     * Lists all of the machines that belong to the given environment.
     * @summary Get a list of DeploymentTargetResources for the given EnvironmentResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Environment
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexEnvironmentDeploymentTargetsSpaces: async (
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexEnvironmentDeploymentTargetsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexEnvironmentDeploymentTargetsSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/environments/{id}/machines`
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
     * Lists all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
     * @summary Get a list of EnvironmentResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexEnvironments: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/environments`;
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
     * Lists all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
     * @summary Get a list of EnvironmentResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexEnvironmentsSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("indexEnvironmentsSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/environments`.replace(
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
     * Lists the name and ID of all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
     * @summary Get a list of EnvironmentResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllEnvironments: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/environments/all`;
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
     * Lists the name and ID of all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
     * @summary Get a list of EnvironmentResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllEnvironmentsSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "listAllEnvironmentsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/environments/all`.replace(
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
     * Modifies an existing environment.
     * @summary Modify a EnvironmentResource by ID
     * @param {string} id ID of the EnvironmentResource to modify
     * @param {EnvironmentResource} [body] The EnvironmentResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateEnvironment: async (
      id: string,
      body?: EnvironmentResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateEnvironment", "id", id);
      const localVarPath = `/environments/{id}`.replace(
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
     * Modifies an existing environment.
     * @summary Modify a EnvironmentResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the EnvironmentResource to modify
     * @param {EnvironmentResource} [body] The EnvironmentResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateEnvironmentSpaces: async (
      baseSpaceId: string,
      id: string,
      body?: EnvironmentResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("updateEnvironmentSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateEnvironmentSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/environments/{id}`
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
    /**
     * Takes an array of environment IDs as the request body, uses the order of items in the array to sort the environments on the server. The ID of every environment must be specified.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSortEnvironments: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/environments/sortorder`;
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
     * Takes an array of environment IDs as the request body, uses the order of items in the array to sort the environments on the server. The ID of every environment must be specified.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSortEnvironmentsSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "updateSortEnvironmentsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/environments/sortorder`.replace(
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
 * EnvironmentsApi - functional programming interface
 * @export
 */
export const EnvironmentsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    EnvironmentsApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a new environment.
     * @summary Create a EnvironmentResource
     * @param {EnvironmentResource} [body] The EnvironmentResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createEnvironment(
      body?: EnvironmentResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EnvironmentResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createEnvironment(body, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Creates a new environment.
     * @summary Create a EnvironmentResource
     * @param {string} baseSpaceId ID of the space
     * @param {EnvironmentResource} [body] The EnvironmentResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createEnvironmentSpaces(
      baseSpaceId: string,
      body?: EnvironmentResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EnvironmentResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createEnvironmentSpaces(
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
     * Deletes an existing environment.
     * @summary Delete a EnvironmentResource by ID
     * @param {string} id ID of the EnvironmentResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteEnvironment(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteEnvironment(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Deletes an existing environment.
     * @summary Delete a EnvironmentResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the EnvironmentResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteEnvironmentSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteEnvironmentSpaces(
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
     * Gets the custom settings metadata from the extensions.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentEnvironmentSettingsMetadata(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<DeploymentEnvironmentSettingsMetadata>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDeploymentEnvironmentSettingsMetadata(
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
     * Gets the custom settings metadata from the extensions.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentEnvironmentSettingsMetadataSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<DeploymentEnvironmentSettingsMetadata>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDeploymentEnvironmentSettingsMetadataSpaces(
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
     * @summary Get an Environment by ID
     * @param {string} id ID of the Environment to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getEnvironmentById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EnvironmentResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getEnvironmentById(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Get an Environment by ID
     * @param {string} id ID of the Environment to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getEnvironmentByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EnvironmentResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getEnvironmentByIdSpaces(
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
     * Lists all environments, including a summary of machine information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getEnvironmentsSummary(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EnvironmentsSummaryResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getEnvironmentsSummary(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists all environments, including a summary of machine information
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getEnvironmentsSummarySpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EnvironmentsSummaryResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getEnvironmentsSummarySpaces(
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
     * Lists all the variable set names (projects and library variable sets) that have variables that are scoped to only the given environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getVariablesScopedToEnvironment(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<VariablesScopedToEnvironmentResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getVariablesScopedToEnvironment(
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
     * Lists all the variable set names (projects and library variable sets) that have variables that are scoped to only the given environment
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getVariablesScopedToEnvironmentSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<VariablesScopedToEnvironmentResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getVariablesScopedToEnvironmentSpaces(
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
     * Lists all of the machines that belong to the given environment.
     * @summary Get a list of DeploymentTargetResources for the given EnvironmentResource
     * @param {string} id ID of the Environment
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexEnvironmentDeploymentTargets(
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
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexEnvironmentDeploymentTargets(
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
     * Lists all of the machines that belong to the given environment.
     * @summary Get a list of DeploymentTargetResources for the given EnvironmentResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Environment
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexEnvironmentDeploymentTargetsSpaces(
      baseSpaceId: string,
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
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexEnvironmentDeploymentTargetsSpaces(
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
     * Lists all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
     * @summary Get a list of EnvironmentResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexEnvironments(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EnvironmentResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexEnvironments(skip, take, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
     * @summary Get a list of EnvironmentResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexEnvironmentsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EnvironmentResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexEnvironmentsSpaces(
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
     * Lists the name and ID of all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
     * @summary Get a list of EnvironmentResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllEnvironments(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<EnvironmentResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listAllEnvironments(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists the name and ID of all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
     * @summary Get a list of EnvironmentResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllEnvironmentsSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<EnvironmentResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listAllEnvironmentsSpaces(
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
     * Modifies an existing environment.
     * @summary Modify a EnvironmentResource by ID
     * @param {string} id ID of the EnvironmentResource to modify
     * @param {EnvironmentResource} [body] The EnvironmentResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateEnvironment(
      id: string,
      body?: EnvironmentResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EnvironmentResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateEnvironment(id, body, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Modifies an existing environment.
     * @summary Modify a EnvironmentResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the EnvironmentResource to modify
     * @param {EnvironmentResource} [body] The EnvironmentResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateEnvironmentSpaces(
      baseSpaceId: string,
      id: string,
      body?: EnvironmentResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EnvironmentResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateEnvironmentSpaces(
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
    /**
     * Takes an array of environment IDs as the request body, uses the order of items in the array to sort the environments on the server. The ID of every environment must be specified.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSortEnvironments(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateSortEnvironments(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Takes an array of environment IDs as the request body, uses the order of items in the array to sort the environments on the server. The ID of every environment must be specified.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSortEnvironmentsSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateSortEnvironmentsSpaces(
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
  };
};

/**
 * EnvironmentsApi - factory interface
 * @export
 */
export const EnvironmentsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = EnvironmentsApiFp(configuration);
  return {
    /**
     * Creates a new environment.
     * @summary Create a EnvironmentResource
     * @param {EnvironmentResource} [body] The EnvironmentResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createEnvironment(
      body?: EnvironmentResource,
      options?: any
    ): AxiosPromise<EnvironmentResource> {
      return localVarFp
        .createEnvironment(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new environment.
     * @summary Create a EnvironmentResource
     * @param {string} baseSpaceId ID of the space
     * @param {EnvironmentResource} [body] The EnvironmentResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createEnvironmentSpaces(
      baseSpaceId: string,
      body?: EnvironmentResource,
      options?: any
    ): AxiosPromise<EnvironmentResource> {
      return localVarFp
        .createEnvironmentSpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing environment.
     * @summary Delete a EnvironmentResource by ID
     * @param {string} id ID of the EnvironmentResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteEnvironment(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteEnvironment(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing environment.
     * @summary Delete a EnvironmentResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the EnvironmentResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteEnvironmentSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteEnvironmentSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets the custom settings metadata from the extensions.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentEnvironmentSettingsMetadata(
      id: string,
      options?: any
    ): AxiosPromise<Array<DeploymentEnvironmentSettingsMetadata>> {
      return localVarFp
        .getDeploymentEnvironmentSettingsMetadata(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets the custom settings metadata from the extensions.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentEnvironmentSettingsMetadataSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<Array<DeploymentEnvironmentSettingsMetadata>> {
      return localVarFp
        .getDeploymentEnvironmentSettingsMetadataSpaces(
          baseSpaceId,
          id,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get an Environment by ID
     * @param {string} id ID of the Environment to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEnvironmentById(
      id: string,
      options?: any
    ): AxiosPromise<EnvironmentResource> {
      return localVarFp
        .getEnvironmentById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get an Environment by ID
     * @param {string} id ID of the Environment to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEnvironmentByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<EnvironmentResource> {
      return localVarFp
        .getEnvironmentByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all environments, including a summary of machine information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEnvironmentsSummary(
      options?: any
    ): AxiosPromise<EnvironmentsSummaryResource> {
      return localVarFp
        .getEnvironmentsSummary(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all environments, including a summary of machine information
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEnvironmentsSummarySpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<EnvironmentsSummaryResource> {
      return localVarFp
        .getEnvironmentsSummarySpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the variable set names (projects and library variable sets) that have variables that are scoped to only the given environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariablesScopedToEnvironment(
      id: string,
      options?: any
    ): AxiosPromise<VariablesScopedToEnvironmentResponse> {
      return localVarFp
        .getVariablesScopedToEnvironment(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the variable set names (projects and library variable sets) that have variables that are scoped to only the given environment
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariablesScopedToEnvironmentSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<VariablesScopedToEnvironmentResponse> {
      return localVarFp
        .getVariablesScopedToEnvironmentSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the machines that belong to the given environment.
     * @summary Get a list of DeploymentTargetResources for the given EnvironmentResource
     * @param {string} id ID of the Environment
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexEnvironmentDeploymentTargets(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<DeploymentTargetResourceCollection> {
      return localVarFp
        .indexEnvironmentDeploymentTargets(id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the machines that belong to the given environment.
     * @summary Get a list of DeploymentTargetResources for the given EnvironmentResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Environment
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexEnvironmentDeploymentTargetsSpaces(
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<DeploymentTargetResourceCollection> {
      return localVarFp
        .indexEnvironmentDeploymentTargetsSpaces(
          baseSpaceId,
          id,
          skip,
          take,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
     * @summary Get a list of EnvironmentResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexEnvironments(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<EnvironmentResourceCollection> {
      return localVarFp
        .indexEnvironments(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
     * @summary Get a list of EnvironmentResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexEnvironmentsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<EnvironmentResourceCollection> {
      return localVarFp
        .indexEnvironmentsSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the name and ID of all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
     * @summary Get a list of EnvironmentResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllEnvironments(
      options?: any
    ): AxiosPromise<Array<EnvironmentResource>> {
      return localVarFp
        .listAllEnvironments(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the name and ID of all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
     * @summary Get a list of EnvironmentResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllEnvironmentsSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<EnvironmentResource>> {
      return localVarFp
        .listAllEnvironmentsSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing environment.
     * @summary Modify a EnvironmentResource by ID
     * @param {string} id ID of the EnvironmentResource to modify
     * @param {EnvironmentResource} [body] The EnvironmentResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateEnvironment(
      id: string,
      body?: EnvironmentResource,
      options?: any
    ): AxiosPromise<EnvironmentResource> {
      return localVarFp
        .updateEnvironment(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing environment.
     * @summary Modify a EnvironmentResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the EnvironmentResource to modify
     * @param {EnvironmentResource} [body] The EnvironmentResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateEnvironmentSpaces(
      baseSpaceId: string,
      id: string,
      body?: EnvironmentResource,
      options?: any
    ): AxiosPromise<EnvironmentResource> {
      return localVarFp
        .updateEnvironmentSpaces(baseSpaceId, id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Takes an array of environment IDs as the request body, uses the order of items in the array to sort the environments on the server. The ID of every environment must be specified.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSortEnvironments(options?: any): AxiosPromise<void> {
      return localVarFp
        .updateSortEnvironments(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Takes an array of environment IDs as the request body, uses the order of items in the array to sort the environments on the server. The ID of every environment must be specified.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSortEnvironmentsSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .updateSortEnvironmentsSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * EnvironmentsApi - object-oriented interface
 * @export
 * @class EnvironmentsApi
 * @extends {BaseAPI}
 */
export class EnvironmentsApi extends BaseAPI {
  /**
   * Creates a new environment.
   * @summary Create a EnvironmentResource
   * @param {EnvironmentResource} [body] The EnvironmentResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public createEnvironment(body?: EnvironmentResource, options?: any) {
    return EnvironmentsApiFp(this.configuration)
      .createEnvironment(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new environment.
   * @summary Create a EnvironmentResource
   * @param {string} baseSpaceId ID of the space
   * @param {EnvironmentResource} [body] The EnvironmentResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public createEnvironmentSpaces(
    baseSpaceId: string,
    body?: EnvironmentResource,
    options?: any
  ) {
    return EnvironmentsApiFp(this.configuration)
      .createEnvironmentSpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing environment.
   * @summary Delete a EnvironmentResource by ID
   * @param {string} id ID of the EnvironmentResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public deleteEnvironment(id: string, options?: any) {
    return EnvironmentsApiFp(this.configuration)
      .deleteEnvironment(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing environment.
   * @summary Delete a EnvironmentResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the EnvironmentResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public deleteEnvironmentSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return EnvironmentsApiFp(this.configuration)
      .deleteEnvironmentSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets the custom settings metadata from the extensions.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public getDeploymentEnvironmentSettingsMetadata(id: string, options?: any) {
    return EnvironmentsApiFp(this.configuration)
      .getDeploymentEnvironmentSettingsMetadata(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets the custom settings metadata from the extensions.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public getDeploymentEnvironmentSettingsMetadataSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return EnvironmentsApiFp(this.configuration)
      .getDeploymentEnvironmentSettingsMetadataSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get an Environment by ID
   * @param {string} id ID of the Environment to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public getEnvironmentById(id: string, options?: any) {
    return EnvironmentsApiFp(this.configuration)
      .getEnvironmentById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get an Environment by ID
   * @param {string} id ID of the Environment to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public getEnvironmentByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ) {
    return EnvironmentsApiFp(this.configuration)
      .getEnvironmentByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all environments, including a summary of machine information
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public getEnvironmentsSummary(options?: any) {
    return EnvironmentsApiFp(this.configuration)
      .getEnvironmentsSummary(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all environments, including a summary of machine information
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public getEnvironmentsSummarySpaces(baseSpaceId: string, options?: any) {
    return EnvironmentsApiFp(this.configuration)
      .getEnvironmentsSummarySpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the variable set names (projects and library variable sets) that have variables that are scoped to only the given environment
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public getVariablesScopedToEnvironment(id: string, options?: any) {
    return EnvironmentsApiFp(this.configuration)
      .getVariablesScopedToEnvironment(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the variable set names (projects and library variable sets) that have variables that are scoped to only the given environment
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public getVariablesScopedToEnvironmentSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return EnvironmentsApiFp(this.configuration)
      .getVariablesScopedToEnvironmentSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the machines that belong to the given environment.
   * @summary Get a list of DeploymentTargetResources for the given EnvironmentResource
   * @param {string} id ID of the Environment
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public indexEnvironmentDeploymentTargets(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return EnvironmentsApiFp(this.configuration)
      .indexEnvironmentDeploymentTargets(id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the machines that belong to the given environment.
   * @summary Get a list of DeploymentTargetResources for the given EnvironmentResource
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the Environment
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public indexEnvironmentDeploymentTargetsSpaces(
    baseSpaceId: string,
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return EnvironmentsApiFp(this.configuration)
      .indexEnvironmentDeploymentTargetsSpaces(
        baseSpaceId,
        id,
        skip,
        take,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
   * @summary Get a list of EnvironmentResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public indexEnvironments(skip?: number, take?: number, options?: any) {
    return EnvironmentsApiFp(this.configuration)
      .indexEnvironments(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
   * @summary Get a list of EnvironmentResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public indexEnvironmentsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return EnvironmentsApiFp(this.configuration)
      .indexEnvironmentsSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the name and ID of all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
   * @summary Get a list of EnvironmentResources
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public listAllEnvironments(options?: any) {
    return EnvironmentsApiFp(this.configuration)
      .listAllEnvironments(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the name and ID of all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the `SortOrder` field on each environment.
   * @summary Get a list of EnvironmentResources
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public listAllEnvironmentsSpaces(baseSpaceId: string, options?: any) {
    return EnvironmentsApiFp(this.configuration)
      .listAllEnvironmentsSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing environment.
   * @summary Modify a EnvironmentResource by ID
   * @param {string} id ID of the EnvironmentResource to modify
   * @param {EnvironmentResource} [body] The EnvironmentResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public updateEnvironment(
    id: string,
    body?: EnvironmentResource,
    options?: any
  ) {
    return EnvironmentsApiFp(this.configuration)
      .updateEnvironment(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing environment.
   * @summary Modify a EnvironmentResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the EnvironmentResource to modify
   * @param {EnvironmentResource} [body] The EnvironmentResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public updateEnvironmentSpaces(
    baseSpaceId: string,
    id: string,
    body?: EnvironmentResource,
    options?: any
  ) {
    return EnvironmentsApiFp(this.configuration)
      .updateEnvironmentSpaces(baseSpaceId, id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Takes an array of environment IDs as the request body, uses the order of items in the array to sort the environments on the server. The ID of every environment must be specified.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public updateSortEnvironments(options?: any) {
    return EnvironmentsApiFp(this.configuration)
      .updateSortEnvironments(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Takes an array of environment IDs as the request body, uses the order of items in the array to sort the environments on the server. The ID of every environment must be specified.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EnvironmentsApi
   */
  public updateSortEnvironmentsSpaces(baseSpaceId: string, options?: any) {
    return EnvironmentsApiFp(this.configuration)
      .updateSortEnvironmentsSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
