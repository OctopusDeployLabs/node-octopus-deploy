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
import { DocumentTypeDocument } from "../model";
// @ts-ignore
import { EventAgentResource } from "../model";
// @ts-ignore
import { EventCategoryResource } from "../model";
// @ts-ignore
import { EventGroupResource } from "../model";
// @ts-ignore
import { EventResource } from "../model";
/**
 * EventsApi - axios parameter creator
 * @export
 */
export const EventsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Gets a single event by ID.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEvent: async (id: string, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getEvent", "id", id);
      const localVarPath = `/events/{id}`.replace(
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
     * Gets a single event by ID.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEventSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getEventSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getEventSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/events/{id}`
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
     * Lists event agents.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventAgents: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/events/agents`;
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
     * Lists event agents.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventAgentsSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getListEventAgentsSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/events/agents`.replace(
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
     * Lists event categories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventCategories: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/events/categories`;
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
     * Lists event categories.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventCategoriesSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getListEventCategoriesSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/events/categories`.replace(
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
     * Lists subscription event document types.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventDocumentTypes: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/events/documenttypes`;
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
     * Lists subscription event document types.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventDocumentTypesSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getListEventDocumentTypesSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/events/documenttypes`.replace(
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
     * Lists subscription event groups.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventGroups: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/events/groups`;
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
     * Lists subscription event groups.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventGroupsSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getListEventGroupsSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/events/groups`.replace(
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
     * List all of the the audit events collected to date. Events can be filtered by various criteria. Events will be ordered by the date of the event, descending.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEvents: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/events`;
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
     * List all of the the audit events collected to date. Events can be filtered by various criteria. Events will be ordered by the date of the event, descending.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventsSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getListEventsSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/events`.replace(
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
  };
};

/**
 * EventsApi - functional programming interface
 * @export
 */
export const EventsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = EventsApiAxiosParamCreator(configuration);
  return {
    /**
     * Gets a single event by ID.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getEvent(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getEvent(
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
     * Gets a single event by ID.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getEventSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getEventSpaces(
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
     * Lists event agents.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListEventAgents(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<EventAgentResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getListEventAgents(
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
     * Lists event agents.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListEventAgentsSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<EventAgentResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getListEventAgentsSpaces(
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
     * Lists event categories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListEventCategories(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<EventCategoryResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getListEventCategories(
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
     * Lists event categories.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListEventCategoriesSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<EventCategoryResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getListEventCategoriesSpaces(
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
     * Lists subscription event document types.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListEventDocumentTypes(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<DocumentTypeDocument>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getListEventDocumentTypes(
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
     * Lists subscription event document types.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListEventDocumentTypesSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<DocumentTypeDocument>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getListEventDocumentTypesSpaces(
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
     * Lists subscription event groups.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListEventGroups(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<EventGroupResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getListEventGroups(
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
     * Lists subscription event groups.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListEventGroupsSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<EventGroupResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getListEventGroupsSpaces(
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
     * List all of the the audit events collected to date. Events can be filtered by various criteria. Events will be ordered by the date of the event, descending.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListEvents(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getListEvents(
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
     * List all of the the audit events collected to date. Events can be filtered by various criteria. Events will be ordered by the date of the event, descending.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListEventsSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getListEventsSpaces(
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
 * EventsApi - factory interface
 * @export
 */
export const EventsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = EventsApiFp(configuration);
  return {
    /**
     * Gets a single event by ID.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEvent(id: string, options?: any): AxiosPromise<EventResource> {
      return localVarFp
        .getEvent(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a single event by ID.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEventSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<EventResource> {
      return localVarFp
        .getEventSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists event agents.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventAgents(options?: any): AxiosPromise<Array<EventAgentResource>> {
      return localVarFp
        .getListEventAgents(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists event agents.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventAgentsSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<EventAgentResource>> {
      return localVarFp
        .getListEventAgentsSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists event categories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventCategories(
      options?: any
    ): AxiosPromise<Array<EventCategoryResource>> {
      return localVarFp
        .getListEventCategories(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists event categories.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventCategoriesSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<EventCategoryResource>> {
      return localVarFp
        .getListEventCategoriesSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists subscription event document types.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventDocumentTypes(
      options?: any
    ): AxiosPromise<Array<DocumentTypeDocument>> {
      return localVarFp
        .getListEventDocumentTypes(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists subscription event document types.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventDocumentTypesSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<DocumentTypeDocument>> {
      return localVarFp
        .getListEventDocumentTypesSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists subscription event groups.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventGroups(options?: any): AxiosPromise<Array<EventGroupResource>> {
      return localVarFp
        .getListEventGroups(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists subscription event groups.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventGroupsSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<EventGroupResource>> {
      return localVarFp
        .getListEventGroupsSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List all of the the audit events collected to date. Events can be filtered by various criteria. Events will be ordered by the date of the event, descending.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEvents(options?: any): AxiosPromise<void> {
      return localVarFp
        .getListEvents(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List all of the the audit events collected to date. Events can be filtered by various criteria. Events will be ordered by the date of the event, descending.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListEventsSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .getListEventsSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * EventsApi - interface
 * @export
 * @interface EventsApi
 */
export interface EventsApiInterface {
  /**
   * Gets a single event by ID.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApiInterface
   */
  getEvent(id: string, options?: any): AxiosPromise<EventResource>;

  /**
   * Gets a single event by ID.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApiInterface
   */
  getEventSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<EventResource>;

  /**
   * Lists event agents.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApiInterface
   */
  getListEventAgents(options?: any): AxiosPromise<Array<EventAgentResource>>;

  /**
   * Lists event agents.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApiInterface
   */
  getListEventAgentsSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<EventAgentResource>>;

  /**
   * Lists event categories.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApiInterface
   */
  getListEventCategories(
    options?: any
  ): AxiosPromise<Array<EventCategoryResource>>;

  /**
   * Lists event categories.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApiInterface
   */
  getListEventCategoriesSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<EventCategoryResource>>;

  /**
   * Lists subscription event document types.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApiInterface
   */
  getListEventDocumentTypes(
    options?: any
  ): AxiosPromise<Array<DocumentTypeDocument>>;

  /**
   * Lists subscription event document types.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApiInterface
   */
  getListEventDocumentTypesSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<DocumentTypeDocument>>;

  /**
   * Lists subscription event groups.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApiInterface
   */
  getListEventGroups(options?: any): AxiosPromise<Array<EventGroupResource>>;

  /**
   * Lists subscription event groups.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApiInterface
   */
  getListEventGroupsSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<EventGroupResource>>;

  /**
   * List all of the the audit events collected to date. Events can be filtered by various criteria. Events will be ordered by the date of the event, descending.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApiInterface
   */
  getListEvents(options?: any): AxiosPromise<void>;

  /**
   * List all of the the audit events collected to date. Events can be filtered by various criteria. Events will be ordered by the date of the event, descending.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApiInterface
   */
  getListEventsSpaces(baseSpaceId: string, options?: any): AxiosPromise<void>;
}

/**
 * EventsApi - object-oriented interface
 * @export
 * @class EventsApi
 * @extends {BaseAPI}
 */
export class EventsApi extends BaseAPI implements EventsApiInterface {
  /**
   * Gets a single event by ID.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public getEvent(id: string, options?: any) {
    return EventsApiFp(this.configuration)
      .getEvent(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a single event by ID.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public getEventSpaces(baseSpaceId: string, id: string, options?: any) {
    return EventsApiFp(this.configuration)
      .getEventSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists event agents.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public getListEventAgents(options?: any) {
    return EventsApiFp(this.configuration)
      .getListEventAgents(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists event agents.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public getListEventAgentsSpaces(baseSpaceId: string, options?: any) {
    return EventsApiFp(this.configuration)
      .getListEventAgentsSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists event categories.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public getListEventCategories(options?: any) {
    return EventsApiFp(this.configuration)
      .getListEventCategories(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists event categories.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public getListEventCategoriesSpaces(baseSpaceId: string, options?: any) {
    return EventsApiFp(this.configuration)
      .getListEventCategoriesSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists subscription event document types.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public getListEventDocumentTypes(options?: any) {
    return EventsApiFp(this.configuration)
      .getListEventDocumentTypes(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists subscription event document types.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public getListEventDocumentTypesSpaces(baseSpaceId: string, options?: any) {
    return EventsApiFp(this.configuration)
      .getListEventDocumentTypesSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists subscription event groups.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public getListEventGroups(options?: any) {
    return EventsApiFp(this.configuration)
      .getListEventGroups(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists subscription event groups.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public getListEventGroupsSpaces(baseSpaceId: string, options?: any) {
    return EventsApiFp(this.configuration)
      .getListEventGroupsSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List all of the the audit events collected to date. Events can be filtered by various criteria. Events will be ordered by the date of the event, descending.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public getListEvents(options?: any) {
    return EventsApiFp(this.configuration)
      .getListEvents(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List all of the the audit events collected to date. Events can be filtered by various criteria. Events will be ordered by the date of the event, descending.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public getListEventsSpaces(baseSpaceId: string, options?: any) {
    return EventsApiFp(this.configuration)
      .getListEventsSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
