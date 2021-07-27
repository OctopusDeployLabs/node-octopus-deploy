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
import { EnvironmentResource } from "../model";
// @ts-ignore
import { RunbookResource } from "../model";
// @ts-ignore
import { RunbookResourceCollection } from "../model";
// @ts-ignore
import { RunbookRunPreviewResource } from "../model";
// @ts-ignore
import { RunbookRunResource } from "../model";
// @ts-ignore
import { RunbookRunTemplateResource } from "../model";
// @ts-ignore
import { RunbookSnapshotTemplateResource } from "../model";
/**
 * RunbooksApi - axios parameter creator
 * @export
 */
export const RunbooksApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new process.
     * @summary Create a RunbookResource
     * @param {RunbookResource} [body] The RunbookResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRunbook: async (
      body?: RunbookResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/runbooks`;
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
     * Runs the published version of this Runbook.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRunbookRunForPublishedRunbookCreate: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createRunbookRunForPublishedRunbookCreate", "id", id);
      const localVarPath = `/runbooks/{id}/run`.replace(
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
     * Runs the published version of this Runbook.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRunbookRunForPublishedRunbookCreateSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createRunbookRunForPublishedRunbookCreateSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        "createRunbookRunForPublishedRunbookCreateSpaces",
        "id",
        id
      );
      const localVarPath = `/{baseSpaceId}/runbooks/{id}/run`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
     * Creates a new process.
     * @summary Create a RunbookResource
     * @param {string} baseSpaceId ID of the space
     * @param {RunbookResource} [body] The RunbookResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRunbookSpaces: async (
      baseSpaceId: string,
      body?: RunbookResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createRunbookSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/runbooks`.replace(
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
     * Deletes an existing Runbook.
     * @summary Delete a RunbookResource by ID
     * @param {string} id ID of the RunbookResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRunbook: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteRunbook", "id", id);
      const localVarPath = `/runbooks/{id}`.replace(
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
     * Deletes an existing Runbook.
     * @summary Delete a RunbookResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRunbookSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("deleteRunbookSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteRunbookSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/runbooks/{id}`
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
     * @summary Get a Runbook by ID
     * @param {string} id ID of the Runbook to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookById", "id", id);
      const localVarPath = `/runbooks/{id}`.replace(
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
     * @summary Get a Runbook by ID
     * @param {string} id ID of the Runbook to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getRunbookByIdSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/runbooks/{id}`
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
     * Lists all environments a Runbook can be run within based on its EnvironmentScope.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookEnvironments: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookEnvironments", "id", id);
      const localVarPath = `/runbooks/{id}/environments`.replace(
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
     * Lists all environments a Runbook can be run within based on its EnvironmentScope.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookEnvironmentsSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getRunbookEnvironmentsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookEnvironmentsSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/runbooks/{id}/environments`
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
     * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunPreviewForRunbook: async (
      environment: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'environment' is not null or undefined
      assertParamExists(
        "getRunbookRunPreviewForRunbook",
        "environment",
        environment
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookRunPreviewForRunbook", "id", id);
      const localVarPath = `/runbooks/{id}/runbookRuns/preview/{environment}`
        .replace(`{${"environment"}}`, encodeURIComponent(String(environment)))
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
     * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunPreviewForRunbook1: async (
      environment: string,
      id: string,
      tenant: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'environment' is not null or undefined
      assertParamExists(
        "getRunbookRunPreviewForRunbook1",
        "environment",
        environment
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookRunPreviewForRunbook1", "id", id);
      // verify required parameter 'tenant' is not null or undefined
      assertParamExists("getRunbookRunPreviewForRunbook1", "tenant", tenant);
      const localVarPath =
        `/runbooks/{id}/runbookRuns/preview/{environment}/{tenant}`
          .replace(
            `{${"environment"}}`,
            encodeURIComponent(String(environment))
          )
          .replace(`{${"id"}}`, encodeURIComponent(String(id)))
          .replace(`{${"tenant"}}`, encodeURIComponent(String(tenant)));
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
     * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunPreviewForRunbookSpaces: async (
      baseSpaceId: string,
      environment: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getRunbookRunPreviewForRunbookSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'environment' is not null or undefined
      assertParamExists(
        "getRunbookRunPreviewForRunbookSpaces",
        "environment",
        environment
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookRunPreviewForRunbookSpaces", "id", id);
      const localVarPath =
        `/{baseSpaceId}/runbooks/{id}/runbookRuns/preview/{environment}`
          .replace(
            `{${"baseSpaceId"}}`,
            encodeURIComponent(String(baseSpaceId))
          )
          .replace(
            `{${"environment"}}`,
            encodeURIComponent(String(environment))
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
     * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunPreviewForRunbookSpaces1: async (
      baseSpaceId: string,
      environment: string,
      id: string,
      tenant: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getRunbookRunPreviewForRunbookSpaces1",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'environment' is not null or undefined
      assertParamExists(
        "getRunbookRunPreviewForRunbookSpaces1",
        "environment",
        environment
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookRunPreviewForRunbookSpaces1", "id", id);
      // verify required parameter 'tenant' is not null or undefined
      assertParamExists(
        "getRunbookRunPreviewForRunbookSpaces1",
        "tenant",
        tenant
      );
      const localVarPath =
        `/{baseSpaceId}/runbooks/{id}/runbookRuns/preview/{environment}/{tenant}`
          .replace(
            `{${"baseSpaceId"}}`,
            encodeURIComponent(String(baseSpaceId))
          )
          .replace(
            `{${"environment"}}`,
            encodeURIComponent(String(environment))
          )
          .replace(`{${"id"}}`, encodeURIComponent(String(id)))
          .replace(`{${"tenant"}}`, encodeURIComponent(String(tenant)));
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
     * Gets all of the information necessary for creating or editing a Runbook Run for this Runbook (when you do not have a snapshot).
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunTemplateForRunbook: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookRunTemplateForRunbook", "id", id);
      const localVarPath = `/runbooks/{id}/runbookRunTemplate`.replace(
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
     * Gets all of the information necessary for creating or editing a Runbook Run for this Runbook (when you do not have a snapshot).
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunTemplateForRunbookSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getRunbookRunTemplateForRunbookSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookRunTemplateForRunbookSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/runbooks/{id}/runbookRunTemplate`
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
     * Gets all of the information necessary for creating or editing a release using this Runbook.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookSnapshotTemplateForRunbook: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookSnapshotTemplateForRunbook", "id", id);
      const localVarPath = `/runbooks/{id}/runbookSnapshotTemplate`.replace(
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
     * Gets all of the information necessary for creating or editing a release using this Runbook.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookSnapshotTemplateForRunbookSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getRunbookSnapshotTemplateForRunbookSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookSnapshotTemplateForRunbookSpaces", "id", id);
      const localVarPath =
        `/{baseSpaceId}/runbooks/{id}/runbookSnapshotTemplate`
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
     * Lists all of the Runbooks that belong to the given project.
     * @summary Get a list of RunbookResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectRunbooks: async (
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexProjectRunbooks", "id", id);
      const localVarPath = `/projects/{id}/runbooks`.replace(
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
     * Lists all of the Runbooks that belong to the given project.
     * @summary Get a list of RunbookResources for the given ProjectResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectRunbooksSpaces: async (
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexProjectRunbooksSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexProjectRunbooksSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/projects/{id}/runbooks`
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
     * Lists all the Runbooks in the supplied Octopus Deploy Space, sorted by Name
     * @summary Get a list of RunbookResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexRunbooks: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/runbooks`;
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
     * Lists all the Runbooks in the supplied Octopus Deploy Space, sorted by Name
     * @summary Get a list of RunbookResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexRunbooksSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("indexRunbooksSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/runbooks`.replace(
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
     * Lists all of the runbooks in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of RunbookResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllRunbooks: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/runbooks/all`;
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
     * Lists all of the runbooks in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of RunbookResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllRunbooksSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("listAllRunbooksSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/runbooks/all`.replace(
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
     * Modifies a process. Only allowed for processes owned by a project (cannot be used to change the process owned by a release).
     * @summary Modify a RunbookResource by ID
     * @param {string} id ID of the RunbookResource to modify
     * @param {RunbookResource} [body] The RunbookResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRunbook: async (
      id: string,
      body?: RunbookResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateRunbook", "id", id);
      const localVarPath = `/runbooks/{id}`.replace(
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
     * Modifies a process. Only allowed for processes owned by a project (cannot be used to change the process owned by a release).
     * @summary Modify a RunbookResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookResource to modify
     * @param {RunbookResource} [body] The RunbookResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRunbookSpaces: async (
      baseSpaceId: string,
      id: string,
      body?: RunbookResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("updateRunbookSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateRunbookSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/runbooks/{id}`
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
 * RunbooksApi - functional programming interface
 * @export
 */
export const RunbooksApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = RunbooksApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a new process.
     * @summary Create a RunbookResource
     * @param {RunbookResource} [body] The RunbookResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createRunbook(
      body?: RunbookResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createRunbook(
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
     * Runs the published version of this Runbook.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createRunbookRunForPublishedRunbookCreate(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<RunbookRunResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createRunbookRunForPublishedRunbookCreate(
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
     * Runs the published version of this Runbook.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createRunbookRunForPublishedRunbookCreateSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<RunbookRunResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createRunbookRunForPublishedRunbookCreateSpaces(
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
     * Creates a new process.
     * @summary Create a RunbookResource
     * @param {string} baseSpaceId ID of the space
     * @param {RunbookResource} [body] The RunbookResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createRunbookSpaces(
      baseSpaceId: string,
      body?: RunbookResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createRunbookSpaces(
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
     * Deletes an existing Runbook.
     * @summary Delete a RunbookResource by ID
     * @param {string} id ID of the RunbookResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteRunbook(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRunbook(
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
     * Deletes an existing Runbook.
     * @summary Delete a RunbookResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteRunbookSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteRunbookSpaces(
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
     * @summary Get a Runbook by ID
     * @param {string} id ID of the Runbook to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getRunbookById(
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
     * @summary Get a Runbook by ID
     * @param {string} id ID of the Runbook to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRunbookByIdSpaces(
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
     * Lists all environments a Runbook can be run within based on its EnvironmentScope.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookEnvironments(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<EnvironmentResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRunbookEnvironments(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists all environments a Runbook can be run within based on its EnvironmentScope.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookEnvironmentsSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<EnvironmentResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRunbookEnvironmentsSpaces(
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
     * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookRunPreviewForRunbook(
      environment: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookRunPreviewResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRunbookRunPreviewForRunbook(
          environment,
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
     * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookRunPreviewForRunbook1(
      environment: string,
      id: string,
      tenant: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookRunPreviewResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRunbookRunPreviewForRunbook1(
          environment,
          id,
          tenant,
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
     * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookRunPreviewForRunbookSpaces(
      baseSpaceId: string,
      environment: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookRunPreviewResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRunbookRunPreviewForRunbookSpaces(
          baseSpaceId,
          environment,
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
     * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookRunPreviewForRunbookSpaces1(
      baseSpaceId: string,
      environment: string,
      id: string,
      tenant: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookRunPreviewResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRunbookRunPreviewForRunbookSpaces1(
          baseSpaceId,
          environment,
          id,
          tenant,
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
     * Gets all of the information necessary for creating or editing a Runbook Run for this Runbook (when you do not have a snapshot).
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookRunTemplateForRunbook(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookRunTemplateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRunbookRunTemplateForRunbook(
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
     * Gets all of the information necessary for creating or editing a Runbook Run for this Runbook (when you do not have a snapshot).
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookRunTemplateForRunbookSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookRunTemplateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRunbookRunTemplateForRunbookSpaces(
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
     * Gets all of the information necessary for creating or editing a release using this Runbook.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookSnapshotTemplateForRunbook(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotTemplateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRunbookSnapshotTemplateForRunbook(
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
     * Gets all of the information necessary for creating or editing a release using this Runbook.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookSnapshotTemplateForRunbookSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotTemplateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRunbookSnapshotTemplateForRunbookSpaces(
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
     * Lists all of the Runbooks that belong to the given project.
     * @summary Get a list of RunbookResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProjectRunbooks(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexProjectRunbooks(
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
     * Lists all of the Runbooks that belong to the given project.
     * @summary Get a list of RunbookResources for the given ProjectResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProjectRunbooksSpaces(
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexProjectRunbooksSpaces(
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
     * Lists all the Runbooks in the supplied Octopus Deploy Space, sorted by Name
     * @summary Get a list of RunbookResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexRunbooks(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexRunbooks(
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
     * Lists all the Runbooks in the supplied Octopus Deploy Space, sorted by Name
     * @summary Get a list of RunbookResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexRunbooksSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexRunbooksSpaces(
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
     * Lists all of the runbooks in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of RunbookResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllRunbooks(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<RunbookResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllRunbooks(
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
     * Lists all of the runbooks in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of RunbookResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllRunbooksSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<RunbookResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listAllRunbooksSpaces(
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
     * Modifies a process. Only allowed for processes owned by a project (cannot be used to change the process owned by a release).
     * @summary Modify a RunbookResource by ID
     * @param {string} id ID of the RunbookResource to modify
     * @param {RunbookResource} [body] The RunbookResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateRunbook(
      id: string,
      body?: RunbookResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateRunbook(
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
     * Modifies a process. Only allowed for processes owned by a project (cannot be used to change the process owned by a release).
     * @summary Modify a RunbookResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookResource to modify
     * @param {RunbookResource} [body] The RunbookResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateRunbookSpaces(
      baseSpaceId: string,
      id: string,
      body?: RunbookResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateRunbookSpaces(
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
 * RunbooksApi - factory interface
 * @export
 */
export const RunbooksApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = RunbooksApiFp(configuration);
  return {
    /**
     * Creates a new process.
     * @summary Create a RunbookResource
     * @param {RunbookResource} [body] The RunbookResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRunbook(
      body?: RunbookResource,
      options?: any
    ): AxiosPromise<RunbookResource> {
      return localVarFp
        .createRunbook(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Runs the published version of this Runbook.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRunbookRunForPublishedRunbookCreate(
      id: string,
      options?: any
    ): AxiosPromise<Array<RunbookRunResource>> {
      return localVarFp
        .createRunbookRunForPublishedRunbookCreate(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Runs the published version of this Runbook.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRunbookRunForPublishedRunbookCreateSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<Array<RunbookRunResource>> {
      return localVarFp
        .createRunbookRunForPublishedRunbookCreateSpaces(
          baseSpaceId,
          id,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new process.
     * @summary Create a RunbookResource
     * @param {string} baseSpaceId ID of the space
     * @param {RunbookResource} [body] The RunbookResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRunbookSpaces(
      baseSpaceId: string,
      body?: RunbookResource,
      options?: any
    ): AxiosPromise<RunbookResource> {
      return localVarFp
        .createRunbookSpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing Runbook.
     * @summary Delete a RunbookResource by ID
     * @param {string} id ID of the RunbookResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRunbook(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteRunbook(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing Runbook.
     * @summary Delete a RunbookResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRunbookSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteRunbookSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Runbook by ID
     * @param {string} id ID of the Runbook to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookById(id: string, options?: any): AxiosPromise<RunbookResource> {
      return localVarFp
        .getRunbookById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Runbook by ID
     * @param {string} id ID of the Runbook to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<RunbookResource> {
      return localVarFp
        .getRunbookByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all environments a Runbook can be run within based on its EnvironmentScope.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookEnvironments(
      id: string,
      options?: any
    ): AxiosPromise<Array<EnvironmentResource>> {
      return localVarFp
        .getRunbookEnvironments(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all environments a Runbook can be run within based on its EnvironmentScope.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookEnvironmentsSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<Array<EnvironmentResource>> {
      return localVarFp
        .getRunbookEnvironmentsSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunPreviewForRunbook(
      environment: string,
      id: string,
      options?: any
    ): AxiosPromise<RunbookRunPreviewResource> {
      return localVarFp
        .getRunbookRunPreviewForRunbook(environment, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunPreviewForRunbook1(
      environment: string,
      id: string,
      tenant: string,
      options?: any
    ): AxiosPromise<RunbookRunPreviewResource> {
      return localVarFp
        .getRunbookRunPreviewForRunbook1(environment, id, tenant, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunPreviewForRunbookSpaces(
      baseSpaceId: string,
      environment: string,
      id: string,
      options?: any
    ): AxiosPromise<RunbookRunPreviewResource> {
      return localVarFp
        .getRunbookRunPreviewForRunbookSpaces(
          baseSpaceId,
          environment,
          id,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunPreviewForRunbookSpaces1(
      baseSpaceId: string,
      environment: string,
      id: string,
      tenant: string,
      options?: any
    ): AxiosPromise<RunbookRunPreviewResource> {
      return localVarFp
        .getRunbookRunPreviewForRunbookSpaces1(
          baseSpaceId,
          environment,
          id,
          tenant,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all of the information necessary for creating or editing a Runbook Run for this Runbook (when you do not have a snapshot).
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunTemplateForRunbook(
      id: string,
      options?: any
    ): AxiosPromise<RunbookRunTemplateResource> {
      return localVarFp
        .getRunbookRunTemplateForRunbook(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all of the information necessary for creating or editing a Runbook Run for this Runbook (when you do not have a snapshot).
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunTemplateForRunbookSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<RunbookRunTemplateResource> {
      return localVarFp
        .getRunbookRunTemplateForRunbookSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all of the information necessary for creating or editing a release using this Runbook.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookSnapshotTemplateForRunbook(
      id: string,
      options?: any
    ): AxiosPromise<RunbookSnapshotTemplateResource> {
      return localVarFp
        .getRunbookSnapshotTemplateForRunbook(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all of the information necessary for creating or editing a release using this Runbook.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookSnapshotTemplateForRunbookSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<RunbookSnapshotTemplateResource> {
      return localVarFp
        .getRunbookSnapshotTemplateForRunbookSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the Runbooks that belong to the given project.
     * @summary Get a list of RunbookResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectRunbooks(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<RunbookResourceCollection> {
      return localVarFp
        .indexProjectRunbooks(id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the Runbooks that belong to the given project.
     * @summary Get a list of RunbookResources for the given ProjectResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectRunbooksSpaces(
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<RunbookResourceCollection> {
      return localVarFp
        .indexProjectRunbooksSpaces(baseSpaceId, id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the Runbooks in the supplied Octopus Deploy Space, sorted by Name
     * @summary Get a list of RunbookResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexRunbooks(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<RunbookResourceCollection> {
      return localVarFp
        .indexRunbooks(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the Runbooks in the supplied Octopus Deploy Space, sorted by Name
     * @summary Get a list of RunbookResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexRunbooksSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<RunbookResourceCollection> {
      return localVarFp
        .indexRunbooksSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the runbooks in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of RunbookResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllRunbooks(options?: any): AxiosPromise<Array<RunbookResource>> {
      return localVarFp
        .listAllRunbooks(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the runbooks in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of RunbookResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllRunbooksSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<RunbookResource>> {
      return localVarFp
        .listAllRunbooksSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies a process. Only allowed for processes owned by a project (cannot be used to change the process owned by a release).
     * @summary Modify a RunbookResource by ID
     * @param {string} id ID of the RunbookResource to modify
     * @param {RunbookResource} [body] The RunbookResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRunbook(
      id: string,
      body?: RunbookResource,
      options?: any
    ): AxiosPromise<RunbookResource> {
      return localVarFp
        .updateRunbook(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies a process. Only allowed for processes owned by a project (cannot be used to change the process owned by a release).
     * @summary Modify a RunbookResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookResource to modify
     * @param {RunbookResource} [body] The RunbookResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRunbookSpaces(
      baseSpaceId: string,
      id: string,
      body?: RunbookResource,
      options?: any
    ): AxiosPromise<RunbookResource> {
      return localVarFp
        .updateRunbookSpaces(baseSpaceId, id, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * RunbooksApi - interface
 * @export
 * @interface RunbooksApi
 */
export interface RunbooksApiInterface {
  /**
   * Creates a new process.
   * @summary Create a RunbookResource
   * @param {RunbookResource} [body] The RunbookResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  createRunbook(
    body?: RunbookResource,
    options?: any
  ): AxiosPromise<RunbookResource>;

  /**
   * Runs the published version of this Runbook.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  createRunbookRunForPublishedRunbookCreate(
    id: string,
    options?: any
  ): AxiosPromise<Array<RunbookRunResource>>;

  /**
   * Runs the published version of this Runbook.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  createRunbookRunForPublishedRunbookCreateSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<Array<RunbookRunResource>>;

  /**
   * Creates a new process.
   * @summary Create a RunbookResource
   * @param {string} baseSpaceId ID of the space
   * @param {RunbookResource} [body] The RunbookResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  createRunbookSpaces(
    baseSpaceId: string,
    body?: RunbookResource,
    options?: any
  ): AxiosPromise<RunbookResource>;

  /**
   * Deletes an existing Runbook.
   * @summary Delete a RunbookResource by ID
   * @param {string} id ID of the RunbookResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  deleteRunbook(id: string, options?: any): AxiosPromise<void>;

  /**
   * Deletes an existing Runbook.
   * @summary Delete a RunbookResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the RunbookResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  deleteRunbookSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   *
   * @summary Get a Runbook by ID
   * @param {string} id ID of the Runbook to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  getRunbookById(id: string, options?: any): AxiosPromise<RunbookResource>;

  /**
   *
   * @summary Get a Runbook by ID
   * @param {string} id ID of the Runbook to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  getRunbookByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<RunbookResource>;

  /**
   * Lists all environments a Runbook can be run within based on its EnvironmentScope.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  getRunbookEnvironments(
    id: string,
    options?: any
  ): AxiosPromise<Array<EnvironmentResource>>;

  /**
   * Lists all environments a Runbook can be run within based on its EnvironmentScope.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  getRunbookEnvironmentsSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<Array<EnvironmentResource>>;

  /**
   * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  getRunbookRunPreviewForRunbook(
    environment: string,
    id: string,
    options?: any
  ): AxiosPromise<RunbookRunPreviewResource>;

  /**
   * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {string} tenant ID of the tenant
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  getRunbookRunPreviewForRunbook1(
    environment: string,
    id: string,
    tenant: string,
    options?: any
  ): AxiosPromise<RunbookRunPreviewResource>;

  /**
   * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
   * @param {string} baseSpaceId ID of the space
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  getRunbookRunPreviewForRunbookSpaces(
    baseSpaceId: string,
    environment: string,
    id: string,
    options?: any
  ): AxiosPromise<RunbookRunPreviewResource>;

  /**
   * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
   * @param {string} baseSpaceId ID of the space
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {string} tenant ID of the tenant
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  getRunbookRunPreviewForRunbookSpaces1(
    baseSpaceId: string,
    environment: string,
    id: string,
    tenant: string,
    options?: any
  ): AxiosPromise<RunbookRunPreviewResource>;

  /**
   * Gets all of the information necessary for creating or editing a Runbook Run for this Runbook (when you do not have a snapshot).
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  getRunbookRunTemplateForRunbook(
    id: string,
    options?: any
  ): AxiosPromise<RunbookRunTemplateResource>;

  /**
   * Gets all of the information necessary for creating or editing a Runbook Run for this Runbook (when you do not have a snapshot).
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  getRunbookRunTemplateForRunbookSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<RunbookRunTemplateResource>;

  /**
   * Gets all of the information necessary for creating or editing a release using this Runbook.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  getRunbookSnapshotTemplateForRunbook(
    id: string,
    options?: any
  ): AxiosPromise<RunbookSnapshotTemplateResource>;

  /**
   * Gets all of the information necessary for creating or editing a release using this Runbook.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  getRunbookSnapshotTemplateForRunbookSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<RunbookSnapshotTemplateResource>;

  /**
   * Lists all of the Runbooks that belong to the given project.
   * @summary Get a list of RunbookResources for the given ProjectResource
   * @param {string} id ID of the Project
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  indexProjectRunbooks(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<RunbookResourceCollection>;

  /**
   * Lists all of the Runbooks that belong to the given project.
   * @summary Get a list of RunbookResources for the given ProjectResource
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the Project
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  indexProjectRunbooksSpaces(
    baseSpaceId: string,
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<RunbookResourceCollection>;

  /**
   * Lists all the Runbooks in the supplied Octopus Deploy Space, sorted by Name
   * @summary Get a list of RunbookResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  indexRunbooks(
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<RunbookResourceCollection>;

  /**
   * Lists all the Runbooks in the supplied Octopus Deploy Space, sorted by Name
   * @summary Get a list of RunbookResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  indexRunbooksSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<RunbookResourceCollection>;

  /**
   * Lists all of the runbooks in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of RunbookResources
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  listAllRunbooks(options?: any): AxiosPromise<Array<RunbookResource>>;

  /**
   * Lists all of the runbooks in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of RunbookResources
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  listAllRunbooksSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<RunbookResource>>;

  /**
   * Modifies a process. Only allowed for processes owned by a project (cannot be used to change the process owned by a release).
   * @summary Modify a RunbookResource by ID
   * @param {string} id ID of the RunbookResource to modify
   * @param {RunbookResource} [body] The RunbookResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  updateRunbook(
    id: string,
    body?: RunbookResource,
    options?: any
  ): AxiosPromise<RunbookResource>;

  /**
   * Modifies a process. Only allowed for processes owned by a project (cannot be used to change the process owned by a release).
   * @summary Modify a RunbookResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the RunbookResource to modify
   * @param {RunbookResource} [body] The RunbookResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApiInterface
   */
  updateRunbookSpaces(
    baseSpaceId: string,
    id: string,
    body?: RunbookResource,
    options?: any
  ): AxiosPromise<RunbookResource>;
}

/**
 * RunbooksApi - object-oriented interface
 * @export
 * @class RunbooksApi
 * @extends {BaseAPI}
 */
export class RunbooksApi extends BaseAPI implements RunbooksApiInterface {
  /**
   * Creates a new process.
   * @summary Create a RunbookResource
   * @param {RunbookResource} [body] The RunbookResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public createRunbook(body?: RunbookResource, options?: any) {
    return RunbooksApiFp(this.configuration)
      .createRunbook(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Runs the published version of this Runbook.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public createRunbookRunForPublishedRunbookCreate(id: string, options?: any) {
    return RunbooksApiFp(this.configuration)
      .createRunbookRunForPublishedRunbookCreate(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Runs the published version of this Runbook.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public createRunbookRunForPublishedRunbookCreateSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return RunbooksApiFp(this.configuration)
      .createRunbookRunForPublishedRunbookCreateSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new process.
   * @summary Create a RunbookResource
   * @param {string} baseSpaceId ID of the space
   * @param {RunbookResource} [body] The RunbookResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public createRunbookSpaces(
    baseSpaceId: string,
    body?: RunbookResource,
    options?: any
  ) {
    return RunbooksApiFp(this.configuration)
      .createRunbookSpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing Runbook.
   * @summary Delete a RunbookResource by ID
   * @param {string} id ID of the RunbookResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public deleteRunbook(id: string, options?: any) {
    return RunbooksApiFp(this.configuration)
      .deleteRunbook(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing Runbook.
   * @summary Delete a RunbookResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the RunbookResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public deleteRunbookSpaces(baseSpaceId: string, id: string, options?: any) {
    return RunbooksApiFp(this.configuration)
      .deleteRunbookSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Runbook by ID
   * @param {string} id ID of the Runbook to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public getRunbookById(id: string, options?: any) {
    return RunbooksApiFp(this.configuration)
      .getRunbookById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Runbook by ID
   * @param {string} id ID of the Runbook to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public getRunbookByIdSpaces(id: string, baseSpaceId: string, options?: any) {
    return RunbooksApiFp(this.configuration)
      .getRunbookByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all environments a Runbook can be run within based on its EnvironmentScope.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public getRunbookEnvironments(id: string, options?: any) {
    return RunbooksApiFp(this.configuration)
      .getRunbookEnvironments(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all environments a Runbook can be run within based on its EnvironmentScope.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public getRunbookEnvironmentsSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return RunbooksApiFp(this.configuration)
      .getRunbookEnvironmentsSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public getRunbookRunPreviewForRunbook(
    environment: string,
    id: string,
    options?: any
  ) {
    return RunbooksApiFp(this.configuration)
      .getRunbookRunPreviewForRunbook(environment, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {string} tenant ID of the tenant
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public getRunbookRunPreviewForRunbook1(
    environment: string,
    id: string,
    tenant: string,
    options?: any
  ) {
    return RunbooksApiFp(this.configuration)
      .getRunbookRunPreviewForRunbook1(environment, id, tenant, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
   * @param {string} baseSpaceId ID of the space
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public getRunbookRunPreviewForRunbookSpaces(
    baseSpaceId: string,
    environment: string,
    id: string,
    options?: any
  ) {
    return RunbooksApiFp(this.configuration)
      .getRunbookRunPreviewForRunbookSpaces(
        baseSpaceId,
        environment,
        id,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a document that describes what steps will/won\'t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
   * @param {string} baseSpaceId ID of the space
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {string} tenant ID of the tenant
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public getRunbookRunPreviewForRunbookSpaces1(
    baseSpaceId: string,
    environment: string,
    id: string,
    tenant: string,
    options?: any
  ) {
    return RunbooksApiFp(this.configuration)
      .getRunbookRunPreviewForRunbookSpaces1(
        baseSpaceId,
        environment,
        id,
        tenant,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all of the information necessary for creating or editing a Runbook Run for this Runbook (when you do not have a snapshot).
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public getRunbookRunTemplateForRunbook(id: string, options?: any) {
    return RunbooksApiFp(this.configuration)
      .getRunbookRunTemplateForRunbook(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all of the information necessary for creating or editing a Runbook Run for this Runbook (when you do not have a snapshot).
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public getRunbookRunTemplateForRunbookSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return RunbooksApiFp(this.configuration)
      .getRunbookRunTemplateForRunbookSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all of the information necessary for creating or editing a release using this Runbook.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public getRunbookSnapshotTemplateForRunbook(id: string, options?: any) {
    return RunbooksApiFp(this.configuration)
      .getRunbookSnapshotTemplateForRunbook(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all of the information necessary for creating or editing a release using this Runbook.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public getRunbookSnapshotTemplateForRunbookSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return RunbooksApiFp(this.configuration)
      .getRunbookSnapshotTemplateForRunbookSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the Runbooks that belong to the given project.
   * @summary Get a list of RunbookResources for the given ProjectResource
   * @param {string} id ID of the Project
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public indexProjectRunbooks(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return RunbooksApiFp(this.configuration)
      .indexProjectRunbooks(id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the Runbooks that belong to the given project.
   * @summary Get a list of RunbookResources for the given ProjectResource
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the Project
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public indexProjectRunbooksSpaces(
    baseSpaceId: string,
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return RunbooksApiFp(this.configuration)
      .indexProjectRunbooksSpaces(baseSpaceId, id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the Runbooks in the supplied Octopus Deploy Space, sorted by Name
   * @summary Get a list of RunbookResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public indexRunbooks(skip?: number, take?: number, options?: any) {
    return RunbooksApiFp(this.configuration)
      .indexRunbooks(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the Runbooks in the supplied Octopus Deploy Space, sorted by Name
   * @summary Get a list of RunbookResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public indexRunbooksSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return RunbooksApiFp(this.configuration)
      .indexRunbooksSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the runbooks in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of RunbookResources
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public listAllRunbooks(options?: any) {
    return RunbooksApiFp(this.configuration)
      .listAllRunbooks(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the runbooks in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of RunbookResources
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public listAllRunbooksSpaces(baseSpaceId: string, options?: any) {
    return RunbooksApiFp(this.configuration)
      .listAllRunbooksSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies a process. Only allowed for processes owned by a project (cannot be used to change the process owned by a release).
   * @summary Modify a RunbookResource by ID
   * @param {string} id ID of the RunbookResource to modify
   * @param {RunbookResource} [body] The RunbookResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public updateRunbook(id: string, body?: RunbookResource, options?: any) {
    return RunbooksApiFp(this.configuration)
      .updateRunbook(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies a process. Only allowed for processes owned by a project (cannot be used to change the process owned by a release).
   * @summary Modify a RunbookResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the RunbookResource to modify
   * @param {RunbookResource} [body] The RunbookResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbooksApi
   */
  public updateRunbookSpaces(
    baseSpaceId: string,
    id: string,
    body?: RunbookResource,
    options?: any
  ) {
    return RunbooksApiFp(this.configuration)
      .updateRunbookSpaces(baseSpaceId, id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
