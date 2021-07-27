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
import { DefectResource } from "../model";
// @ts-ignore
import { DefectResourceCollection } from "../model";
// @ts-ignore
import { DeploymentPreviewResource } from "../model";
// @ts-ignore
import { DeploymentResourceCollection } from "../model";
// @ts-ignore
import { DeploymentTemplateResource } from "../model";
// @ts-ignore
import { LifecycleProgressionResource } from "../model";
// @ts-ignore
import { ReleaseResource } from "../model";
// @ts-ignore
import { ReleaseResourceCollection } from "../model";
/**
 * ReleasesApi - axios parameter creator
 * @export
 */
export const ReleasesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Record defect in a release.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDefectReported: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createDefectReported", "id", id);
      const localVarPath = `/releases/{id}/defects`.replace(
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
     * Record defect in a release.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDefectReportedSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createDefectReportedSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createDefectReportedSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/releases/{id}/defects`
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
     * Update or resolve defect in a release.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDefectResolved: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createDefectResolved", "id", id);
      const localVarPath = `/releases/{id}/defects/resolve`.replace(
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
     * Update or resolve defect in a release.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDefectResolvedSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createDefectResolvedSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createDefectResolvedSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/releases/{id}/defects/resolve`
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
     * Returns an array of documents that describes what steps will/won\'t be run during deployments to a given set of environments and tenants.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDeploymentPreviewCollection: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createDeploymentPreviewCollection", "id", id);
      const localVarPath = `/releases/{id}/deployments/previews`.replace(
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
     * Returns an array of documents that describes what steps will/won\'t be run during deployments to a given set of environments and tenants.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDeploymentPreviewCollectionSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createDeploymentPreviewCollectionSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createDeploymentPreviewCollectionSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/releases/{id}/deployments/previews`
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
     * Creates a new release.
     * @summary Create a ReleaseResource
     * @param {boolean} [ignoreChannelRules] Ignore channel rules.
     * @param {ReleaseResource} [body] The ReleaseResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRelease: async (
      ignoreChannelRules?: boolean,
      body?: ReleaseResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/releases`;
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

      if (ignoreChannelRules !== undefined) {
        localVarQueryParameter["ignoreChannelRules"] = ignoreChannelRules;
      }

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
     * Refresh the variable snapshots associated with the release. The project\'s deployment process must not have changed since the release was created.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReleaseSnapshotVariables: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createReleaseSnapshotVariables", "id", id);
      const localVarPath = `/releases/{id}/snapshot-variables`.replace(
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
     * Refresh the variable snapshots associated with the release. The project\'s deployment process must not have changed since the release was created.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReleaseSnapshotVariablesSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createReleaseSnapshotVariablesSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createReleaseSnapshotVariablesSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/releases/{id}/snapshot-variables`
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
     * Creates a new release.
     * @summary Create a ReleaseResource
     * @param {string} baseSpaceId ID of the space
     * @param {boolean} [ignoreChannelRules] Ignore channel rules.
     * @param {ReleaseResource} [body] The ReleaseResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReleaseSpaces: async (
      baseSpaceId: string,
      ignoreChannelRules?: boolean,
      body?: ReleaseResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createReleaseSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/releases`.replace(
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

      if (ignoreChannelRules !== undefined) {
        localVarQueryParameter["ignoreChannelRules"] = ignoreChannelRules;
      }

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
     * Deletes an existing release, along with all of the deployments, tasks and other associated resources belonging to the release.
     * @summary Delete a ReleaseResource by ID
     * @param {string} id ID of the ReleaseResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRelease: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteRelease", "id", id);
      const localVarPath = `/releases/{id}`.replace(
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
     * Deletes an existing release, along with all of the deployments, tasks and other associated resources belonging to the release.
     * @summary Delete a ReleaseResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ReleaseResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteReleaseSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("deleteReleaseSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteReleaseSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/releases/{id}`
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
     * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentPreview: async (
      environment: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'environment' is not null or undefined
      assertParamExists("getDeploymentPreview", "environment", environment);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getDeploymentPreview", "id", id);
      const localVarPath = `/releases/{id}/deployments/preview/{environment}`
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
     * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentPreview1: async (
      environment: string,
      id: string,
      tenant: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'environment' is not null or undefined
      assertParamExists("getDeploymentPreview1", "environment", environment);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getDeploymentPreview1", "id", id);
      // verify required parameter 'tenant' is not null or undefined
      assertParamExists("getDeploymentPreview1", "tenant", tenant);
      const localVarPath =
        `/releases/{id}/deployments/preview/{environment}/{tenant}`
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
     * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentPreviewSpaces: async (
      baseSpaceId: string,
      environment: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getDeploymentPreviewSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'environment' is not null or undefined
      assertParamExists(
        "getDeploymentPreviewSpaces",
        "environment",
        environment
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getDeploymentPreviewSpaces", "id", id);
      const localVarPath =
        `/{baseSpaceId}/releases/{id}/deployments/preview/{environment}`
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
     * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentPreviewSpaces1: async (
      baseSpaceId: string,
      environment: string,
      id: string,
      tenant: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getDeploymentPreviewSpaces1",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'environment' is not null or undefined
      assertParamExists(
        "getDeploymentPreviewSpaces1",
        "environment",
        environment
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getDeploymentPreviewSpaces1", "id", id);
      // verify required parameter 'tenant' is not null or undefined
      assertParamExists("getDeploymentPreviewSpaces1", "tenant", tenant);
      const localVarPath =
        `/{baseSpaceId}/releases/{id}/deployments/preview/{environment}/{tenant}`
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
     * Gets all of the information necessary for creating or editing a deployment for this release.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentTemplate: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getDeploymentTemplate", "id", id);
      const localVarPath = `/releases/{id}/deployments/template`.replace(
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
     * Gets all of the information necessary for creating or editing a deployment for this release.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentTemplateSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getDeploymentTemplateSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getDeploymentTemplateSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/releases/{id}/deployments/template`
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
     * Gets all defects for a release.
     * @param {string} id ID of the defect
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListDefects: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getListDefects", "id", id);
      const localVarPath = `/releases/{id}/defects`.replace(
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
     * Gets all defects for a release.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the defect
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListDefectsSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getListDefectsSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getListDefectsSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/releases/{id}/defects`
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
     * @summary Get a Release by ID
     * @param {string} id ID of the Release to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReleaseById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getReleaseById", "id", id);
      const localVarPath = `/releases/{id}`.replace(
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
     * @summary Get a Release by ID
     * @param {string} id ID of the Release to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReleaseByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getReleaseByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getReleaseByIdSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/releases/{id}`
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
     * Gets a single release by project ID and version number.
     * @param {string} id ID of the resource
     * @param {string} version Release version number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReleaseByProjectAndVersion: async (
      id: string,
      version: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getReleaseByProjectAndVersion", "id", id);
      // verify required parameter 'version' is not null or undefined
      assertParamExists("getReleaseByProjectAndVersion", "version", version);
      const localVarPath = `/projects/{id}/releases/{version}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"version"}}`, encodeURIComponent(String(version)));
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
     * Gets a single release by project ID and version number.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {string} version Release version number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReleaseByProjectAndVersionSpaces: async (
      baseSpaceId: string,
      id: string,
      version: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getReleaseByProjectAndVersionSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getReleaseByProjectAndVersionSpaces", "id", id);
      // verify required parameter 'version' is not null or undefined
      assertParamExists(
        "getReleaseByProjectAndVersionSpaces",
        "version",
        version
      );
      const localVarPath = `/{baseSpaceId}/projects/{id}/releases/{version}`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"version"}}`, encodeURIComponent(String(version)));
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
     * Gets all of the information necessary for creating or editing a deployment for this release.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReleaseLifecycleProgression: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getReleaseLifecycleProgression", "id", id);
      const localVarPath = `/releases/{id}/progression`.replace(
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
     * Gets all of the information necessary for creating or editing a deployment for this release.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReleaseLifecycleProgressionSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getReleaseLifecycleProgressionSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getReleaseLifecycleProgressionSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/releases/{id}/progression`
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
     * Lists all of the releases that belong to the given project. Releases will be ordered from most recent to least recent.
     * @summary Get a list of ReleaseResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectReleases: async (
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexProjectReleases", "id", id);
      const localVarPath = `/projects/{id}/releases`.replace(
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
     * Lists all of the releases that belong to the given project. Releases will be ordered from most recent to least recent.
     * @summary Get a list of ReleaseResources for the given ProjectResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectReleasesSpaces: async (
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexProjectReleasesSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexProjectReleasesSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/projects/{id}/releases`
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
     * Deployments will be ordered from most recent to least recent
     * @summary Lists all of the Deployments that belong to the given Release
     * @param {string} id ID of the Release to load
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexReleaseDeployments: async (
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexReleaseDeployments", "id", id);
      const localVarPath = `/releases/{id}/deployments`.replace(
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
     * Deployments will be ordered from most recent to least recent
     * @summary Lists all of the Deployments that belong to the given Release
     * @param {string} id ID of the Release to load
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexReleaseDeploymentsSpaces: async (
      id: string,
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexReleaseDeploymentsSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexReleaseDeploymentsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/releases/{id}/deployments`
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
     * Lists all of the Releases in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent release.
     * @summary Get a list of Releases
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexReleases: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/releases`;
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
     * Lists all of the Releases in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent release.
     * @summary Get a list of Releases
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexReleasesSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("indexReleasesSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/releases`.replace(
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
     * Updates an existing release.
     * @summary Modify a ReleaseResource by ID
     * @param {string} id ID of the ReleaseResource to modify
     * @param {boolean} [ignoreChannelRules] Ignore channel rules.
     * @param {ReleaseResource} [body] The ReleaseResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRelease: async (
      id: string,
      ignoreChannelRules?: boolean,
      body?: ReleaseResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateRelease", "id", id);
      const localVarPath = `/releases/{id}`.replace(
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

      if (ignoreChannelRules !== undefined) {
        localVarQueryParameter["ignoreChannelRules"] = ignoreChannelRules;
      }

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
     * Updates an existing release.
     * @summary Modify a ReleaseResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ReleaseResource to modify
     * @param {boolean} [ignoreChannelRules] Ignore channel rules.
     * @param {ReleaseResource} [body] The ReleaseResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateReleaseSpaces: async (
      baseSpaceId: string,
      id: string,
      ignoreChannelRules?: boolean,
      body?: ReleaseResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("updateReleaseSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateReleaseSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/releases/{id}`
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

      if (ignoreChannelRules !== undefined) {
        localVarQueryParameter["ignoreChannelRules"] = ignoreChannelRules;
      }

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
 * ReleasesApi - functional programming interface
 * @export
 */
export const ReleasesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ReleasesApiAxiosParamCreator(configuration);
  return {
    /**
     * Record defect in a release.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createDefectReported(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefectResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createDefectReported(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Record defect in a release.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createDefectReportedSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefectResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createDefectReportedSpaces(
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
     * Update or resolve defect in a release.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createDefectResolved(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefectResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createDefectResolved(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Update or resolve defect in a release.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createDefectResolvedSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefectResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createDefectResolvedSpaces(
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
     * Returns an array of documents that describes what steps will/won\'t be run during deployments to a given set of environments and tenants.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createDeploymentPreviewCollection(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<DeploymentPreviewResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createDeploymentPreviewCollection(
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
     * Returns an array of documents that describes what steps will/won\'t be run during deployments to a given set of environments and tenants.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createDeploymentPreviewCollectionSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<DeploymentPreviewResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createDeploymentPreviewCollectionSpaces(
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
     * Creates a new release.
     * @summary Create a ReleaseResource
     * @param {boolean} [ignoreChannelRules] Ignore channel rules.
     * @param {ReleaseResource} [body] The ReleaseResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createRelease(
      ignoreChannelRules?: boolean,
      body?: ReleaseResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createRelease(
        ignoreChannelRules,
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
     * Refresh the variable snapshots associated with the release. The project\'s deployment process must not have changed since the release was created.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createReleaseSnapshotVariables(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createReleaseSnapshotVariables(
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
     * Refresh the variable snapshots associated with the release. The project\'s deployment process must not have changed since the release was created.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createReleaseSnapshotVariablesSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createReleaseSnapshotVariablesSpaces(
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
     * Creates a new release.
     * @summary Create a ReleaseResource
     * @param {string} baseSpaceId ID of the space
     * @param {boolean} [ignoreChannelRules] Ignore channel rules.
     * @param {ReleaseResource} [body] The ReleaseResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createReleaseSpaces(
      baseSpaceId: string,
      ignoreChannelRules?: boolean,
      body?: ReleaseResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createReleaseSpaces(
          baseSpaceId,
          ignoreChannelRules,
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
     * Deletes an existing release, along with all of the deployments, tasks and other associated resources belonging to the release.
     * @summary Delete a ReleaseResource by ID
     * @param {string} id ID of the ReleaseResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteRelease(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRelease(
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
     * Deletes an existing release, along with all of the deployments, tasks and other associated resources belonging to the release.
     * @summary Delete a ReleaseResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ReleaseResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteReleaseSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteReleaseSpaces(
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
     * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentPreview(
      environment: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentPreviewResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDeploymentPreview(
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
     * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentPreview1(
      environment: string,
      id: string,
      tenant: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentPreviewResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDeploymentPreview1(
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
     * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentPreviewSpaces(
      baseSpaceId: string,
      environment: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentPreviewResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDeploymentPreviewSpaces(
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
     * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentPreviewSpaces1(
      baseSpaceId: string,
      environment: string,
      id: string,
      tenant: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentPreviewResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDeploymentPreviewSpaces1(
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
     * Gets all of the information necessary for creating or editing a deployment for this release.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentTemplate(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentTemplateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDeploymentTemplate(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Gets all of the information necessary for creating or editing a deployment for this release.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentTemplateSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentTemplateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDeploymentTemplateSpaces(
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
     * Gets all defects for a release.
     * @param {string} id ID of the defect
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListDefects(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DefectResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getListDefects(
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
     * Gets all defects for a release.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the defect
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListDefectsSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DefectResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getListDefectsSpaces(
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
     * @summary Get a Release by ID
     * @param {string} id ID of the Release to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReleaseById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getReleaseById(
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
     * @summary Get a Release by ID
     * @param {string} id ID of the Release to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReleaseByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getReleaseByIdSpaces(
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
     * Gets a single release by project ID and version number.
     * @param {string} id ID of the resource
     * @param {string} version Release version number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReleaseByProjectAndVersion(
      id: string,
      version: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getReleaseByProjectAndVersion(
          id,
          version,
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
     * Gets a single release by project ID and version number.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {string} version Release version number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReleaseByProjectAndVersionSpaces(
      baseSpaceId: string,
      id: string,
      version: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getReleaseByProjectAndVersionSpaces(
          baseSpaceId,
          id,
          version,
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
     * Gets all of the information necessary for creating or editing a deployment for this release.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReleaseLifecycleProgression(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LifecycleProgressionResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getReleaseLifecycleProgression(
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
     * Gets all of the information necessary for creating or editing a deployment for this release.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReleaseLifecycleProgressionSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LifecycleProgressionResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getReleaseLifecycleProgressionSpaces(
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
     * Lists all of the releases that belong to the given project. Releases will be ordered from most recent to least recent.
     * @summary Get a list of ReleaseResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProjectReleases(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexProjectReleases(
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
     * Lists all of the releases that belong to the given project. Releases will be ordered from most recent to least recent.
     * @summary Get a list of ReleaseResources for the given ProjectResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProjectReleasesSpaces(
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexProjectReleasesSpaces(
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
     * Deployments will be ordered from most recent to least recent
     * @summary Lists all of the Deployments that belong to the given Release
     * @param {string} id ID of the Release to load
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexReleaseDeployments(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexReleaseDeployments(
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
     * Deployments will be ordered from most recent to least recent
     * @summary Lists all of the Deployments that belong to the given Release
     * @param {string} id ID of the Release to load
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexReleaseDeploymentsSpaces(
      id: string,
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexReleaseDeploymentsSpaces(
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
     * Lists all of the Releases in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent release.
     * @summary Get a list of Releases
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexReleases(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexReleases(
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
     * Lists all of the Releases in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent release.
     * @summary Get a list of Releases
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexReleasesSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexReleasesSpaces(
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
     * Updates an existing release.
     * @summary Modify a ReleaseResource by ID
     * @param {string} id ID of the ReleaseResource to modify
     * @param {boolean} [ignoreChannelRules] Ignore channel rules.
     * @param {ReleaseResource} [body] The ReleaseResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateRelease(
      id: string,
      ignoreChannelRules?: boolean,
      body?: ReleaseResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateRelease(
        id,
        ignoreChannelRules,
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
     * Updates an existing release.
     * @summary Modify a ReleaseResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ReleaseResource to modify
     * @param {boolean} [ignoreChannelRules] Ignore channel rules.
     * @param {ReleaseResource} [body] The ReleaseResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateReleaseSpaces(
      baseSpaceId: string,
      id: string,
      ignoreChannelRules?: boolean,
      body?: ReleaseResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateReleaseSpaces(
          baseSpaceId,
          id,
          ignoreChannelRules,
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
 * ReleasesApi - factory interface
 * @export
 */
export const ReleasesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ReleasesApiFp(configuration);
  return {
    /**
     * Record defect in a release.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDefectReported(
      id: string,
      options?: any
    ): AxiosPromise<DefectResource> {
      return localVarFp
        .createDefectReported(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Record defect in a release.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDefectReportedSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<DefectResource> {
      return localVarFp
        .createDefectReportedSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Update or resolve defect in a release.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDefectResolved(
      id: string,
      options?: any
    ): AxiosPromise<DefectResource> {
      return localVarFp
        .createDefectResolved(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Update or resolve defect in a release.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDefectResolvedSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<DefectResource> {
      return localVarFp
        .createDefectResolvedSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns an array of documents that describes what steps will/won\'t be run during deployments to a given set of environments and tenants.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDeploymentPreviewCollection(
      id: string,
      options?: any
    ): AxiosPromise<Array<DeploymentPreviewResource>> {
      return localVarFp
        .createDeploymentPreviewCollection(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns an array of documents that describes what steps will/won\'t be run during deployments to a given set of environments and tenants.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDeploymentPreviewCollectionSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<Array<DeploymentPreviewResource>> {
      return localVarFp
        .createDeploymentPreviewCollectionSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new release.
     * @summary Create a ReleaseResource
     * @param {boolean} [ignoreChannelRules] Ignore channel rules.
     * @param {ReleaseResource} [body] The ReleaseResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRelease(
      ignoreChannelRules?: boolean,
      body?: ReleaseResource,
      options?: any
    ): AxiosPromise<ReleaseResource> {
      return localVarFp
        .createRelease(ignoreChannelRules, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Refresh the variable snapshots associated with the release. The project\'s deployment process must not have changed since the release was created.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReleaseSnapshotVariables(
      id: string,
      options?: any
    ): AxiosPromise<ReleaseResource> {
      return localVarFp
        .createReleaseSnapshotVariables(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Refresh the variable snapshots associated with the release. The project\'s deployment process must not have changed since the release was created.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReleaseSnapshotVariablesSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<ReleaseResource> {
      return localVarFp
        .createReleaseSnapshotVariablesSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new release.
     * @summary Create a ReleaseResource
     * @param {string} baseSpaceId ID of the space
     * @param {boolean} [ignoreChannelRules] Ignore channel rules.
     * @param {ReleaseResource} [body] The ReleaseResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReleaseSpaces(
      baseSpaceId: string,
      ignoreChannelRules?: boolean,
      body?: ReleaseResource,
      options?: any
    ): AxiosPromise<ReleaseResource> {
      return localVarFp
        .createReleaseSpaces(baseSpaceId, ignoreChannelRules, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing release, along with all of the deployments, tasks and other associated resources belonging to the release.
     * @summary Delete a ReleaseResource by ID
     * @param {string} id ID of the ReleaseResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRelease(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteRelease(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing release, along with all of the deployments, tasks and other associated resources belonging to the release.
     * @summary Delete a ReleaseResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ReleaseResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteReleaseSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteReleaseSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentPreview(
      environment: string,
      id: string,
      options?: any
    ): AxiosPromise<DeploymentPreviewResource> {
      return localVarFp
        .getDeploymentPreview(environment, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentPreview1(
      environment: string,
      id: string,
      tenant: string,
      options?: any
    ): AxiosPromise<DeploymentPreviewResource> {
      return localVarFp
        .getDeploymentPreview1(environment, id, tenant, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentPreviewSpaces(
      baseSpaceId: string,
      environment: string,
      id: string,
      options?: any
    ): AxiosPromise<DeploymentPreviewResource> {
      return localVarFp
        .getDeploymentPreviewSpaces(baseSpaceId, environment, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
     * @param {string} baseSpaceId ID of the space
     * @param {string} environment ID of the environment
     * @param {string} id ID of the resource
     * @param {string} tenant ID of the tenant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentPreviewSpaces1(
      baseSpaceId: string,
      environment: string,
      id: string,
      tenant: string,
      options?: any
    ): AxiosPromise<DeploymentPreviewResource> {
      return localVarFp
        .getDeploymentPreviewSpaces1(
          baseSpaceId,
          environment,
          id,
          tenant,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all of the information necessary for creating or editing a deployment for this release.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentTemplate(
      id: string,
      options?: any
    ): AxiosPromise<DeploymentTemplateResource> {
      return localVarFp
        .getDeploymentTemplate(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all of the information necessary for creating or editing a deployment for this release.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentTemplateSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<DeploymentTemplateResource> {
      return localVarFp
        .getDeploymentTemplateSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all defects for a release.
     * @param {string} id ID of the defect
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListDefects(
      id: string,
      options?: any
    ): AxiosPromise<DefectResourceCollection> {
      return localVarFp
        .getListDefects(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all defects for a release.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the defect
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListDefectsSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<DefectResourceCollection> {
      return localVarFp
        .getListDefectsSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Release by ID
     * @param {string} id ID of the Release to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReleaseById(id: string, options?: any): AxiosPromise<ReleaseResource> {
      return localVarFp
        .getReleaseById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Release by ID
     * @param {string} id ID of the Release to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReleaseByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<ReleaseResource> {
      return localVarFp
        .getReleaseByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a single release by project ID and version number.
     * @param {string} id ID of the resource
     * @param {string} version Release version number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReleaseByProjectAndVersion(
      id: string,
      version: string,
      options?: any
    ): AxiosPromise<ReleaseResource> {
      return localVarFp
        .getReleaseByProjectAndVersion(id, version, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a single release by project ID and version number.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {string} version Release version number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReleaseByProjectAndVersionSpaces(
      baseSpaceId: string,
      id: string,
      version: string,
      options?: any
    ): AxiosPromise<ReleaseResource> {
      return localVarFp
        .getReleaseByProjectAndVersionSpaces(baseSpaceId, id, version, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all of the information necessary for creating or editing a deployment for this release.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReleaseLifecycleProgression(
      id: string,
      options?: any
    ): AxiosPromise<LifecycleProgressionResource> {
      return localVarFp
        .getReleaseLifecycleProgression(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all of the information necessary for creating or editing a deployment for this release.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReleaseLifecycleProgressionSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<LifecycleProgressionResource> {
      return localVarFp
        .getReleaseLifecycleProgressionSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the releases that belong to the given project. Releases will be ordered from most recent to least recent.
     * @summary Get a list of ReleaseResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectReleases(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ReleaseResourceCollection> {
      return localVarFp
        .indexProjectReleases(id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the releases that belong to the given project. Releases will be ordered from most recent to least recent.
     * @summary Get a list of ReleaseResources for the given ProjectResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectReleasesSpaces(
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ReleaseResourceCollection> {
      return localVarFp
        .indexProjectReleasesSpaces(baseSpaceId, id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deployments will be ordered from most recent to least recent
     * @summary Lists all of the Deployments that belong to the given Release
     * @param {string} id ID of the Release to load
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexReleaseDeployments(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<DeploymentResourceCollection> {
      return localVarFp
        .indexReleaseDeployments(id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deployments will be ordered from most recent to least recent
     * @summary Lists all of the Deployments that belong to the given Release
     * @param {string} id ID of the Release to load
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexReleaseDeploymentsSpaces(
      id: string,
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<DeploymentResourceCollection> {
      return localVarFp
        .indexReleaseDeploymentsSpaces(id, baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the Releases in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent release.
     * @summary Get a list of Releases
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexReleases(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ReleaseResourceCollection> {
      return localVarFp
        .indexReleases(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the Releases in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent release.
     * @summary Get a list of Releases
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexReleasesSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ReleaseResourceCollection> {
      return localVarFp
        .indexReleasesSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates an existing release.
     * @summary Modify a ReleaseResource by ID
     * @param {string} id ID of the ReleaseResource to modify
     * @param {boolean} [ignoreChannelRules] Ignore channel rules.
     * @param {ReleaseResource} [body] The ReleaseResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRelease(
      id: string,
      ignoreChannelRules?: boolean,
      body?: ReleaseResource,
      options?: any
    ): AxiosPromise<ReleaseResource> {
      return localVarFp
        .updateRelease(id, ignoreChannelRules, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates an existing release.
     * @summary Modify a ReleaseResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ReleaseResource to modify
     * @param {boolean} [ignoreChannelRules] Ignore channel rules.
     * @param {ReleaseResource} [body] The ReleaseResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateReleaseSpaces(
      baseSpaceId: string,
      id: string,
      ignoreChannelRules?: boolean,
      body?: ReleaseResource,
      options?: any
    ): AxiosPromise<ReleaseResource> {
      return localVarFp
        .updateReleaseSpaces(baseSpaceId, id, ignoreChannelRules, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ReleasesApi - interface
 * @export
 * @interface ReleasesApi
 */
export interface ReleasesApiInterface {
  /**
   * Record defect in a release.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  createDefectReported(id: string, options?: any): AxiosPromise<DefectResource>;

  /**
   * Record defect in a release.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  createDefectReportedSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<DefectResource>;

  /**
   * Update or resolve defect in a release.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  createDefectResolved(id: string, options?: any): AxiosPromise<DefectResource>;

  /**
   * Update or resolve defect in a release.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  createDefectResolvedSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<DefectResource>;

  /**
   * Returns an array of documents that describes what steps will/won\'t be run during deployments to a given set of environments and tenants.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  createDeploymentPreviewCollection(
    id: string,
    options?: any
  ): AxiosPromise<Array<DeploymentPreviewResource>>;

  /**
   * Returns an array of documents that describes what steps will/won\'t be run during deployments to a given set of environments and tenants.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  createDeploymentPreviewCollectionSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<Array<DeploymentPreviewResource>>;

  /**
   * Creates a new release.
   * @summary Create a ReleaseResource
   * @param {boolean} [ignoreChannelRules] Ignore channel rules.
   * @param {ReleaseResource} [body] The ReleaseResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  createRelease(
    ignoreChannelRules?: boolean,
    body?: ReleaseResource,
    options?: any
  ): AxiosPromise<ReleaseResource>;

  /**
   * Refresh the variable snapshots associated with the release. The project\'s deployment process must not have changed since the release was created.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  createReleaseSnapshotVariables(
    id: string,
    options?: any
  ): AxiosPromise<ReleaseResource>;

  /**
   * Refresh the variable snapshots associated with the release. The project\'s deployment process must not have changed since the release was created.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  createReleaseSnapshotVariablesSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<ReleaseResource>;

  /**
   * Creates a new release.
   * @summary Create a ReleaseResource
   * @param {string} baseSpaceId ID of the space
   * @param {boolean} [ignoreChannelRules] Ignore channel rules.
   * @param {ReleaseResource} [body] The ReleaseResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  createReleaseSpaces(
    baseSpaceId: string,
    ignoreChannelRules?: boolean,
    body?: ReleaseResource,
    options?: any
  ): AxiosPromise<ReleaseResource>;

  /**
   * Deletes an existing release, along with all of the deployments, tasks and other associated resources belonging to the release.
   * @summary Delete a ReleaseResource by ID
   * @param {string} id ID of the ReleaseResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  deleteRelease(id: string, options?: any): AxiosPromise<void>;

  /**
   * Deletes an existing release, along with all of the deployments, tasks and other associated resources belonging to the release.
   * @summary Delete a ReleaseResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ReleaseResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  deleteReleaseSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  getDeploymentPreview(
    environment: string,
    id: string,
    options?: any
  ): AxiosPromise<DeploymentPreviewResource>;

  /**
   * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {string} tenant ID of the tenant
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  getDeploymentPreview1(
    environment: string,
    id: string,
    tenant: string,
    options?: any
  ): AxiosPromise<DeploymentPreviewResource>;

  /**
   * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
   * @param {string} baseSpaceId ID of the space
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  getDeploymentPreviewSpaces(
    baseSpaceId: string,
    environment: string,
    id: string,
    options?: any
  ): AxiosPromise<DeploymentPreviewResource>;

  /**
   * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
   * @param {string} baseSpaceId ID of the space
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {string} tenant ID of the tenant
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  getDeploymentPreviewSpaces1(
    baseSpaceId: string,
    environment: string,
    id: string,
    tenant: string,
    options?: any
  ): AxiosPromise<DeploymentPreviewResource>;

  /**
   * Gets all of the information necessary for creating or editing a deployment for this release.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  getDeploymentTemplate(
    id: string,
    options?: any
  ): AxiosPromise<DeploymentTemplateResource>;

  /**
   * Gets all of the information necessary for creating or editing a deployment for this release.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  getDeploymentTemplateSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<DeploymentTemplateResource>;

  /**
   * Gets all defects for a release.
   * @param {string} id ID of the defect
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  getListDefects(
    id: string,
    options?: any
  ): AxiosPromise<DefectResourceCollection>;

  /**
   * Gets all defects for a release.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the defect
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  getListDefectsSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<DefectResourceCollection>;

  /**
   *
   * @summary Get a Release by ID
   * @param {string} id ID of the Release to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  getReleaseById(id: string, options?: any): AxiosPromise<ReleaseResource>;

  /**
   *
   * @summary Get a Release by ID
   * @param {string} id ID of the Release to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  getReleaseByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<ReleaseResource>;

  /**
   * Gets a single release by project ID and version number.
   * @param {string} id ID of the resource
   * @param {string} version Release version number
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  getReleaseByProjectAndVersion(
    id: string,
    version: string,
    options?: any
  ): AxiosPromise<ReleaseResource>;

  /**
   * Gets a single release by project ID and version number.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {string} version Release version number
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  getReleaseByProjectAndVersionSpaces(
    baseSpaceId: string,
    id: string,
    version: string,
    options?: any
  ): AxiosPromise<ReleaseResource>;

  /**
   * Gets all of the information necessary for creating or editing a deployment for this release.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  getReleaseLifecycleProgression(
    id: string,
    options?: any
  ): AxiosPromise<LifecycleProgressionResource>;

  /**
   * Gets all of the information necessary for creating or editing a deployment for this release.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  getReleaseLifecycleProgressionSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<LifecycleProgressionResource>;

  /**
   * Lists all of the releases that belong to the given project. Releases will be ordered from most recent to least recent.
   * @summary Get a list of ReleaseResources for the given ProjectResource
   * @param {string} id ID of the Project
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  indexProjectReleases(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ReleaseResourceCollection>;

  /**
   * Lists all of the releases that belong to the given project. Releases will be ordered from most recent to least recent.
   * @summary Get a list of ReleaseResources for the given ProjectResource
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the Project
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  indexProjectReleasesSpaces(
    baseSpaceId: string,
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ReleaseResourceCollection>;

  /**
   * Deployments will be ordered from most recent to least recent
   * @summary Lists all of the Deployments that belong to the given Release
   * @param {string} id ID of the Release to load
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  indexReleaseDeployments(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<DeploymentResourceCollection>;

  /**
   * Deployments will be ordered from most recent to least recent
   * @summary Lists all of the Deployments that belong to the given Release
   * @param {string} id ID of the Release to load
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  indexReleaseDeploymentsSpaces(
    id: string,
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<DeploymentResourceCollection>;

  /**
   * Lists all of the Releases in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent release.
   * @summary Get a list of Releases
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  indexReleases(
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ReleaseResourceCollection>;

  /**
   * Lists all of the Releases in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent release.
   * @summary Get a list of Releases
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  indexReleasesSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ReleaseResourceCollection>;

  /**
   * Updates an existing release.
   * @summary Modify a ReleaseResource by ID
   * @param {string} id ID of the ReleaseResource to modify
   * @param {boolean} [ignoreChannelRules] Ignore channel rules.
   * @param {ReleaseResource} [body] The ReleaseResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  updateRelease(
    id: string,
    ignoreChannelRules?: boolean,
    body?: ReleaseResource,
    options?: any
  ): AxiosPromise<ReleaseResource>;

  /**
   * Updates an existing release.
   * @summary Modify a ReleaseResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ReleaseResource to modify
   * @param {boolean} [ignoreChannelRules] Ignore channel rules.
   * @param {ReleaseResource} [body] The ReleaseResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApiInterface
   */
  updateReleaseSpaces(
    baseSpaceId: string,
    id: string,
    ignoreChannelRules?: boolean,
    body?: ReleaseResource,
    options?: any
  ): AxiosPromise<ReleaseResource>;
}

/**
 * ReleasesApi - object-oriented interface
 * @export
 * @class ReleasesApi
 * @extends {BaseAPI}
 */
export class ReleasesApi extends BaseAPI implements ReleasesApiInterface {
  /**
   * Record defect in a release.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public createDefectReported(id: string, options?: any) {
    return ReleasesApiFp(this.configuration)
      .createDefectReported(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Record defect in a release.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public createDefectReportedSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .createDefectReportedSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Update or resolve defect in a release.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public createDefectResolved(id: string, options?: any) {
    return ReleasesApiFp(this.configuration)
      .createDefectResolved(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Update or resolve defect in a release.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public createDefectResolvedSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .createDefectResolvedSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns an array of documents that describes what steps will/won\'t be run during deployments to a given set of environments and tenants.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public createDeploymentPreviewCollection(id: string, options?: any) {
    return ReleasesApiFp(this.configuration)
      .createDeploymentPreviewCollection(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns an array of documents that describes what steps will/won\'t be run during deployments to a given set of environments and tenants.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public createDeploymentPreviewCollectionSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .createDeploymentPreviewCollectionSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new release.
   * @summary Create a ReleaseResource
   * @param {boolean} [ignoreChannelRules] Ignore channel rules.
   * @param {ReleaseResource} [body] The ReleaseResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public createRelease(
    ignoreChannelRules?: boolean,
    body?: ReleaseResource,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .createRelease(ignoreChannelRules, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Refresh the variable snapshots associated with the release. The project\'s deployment process must not have changed since the release was created.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public createReleaseSnapshotVariables(id: string, options?: any) {
    return ReleasesApiFp(this.configuration)
      .createReleaseSnapshotVariables(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Refresh the variable snapshots associated with the release. The project\'s deployment process must not have changed since the release was created.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public createReleaseSnapshotVariablesSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .createReleaseSnapshotVariablesSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new release.
   * @summary Create a ReleaseResource
   * @param {string} baseSpaceId ID of the space
   * @param {boolean} [ignoreChannelRules] Ignore channel rules.
   * @param {ReleaseResource} [body] The ReleaseResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public createReleaseSpaces(
    baseSpaceId: string,
    ignoreChannelRules?: boolean,
    body?: ReleaseResource,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .createReleaseSpaces(baseSpaceId, ignoreChannelRules, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing release, along with all of the deployments, tasks and other associated resources belonging to the release.
   * @summary Delete a ReleaseResource by ID
   * @param {string} id ID of the ReleaseResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public deleteRelease(id: string, options?: any) {
    return ReleasesApiFp(this.configuration)
      .deleteRelease(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing release, along with all of the deployments, tasks and other associated resources belonging to the release.
   * @summary Delete a ReleaseResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ReleaseResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public deleteReleaseSpaces(baseSpaceId: string, id: string, options?: any) {
    return ReleasesApiFp(this.configuration)
      .deleteReleaseSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public getDeploymentPreview(environment: string, id: string, options?: any) {
    return ReleasesApiFp(this.configuration)
      .getDeploymentPreview(environment, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {string} tenant ID of the tenant
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public getDeploymentPreview1(
    environment: string,
    id: string,
    tenant: string,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .getDeploymentPreview1(environment, id, tenant, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
   * @param {string} baseSpaceId ID of the space
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public getDeploymentPreviewSpaces(
    baseSpaceId: string,
    environment: string,
    id: string,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .getDeploymentPreviewSpaces(baseSpaceId, environment, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a document that describes what steps will/won\'t be run during a deployment to a given environment (and tenant if supplied).
   * @param {string} baseSpaceId ID of the space
   * @param {string} environment ID of the environment
   * @param {string} id ID of the resource
   * @param {string} tenant ID of the tenant
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public getDeploymentPreviewSpaces1(
    baseSpaceId: string,
    environment: string,
    id: string,
    tenant: string,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .getDeploymentPreviewSpaces1(
        baseSpaceId,
        environment,
        id,
        tenant,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all of the information necessary for creating or editing a deployment for this release.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public getDeploymentTemplate(id: string, options?: any) {
    return ReleasesApiFp(this.configuration)
      .getDeploymentTemplate(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all of the information necessary for creating or editing a deployment for this release.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public getDeploymentTemplateSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .getDeploymentTemplateSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all defects for a release.
   * @param {string} id ID of the defect
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public getListDefects(id: string, options?: any) {
    return ReleasesApiFp(this.configuration)
      .getListDefects(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all defects for a release.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the defect
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public getListDefectsSpaces(baseSpaceId: string, id: string, options?: any) {
    return ReleasesApiFp(this.configuration)
      .getListDefectsSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Release by ID
   * @param {string} id ID of the Release to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public getReleaseById(id: string, options?: any) {
    return ReleasesApiFp(this.configuration)
      .getReleaseById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Release by ID
   * @param {string} id ID of the Release to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public getReleaseByIdSpaces(id: string, baseSpaceId: string, options?: any) {
    return ReleasesApiFp(this.configuration)
      .getReleaseByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a single release by project ID and version number.
   * @param {string} id ID of the resource
   * @param {string} version Release version number
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public getReleaseByProjectAndVersion(
    id: string,
    version: string,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .getReleaseByProjectAndVersion(id, version, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a single release by project ID and version number.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {string} version Release version number
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public getReleaseByProjectAndVersionSpaces(
    baseSpaceId: string,
    id: string,
    version: string,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .getReleaseByProjectAndVersionSpaces(baseSpaceId, id, version, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all of the information necessary for creating or editing a deployment for this release.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public getReleaseLifecycleProgression(id: string, options?: any) {
    return ReleasesApiFp(this.configuration)
      .getReleaseLifecycleProgression(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all of the information necessary for creating or editing a deployment for this release.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public getReleaseLifecycleProgressionSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .getReleaseLifecycleProgressionSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the releases that belong to the given project. Releases will be ordered from most recent to least recent.
   * @summary Get a list of ReleaseResources for the given ProjectResource
   * @param {string} id ID of the Project
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public indexProjectReleases(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .indexProjectReleases(id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the releases that belong to the given project. Releases will be ordered from most recent to least recent.
   * @summary Get a list of ReleaseResources for the given ProjectResource
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the Project
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public indexProjectReleasesSpaces(
    baseSpaceId: string,
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .indexProjectReleasesSpaces(baseSpaceId, id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deployments will be ordered from most recent to least recent
   * @summary Lists all of the Deployments that belong to the given Release
   * @param {string} id ID of the Release to load
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public indexReleaseDeployments(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .indexReleaseDeployments(id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deployments will be ordered from most recent to least recent
   * @summary Lists all of the Deployments that belong to the given Release
   * @param {string} id ID of the Release to load
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public indexReleaseDeploymentsSpaces(
    id: string,
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .indexReleaseDeploymentsSpaces(id, baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the Releases in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent release.
   * @summary Get a list of Releases
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public indexReleases(skip?: number, take?: number, options?: any) {
    return ReleasesApiFp(this.configuration)
      .indexReleases(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the Releases in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent release.
   * @summary Get a list of Releases
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public indexReleasesSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .indexReleasesSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates an existing release.
   * @summary Modify a ReleaseResource by ID
   * @param {string} id ID of the ReleaseResource to modify
   * @param {boolean} [ignoreChannelRules] Ignore channel rules.
   * @param {ReleaseResource} [body] The ReleaseResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public updateRelease(
    id: string,
    ignoreChannelRules?: boolean,
    body?: ReleaseResource,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .updateRelease(id, ignoreChannelRules, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates an existing release.
   * @summary Modify a ReleaseResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ReleaseResource to modify
   * @param {boolean} [ignoreChannelRules] Ignore channel rules.
   * @param {ReleaseResource} [body] The ReleaseResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReleasesApi
   */
  public updateReleaseSpaces(
    baseSpaceId: string,
    id: string,
    ignoreChannelRules?: boolean,
    body?: ReleaseResource,
    options?: any
  ) {
    return ReleasesApiFp(this.configuration)
      .updateReleaseSpaces(baseSpaceId, id, ignoreChannelRules, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
