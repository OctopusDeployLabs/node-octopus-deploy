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
import { ProjectGroupResource } from "../model";
// @ts-ignore
import { ProjectGroupResourceCollection } from "../model";
// @ts-ignore
import { ProjectResourceCollection } from "../model";
/**
 * ProjectGroupsApi - axios parameter creator
 * @export
 */
export const ProjectGroupsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new project group.
     * @summary Create a ProjectGroupResource
     * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProjectGroup: async (
      body?: ProjectGroupResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/projectgroups`;
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
     * Creates a new project group.
     * @summary Create a ProjectGroupResource
     * @param {string} baseSpaceId ID of the space
     * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProjectGroupSpaces: async (
      baseSpaceId: string,
      body?: ProjectGroupResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createProjectGroupSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/projectgroups`.replace(
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
     * Deletes an existing project group.
     * @summary Delete a ProjectGroupResource by ID
     * @param {string} id ID of the ProjectGroupResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProjectGroup: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteProjectGroup", "id", id);
      const localVarPath = `/projectgroups/{id}`.replace(
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
     * Deletes an existing project group.
     * @summary Delete a ProjectGroupResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProjectGroupResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProjectGroupSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("deleteProjectGroupSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteProjectGroupSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/projectgroups/{id}`
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
     * @summary Get a Project Group by ID
     * @param {string} id ID of the ProjectGroup to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectGroupById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getProjectGroupById", "id", id);
      const localVarPath = `/projectgroups/{id}`.replace(
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
     * @summary Get a Project Group by ID
     * @param {string} id ID of the ProjectGroup to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectGroupByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getProjectGroupByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getProjectGroupByIdSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/projectgroups/{id}`
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
     *
     * @summary Lists all of the Projects that belong to the given Project Group
     * @param {string} id ID of the Project Group to load
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectGroupProjects: async (
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexProjectGroupProjects", "id", id);
      const localVarPath = `/projectgroups/{id}/projects`.replace(
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
     * @summary Lists all of the Projects that belong to the given Project Group
     * @param {string} id ID of the Project Group to load
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectGroupProjectsSpaces: async (
      id: string,
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexProjectGroupProjectsSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexProjectGroupProjectsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/projectgroups/{id}/projects`
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
     * Lists all of the project groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of ProjectGroupResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectGroups: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/projectgroups`;
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
     * Lists all of the project groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of ProjectGroupResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectGroupsSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("indexProjectGroupsSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/projectgroups`.replace(
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
     * Lists the name and ID of all of the Project Groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Project Group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllProjectGroups: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/projectgroups/all`;
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
     * Lists the name and ID of all of the Project Groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Project Group
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllProjectGroupsSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "listAllProjectGroupsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/projectgroups/all`.replace(
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
     * Modifies an existing project group.
     * @summary Modify a ProjectGroupResource by ID
     * @param {string} id ID of the ProjectGroupResource to modify
     * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProjectGroup: async (
      id: string,
      body?: ProjectGroupResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateProjectGroup", "id", id);
      const localVarPath = `/projectgroups/{id}`.replace(
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
     * Modifies an existing project group.
     * @summary Modify a ProjectGroupResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProjectGroupResource to modify
     * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProjectGroupSpaces: async (
      baseSpaceId: string,
      id: string,
      body?: ProjectGroupResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("updateProjectGroupSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateProjectGroupSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/projectgroups/{id}`
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
 * ProjectGroupsApi - functional programming interface
 * @export
 */
export const ProjectGroupsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    ProjectGroupsApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a new project group.
     * @summary Create a ProjectGroupResource
     * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createProjectGroup(
      body?: ProjectGroupResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectGroupResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createProjectGroup(body, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Creates a new project group.
     * @summary Create a ProjectGroupResource
     * @param {string} baseSpaceId ID of the space
     * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createProjectGroupSpaces(
      baseSpaceId: string,
      body?: ProjectGroupResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectGroupResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createProjectGroupSpaces(
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
     * Deletes an existing project group.
     * @summary Delete a ProjectGroupResource by ID
     * @param {string} id ID of the ProjectGroupResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteProjectGroup(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteProjectGroup(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Deletes an existing project group.
     * @summary Delete a ProjectGroupResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProjectGroupResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteProjectGroupSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteProjectGroupSpaces(
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
     * @summary Get a Project Group by ID
     * @param {string} id ID of the ProjectGroup to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getProjectGroupById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectGroupResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getProjectGroupById(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Get a Project Group by ID
     * @param {string} id ID of the ProjectGroup to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getProjectGroupByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectGroupResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getProjectGroupByIdSpaces(
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
     *
     * @summary Lists all of the Projects that belong to the given Project Group
     * @param {string} id ID of the Project Group to load
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProjectGroupProjects(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexProjectGroupProjects(
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
     * @summary Lists all of the Projects that belong to the given Project Group
     * @param {string} id ID of the Project Group to load
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProjectGroupProjectsSpaces(
      id: string,
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexProjectGroupProjectsSpaces(
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
     * Lists all of the project groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of ProjectGroupResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProjectGroups(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectGroupResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexProjectGroups(skip, take, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists all of the project groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of ProjectGroupResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexProjectGroupsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectGroupResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexProjectGroupsSpaces(
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
     * Lists the name and ID of all of the Project Groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Project Group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllProjectGroups(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<ProjectGroupResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listAllProjectGroups(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists the name and ID of all of the Project Groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Project Group
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllProjectGroupsSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<ProjectGroupResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listAllProjectGroupsSpaces(
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
     * Modifies an existing project group.
     * @summary Modify a ProjectGroupResource by ID
     * @param {string} id ID of the ProjectGroupResource to modify
     * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateProjectGroup(
      id: string,
      body?: ProjectGroupResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectGroupResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateProjectGroup(id, body, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Modifies an existing project group.
     * @summary Modify a ProjectGroupResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProjectGroupResource to modify
     * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateProjectGroupSpaces(
      baseSpaceId: string,
      id: string,
      body?: ProjectGroupResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProjectGroupResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateProjectGroupSpaces(
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
 * ProjectGroupsApi - factory interface
 * @export
 */
export const ProjectGroupsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ProjectGroupsApiFp(configuration);
  return {
    /**
     * Creates a new project group.
     * @summary Create a ProjectGroupResource
     * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProjectGroup(
      body?: ProjectGroupResource,
      options?: any
    ): AxiosPromise<ProjectGroupResource> {
      return localVarFp
        .createProjectGroup(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new project group.
     * @summary Create a ProjectGroupResource
     * @param {string} baseSpaceId ID of the space
     * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProjectGroupSpaces(
      baseSpaceId: string,
      body?: ProjectGroupResource,
      options?: any
    ): AxiosPromise<ProjectGroupResource> {
      return localVarFp
        .createProjectGroupSpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing project group.
     * @summary Delete a ProjectGroupResource by ID
     * @param {string} id ID of the ProjectGroupResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProjectGroup(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteProjectGroup(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing project group.
     * @summary Delete a ProjectGroupResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProjectGroupResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProjectGroupSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteProjectGroupSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Project Group by ID
     * @param {string} id ID of the ProjectGroup to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectGroupById(
      id: string,
      options?: any
    ): AxiosPromise<ProjectGroupResource> {
      return localVarFp
        .getProjectGroupById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Project Group by ID
     * @param {string} id ID of the ProjectGroup to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectGroupByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<ProjectGroupResource> {
      return localVarFp
        .getProjectGroupByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Lists all of the Projects that belong to the given Project Group
     * @param {string} id ID of the Project Group to load
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectGroupProjects(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ProjectResourceCollection> {
      return localVarFp
        .indexProjectGroupProjects(id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Lists all of the Projects that belong to the given Project Group
     * @param {string} id ID of the Project Group to load
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectGroupProjectsSpaces(
      id: string,
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ProjectResourceCollection> {
      return localVarFp
        .indexProjectGroupProjectsSpaces(id, baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the project groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of ProjectGroupResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectGroups(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ProjectGroupResourceCollection> {
      return localVarFp
        .indexProjectGroups(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the project groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of ProjectGroupResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexProjectGroupsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ProjectGroupResourceCollection> {
      return localVarFp
        .indexProjectGroupsSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the name and ID of all of the Project Groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Project Group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllProjectGroups(
      options?: any
    ): AxiosPromise<Array<ProjectGroupResource>> {
      return localVarFp
        .listAllProjectGroups(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the name and ID of all of the Project Groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
     * @summary Get a list of Project Group
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllProjectGroupsSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<ProjectGroupResource>> {
      return localVarFp
        .listAllProjectGroupsSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing project group.
     * @summary Modify a ProjectGroupResource by ID
     * @param {string} id ID of the ProjectGroupResource to modify
     * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProjectGroup(
      id: string,
      body?: ProjectGroupResource,
      options?: any
    ): AxiosPromise<ProjectGroupResource> {
      return localVarFp
        .updateProjectGroup(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing project group.
     * @summary Modify a ProjectGroupResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ProjectGroupResource to modify
     * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProjectGroupSpaces(
      baseSpaceId: string,
      id: string,
      body?: ProjectGroupResource,
      options?: any
    ): AxiosPromise<ProjectGroupResource> {
      return localVarFp
        .updateProjectGroupSpaces(baseSpaceId, id, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ProjectGroupsApi - interface
 * @export
 * @interface ProjectGroupsApi
 */
export interface ProjectGroupsApiInterface {
  /**
   * Creates a new project group.
   * @summary Create a ProjectGroupResource
   * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApiInterface
   */
  createProjectGroup(
    body?: ProjectGroupResource,
    options?: any
  ): AxiosPromise<ProjectGroupResource>;

  /**
   * Creates a new project group.
   * @summary Create a ProjectGroupResource
   * @param {string} baseSpaceId ID of the space
   * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApiInterface
   */
  createProjectGroupSpaces(
    baseSpaceId: string,
    body?: ProjectGroupResource,
    options?: any
  ): AxiosPromise<ProjectGroupResource>;

  /**
   * Deletes an existing project group.
   * @summary Delete a ProjectGroupResource by ID
   * @param {string} id ID of the ProjectGroupResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApiInterface
   */
  deleteProjectGroup(id: string, options?: any): AxiosPromise<void>;

  /**
   * Deletes an existing project group.
   * @summary Delete a ProjectGroupResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ProjectGroupResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApiInterface
   */
  deleteProjectGroupSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   *
   * @summary Get a Project Group by ID
   * @param {string} id ID of the ProjectGroup to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApiInterface
   */
  getProjectGroupById(
    id: string,
    options?: any
  ): AxiosPromise<ProjectGroupResource>;

  /**
   *
   * @summary Get a Project Group by ID
   * @param {string} id ID of the ProjectGroup to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApiInterface
   */
  getProjectGroupByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<ProjectGroupResource>;

  /**
   *
   * @summary Lists all of the Projects that belong to the given Project Group
   * @param {string} id ID of the Project Group to load
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApiInterface
   */
  indexProjectGroupProjects(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ProjectResourceCollection>;

  /**
   *
   * @summary Lists all of the Projects that belong to the given Project Group
   * @param {string} id ID of the Project Group to load
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApiInterface
   */
  indexProjectGroupProjectsSpaces(
    id: string,
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ProjectResourceCollection>;

  /**
   * Lists all of the project groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of ProjectGroupResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApiInterface
   */
  indexProjectGroups(
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ProjectGroupResourceCollection>;

  /**
   * Lists all of the project groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of ProjectGroupResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApiInterface
   */
  indexProjectGroupsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ProjectGroupResourceCollection>;

  /**
   * Lists the name and ID of all of the Project Groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of Project Group
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApiInterface
   */
  listAllProjectGroups(
    options?: any
  ): AxiosPromise<Array<ProjectGroupResource>>;

  /**
   * Lists the name and ID of all of the Project Groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of Project Group
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApiInterface
   */
  listAllProjectGroupsSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<ProjectGroupResource>>;

  /**
   * Modifies an existing project group.
   * @summary Modify a ProjectGroupResource by ID
   * @param {string} id ID of the ProjectGroupResource to modify
   * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApiInterface
   */
  updateProjectGroup(
    id: string,
    body?: ProjectGroupResource,
    options?: any
  ): AxiosPromise<ProjectGroupResource>;

  /**
   * Modifies an existing project group.
   * @summary Modify a ProjectGroupResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ProjectGroupResource to modify
   * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApiInterface
   */
  updateProjectGroupSpaces(
    baseSpaceId: string,
    id: string,
    body?: ProjectGroupResource,
    options?: any
  ): AxiosPromise<ProjectGroupResource>;
}

/**
 * ProjectGroupsApi - object-oriented interface
 * @export
 * @class ProjectGroupsApi
 * @extends {BaseAPI}
 */
export class ProjectGroupsApi
  extends BaseAPI
  implements ProjectGroupsApiInterface
{
  /**
   * Creates a new project group.
   * @summary Create a ProjectGroupResource
   * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApi
   */
  public createProjectGroup(body?: ProjectGroupResource, options?: any) {
    return ProjectGroupsApiFp(this.configuration)
      .createProjectGroup(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new project group.
   * @summary Create a ProjectGroupResource
   * @param {string} baseSpaceId ID of the space
   * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApi
   */
  public createProjectGroupSpaces(
    baseSpaceId: string,
    body?: ProjectGroupResource,
    options?: any
  ) {
    return ProjectGroupsApiFp(this.configuration)
      .createProjectGroupSpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing project group.
   * @summary Delete a ProjectGroupResource by ID
   * @param {string} id ID of the ProjectGroupResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApi
   */
  public deleteProjectGroup(id: string, options?: any) {
    return ProjectGroupsApiFp(this.configuration)
      .deleteProjectGroup(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing project group.
   * @summary Delete a ProjectGroupResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ProjectGroupResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApi
   */
  public deleteProjectGroupSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return ProjectGroupsApiFp(this.configuration)
      .deleteProjectGroupSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Project Group by ID
   * @param {string} id ID of the ProjectGroup to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApi
   */
  public getProjectGroupById(id: string, options?: any) {
    return ProjectGroupsApiFp(this.configuration)
      .getProjectGroupById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Project Group by ID
   * @param {string} id ID of the ProjectGroup to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApi
   */
  public getProjectGroupByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ) {
    return ProjectGroupsApiFp(this.configuration)
      .getProjectGroupByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Lists all of the Projects that belong to the given Project Group
   * @param {string} id ID of the Project Group to load
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApi
   */
  public indexProjectGroupProjects(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ProjectGroupsApiFp(this.configuration)
      .indexProjectGroupProjects(id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Lists all of the Projects that belong to the given Project Group
   * @param {string} id ID of the Project Group to load
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApi
   */
  public indexProjectGroupProjectsSpaces(
    id: string,
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ProjectGroupsApiFp(this.configuration)
      .indexProjectGroupProjectsSpaces(id, baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the project groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of ProjectGroupResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApi
   */
  public indexProjectGroups(skip?: number, take?: number, options?: any) {
    return ProjectGroupsApiFp(this.configuration)
      .indexProjectGroups(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the project groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of ProjectGroupResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApi
   */
  public indexProjectGroupsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ProjectGroupsApiFp(this.configuration)
      .indexProjectGroupsSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the name and ID of all of the Project Groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of Project Group
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApi
   */
  public listAllProjectGroups(options?: any) {
    return ProjectGroupsApiFp(this.configuration)
      .listAllProjectGroups(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the name and ID of all of the Project Groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
   * @summary Get a list of Project Group
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApi
   */
  public listAllProjectGroupsSpaces(baseSpaceId: string, options?: any) {
    return ProjectGroupsApiFp(this.configuration)
      .listAllProjectGroupsSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing project group.
   * @summary Modify a ProjectGroupResource by ID
   * @param {string} id ID of the ProjectGroupResource to modify
   * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApi
   */
  public updateProjectGroup(
    id: string,
    body?: ProjectGroupResource,
    options?: any
  ) {
    return ProjectGroupsApiFp(this.configuration)
      .updateProjectGroup(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing project group.
   * @summary Modify a ProjectGroupResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ProjectGroupResource to modify
   * @param {ProjectGroupResource} [body] The ProjectGroupResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectGroupsApi
   */
  public updateProjectGroupSpaces(
    baseSpaceId: string,
    id: string,
    body?: ProjectGroupResource,
    options?: any
  ) {
    return ProjectGroupsApiFp(this.configuration)
      .updateProjectGroupSpaces(baseSpaceId, id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
