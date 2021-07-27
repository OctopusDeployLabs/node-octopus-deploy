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
import { RunbookRunPreviewResource } from "../model";
// @ts-ignore
import { RunbookRunTemplateResource } from "../model";
// @ts-ignore
import { RunbookSnapshotResource } from "../model";
// @ts-ignore
import { RunbookSnapshotResourceCollection } from "../model";
/**
 * RunbookSnapshotsApi - axios parameter creator
 * @export
 */
export const RunbookSnapshotsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new snapshot.
     * @summary Create a RunbookSnapshotResource
     * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRunbookSnapshot: async (
      body?: RunbookSnapshotResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/runbookSnapshots`;
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
     * Refresh the variable snapshots associated with the runbook snapshot. The runbook\'s process must not have changed since the snapshot was created.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRunbookSnapshotSnapshotVariables: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createRunbookSnapshotSnapshotVariables", "id", id);
      const localVarPath = `/runbookSnapshots/{id}/snapshot-variables`.replace(
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
     * Refresh the variable snapshots associated with the runbook snapshot. The runbook\'s process must not have changed since the snapshot was created.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRunbookSnapshotSnapshotVariablesSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createRunbookSnapshotSnapshotVariablesSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        "createRunbookSnapshotSnapshotVariablesSpaces",
        "id",
        id
      );
      const localVarPath =
        `/{baseSpaceId}/runbookSnapshots/{id}/snapshot-variables`
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
     * Creates a new snapshot.
     * @summary Create a RunbookSnapshotResource
     * @param {string} baseSpaceId ID of the space
     * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRunbookSnapshotSpaces: async (
      baseSpaceId: string,
      body?: RunbookSnapshotResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createRunbookSnapshotSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/runbookSnapshots`.replace(
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
     * Deletes an existing snapshot, along with all of the runs, tasks and other associated resources belonging to the snapshot.
     * @summary Delete a RunbookSnapshotResource by ID
     * @param {string} id ID of the RunbookSnapshotResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRunbookSnapshot: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteRunbookSnapshot", "id", id);
      const localVarPath = `/runbookSnapshots/{id}`.replace(
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
     * Deletes an existing snapshot, along with all of the runs, tasks and other associated resources belonging to the snapshot.
     * @summary Delete a RunbookSnapshotResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookSnapshotResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRunbookSnapshotSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "deleteRunbookSnapshotSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteRunbookSnapshotSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/runbookSnapshots/{id}`
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
     * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunPreviewForRunbookSnapshot: async (
      environment: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'environment' is not null or undefined
      assertParamExists(
        "getRunbookRunPreviewForRunbookSnapshot",
        "environment",
        environment
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookRunPreviewForRunbookSnapshot", "id", id);
      const localVarPath =
        `/runbookSnapshots/{id}/runbookRuns/preview/{environment}`
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
     * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunPreviewForRunbookSnapshot1: async (
      environment: string,
      id: string,
      tenant: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'environment' is not null or undefined
      assertParamExists(
        "getRunbookRunPreviewForRunbookSnapshot1",
        "environment",
        environment
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookRunPreviewForRunbookSnapshot1", "id", id);
      // verify required parameter 'tenant' is not null or undefined
      assertParamExists(
        "getRunbookRunPreviewForRunbookSnapshot1",
        "tenant",
        tenant
      );
      const localVarPath =
        `/runbookSnapshots/{id}/runbookRuns/preview/{environment}/{tenant}`
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
     * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunPreviewForRunbookSnapshotSpaces: async (
      baseSpaceId: string,
      environment: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getRunbookRunPreviewForRunbookSnapshotSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'environment' is not null or undefined
      assertParamExists(
        "getRunbookRunPreviewForRunbookSnapshotSpaces",
        "environment",
        environment
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        "getRunbookRunPreviewForRunbookSnapshotSpaces",
        "id",
        id
      );
      const localVarPath =
        `/{baseSpaceId}/runbookSnapshots/{id}/runbookRuns/preview/{environment}`
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
     * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunPreviewForRunbookSnapshotSpaces1: async (
      baseSpaceId: string,
      environment: string,
      id: string,
      tenant: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getRunbookRunPreviewForRunbookSnapshotSpaces1",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'environment' is not null or undefined
      assertParamExists(
        "getRunbookRunPreviewForRunbookSnapshotSpaces1",
        "environment",
        environment
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        "getRunbookRunPreviewForRunbookSnapshotSpaces1",
        "id",
        id
      );
      // verify required parameter 'tenant' is not null or undefined
      assertParamExists(
        "getRunbookRunPreviewForRunbookSnapshotSpaces1",
        "tenant",
        tenant
      );
      const localVarPath =
        `/{baseSpaceId}/runbookSnapshots/{id}/runbookRuns/preview/{environment}/{tenant}`
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
     * Gets all of the information necessary for creating or editing a run for this snapshot.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunTemplateForRunbookSnapshot: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookRunTemplateForRunbookSnapshot", "id", id);
      const localVarPath =
        `/runbookSnapshots/{id}/runbookRuns/template`.replace(
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
     * Gets all of the information necessary for creating or editing a run for this snapshot.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunTemplateForRunbookSnapshotSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getRunbookRunTemplateForRunbookSnapshotSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        "getRunbookRunTemplateForRunbookSnapshotSpaces",
        "id",
        id
      );
      const localVarPath =
        `/{baseSpaceId}/runbookSnapshots/{id}/runbookRuns/template`
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
     *
     * @summary Get a Runbook Snapshot by ID
     * @param {string} id ID of the RunbookSnapshot to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookSnapshotById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookSnapshotById", "id", id);
      const localVarPath = `/runbookSnapshots/{id}`.replace(
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
     * @summary Get a Runbook Snapshot by ID
     * @param {string} id ID of the RunbookSnapshot to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookSnapshotByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookSnapshotByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getRunbookSnapshotByIdSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/runbookSnapshots/{id}`
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
     * Gets a single runbookSnapshot by project ID and name.
     * @param {string} id ID of the resource
     * @param {string} name Name of the runbook
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookSnapshotByProjectAndName: async (
      id: string,
      name: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookSnapshotByProjectAndName", "id", id);
      // verify required parameter 'name' is not null or undefined
      assertParamExists("getRunbookSnapshotByProjectAndName", "name", name);
      const localVarPath = `/projects/{id}/runbookSnapshots/{name}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
     * Gets a single runbookSnapshot by project ID and name.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {string} name Name of the runbook
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookSnapshotByProjectAndNameSpaces: async (
      baseSpaceId: string,
      id: string,
      name: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getRunbookSnapshotByProjectAndNameSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbookSnapshotByProjectAndNameSpaces", "id", id);
      // verify required parameter 'name' is not null or undefined
      assertParamExists(
        "getRunbookSnapshotByProjectAndNameSpaces",
        "name",
        name
      );
      const localVarPath =
        `/{baseSpaceId}/projects/{id}/runbookSnapshots/{name}`
          .replace(
            `{${"baseSpaceId"}}`,
            encodeURIComponent(String(baseSpaceId))
          )
          .replace(`{${"id"}}`, encodeURIComponent(String(id)))
          .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
     * Lists all of the runbookSnapshots that belong to the given project. RunbookSnapshots will be ordered from most recent to least recent.
     * @summary Get a list of RunbookSnapshotResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectRunbookSnapshots: async (
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexProjectRunbookSnapshots", "id", id);
      const localVarPath = `/projects/{id}/runbookSnapshots`.replace(
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
     * Lists all of the runbookSnapshots that belong to the given project. RunbookSnapshots will be ordered from most recent to least recent.
     * @summary Get a list of RunbookSnapshotResources for the given ProjectResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectRunbookSnapshotsSpaces: async (
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexProjectRunbookSnapshotsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexProjectRunbookSnapshotsSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/projects/{id}/runbookSnapshots`
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
     * Lists all of the runbookSnapshots that belong to the given runbook. RunbookSnapshots will be ordered from most recent to least recent.
     * @summary Get a list of RunbookSnapshotResources for the given RunbookResource
     * @param {string} id ID of the Runbook
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexRunbookRunbookSnapshots: async (
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexRunbookRunbookSnapshots", "id", id);
      const localVarPath = `/runbooks/{id}/runbookSnapshots`.replace(
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
     * Lists all of the runbookSnapshots that belong to the given runbook. RunbookSnapshots will be ordered from most recent to least recent.
     * @summary Get a list of RunbookSnapshotResources for the given RunbookResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Runbook
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexRunbookRunbookSnapshotsSpaces: async (
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexRunbookRunbookSnapshotsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexRunbookRunbookSnapshotsSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/runbooks/{id}/runbookSnapshots`
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
     * Lists all of the snapshots in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent snapshot.
     * @summary Get a list of Runbook Snapshots
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexRunbookSnapshots: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/runbookSnapshots`;
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
     * Lists all of the snapshots in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent snapshot.
     * @summary Get a list of Runbook Snapshots
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexRunbookSnapshotsSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexRunbookSnapshotsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/runbookSnapshots`.replace(
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
     * Updates an existing snapshot.
     * @summary Modify a RunbookSnapshotResource by ID
     * @param {string} id ID of the RunbookSnapshotResource to modify
     * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRunbookSnapshot: async (
      id: string,
      body?: RunbookSnapshotResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateRunbookSnapshot", "id", id);
      const localVarPath = `/runbookSnapshots/{id}`.replace(
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
     * Updates an existing snapshot.
     * @summary Modify a RunbookSnapshotResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookSnapshotResource to modify
     * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRunbookSnapshotSpaces: async (
      baseSpaceId: string,
      id: string,
      body?: RunbookSnapshotResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "updateRunbookSnapshotSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateRunbookSnapshotSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/runbookSnapshots/{id}`
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
 * RunbookSnapshotsApi - functional programming interface
 * @export
 */
export const RunbookSnapshotsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    RunbookSnapshotsApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a new snapshot.
     * @summary Create a RunbookSnapshotResource
     * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createRunbookSnapshot(
      body?: RunbookSnapshotResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createRunbookSnapshot(body, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Refresh the variable snapshots associated with the runbook snapshot. The runbook\'s process must not have changed since the snapshot was created.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createRunbookSnapshotSnapshotVariables(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createRunbookSnapshotSnapshotVariables(
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
     * Refresh the variable snapshots associated with the runbook snapshot. The runbook\'s process must not have changed since the snapshot was created.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createRunbookSnapshotSnapshotVariablesSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createRunbookSnapshotSnapshotVariablesSpaces(
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
     * Creates a new snapshot.
     * @summary Create a RunbookSnapshotResource
     * @param {string} baseSpaceId ID of the space
     * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createRunbookSnapshotSpaces(
      baseSpaceId: string,
      body?: RunbookSnapshotResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createRunbookSnapshotSpaces(
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
     * Deletes an existing snapshot, along with all of the runs, tasks and other associated resources belonging to the snapshot.
     * @summary Delete a RunbookSnapshotResource by ID
     * @param {string} id ID of the RunbookSnapshotResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteRunbookSnapshot(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteRunbookSnapshot(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Deletes an existing snapshot, along with all of the runs, tasks and other associated resources belonging to the snapshot.
     * @summary Delete a RunbookSnapshotResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookSnapshotResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteRunbookSnapshotSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteRunbookSnapshotSpaces(
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
     * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookRunPreviewForRunbookSnapshot(
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
        await localVarAxiosParamCreator.getRunbookRunPreviewForRunbookSnapshot(
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
     * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookRunPreviewForRunbookSnapshot1(
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
        await localVarAxiosParamCreator.getRunbookRunPreviewForRunbookSnapshot1(
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
     * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookRunPreviewForRunbookSnapshotSpaces(
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
        await localVarAxiosParamCreator.getRunbookRunPreviewForRunbookSnapshotSpaces(
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
     * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookRunPreviewForRunbookSnapshotSpaces1(
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
        await localVarAxiosParamCreator.getRunbookRunPreviewForRunbookSnapshotSpaces1(
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
     * Gets all of the information necessary for creating or editing a run for this snapshot.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookRunTemplateForRunbookSnapshot(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookRunTemplateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRunbookRunTemplateForRunbookSnapshot(
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
     * Gets all of the information necessary for creating or editing a run for this snapshot.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookRunTemplateForRunbookSnapshotSpaces(
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
        await localVarAxiosParamCreator.getRunbookRunTemplateForRunbookSnapshotSpaces(
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
     * @summary Get a Runbook Snapshot by ID
     * @param {string} id ID of the RunbookSnapshot to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookSnapshotById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRunbookSnapshotById(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Get a Runbook Snapshot by ID
     * @param {string} id ID of the RunbookSnapshot to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookSnapshotByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRunbookSnapshotByIdSpaces(
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
     * Gets a single runbookSnapshot by project ID and name.
     * @param {string} id ID of the resource
     * @param {string} name Name of the runbook
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookSnapshotByProjectAndName(
      id: string,
      name: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRunbookSnapshotByProjectAndName(
          id,
          name,
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
     * Gets a single runbookSnapshot by project ID and name.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {string} name Name of the runbook
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookSnapshotByProjectAndNameSpaces(
      baseSpaceId: string,
      id: string,
      name: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRunbookSnapshotByProjectAndNameSpaces(
          baseSpaceId,
          id,
          name,
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
     * Lists all of the runbookSnapshots that belong to the given project. RunbookSnapshots will be ordered from most recent to least recent.
     * @summary Get a list of RunbookSnapshotResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProjectRunbookSnapshots(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexProjectRunbookSnapshots(
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
     * Lists all of the runbookSnapshots that belong to the given project. RunbookSnapshots will be ordered from most recent to least recent.
     * @summary Get a list of RunbookSnapshotResources for the given ProjectResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProjectRunbookSnapshotsSpaces(
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexProjectRunbookSnapshotsSpaces(
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
     * Lists all of the runbookSnapshots that belong to the given runbook. RunbookSnapshots will be ordered from most recent to least recent.
     * @summary Get a list of RunbookSnapshotResources for the given RunbookResource
     * @param {string} id ID of the Runbook
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexRunbookRunbookSnapshots(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexRunbookRunbookSnapshots(
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
     * Lists all of the runbookSnapshots that belong to the given runbook. RunbookSnapshots will be ordered from most recent to least recent.
     * @summary Get a list of RunbookSnapshotResources for the given RunbookResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Runbook
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexRunbookRunbookSnapshotsSpaces(
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexRunbookRunbookSnapshotsSpaces(
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
     * Lists all of the snapshots in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent snapshot.
     * @summary Get a list of Runbook Snapshots
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexRunbookSnapshots(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexRunbookSnapshots(
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
     * Lists all of the snapshots in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent snapshot.
     * @summary Get a list of Runbook Snapshots
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexRunbookSnapshotsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexRunbookSnapshotsSpaces(
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
     * Updates an existing snapshot.
     * @summary Modify a RunbookSnapshotResource by ID
     * @param {string} id ID of the RunbookSnapshotResource to modify
     * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateRunbookSnapshot(
      id: string,
      body?: RunbookSnapshotResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateRunbookSnapshot(
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
     * Updates an existing snapshot.
     * @summary Modify a RunbookSnapshotResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookSnapshotResource to modify
     * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateRunbookSnapshotSpaces(
      baseSpaceId: string,
      id: string,
      body?: RunbookSnapshotResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbookSnapshotResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateRunbookSnapshotSpaces(
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
 * RunbookSnapshotsApi - factory interface
 * @export
 */
export const RunbookSnapshotsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = RunbookSnapshotsApiFp(configuration);
  return {
    /**
     * Creates a new snapshot.
     * @summary Create a RunbookSnapshotResource
     * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRunbookSnapshot(
      body?: RunbookSnapshotResource,
      options?: any
    ): AxiosPromise<RunbookSnapshotResource> {
      return localVarFp
        .createRunbookSnapshot(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Refresh the variable snapshots associated with the runbook snapshot. The runbook\'s process must not have changed since the snapshot was created.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRunbookSnapshotSnapshotVariables(
      id: string,
      options?: any
    ): AxiosPromise<RunbookSnapshotResource> {
      return localVarFp
        .createRunbookSnapshotSnapshotVariables(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Refresh the variable snapshots associated with the runbook snapshot. The runbook\'s process must not have changed since the snapshot was created.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRunbookSnapshotSnapshotVariablesSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<RunbookSnapshotResource> {
      return localVarFp
        .createRunbookSnapshotSnapshotVariablesSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new snapshot.
     * @summary Create a RunbookSnapshotResource
     * @param {string} baseSpaceId ID of the space
     * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRunbookSnapshotSpaces(
      baseSpaceId: string,
      body?: RunbookSnapshotResource,
      options?: any
    ): AxiosPromise<RunbookSnapshotResource> {
      return localVarFp
        .createRunbookSnapshotSpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing snapshot, along with all of the runs, tasks and other associated resources belonging to the snapshot.
     * @summary Delete a RunbookSnapshotResource by ID
     * @param {string} id ID of the RunbookSnapshotResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRunbookSnapshot(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteRunbookSnapshot(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing snapshot, along with all of the runs, tasks and other associated resources belonging to the snapshot.
     * @summary Delete a RunbookSnapshotResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookSnapshotResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRunbookSnapshotSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteRunbookSnapshotSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunPreviewForRunbookSnapshot(
      environment: string,
      id: string,
      options?: any
    ): AxiosPromise<RunbookRunPreviewResource> {
      return localVarFp
        .getRunbookRunPreviewForRunbookSnapshot(environment, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunPreviewForRunbookSnapshot1(
      environment: string,
      id: string,
      tenant: string,
      options?: any
    ): AxiosPromise<RunbookRunPreviewResource> {
      return localVarFp
        .getRunbookRunPreviewForRunbookSnapshot1(
          environment,
          id,
          tenant,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunPreviewForRunbookSnapshotSpaces(
      baseSpaceId: string,
      environment: string,
      id: string,
      options?: any
    ): AxiosPromise<RunbookRunPreviewResource> {
      return localVarFp
        .getRunbookRunPreviewForRunbookSnapshotSpaces(
          baseSpaceId,
          environment,
          id,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunPreviewForRunbookSnapshotSpaces1(
      baseSpaceId: string,
      environment: string,
      id: string,
      tenant: string,
      options?: any
    ): AxiosPromise<RunbookRunPreviewResource> {
      return localVarFp
        .getRunbookRunPreviewForRunbookSnapshotSpaces1(
          baseSpaceId,
          environment,
          id,
          tenant,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all of the information necessary for creating or editing a run for this snapshot.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunTemplateForRunbookSnapshot(
      id: string,
      options?: any
    ): AxiosPromise<RunbookRunTemplateResource> {
      return localVarFp
        .getRunbookRunTemplateForRunbookSnapshot(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all of the information necessary for creating or editing a run for this snapshot.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookRunTemplateForRunbookSnapshotSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<RunbookRunTemplateResource> {
      return localVarFp
        .getRunbookRunTemplateForRunbookSnapshotSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Runbook Snapshot by ID
     * @param {string} id ID of the RunbookSnapshot to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookSnapshotById(
      id: string,
      options?: any
    ): AxiosPromise<RunbookSnapshotResource> {
      return localVarFp
        .getRunbookSnapshotById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Runbook Snapshot by ID
     * @param {string} id ID of the RunbookSnapshot to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookSnapshotByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<RunbookSnapshotResource> {
      return localVarFp
        .getRunbookSnapshotByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a single runbookSnapshot by project ID and name.
     * @param {string} id ID of the resource
     * @param {string} name Name of the runbook
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookSnapshotByProjectAndName(
      id: string,
      name: string,
      options?: any
    ): AxiosPromise<RunbookSnapshotResource> {
      return localVarFp
        .getRunbookSnapshotByProjectAndName(id, name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a single runbookSnapshot by project ID and name.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {string} name Name of the runbook
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookSnapshotByProjectAndNameSpaces(
      baseSpaceId: string,
      id: string,
      name: string,
      options?: any
    ): AxiosPromise<RunbookSnapshotResource> {
      return localVarFp
        .getRunbookSnapshotByProjectAndNameSpaces(
          baseSpaceId,
          id,
          name,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the runbookSnapshots that belong to the given project. RunbookSnapshots will be ordered from most recent to least recent.
     * @summary Get a list of RunbookSnapshotResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectRunbookSnapshots(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<RunbookSnapshotResourceCollection> {
      return localVarFp
        .indexProjectRunbookSnapshots(id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the runbookSnapshots that belong to the given project. RunbookSnapshots will be ordered from most recent to least recent.
     * @summary Get a list of RunbookSnapshotResources for the given ProjectResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectRunbookSnapshotsSpaces(
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<RunbookSnapshotResourceCollection> {
      return localVarFp
        .indexProjectRunbookSnapshotsSpaces(
          baseSpaceId,
          id,
          skip,
          take,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the runbookSnapshots that belong to the given runbook. RunbookSnapshots will be ordered from most recent to least recent.
     * @summary Get a list of RunbookSnapshotResources for the given RunbookResource
     * @param {string} id ID of the Runbook
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexRunbookRunbookSnapshots(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<RunbookSnapshotResourceCollection> {
      return localVarFp
        .indexRunbookRunbookSnapshots(id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the runbookSnapshots that belong to the given runbook. RunbookSnapshots will be ordered from most recent to least recent.
     * @summary Get a list of RunbookSnapshotResources for the given RunbookResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Runbook
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexRunbookRunbookSnapshotsSpaces(
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<RunbookSnapshotResourceCollection> {
      return localVarFp
        .indexRunbookRunbookSnapshotsSpaces(
          baseSpaceId,
          id,
          skip,
          take,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the snapshots in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent snapshot.
     * @summary Get a list of Runbook Snapshots
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexRunbookSnapshots(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<RunbookSnapshotResourceCollection> {
      return localVarFp
        .indexRunbookSnapshots(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the snapshots in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent snapshot.
     * @summary Get a list of Runbook Snapshots
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexRunbookSnapshotsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<RunbookSnapshotResourceCollection> {
      return localVarFp
        .indexRunbookSnapshotsSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates an existing snapshot.
     * @summary Modify a RunbookSnapshotResource by ID
     * @param {string} id ID of the RunbookSnapshotResource to modify
     * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRunbookSnapshot(
      id: string,
      body?: RunbookSnapshotResource,
      options?: any
    ): AxiosPromise<RunbookSnapshotResource> {
      return localVarFp
        .updateRunbookSnapshot(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates an existing snapshot.
     * @summary Modify a RunbookSnapshotResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the RunbookSnapshotResource to modify
     * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRunbookSnapshotSpaces(
      baseSpaceId: string,
      id: string,
      body?: RunbookSnapshotResource,
      options?: any
    ): AxiosPromise<RunbookSnapshotResource> {
      return localVarFp
        .updateRunbookSnapshotSpaces(baseSpaceId, id, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * RunbookSnapshotsApi - interface
 * @export
 * @interface RunbookSnapshotsApi
 */
export interface RunbookSnapshotsApiInterface {
  /**
   * Creates a new snapshot.
   * @summary Create a RunbookSnapshotResource
   * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  createRunbookSnapshot(
    body?: RunbookSnapshotResource,
    options?: any
  ): AxiosPromise<RunbookSnapshotResource>;

  /**
   * Refresh the variable snapshots associated with the runbook snapshot. The runbook\'s process must not have changed since the snapshot was created.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  createRunbookSnapshotSnapshotVariables(
    id: string,
    options?: any
  ): AxiosPromise<RunbookSnapshotResource>;

  /**
   * Refresh the variable snapshots associated with the runbook snapshot. The runbook\'s process must not have changed since the snapshot was created.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  createRunbookSnapshotSnapshotVariablesSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<RunbookSnapshotResource>;

  /**
   * Creates a new snapshot.
   * @summary Create a RunbookSnapshotResource
   * @param {string} baseSpaceId ID of the space
   * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  createRunbookSnapshotSpaces(
    baseSpaceId: string,
    body?: RunbookSnapshotResource,
    options?: any
  ): AxiosPromise<RunbookSnapshotResource>;

  /**
   * Deletes an existing snapshot, along with all of the runs, tasks and other associated resources belonging to the snapshot.
   * @summary Delete a RunbookSnapshotResource by ID
   * @param {string} id ID of the RunbookSnapshotResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  deleteRunbookSnapshot(id: string, options?: any): AxiosPromise<void>;

  /**
   * Deletes an existing snapshot, along with all of the runs, tasks and other associated resources belonging to the snapshot.
   * @summary Delete a RunbookSnapshotResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the RunbookSnapshotResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  deleteRunbookSnapshotSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  getRunbookRunPreviewForRunbookSnapshot(
    environment: string,
    id: string,
    options?: any
  ): AxiosPromise<RunbookRunPreviewResource>;

  /**
   * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {string} tenant ID of the tenant
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  getRunbookRunPreviewForRunbookSnapshot1(
    environment: string,
    id: string,
    tenant: string,
    options?: any
  ): AxiosPromise<RunbookRunPreviewResource>;

  /**
   * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
   * @param {string} baseSpaceId ID of the space
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  getRunbookRunPreviewForRunbookSnapshotSpaces(
    baseSpaceId: string,
    environment: string,
    id: string,
    options?: any
  ): AxiosPromise<RunbookRunPreviewResource>;

  /**
   * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
   * @param {string} baseSpaceId ID of the space
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {string} tenant ID of the tenant
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  getRunbookRunPreviewForRunbookSnapshotSpaces1(
    baseSpaceId: string,
    environment: string,
    id: string,
    tenant: string,
    options?: any
  ): AxiosPromise<RunbookRunPreviewResource>;

  /**
   * Gets all of the information necessary for creating or editing a run for this snapshot.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  getRunbookRunTemplateForRunbookSnapshot(
    id: string,
    options?: any
  ): AxiosPromise<RunbookRunTemplateResource>;

  /**
   * Gets all of the information necessary for creating or editing a run for this snapshot.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  getRunbookRunTemplateForRunbookSnapshotSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<RunbookRunTemplateResource>;

  /**
   *
   * @summary Get a Runbook Snapshot by ID
   * @param {string} id ID of the RunbookSnapshot to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  getRunbookSnapshotById(
    id: string,
    options?: any
  ): AxiosPromise<RunbookSnapshotResource>;

  /**
   *
   * @summary Get a Runbook Snapshot by ID
   * @param {string} id ID of the RunbookSnapshot to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  getRunbookSnapshotByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<RunbookSnapshotResource>;

  /**
   * Gets a single runbookSnapshot by project ID and name.
   * @param {string} id ID of the resource
   * @param {string} name Name of the runbook
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  getRunbookSnapshotByProjectAndName(
    id: string,
    name: string,
    options?: any
  ): AxiosPromise<RunbookSnapshotResource>;

  /**
   * Gets a single runbookSnapshot by project ID and name.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {string} name Name of the runbook
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  getRunbookSnapshotByProjectAndNameSpaces(
    baseSpaceId: string,
    id: string,
    name: string,
    options?: any
  ): AxiosPromise<RunbookSnapshotResource>;

  /**
   * Lists all of the runbookSnapshots that belong to the given project. RunbookSnapshots will be ordered from most recent to least recent.
   * @summary Get a list of RunbookSnapshotResources for the given ProjectResource
   * @param {string} id ID of the Project
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  indexProjectRunbookSnapshots(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<RunbookSnapshotResourceCollection>;

  /**
   * Lists all of the runbookSnapshots that belong to the given project. RunbookSnapshots will be ordered from most recent to least recent.
   * @summary Get a list of RunbookSnapshotResources for the given ProjectResource
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the Project
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  indexProjectRunbookSnapshotsSpaces(
    baseSpaceId: string,
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<RunbookSnapshotResourceCollection>;

  /**
   * Lists all of the runbookSnapshots that belong to the given runbook. RunbookSnapshots will be ordered from most recent to least recent.
   * @summary Get a list of RunbookSnapshotResources for the given RunbookResource
   * @param {string} id ID of the Runbook
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  indexRunbookRunbookSnapshots(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<RunbookSnapshotResourceCollection>;

  /**
   * Lists all of the runbookSnapshots that belong to the given runbook. RunbookSnapshots will be ordered from most recent to least recent.
   * @summary Get a list of RunbookSnapshotResources for the given RunbookResource
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the Runbook
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  indexRunbookRunbookSnapshotsSpaces(
    baseSpaceId: string,
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<RunbookSnapshotResourceCollection>;

  /**
   * Lists all of the snapshots in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent snapshot.
   * @summary Get a list of Runbook Snapshots
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  indexRunbookSnapshots(
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<RunbookSnapshotResourceCollection>;

  /**
   * Lists all of the snapshots in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent snapshot.
   * @summary Get a list of Runbook Snapshots
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  indexRunbookSnapshotsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<RunbookSnapshotResourceCollection>;

  /**
   * Updates an existing snapshot.
   * @summary Modify a RunbookSnapshotResource by ID
   * @param {string} id ID of the RunbookSnapshotResource to modify
   * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  updateRunbookSnapshot(
    id: string,
    body?: RunbookSnapshotResource,
    options?: any
  ): AxiosPromise<RunbookSnapshotResource>;

  /**
   * Updates an existing snapshot.
   * @summary Modify a RunbookSnapshotResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the RunbookSnapshotResource to modify
   * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApiInterface
   */
  updateRunbookSnapshotSpaces(
    baseSpaceId: string,
    id: string,
    body?: RunbookSnapshotResource,
    options?: any
  ): AxiosPromise<RunbookSnapshotResource>;
}

/**
 * RunbookSnapshotsApi - object-oriented interface
 * @export
 * @class RunbookSnapshotsApi
 * @extends {BaseAPI}
 */
export class RunbookSnapshotsApi
  extends BaseAPI
  implements RunbookSnapshotsApiInterface
{
  /**
   * Creates a new snapshot.
   * @summary Create a RunbookSnapshotResource
   * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public createRunbookSnapshot(body?: RunbookSnapshotResource, options?: any) {
    return RunbookSnapshotsApiFp(this.configuration)
      .createRunbookSnapshot(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Refresh the variable snapshots associated with the runbook snapshot. The runbook\'s process must not have changed since the snapshot was created.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public createRunbookSnapshotSnapshotVariables(id: string, options?: any) {
    return RunbookSnapshotsApiFp(this.configuration)
      .createRunbookSnapshotSnapshotVariables(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Refresh the variable snapshots associated with the runbook snapshot. The runbook\'s process must not have changed since the snapshot was created.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public createRunbookSnapshotSnapshotVariablesSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .createRunbookSnapshotSnapshotVariablesSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new snapshot.
   * @summary Create a RunbookSnapshotResource
   * @param {string} baseSpaceId ID of the space
   * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public createRunbookSnapshotSpaces(
    baseSpaceId: string,
    body?: RunbookSnapshotResource,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .createRunbookSnapshotSpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing snapshot, along with all of the runs, tasks and other associated resources belonging to the snapshot.
   * @summary Delete a RunbookSnapshotResource by ID
   * @param {string} id ID of the RunbookSnapshotResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public deleteRunbookSnapshot(id: string, options?: any) {
    return RunbookSnapshotsApiFp(this.configuration)
      .deleteRunbookSnapshot(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing snapshot, along with all of the runs, tasks and other associated resources belonging to the snapshot.
   * @summary Delete a RunbookSnapshotResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the RunbookSnapshotResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public deleteRunbookSnapshotSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .deleteRunbookSnapshotSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public getRunbookRunPreviewForRunbookSnapshot(
    environment: string,
    id: string,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .getRunbookRunPreviewForRunbookSnapshot(environment, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {string} tenant ID of the tenant
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public getRunbookRunPreviewForRunbookSnapshot1(
    environment: string,
    id: string,
    tenant: string,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .getRunbookRunPreviewForRunbookSnapshot1(environment, id, tenant, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
   * @param {string} baseSpaceId ID of the space
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public getRunbookRunPreviewForRunbookSnapshotSpaces(
    baseSpaceId: string,
    environment: string,
    id: string,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .getRunbookRunPreviewForRunbookSnapshotSpaces(
        baseSpaceId,
        environment,
        id,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a document that describes what steps will/won\'t be run during a run to a given environment (and tenant if supplied).
   * @param {string} baseSpaceId ID of the space
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {string} tenant ID of the tenant
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public getRunbookRunPreviewForRunbookSnapshotSpaces1(
    baseSpaceId: string,
    environment: string,
    id: string,
    tenant: string,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .getRunbookRunPreviewForRunbookSnapshotSpaces1(
        baseSpaceId,
        environment,
        id,
        tenant,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all of the information necessary for creating or editing a run for this snapshot.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public getRunbookRunTemplateForRunbookSnapshot(id: string, options?: any) {
    return RunbookSnapshotsApiFp(this.configuration)
      .getRunbookRunTemplateForRunbookSnapshot(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all of the information necessary for creating or editing a run for this snapshot.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public getRunbookRunTemplateForRunbookSnapshotSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .getRunbookRunTemplateForRunbookSnapshotSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Runbook Snapshot by ID
   * @param {string} id ID of the RunbookSnapshot to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public getRunbookSnapshotById(id: string, options?: any) {
    return RunbookSnapshotsApiFp(this.configuration)
      .getRunbookSnapshotById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Runbook Snapshot by ID
   * @param {string} id ID of the RunbookSnapshot to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public getRunbookSnapshotByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .getRunbookSnapshotByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a single runbookSnapshot by project ID and name.
   * @param {string} id ID of the resource
   * @param {string} name Name of the runbook
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public getRunbookSnapshotByProjectAndName(
    id: string,
    name: string,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .getRunbookSnapshotByProjectAndName(id, name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a single runbookSnapshot by project ID and name.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {string} name Name of the runbook
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public getRunbookSnapshotByProjectAndNameSpaces(
    baseSpaceId: string,
    id: string,
    name: string,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .getRunbookSnapshotByProjectAndNameSpaces(baseSpaceId, id, name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the runbookSnapshots that belong to the given project. RunbookSnapshots will be ordered from most recent to least recent.
   * @summary Get a list of RunbookSnapshotResources for the given ProjectResource
   * @param {string} id ID of the Project
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public indexProjectRunbookSnapshots(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .indexProjectRunbookSnapshots(id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the runbookSnapshots that belong to the given project. RunbookSnapshots will be ordered from most recent to least recent.
   * @summary Get a list of RunbookSnapshotResources for the given ProjectResource
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the Project
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public indexProjectRunbookSnapshotsSpaces(
    baseSpaceId: string,
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .indexProjectRunbookSnapshotsSpaces(baseSpaceId, id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the runbookSnapshots that belong to the given runbook. RunbookSnapshots will be ordered from most recent to least recent.
   * @summary Get a list of RunbookSnapshotResources for the given RunbookResource
   * @param {string} id ID of the Runbook
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public indexRunbookRunbookSnapshots(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .indexRunbookRunbookSnapshots(id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the runbookSnapshots that belong to the given runbook. RunbookSnapshots will be ordered from most recent to least recent.
   * @summary Get a list of RunbookSnapshotResources for the given RunbookResource
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the Runbook
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public indexRunbookRunbookSnapshotsSpaces(
    baseSpaceId: string,
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .indexRunbookRunbookSnapshotsSpaces(baseSpaceId, id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the snapshots in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent snapshot.
   * @summary Get a list of Runbook Snapshots
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public indexRunbookSnapshots(skip?: number, take?: number, options?: any) {
    return RunbookSnapshotsApiFp(this.configuration)
      .indexRunbookSnapshots(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the snapshots in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent snapshot.
   * @summary Get a list of Runbook Snapshots
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public indexRunbookSnapshotsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .indexRunbookSnapshotsSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates an existing snapshot.
   * @summary Modify a RunbookSnapshotResource by ID
   * @param {string} id ID of the RunbookSnapshotResource to modify
   * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public updateRunbookSnapshot(
    id: string,
    body?: RunbookSnapshotResource,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .updateRunbookSnapshot(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates an existing snapshot.
   * @summary Modify a RunbookSnapshotResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the RunbookSnapshotResource to modify
   * @param {RunbookSnapshotResource} [body] The RunbookSnapshotResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RunbookSnapshotsApi
   */
  public updateRunbookSnapshotSpaces(
    baseSpaceId: string,
    id: string,
    body?: RunbookSnapshotResource,
    options?: any
  ) {
    return RunbookSnapshotsApiFp(this.configuration)
      .updateRunbookSnapshotSpaces(baseSpaceId, id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
