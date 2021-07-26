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
import { LifecycleResource } from "../model";
// @ts-ignore
import { LifecycleResourceCollection } from "../model";
// @ts-ignore
import { ProjectResource } from "../model";
/**
 * LifecyclesApi - axios parameter creator
 * @export
 */
export const LifecyclesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new lifecycle.
     * @summary Create a LifecycleResource
     * @param {LifecycleResource} [body] The LifecycleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLifecycle: async (
      body?: LifecycleResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/lifecycles`;
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
     * Creates a new lifecycle.
     * @summary Create a LifecycleResource
     * @param {string} baseSpaceId ID of the space
     * @param {LifecycleResource} [body] The LifecycleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLifecycleSpaces: async (
      baseSpaceId: string,
      body?: LifecycleResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createLifecycleSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/lifecycles`.replace(
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
     * Deletes an existing lifecycle.
     * @summary Delete a LifecycleResource by ID
     * @param {string} id ID of the LifecycleResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteLifecycle: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteLifecycle", "id", id);
      const localVarPath = `/lifecycles/{id}`.replace(
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
     * Deletes an existing lifecycle.
     * @summary Delete a LifecycleResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the LifecycleResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteLifecycleSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("deleteLifecycleSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteLifecycleSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/lifecycles/{id}`
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
     * @summary Get a Lifecycle by ID
     * @param {string} id ID of the Lifecycle to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLifecycleById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getLifecycleById", "id", id);
      const localVarPath = `/lifecycles/{id}`.replace(
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
     * @summary Get a Lifecycle by ID
     * @param {string} id ID of the Lifecycle to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLifecycleByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getLifecycleByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getLifecycleByIdSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/lifecycles/{id}`
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
     * Gets a single lifecycle by ID, as a preview.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLifecyclePreview: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getLifecyclePreview", "id", id);
      const localVarPath = `/lifecycles/{id}/preview`.replace(
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
     * Gets a single lifecycle by ID, as a preview.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLifecyclePreviewSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getLifecyclePreviewSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getLifecyclePreviewSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/lifecycles/{id}/preview`
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
     * Gets a all projects that use this lifecycle.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLifecycleProjects: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getLifecycleProjects", "id", id);
      const localVarPath = `/lifecycles/{id}/projects`.replace(
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
     * Gets a all projects that use this lifecycle.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLifecycleProjectsSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getLifecycleProjectsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getLifecycleProjectsSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/lifecycles/{id}/projects`
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
     * Lists all of the lifecycles in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LifecycleResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexLifecycles: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/lifecycles`;
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
     * Lists all of the lifecycles in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LifecycleResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexLifecyclesSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("indexLifecyclesSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/lifecycles`.replace(
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
     * Lists all the lifecycles in the supplied Octopus Deploy Space.
     * @summary Get a list of Lifecycles
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllLifecycles: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/lifecycles/all`;
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
     * Lists all the lifecycles in the supplied Octopus Deploy Space.
     * @summary Get a list of Lifecycles
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllLifecyclesSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("listAllLifecyclesSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/lifecycles/all`.replace(
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
     * Modifies an existing lifecycle.
     * @summary Modify a LifecycleResource by ID
     * @param {string} id ID of the LifecycleResource to modify
     * @param {LifecycleResource} [body] The LifecycleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLifecycle: async (
      id: string,
      body?: LifecycleResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateLifecycle", "id", id);
      const localVarPath = `/lifecycles/{id}`.replace(
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
     * Modifies an existing lifecycle.
     * @summary Modify a LifecycleResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the LifecycleResource to modify
     * @param {LifecycleResource} [body] The LifecycleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLifecycleSpaces: async (
      baseSpaceId: string,
      id: string,
      body?: LifecycleResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("updateLifecycleSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateLifecycleSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/lifecycles/{id}`
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
 * LifecyclesApi - functional programming interface
 * @export
 */
export const LifecyclesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    LifecyclesApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a new lifecycle.
     * @summary Create a LifecycleResource
     * @param {LifecycleResource} [body] The LifecycleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createLifecycle(
      body?: LifecycleResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LifecycleResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createLifecycle(
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
     * Creates a new lifecycle.
     * @summary Create a LifecycleResource
     * @param {string} baseSpaceId ID of the space
     * @param {LifecycleResource} [body] The LifecycleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createLifecycleSpaces(
      baseSpaceId: string,
      body?: LifecycleResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LifecycleResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createLifecycleSpaces(
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
     * Deletes an existing lifecycle.
     * @summary Delete a LifecycleResource by ID
     * @param {string} id ID of the LifecycleResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteLifecycle(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteLifecycle(
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
     * Deletes an existing lifecycle.
     * @summary Delete a LifecycleResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the LifecycleResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteLifecycleSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteLifecycleSpaces(
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
     * @summary Get a Lifecycle by ID
     * @param {string} id ID of the Lifecycle to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLifecycleById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LifecycleResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getLifecycleById(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Get a Lifecycle by ID
     * @param {string} id ID of the Lifecycle to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLifecycleByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LifecycleResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getLifecycleByIdSpaces(
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
     * Gets a single lifecycle by ID, as a preview.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLifecyclePreview(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LifecycleResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getLifecyclePreview(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Gets a single lifecycle by ID, as a preview.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLifecyclePreviewSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LifecycleResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getLifecyclePreviewSpaces(
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
     * Gets a all projects that use this lifecycle.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLifecycleProjects(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<ProjectResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getLifecycleProjects(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Gets a all projects that use this lifecycle.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLifecycleProjectsSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<ProjectResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getLifecycleProjectsSpaces(
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
     * Lists all of the lifecycles in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LifecycleResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexLifecycles(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LifecycleResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexLifecycles(
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
     * Lists all of the lifecycles in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LifecycleResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexLifecyclesSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LifecycleResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexLifecyclesSpaces(
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
     * Lists all the lifecycles in the supplied Octopus Deploy Space.
     * @summary Get a list of Lifecycles
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllLifecycles(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<LifecycleResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listAllLifecycles(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists all the lifecycles in the supplied Octopus Deploy Space.
     * @summary Get a list of Lifecycles
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllLifecyclesSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<LifecycleResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listAllLifecyclesSpaces(
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
     * Modifies an existing lifecycle.
     * @summary Modify a LifecycleResource by ID
     * @param {string} id ID of the LifecycleResource to modify
     * @param {LifecycleResource} [body] The LifecycleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateLifecycle(
      id: string,
      body?: LifecycleResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LifecycleResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateLifecycle(
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
     * Modifies an existing lifecycle.
     * @summary Modify a LifecycleResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the LifecycleResource to modify
     * @param {LifecycleResource} [body] The LifecycleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateLifecycleSpaces(
      baseSpaceId: string,
      id: string,
      body?: LifecycleResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LifecycleResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateLifecycleSpaces(
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
 * LifecyclesApi - factory interface
 * @export
 */
export const LifecyclesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = LifecyclesApiFp(configuration);
  return {
    /**
     * Creates a new lifecycle.
     * @summary Create a LifecycleResource
     * @param {LifecycleResource} [body] The LifecycleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLifecycle(
      body?: LifecycleResource,
      options?: any
    ): AxiosPromise<LifecycleResource> {
      return localVarFp
        .createLifecycle(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new lifecycle.
     * @summary Create a LifecycleResource
     * @param {string} baseSpaceId ID of the space
     * @param {LifecycleResource} [body] The LifecycleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLifecycleSpaces(
      baseSpaceId: string,
      body?: LifecycleResource,
      options?: any
    ): AxiosPromise<LifecycleResource> {
      return localVarFp
        .createLifecycleSpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing lifecycle.
     * @summary Delete a LifecycleResource by ID
     * @param {string} id ID of the LifecycleResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteLifecycle(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteLifecycle(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing lifecycle.
     * @summary Delete a LifecycleResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the LifecycleResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteLifecycleSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteLifecycleSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Lifecycle by ID
     * @param {string} id ID of the Lifecycle to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLifecycleById(
      id: string,
      options?: any
    ): AxiosPromise<LifecycleResource> {
      return localVarFp
        .getLifecycleById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Lifecycle by ID
     * @param {string} id ID of the Lifecycle to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLifecycleByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<LifecycleResource> {
      return localVarFp
        .getLifecycleByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a single lifecycle by ID, as a preview.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLifecyclePreview(
      id: string,
      options?: any
    ): AxiosPromise<LifecycleResource> {
      return localVarFp
        .getLifecyclePreview(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a single lifecycle by ID, as a preview.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLifecyclePreviewSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<LifecycleResource> {
      return localVarFp
        .getLifecyclePreviewSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a all projects that use this lifecycle.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLifecycleProjects(
      id: string,
      options?: any
    ): AxiosPromise<Array<ProjectResource>> {
      return localVarFp
        .getLifecycleProjects(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a all projects that use this lifecycle.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLifecycleProjectsSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<Array<ProjectResource>> {
      return localVarFp
        .getLifecycleProjectsSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the lifecycles in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LifecycleResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexLifecycles(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<LifecycleResourceCollection> {
      return localVarFp
        .indexLifecycles(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the lifecycles in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of LifecycleResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexLifecyclesSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<LifecycleResourceCollection> {
      return localVarFp
        .indexLifecyclesSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the lifecycles in the supplied Octopus Deploy Space.
     * @summary Get a list of Lifecycles
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllLifecycles(options?: any): AxiosPromise<Array<LifecycleResource>> {
      return localVarFp
        .listAllLifecycles(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the lifecycles in the supplied Octopus Deploy Space.
     * @summary Get a list of Lifecycles
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllLifecyclesSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<LifecycleResource>> {
      return localVarFp
        .listAllLifecyclesSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing lifecycle.
     * @summary Modify a LifecycleResource by ID
     * @param {string} id ID of the LifecycleResource to modify
     * @param {LifecycleResource} [body] The LifecycleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLifecycle(
      id: string,
      body?: LifecycleResource,
      options?: any
    ): AxiosPromise<LifecycleResource> {
      return localVarFp
        .updateLifecycle(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing lifecycle.
     * @summary Modify a LifecycleResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the LifecycleResource to modify
     * @param {LifecycleResource} [body] The LifecycleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLifecycleSpaces(
      baseSpaceId: string,
      id: string,
      body?: LifecycleResource,
      options?: any
    ): AxiosPromise<LifecycleResource> {
      return localVarFp
        .updateLifecycleSpaces(baseSpaceId, id, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * LifecyclesApi - object-oriented interface
 * @export
 * @class LifecyclesApi
 * @extends {BaseAPI}
 */
export class LifecyclesApi extends BaseAPI {
  /**
   * Creates a new lifecycle.
   * @summary Create a LifecycleResource
   * @param {LifecycleResource} [body] The LifecycleResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LifecyclesApi
   */
  public createLifecycle(body?: LifecycleResource, options?: any) {
    return LifecyclesApiFp(this.configuration)
      .createLifecycle(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new lifecycle.
   * @summary Create a LifecycleResource
   * @param {string} baseSpaceId ID of the space
   * @param {LifecycleResource} [body] The LifecycleResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LifecyclesApi
   */
  public createLifecycleSpaces(
    baseSpaceId: string,
    body?: LifecycleResource,
    options?: any
  ) {
    return LifecyclesApiFp(this.configuration)
      .createLifecycleSpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing lifecycle.
   * @summary Delete a LifecycleResource by ID
   * @param {string} id ID of the LifecycleResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LifecyclesApi
   */
  public deleteLifecycle(id: string, options?: any) {
    return LifecyclesApiFp(this.configuration)
      .deleteLifecycle(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing lifecycle.
   * @summary Delete a LifecycleResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the LifecycleResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LifecyclesApi
   */
  public deleteLifecycleSpaces(baseSpaceId: string, id: string, options?: any) {
    return LifecyclesApiFp(this.configuration)
      .deleteLifecycleSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Lifecycle by ID
   * @param {string} id ID of the Lifecycle to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LifecyclesApi
   */
  public getLifecycleById(id: string, options?: any) {
    return LifecyclesApiFp(this.configuration)
      .getLifecycleById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Lifecycle by ID
   * @param {string} id ID of the Lifecycle to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LifecyclesApi
   */
  public getLifecycleByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ) {
    return LifecyclesApiFp(this.configuration)
      .getLifecycleByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a single lifecycle by ID, as a preview.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LifecyclesApi
   */
  public getLifecyclePreview(id: string, options?: any) {
    return LifecyclesApiFp(this.configuration)
      .getLifecyclePreview(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a single lifecycle by ID, as a preview.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LifecyclesApi
   */
  public getLifecyclePreviewSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return LifecyclesApiFp(this.configuration)
      .getLifecyclePreviewSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a all projects that use this lifecycle.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LifecyclesApi
   */
  public getLifecycleProjects(id: string, options?: any) {
    return LifecyclesApiFp(this.configuration)
      .getLifecycleProjects(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a all projects that use this lifecycle.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LifecyclesApi
   */
  public getLifecycleProjectsSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return LifecyclesApiFp(this.configuration)
      .getLifecycleProjectsSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the lifecycles in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of LifecycleResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LifecyclesApi
   */
  public indexLifecycles(skip?: number, take?: number, options?: any) {
    return LifecyclesApiFp(this.configuration)
      .indexLifecycles(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the lifecycles in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of LifecycleResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LifecyclesApi
   */
  public indexLifecyclesSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return LifecyclesApiFp(this.configuration)
      .indexLifecyclesSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the lifecycles in the supplied Octopus Deploy Space.
   * @summary Get a list of Lifecycles
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LifecyclesApi
   */
  public listAllLifecycles(options?: any) {
    return LifecyclesApiFp(this.configuration)
      .listAllLifecycles(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the lifecycles in the supplied Octopus Deploy Space.
   * @summary Get a list of Lifecycles
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LifecyclesApi
   */
  public listAllLifecyclesSpaces(baseSpaceId: string, options?: any) {
    return LifecyclesApiFp(this.configuration)
      .listAllLifecyclesSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing lifecycle.
   * @summary Modify a LifecycleResource by ID
   * @param {string} id ID of the LifecycleResource to modify
   * @param {LifecycleResource} [body] The LifecycleResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LifecyclesApi
   */
  public updateLifecycle(id: string, body?: LifecycleResource, options?: any) {
    return LifecyclesApiFp(this.configuration)
      .updateLifecycle(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing lifecycle.
   * @summary Modify a LifecycleResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the LifecycleResource to modify
   * @param {LifecycleResource} [body] The LifecycleResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LifecyclesApi
   */
  public updateLifecycleSpaces(
    baseSpaceId: string,
    id: string,
    body?: LifecycleResource,
    options?: any
  ) {
    return LifecyclesApiFp(this.configuration)
      .updateLifecycleSpaces(baseSpaceId, id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
