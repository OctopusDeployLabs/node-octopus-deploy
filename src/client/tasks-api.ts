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
import { TaskDetailsResource } from "../model";
// @ts-ignore
import { TaskResource } from "../model";
// @ts-ignore
import { TaskResourceCollection } from "../model";
// @ts-ignore
import { TaskTypeResource } from "../model";
/**
 * TasksApi - axios parameter creator
 * @export
 */
export const TasksApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new task.
     * @summary Create a TaskResource
     * @param {TaskResource} [body] The TaskResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTask: async (
      body?: TaskResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/tasks`;
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
     * Marks the given task as canceled.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTaskCancel: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createTaskCancel", "id", id);
      const localVarPath = `/tasks/{id}/cancel`.replace(
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
     * Marks the given task as canceled.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTaskCancelSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createTaskCancelSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createTaskCancelSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/tasks/{id}/cancel`
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
     * Creates a new task and executes it, using a given task as the input. Note that deployment tasks cannot be re-run.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTaskRerun: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createTaskRerun", "id", id);
      const localVarPath = `/tasks/rerun/{id}`.replace(
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
     * Creates a new task and executes it, using a given task as the input. Note that deployment tasks cannot be re-run.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTaskRerunSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createTaskRerunSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createTaskRerunSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/tasks/rerun/{id}`
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
     * Creates a new task.
     * @summary Create a TaskResource
     * @param {string} baseSpaceId ID of the space
     * @param {TaskResource} [body] The TaskResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTaskSpaces: async (
      baseSpaceId: string,
      body?: TaskResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createTaskSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/tasks`.replace(
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
     * Change the state of a task
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTaskState: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createTaskState", "id", id);
      const localVarPath = `/tasks/{id}/state`.replace(
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
     * Change the state of a task
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTaskStateSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createTaskStateSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createTaskStateSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/tasks/{id}/state`
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
     * Lists supported task types.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListTaskTypes: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/tasks/tasktypes`;
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
     * Lists supported task types.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListTaskTypesSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getListTaskTypesSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/tasks/tasktypes`.replace(
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
     * Lists all of the tasks in the supplied Octopus Deploy Space. The results will be sorted from newest to oldest.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListTasks: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/tasks`;
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
     * Lists all of the tasks in the supplied Octopus Deploy Space. The results will be sorted from newest to oldest.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListTasksSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getListTasksSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/tasks`.replace(
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
     * Gets a single task by ID.
     * @summary Get a TaskResource by ID
     * @param {string} id ID of the TaskResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTaskById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getTaskById", "id", id);
      const localVarPath = `/tasks/{id}`.replace(
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
     * Gets a single task by ID.
     * @summary Get a TaskResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the TaskResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTaskByIdSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getTaskByIdSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getTaskByIdSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/tasks/{id}`
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
     * Gets a single task by ID, including the full task log as a tree of activity elements.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTaskDetails: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getTaskDetails", "id", id);
      const localVarPath = `/tasks/{id}/details`.replace(
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
     * Gets a single task by ID, including the full task log as a tree of activity elements.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTaskDetailsSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getTaskDetailsSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getTaskDetailsSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/tasks/{id}/details`
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
     * Gets the full task log of a given resource as plain text. Useful when the log needs to be rendered to a console or sent as an email attachment.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTaskRaw: async (id: string, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getTaskRaw", "id", id);
      const localVarPath = `/tasks/{id}/raw`.replace(
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
     * Gets the full task log of a given resource as plain text. Useful when the log needs to be rendered to a console or sent as an email attachment.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTaskRawSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getTaskRawSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getTaskRawSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/tasks/{id}/raw`
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
     * Gets a list of tasks that this task is currently queued behind.
     * @summary Get a list of TaskResources for the given TaskResource
     * @param {string} id ID of the Task
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexTaskQueuedBehind: async (
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexTaskQueuedBehind", "id", id);
      const localVarPath = `/tasks/{id}/queued-behind`.replace(
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
     * Gets a list of tasks that this task is currently queued behind.
     * @summary Get a list of TaskResources for the given TaskResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Task
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexTaskQueuedBehindSpaces: async (
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "indexTaskQueuedBehindSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("indexTaskQueuedBehindSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/tasks/{id}/queued-behind`
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
  };
};

/**
 * TasksApi - functional programming interface
 * @export
 */
export const TasksApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = TasksApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a new task.
     * @summary Create a TaskResource
     * @param {TaskResource} [body] The TaskResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTask(
      body?: TaskResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createTask(
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
     * Marks the given task as canceled.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTaskCancel(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createTaskCancel(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Marks the given task as canceled.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTaskCancelSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createTaskCancelSpaces(
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
     * Creates a new task and executes it, using a given task as the input. Note that deployment tasks cannot be re-run.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTaskRerun(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createTaskRerun(
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
     * Creates a new task and executes it, using a given task as the input. Note that deployment tasks cannot be re-run.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTaskRerunSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createTaskRerunSpaces(
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
     * Creates a new task.
     * @summary Create a TaskResource
     * @param {string} baseSpaceId ID of the space
     * @param {TaskResource} [body] The TaskResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTaskSpaces(
      baseSpaceId: string,
      body?: TaskResource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createTaskSpaces(
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
     * Change the state of a task
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTaskState(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createTaskState(
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
     * Change the state of a task
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTaskStateSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createTaskStateSpaces(
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
     * Lists supported task types.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListTaskTypes(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<TaskTypeResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getListTaskTypes(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists supported task types.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListTaskTypesSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<TaskTypeResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getListTaskTypesSpaces(
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
     * Lists all of the tasks in the supplied Octopus Deploy Space. The results will be sorted from newest to oldest.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListTasks(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<TaskResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getListTasks(
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
     * Lists all of the tasks in the supplied Octopus Deploy Space. The results will be sorted from newest to oldest.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListTasksSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<TaskResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getListTasksSpaces(
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
     * Gets a single task by ID.
     * @summary Get a TaskResource by ID
     * @param {string} id ID of the TaskResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTaskById(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTaskById(
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
     * Gets a single task by ID.
     * @summary Get a TaskResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the TaskResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTaskByIdSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getTaskByIdSpaces(
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
     * Gets a single task by ID, including the full task log as a tree of activity elements.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTaskDetails(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<TaskDetailsResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTaskDetails(
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
     * Gets a single task by ID, including the full task log as a tree of activity elements.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTaskDetailsSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<TaskDetailsResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getTaskDetailsSpaces(
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
     * Gets the full task log of a given resource as plain text. Useful when the log needs to be rendered to a console or sent as an email attachment.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTaskRaw(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTaskRaw(
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
     * Gets the full task log of a given resource as plain text. Useful when the log needs to be rendered to a console or sent as an email attachment.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTaskRawSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getTaskRawSpaces(
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
     * Gets a list of tasks that this task is currently queued behind.
     * @summary Get a list of TaskResources for the given TaskResource
     * @param {string} id ID of the Task
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexTaskQueuedBehind(
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
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexTaskQueuedBehind(
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
     * Gets a list of tasks that this task is currently queued behind.
     * @summary Get a list of TaskResources for the given TaskResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Task
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexTaskQueuedBehindSpaces(
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
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexTaskQueuedBehindSpaces(
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
  };
};

/**
 * TasksApi - factory interface
 * @export
 */
export const TasksApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = TasksApiFp(configuration);
  return {
    /**
     * Creates a new task.
     * @summary Create a TaskResource
     * @param {TaskResource} [body] The TaskResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTask(body?: TaskResource, options?: any): AxiosPromise<TaskResource> {
      return localVarFp
        .createTask(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Marks the given task as canceled.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTaskCancel(id: string, options?: any): AxiosPromise<TaskResource> {
      return localVarFp
        .createTaskCancel(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Marks the given task as canceled.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTaskCancelSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<TaskResource> {
      return localVarFp
        .createTaskCancelSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new task and executes it, using a given task as the input. Note that deployment tasks cannot be re-run.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTaskRerun(id: string, options?: any): AxiosPromise<TaskResource> {
      return localVarFp
        .createTaskRerun(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new task and executes it, using a given task as the input. Note that deployment tasks cannot be re-run.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTaskRerunSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<TaskResource> {
      return localVarFp
        .createTaskRerunSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new task.
     * @summary Create a TaskResource
     * @param {string} baseSpaceId ID of the space
     * @param {TaskResource} [body] The TaskResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTaskSpaces(
      baseSpaceId: string,
      body?: TaskResource,
      options?: any
    ): AxiosPromise<TaskResource> {
      return localVarFp
        .createTaskSpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Change the state of a task
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTaskState(id: string, options?: any): AxiosPromise<TaskResource> {
      return localVarFp
        .createTaskState(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Change the state of a task
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTaskStateSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<TaskResource> {
      return localVarFp
        .createTaskStateSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists supported task types.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListTaskTypes(options?: any): AxiosPromise<Array<TaskTypeResource>> {
      return localVarFp
        .getListTaskTypes(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists supported task types.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListTaskTypesSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<TaskTypeResource>> {
      return localVarFp
        .getListTaskTypesSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the tasks in the supplied Octopus Deploy Space. The results will be sorted from newest to oldest.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListTasks(options?: any): AxiosPromise<TaskResourceCollection> {
      return localVarFp
        .getListTasks(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the tasks in the supplied Octopus Deploy Space. The results will be sorted from newest to oldest.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListTasksSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<TaskResourceCollection> {
      return localVarFp
        .getListTasksSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a single task by ID.
     * @summary Get a TaskResource by ID
     * @param {string} id ID of the TaskResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTaskById(id: string, options?: any): AxiosPromise<TaskResource> {
      return localVarFp
        .getTaskById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a single task by ID.
     * @summary Get a TaskResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the TaskResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTaskByIdSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<TaskResource> {
      return localVarFp
        .getTaskByIdSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a single task by ID, including the full task log as a tree of activity elements.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTaskDetails(
      id: string,
      options?: any
    ): AxiosPromise<TaskDetailsResource> {
      return localVarFp
        .getTaskDetails(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a single task by ID, including the full task log as a tree of activity elements.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTaskDetailsSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<TaskDetailsResource> {
      return localVarFp
        .getTaskDetailsSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets the full task log of a given resource as plain text. Useful when the log needs to be rendered to a console or sent as an email attachment.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTaskRaw(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .getTaskRaw(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets the full task log of a given resource as plain text. Useful when the log needs to be rendered to a console or sent as an email attachment.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTaskRawSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .getTaskRawSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a list of tasks that this task is currently queued behind.
     * @summary Get a list of TaskResources for the given TaskResource
     * @param {string} id ID of the Task
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexTaskQueuedBehind(
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<TaskResourceCollection> {
      return localVarFp
        .indexTaskQueuedBehind(id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a list of tasks that this task is currently queued behind.
     * @summary Get a list of TaskResources for the given TaskResource
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the Task
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexTaskQueuedBehindSpaces(
      baseSpaceId: string,
      id: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<TaskResourceCollection> {
      return localVarFp
        .indexTaskQueuedBehindSpaces(baseSpaceId, id, skip, take, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * TasksApi - object-oriented interface
 * @export
 * @class TasksApi
 * @extends {BaseAPI}
 */
export class TasksApi extends BaseAPI {
  /**
   * Creates a new task.
   * @summary Create a TaskResource
   * @param {TaskResource} [body] The TaskResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public createTask(body?: TaskResource, options?: any) {
    return TasksApiFp(this.configuration)
      .createTask(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Marks the given task as canceled.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public createTaskCancel(id: string, options?: any) {
    return TasksApiFp(this.configuration)
      .createTaskCancel(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Marks the given task as canceled.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public createTaskCancelSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return TasksApiFp(this.configuration)
      .createTaskCancelSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new task and executes it, using a given task as the input. Note that deployment tasks cannot be re-run.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public createTaskRerun(id: string, options?: any) {
    return TasksApiFp(this.configuration)
      .createTaskRerun(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new task and executes it, using a given task as the input. Note that deployment tasks cannot be re-run.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public createTaskRerunSpaces(baseSpaceId: string, id: string, options?: any) {
    return TasksApiFp(this.configuration)
      .createTaskRerunSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new task.
   * @summary Create a TaskResource
   * @param {string} baseSpaceId ID of the space
   * @param {TaskResource} [body] The TaskResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public createTaskSpaces(
    baseSpaceId: string,
    body?: TaskResource,
    options?: any
  ) {
    return TasksApiFp(this.configuration)
      .createTaskSpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Change the state of a task
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public createTaskState(id: string, options?: any) {
    return TasksApiFp(this.configuration)
      .createTaskState(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Change the state of a task
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public createTaskStateSpaces(baseSpaceId: string, id: string, options?: any) {
    return TasksApiFp(this.configuration)
      .createTaskStateSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists supported task types.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public getListTaskTypes(options?: any) {
    return TasksApiFp(this.configuration)
      .getListTaskTypes(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists supported task types.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public getListTaskTypesSpaces(baseSpaceId: string, options?: any) {
    return TasksApiFp(this.configuration)
      .getListTaskTypesSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the tasks in the supplied Octopus Deploy Space. The results will be sorted from newest to oldest.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public getListTasks(options?: any) {
    return TasksApiFp(this.configuration)
      .getListTasks(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the tasks in the supplied Octopus Deploy Space. The results will be sorted from newest to oldest.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public getListTasksSpaces(baseSpaceId: string, options?: any) {
    return TasksApiFp(this.configuration)
      .getListTasksSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a single task by ID.
   * @summary Get a TaskResource by ID
   * @param {string} id ID of the TaskResource to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public getTaskById(id: string, options?: any) {
    return TasksApiFp(this.configuration)
      .getTaskById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a single task by ID.
   * @summary Get a TaskResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the TaskResource to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public getTaskByIdSpaces(baseSpaceId: string, id: string, options?: any) {
    return TasksApiFp(this.configuration)
      .getTaskByIdSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a single task by ID, including the full task log as a tree of activity elements.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public getTaskDetails(id: string, options?: any) {
    return TasksApiFp(this.configuration)
      .getTaskDetails(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a single task by ID, including the full task log as a tree of activity elements.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public getTaskDetailsSpaces(baseSpaceId: string, id: string, options?: any) {
    return TasksApiFp(this.configuration)
      .getTaskDetailsSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets the full task log of a given resource as plain text. Useful when the log needs to be rendered to a console or sent as an email attachment.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public getTaskRaw(id: string, options?: any) {
    return TasksApiFp(this.configuration)
      .getTaskRaw(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets the full task log of a given resource as plain text. Useful when the log needs to be rendered to a console or sent as an email attachment.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public getTaskRawSpaces(baseSpaceId: string, id: string, options?: any) {
    return TasksApiFp(this.configuration)
      .getTaskRawSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a list of tasks that this task is currently queued behind.
   * @summary Get a list of TaskResources for the given TaskResource
   * @param {string} id ID of the Task
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public indexTaskQueuedBehind(
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return TasksApiFp(this.configuration)
      .indexTaskQueuedBehind(id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a list of tasks that this task is currently queued behind.
   * @summary Get a list of TaskResources for the given TaskResource
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the Task
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items per page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public indexTaskQueuedBehindSpaces(
    baseSpaceId: string,
    id: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return TasksApiFp(this.configuration)
      .indexTaskQueuedBehindSpaces(baseSpaceId, id, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
