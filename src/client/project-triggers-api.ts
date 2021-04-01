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
import { ProjectTriggerResource } from "../model";
// @ts-ignore
import { ProjectTriggerResourceCollection } from "../model";
/**
 * ProjectTriggersApi - axios parameter creator
 * @export
 */
export const ProjectTriggersApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new project trigger
     * @summary Create a ProjectTriggerResource
     * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProjectTrigger: async (
      body?: ProjectTriggerResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/projecttriggers`;
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
     * Creates a new project trigger
     * @summary Create a ProjectTriggerResource
     * @param {string} baseSpaceId ID of the space
     * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProjectTriggerSpaces: async (
      baseSpaceId: string,
      body?: ProjectTriggerResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createProjectTriggerSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/projecttriggers`.replace(
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
     * Deletes an existing project trigger.
     * @summary Delete a ProjectTriggerResource by ID
     * @param {string} id ID of the ProjectTriggerResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProjectTrigger: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteProjectTrigger", "id", id);
      const localVarPath = `/projecttriggers/{id}`.replace(
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
     * Deletes an existing project trigger.
     * @summary Delete a ProjectTriggerResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProjectTriggerResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProjectTriggerSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "deleteProjectTriggerSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteProjectTriggerSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/projecttriggers/{id}`
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
     * @summary Get a Project Trigger by ID
     * @param {string} id ID of the ProjectTrigger to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectTriggerById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getProjectTriggerById", "id", id);
      const localVarPath = `/projecttriggers/{id}`.replace(
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
     * @summary Get a Project Trigger by ID
     * @param {string} id ID of the ProjectTrigger to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectTriggerByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getProjectTriggerByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getProjectTriggerByIdSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/projecttriggers/{id}`
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
     * Lists all the project triggers for the given project
     * @summary Get a list of ProjectTriggerResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectProjectTriggers: async (
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexProjectProjectTriggers", "id", id);
      const localVarPath = `/projects/{id}/triggers`.replace(
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
     * Lists all the project triggers for the given project
     * @summary Get a list of ProjectTriggerResources for the given ProjectResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectProjectTriggersSpaces: async (
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexProjectProjectTriggersSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexProjectProjectTriggersSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/projects/{id}/triggers`
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
     * Gets all the project triggers in the supplied Octopus Deploy Space, sorted by Id
     * @summary Get a list of ProjectTriggerResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectTriggers: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/projecttriggers`;
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
     * Gets all the project triggers in the supplied Octopus Deploy Space, sorted by Id
     * @summary Get a list of ProjectTriggerResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectTriggersSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexProjectTriggersSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/projecttriggers`.replace(
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
     * Updates an existing project trigger
     * @summary Modify a ProjectTriggerResource by ID
     * @param {string} id ID of the ProjectTriggerResource to modify
     * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProjectTrigger: async (
      id: string,
      body?: ProjectTriggerResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateProjectTrigger", "id", id);
      const localVarPath = `/projecttriggers/{id}`.replace(
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
     * Updates an existing project trigger
     * @summary Modify a ProjectTriggerResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProjectTriggerResource to modify
     * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProjectTriggerSpaces: async (
      baseSpaceId: string,
      id: string,
      body?: ProjectTriggerResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "updateProjectTriggerSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateProjectTriggerSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/projecttriggers/{id}`
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
 * ProjectTriggersApi - functional programming interface
 * @export
 */
export const ProjectTriggersApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ProjectTriggersApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Creates a new project trigger
     * @summary Create a ProjectTriggerResource
     * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createProjectTrigger(
      body?: ProjectTriggerResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectTriggerResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createProjectTrigger(
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
     * Creates a new project trigger
     * @summary Create a ProjectTriggerResource
     * @param {string} baseSpaceId ID of the space
     * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createProjectTriggerSpaces(
      baseSpaceId: string,
      body?: ProjectTriggerResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectTriggerResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createProjectTriggerSpaces(
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
     * Deletes an existing project trigger.
     * @summary Delete a ProjectTriggerResource by ID
     * @param {string} id ID of the ProjectTriggerResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteProjectTrigger(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProjectTrigger(
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
     * Deletes an existing project trigger.
     * @summary Delete a ProjectTriggerResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProjectTriggerResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteProjectTriggerSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProjectTriggerSpaces(
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
     * @summary Get a Project Trigger by ID
     * @param {string} id ID of the ProjectTrigger to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getProjectTriggerById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectTriggerResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectTriggerById(
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
     * @summary Get a Project Trigger by ID
     * @param {string} id ID of the ProjectTrigger to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getProjectTriggerByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectTriggerResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectTriggerByIdSpaces(
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
     * Lists all the project triggers for the given project
     * @summary Get a list of ProjectTriggerResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProjectProjectTriggers(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectTriggerResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexProjectProjectTriggers(
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
     * Lists all the project triggers for the given project
     * @summary Get a list of ProjectTriggerResources for the given ProjectResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProjectProjectTriggersSpaces(
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectTriggerResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexProjectProjectTriggersSpaces(
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
     * Gets all the project triggers in the supplied Octopus Deploy Space, sorted by Id
     * @summary Get a list of ProjectTriggerResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProjectTriggers(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectTriggerResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexProjectTriggers(
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
     * Gets all the project triggers in the supplied Octopus Deploy Space, sorted by Id
     * @summary Get a list of ProjectTriggerResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProjectTriggersSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectTriggerResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexProjectTriggersSpaces(
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
     * Updates an existing project trigger
     * @summary Modify a ProjectTriggerResource by ID
     * @param {string} id ID of the ProjectTriggerResource to modify
     * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateProjectTrigger(
      id: string,
      body?: ProjectTriggerResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectTriggerResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateProjectTrigger(
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
     * Updates an existing project trigger
     * @summary Modify a ProjectTriggerResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProjectTriggerResource to modify
     * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateProjectTriggerSpaces(
      baseSpaceId: string,
      id: string,
      body?: ProjectTriggerResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectTriggerResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateProjectTriggerSpaces(
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
 * ProjectTriggersApi - factory interface
 * @export
 */
export const ProjectTriggersApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ProjectTriggersApiFp(configuration);
  return {
    /**
     * Creates a new project trigger
     * @summary Create a ProjectTriggerResource
     * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProjectTrigger(
      body?: ProjectTriggerResource,
      options?: any
    ): AxiosPromise<ProjectTriggerResource> {
      return localVarFp
        .createProjectTrigger(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new project trigger
     * @summary Create a ProjectTriggerResource
     * @param {string} baseSpaceId ID of the space
     * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProjectTriggerSpaces(
      baseSpaceId: string,
      body?: ProjectTriggerResource,
      options?: any
    ): AxiosPromise<ProjectTriggerResource> {
      return localVarFp
        .createProjectTriggerSpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing project trigger.
     * @summary Delete a ProjectTriggerResource by ID
     * @param {string} id ID of the ProjectTriggerResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProjectTrigger(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteProjectTrigger(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing project trigger.
     * @summary Delete a ProjectTriggerResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProjectTriggerResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProjectTriggerSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteProjectTriggerSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Project Trigger by ID
     * @param {string} id ID of the ProjectTrigger to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectTriggerById(
      id: string,
      options?: any
    ): AxiosPromise<ProjectTriggerResource> {
      return localVarFp
        .getProjectTriggerById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Project Trigger by ID
     * @param {string} id ID of the ProjectTrigger to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectTriggerByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<ProjectTriggerResource> {
      return localVarFp
        .getProjectTriggerByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the project triggers for the given project
     * @summary Get a list of ProjectTriggerResources for the given ProjectResource
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectProjectTriggers(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ProjectTriggerResourceCollection> {
      return localVarFp
        .indexProjectProjectTriggers(id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the project triggers for the given project
     * @summary Get a list of ProjectTriggerResources for the given ProjectResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Project
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectProjectTriggersSpaces(
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ProjectTriggerResourceCollection> {
      return localVarFp
        .indexProjectProjectTriggersSpaces(baseSpaceId, id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all the project triggers in the supplied Octopus Deploy Space, sorted by Id
     * @summary Get a list of ProjectTriggerResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectTriggers(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ProjectTriggerResourceCollection> {
      return localVarFp
        .indexProjectTriggers(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all the project triggers in the supplied Octopus Deploy Space, sorted by Id
     * @summary Get a list of ProjectTriggerResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectTriggersSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ProjectTriggerResourceCollection> {
      return localVarFp
        .indexProjectTriggersSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates an existing project trigger
     * @summary Modify a ProjectTriggerResource by ID
     * @param {string} id ID of the ProjectTriggerResource to modify
     * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProjectTrigger(
      id: string,
      body?: ProjectTriggerResource,
      options?: any
    ): AxiosPromise<ProjectTriggerResource> {
      return localVarFp
        .updateProjectTrigger(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates an existing project trigger
     * @summary Modify a ProjectTriggerResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProjectTriggerResource to modify
     * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProjectTriggerSpaces(
      baseSpaceId: string,
      id: string,
      body?: ProjectTriggerResource,
      options?: any
    ): AxiosPromise<ProjectTriggerResource> {
      return localVarFp
        .updateProjectTriggerSpaces(baseSpaceId, id, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ProjectTriggersApi - interface
 * @export
 * @interface ProjectTriggersApi
 */
export interface ProjectTriggersApiInterface {
  /**
   * Creates a new project trigger
   * @summary Create a ProjectTriggerResource
   * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApiInterface
   */
  createProjectTrigger(
    body?: ProjectTriggerResource,
    options?: any
  ): AxiosPromise<ProjectTriggerResource>;

  /**
   * Creates a new project trigger
   * @summary Create a ProjectTriggerResource
   * @param {string} baseSpaceId ID of the space
   * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApiInterface
   */
  createProjectTriggerSpaces(
    baseSpaceId: string,
    body?: ProjectTriggerResource,
    options?: any
  ): AxiosPromise<ProjectTriggerResource>;

  /**
   * Deletes an existing project trigger.
   * @summary Delete a ProjectTriggerResource by ID
   * @param {string} id ID of the ProjectTriggerResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApiInterface
   */
  deleteProjectTrigger(id: string, options?: any): AxiosPromise<void>;

  /**
   * Deletes an existing project trigger.
   * @summary Delete a ProjectTriggerResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ProjectTriggerResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApiInterface
   */
  deleteProjectTriggerSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   *
   * @summary Get a Project Trigger by ID
   * @param {string} id ID of the ProjectTrigger to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApiInterface
   */
  getProjectTriggerById(
    id: string,
    options?: any
  ): AxiosPromise<ProjectTriggerResource>;

  /**
   *
   * @summary Get a Project Trigger by ID
   * @param {string} id ID of the ProjectTrigger to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApiInterface
   */
  getProjectTriggerByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<ProjectTriggerResource>;

  /**
   * Lists all the project triggers for the given project
   * @summary Get a list of ProjectTriggerResources for the given ProjectResource
   * @param {string} id ID of the Project
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApiInterface
   */
  indexProjectProjectTriggers(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ProjectTriggerResourceCollection>;

  /**
   * Lists all the project triggers for the given project
   * @summary Get a list of ProjectTriggerResources for the given ProjectResource
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the Project
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApiInterface
   */
  indexProjectProjectTriggersSpaces(
    baseSpaceId: string,
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ProjectTriggerResourceCollection>;

  /**
   * Gets all the project triggers in the supplied Octopus Deploy Space, sorted by Id
   * @summary Get a list of ProjectTriggerResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApiInterface
   */
  indexProjectTriggers(
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ProjectTriggerResourceCollection>;

  /**
   * Gets all the project triggers in the supplied Octopus Deploy Space, sorted by Id
   * @summary Get a list of ProjectTriggerResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApiInterface
   */
  indexProjectTriggersSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ProjectTriggerResourceCollection>;

  /**
   * Updates an existing project trigger
   * @summary Modify a ProjectTriggerResource by ID
   * @param {string} id ID of the ProjectTriggerResource to modify
   * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApiInterface
   */
  updateProjectTrigger(
    id: string,
    body?: ProjectTriggerResource,
    options?: any
  ): AxiosPromise<ProjectTriggerResource>;

  /**
   * Updates an existing project trigger
   * @summary Modify a ProjectTriggerResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ProjectTriggerResource to modify
   * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApiInterface
   */
  updateProjectTriggerSpaces(
    baseSpaceId: string,
    id: string,
    body?: ProjectTriggerResource,
    options?: any
  ): AxiosPromise<ProjectTriggerResource>;
}

/**
 * ProjectTriggersApi - object-oriented interface
 * @export
 * @class ProjectTriggersApi
 * @extends {BaseAPI}
 */
export class ProjectTriggersApi
  extends BaseAPI
  implements ProjectTriggersApiInterface {
  /**
   * Creates a new project trigger
   * @summary Create a ProjectTriggerResource
   * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApi
   */
  public createProjectTrigger(body?: ProjectTriggerResource, options?: any) {
    return ProjectTriggersApiFp(this.configuration)
      .createProjectTrigger(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new project trigger
   * @summary Create a ProjectTriggerResource
   * @param {string} baseSpaceId ID of the space
   * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApi
   */
  public createProjectTriggerSpaces(
    baseSpaceId: string,
    body?: ProjectTriggerResource,
    options?: any
  ) {
    return ProjectTriggersApiFp(this.configuration)
      .createProjectTriggerSpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing project trigger.
   * @summary Delete a ProjectTriggerResource by ID
   * @param {string} id ID of the ProjectTriggerResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApi
   */
  public deleteProjectTrigger(id: string, options?: any) {
    return ProjectTriggersApiFp(this.configuration)
      .deleteProjectTrigger(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing project trigger.
   * @summary Delete a ProjectTriggerResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ProjectTriggerResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApi
   */
  public deleteProjectTriggerSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return ProjectTriggersApiFp(this.configuration)
      .deleteProjectTriggerSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Project Trigger by ID
   * @param {string} id ID of the ProjectTrigger to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApi
   */
  public getProjectTriggerById(id: string, options?: any) {
    return ProjectTriggersApiFp(this.configuration)
      .getProjectTriggerById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Project Trigger by ID
   * @param {string} id ID of the ProjectTrigger to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApi
   */
  public getProjectTriggerByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ) {
    return ProjectTriggersApiFp(this.configuration)
      .getProjectTriggerByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the project triggers for the given project
   * @summary Get a list of ProjectTriggerResources for the given ProjectResource
   * @param {string} id ID of the Project
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApi
   */
  public indexProjectProjectTriggers(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ProjectTriggersApiFp(this.configuration)
      .indexProjectProjectTriggers(id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the project triggers for the given project
   * @summary Get a list of ProjectTriggerResources for the given ProjectResource
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the Project
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApi
   */
  public indexProjectProjectTriggersSpaces(
    baseSpaceId: string,
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ProjectTriggersApiFp(this.configuration)
      .indexProjectProjectTriggersSpaces(baseSpaceId, id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all the project triggers in the supplied Octopus Deploy Space, sorted by Id
   * @summary Get a list of ProjectTriggerResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApi
   */
  public indexProjectTriggers(skip?: number, take?: number, options?: any) {
    return ProjectTriggersApiFp(this.configuration)
      .indexProjectTriggers(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all the project triggers in the supplied Octopus Deploy Space, sorted by Id
   * @summary Get a list of ProjectTriggerResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApi
   */
  public indexProjectTriggersSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ProjectTriggersApiFp(this.configuration)
      .indexProjectTriggersSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates an existing project trigger
   * @summary Modify a ProjectTriggerResource by ID
   * @param {string} id ID of the ProjectTriggerResource to modify
   * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApi
   */
  public updateProjectTrigger(
    id: string,
    body?: ProjectTriggerResource,
    options?: any
  ) {
    return ProjectTriggersApiFp(this.configuration)
      .updateProjectTrigger(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates an existing project trigger
   * @summary Modify a ProjectTriggerResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ProjectTriggerResource to modify
   * @param {ProjectTriggerResource} [body] The ProjectTriggerResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectTriggersApi
   */
  public updateProjectTriggerSpaces(
    baseSpaceId: string,
    id: string,
    body?: ProjectTriggerResource,
    options?: any
  ) {
    return ProjectTriggersApiFp(this.configuration)
      .updateProjectTriggerSpaces(baseSpaceId, id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
