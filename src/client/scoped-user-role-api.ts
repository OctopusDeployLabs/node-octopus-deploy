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
import { ScopedUserRoleResource } from "../model";
// @ts-ignore
import { ScopedUserRoleResourceCollection } from "../model";
/**
 * ScopedUserRoleApi - axios parameter creator
 * @export
 */
export const ScopedUserRoleApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a scoped user role.
     * @summary Create a ScopedUserRoleResource
     * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createScopedUserRole: async (
      body?: ScopedUserRoleResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/scopeduserroles`;
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
     * Creates a scoped user role.
     * @summary Create a ScopedUserRoleResource
     * @param {string} baseSpaceId ID of the space
     * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createScopedUserRoleSpaces: async (
      baseSpaceId: string,
      body?: ScopedUserRoleResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createScopedUserRoleSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/scopeduserroles`.replace(
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
     * Deletes an existing scoped user role.
     * @summary Delete a ScopedUserRoleResource by ID
     * @param {string} id ID of the ScopedUserRoleResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteScopedUserRole: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteScopedUserRole", "id", id);
      const localVarPath = `/scopeduserroles/{id}`.replace(
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
     * Deletes an existing scoped user role.
     * @summary Delete a ScopedUserRoleResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ScopedUserRoleResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteScopedUserRoleSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "deleteScopedUserRoleSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteScopedUserRoleSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/scopeduserroles/{id}`
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
     * Lists the name and ID of all of the scoped user roles in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListScopedUserRole: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/scopeduserroles`;
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
     * Lists the name and ID of all of the scoped user roles in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListScopedUserRoleSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getListScopedUserRoleSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/scopeduserroles`.replace(
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
     * Modifies an existing scoped user role.
     * @summary Modify a ScopedUserRoleResource by ID
     * @param {string} id ID of the ScopedUserRoleResource to modify
     * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateScopedUserRole: async (
      id: string,
      body?: ScopedUserRoleResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateScopedUserRole", "id", id);
      const localVarPath = `/scopeduserroles/{id}`.replace(
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
     * Modifies an existing scoped user role.
     * @summary Modify a ScopedUserRoleResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ScopedUserRoleResource to modify
     * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateScopedUserRoleSpaces: async (
      baseSpaceId: string,
      id: string,
      body?: ScopedUserRoleResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "updateScopedUserRoleSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateScopedUserRoleSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/scopeduserroles/{id}`
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
 * ScopedUserRoleApi - functional programming interface
 * @export
 */
export const ScopedUserRoleApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ScopedUserRoleApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Creates a scoped user role.
     * @summary Create a ScopedUserRoleResource
     * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createScopedUserRole(
      body?: ScopedUserRoleResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ScopedUserRoleResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createScopedUserRole(
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
     * Creates a scoped user role.
     * @summary Create a ScopedUserRoleResource
     * @param {string} baseSpaceId ID of the space
     * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createScopedUserRoleSpaces(
      baseSpaceId: string,
      body?: ScopedUserRoleResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ScopedUserRoleResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createScopedUserRoleSpaces(
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
     * Deletes an existing scoped user role.
     * @summary Delete a ScopedUserRoleResource by ID
     * @param {string} id ID of the ScopedUserRoleResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteScopedUserRole(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteScopedUserRole(
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
     * Deletes an existing scoped user role.
     * @summary Delete a ScopedUserRoleResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ScopedUserRoleResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteScopedUserRoleSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteScopedUserRoleSpaces(
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
     * Lists the name and ID of all of the scoped user roles in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListScopedUserRole(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ScopedUserRoleResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getListScopedUserRole(
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
     * Lists the name and ID of all of the scoped user roles in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListScopedUserRoleSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ScopedUserRoleResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getListScopedUserRoleSpaces(
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
     * Modifies an existing scoped user role.
     * @summary Modify a ScopedUserRoleResource by ID
     * @param {string} id ID of the ScopedUserRoleResource to modify
     * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateScopedUserRole(
      id: string,
      body?: ScopedUserRoleResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ScopedUserRoleResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateScopedUserRole(
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
     * Modifies an existing scoped user role.
     * @summary Modify a ScopedUserRoleResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ScopedUserRoleResource to modify
     * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateScopedUserRoleSpaces(
      baseSpaceId: string,
      id: string,
      body?: ScopedUserRoleResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ScopedUserRoleResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateScopedUserRoleSpaces(
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
 * ScopedUserRoleApi - factory interface
 * @export
 */
export const ScopedUserRoleApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ScopedUserRoleApiFp(configuration);
  return {
    /**
     * Creates a scoped user role.
     * @summary Create a ScopedUserRoleResource
     * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createScopedUserRole(
      body?: ScopedUserRoleResource,
      options?: any
    ): AxiosPromise<ScopedUserRoleResource> {
      return localVarFp
        .createScopedUserRole(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a scoped user role.
     * @summary Create a ScopedUserRoleResource
     * @param {string} baseSpaceId ID of the space
     * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createScopedUserRoleSpaces(
      baseSpaceId: string,
      body?: ScopedUserRoleResource,
      options?: any
    ): AxiosPromise<ScopedUserRoleResource> {
      return localVarFp
        .createScopedUserRoleSpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing scoped user role.
     * @summary Delete a ScopedUserRoleResource by ID
     * @param {string} id ID of the ScopedUserRoleResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteScopedUserRole(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteScopedUserRole(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing scoped user role.
     * @summary Delete a ScopedUserRoleResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ScopedUserRoleResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteScopedUserRoleSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteScopedUserRoleSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the name and ID of all of the scoped user roles in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListScopedUserRole(
      options?: any
    ): AxiosPromise<ScopedUserRoleResourceCollection> {
      return localVarFp
        .getListScopedUserRole(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists the name and ID of all of the scoped user roles in the supplied Octopus Deploy Space. The results will be sorted by name.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListScopedUserRoleSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<ScopedUserRoleResourceCollection> {
      return localVarFp
        .getListScopedUserRoleSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing scoped user role.
     * @summary Modify a ScopedUserRoleResource by ID
     * @param {string} id ID of the ScopedUserRoleResource to modify
     * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateScopedUserRole(
      id: string,
      body?: ScopedUserRoleResource,
      options?: any
    ): AxiosPromise<ScopedUserRoleResource> {
      return localVarFp
        .updateScopedUserRole(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing scoped user role.
     * @summary Modify a ScopedUserRoleResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ScopedUserRoleResource to modify
     * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateScopedUserRoleSpaces(
      baseSpaceId: string,
      id: string,
      body?: ScopedUserRoleResource,
      options?: any
    ): AxiosPromise<ScopedUserRoleResource> {
      return localVarFp
        .updateScopedUserRoleSpaces(baseSpaceId, id, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ScopedUserRoleApi - interface
 * @export
 * @interface ScopedUserRoleApi
 */
export interface ScopedUserRoleApiInterface {
  /**
   * Creates a scoped user role.
   * @summary Create a ScopedUserRoleResource
   * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRoleApiInterface
   */
  createScopedUserRole(
    body?: ScopedUserRoleResource,
    options?: any
  ): AxiosPromise<ScopedUserRoleResource>;

  /**
   * Creates a scoped user role.
   * @summary Create a ScopedUserRoleResource
   * @param {string} baseSpaceId ID of the space
   * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRoleApiInterface
   */
  createScopedUserRoleSpaces(
    baseSpaceId: string,
    body?: ScopedUserRoleResource,
    options?: any
  ): AxiosPromise<ScopedUserRoleResource>;

  /**
   * Deletes an existing scoped user role.
   * @summary Delete a ScopedUserRoleResource by ID
   * @param {string} id ID of the ScopedUserRoleResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRoleApiInterface
   */
  deleteScopedUserRole(id: string, options?: any): AxiosPromise<void>;

  /**
   * Deletes an existing scoped user role.
   * @summary Delete a ScopedUserRoleResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ScopedUserRoleResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRoleApiInterface
   */
  deleteScopedUserRoleSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   * Lists the name and ID of all of the scoped user roles in the supplied Octopus Deploy Space. The results will be sorted by name.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRoleApiInterface
   */
  getListScopedUserRole(
    options?: any
  ): AxiosPromise<ScopedUserRoleResourceCollection>;

  /**
   * Lists the name and ID of all of the scoped user roles in the supplied Octopus Deploy Space. The results will be sorted by name.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRoleApiInterface
   */
  getListScopedUserRoleSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<ScopedUserRoleResourceCollection>;

  /**
   * Modifies an existing scoped user role.
   * @summary Modify a ScopedUserRoleResource by ID
   * @param {string} id ID of the ScopedUserRoleResource to modify
   * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRoleApiInterface
   */
  updateScopedUserRole(
    id: string,
    body?: ScopedUserRoleResource,
    options?: any
  ): AxiosPromise<ScopedUserRoleResource>;

  /**
   * Modifies an existing scoped user role.
   * @summary Modify a ScopedUserRoleResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ScopedUserRoleResource to modify
   * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRoleApiInterface
   */
  updateScopedUserRoleSpaces(
    baseSpaceId: string,
    id: string,
    body?: ScopedUserRoleResource,
    options?: any
  ): AxiosPromise<ScopedUserRoleResource>;
}

/**
 * ScopedUserRoleApi - object-oriented interface
 * @export
 * @class ScopedUserRoleApi
 * @extends {BaseAPI}
 */
export class ScopedUserRoleApi
  extends BaseAPI
  implements ScopedUserRoleApiInterface {
  /**
   * Creates a scoped user role.
   * @summary Create a ScopedUserRoleResource
   * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRoleApi
   */
  public createScopedUserRole(body?: ScopedUserRoleResource, options?: any) {
    return ScopedUserRoleApiFp(this.configuration)
      .createScopedUserRole(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a scoped user role.
   * @summary Create a ScopedUserRoleResource
   * @param {string} baseSpaceId ID of the space
   * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRoleApi
   */
  public createScopedUserRoleSpaces(
    baseSpaceId: string,
    body?: ScopedUserRoleResource,
    options?: any
  ) {
    return ScopedUserRoleApiFp(this.configuration)
      .createScopedUserRoleSpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing scoped user role.
   * @summary Delete a ScopedUserRoleResource by ID
   * @param {string} id ID of the ScopedUserRoleResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRoleApi
   */
  public deleteScopedUserRole(id: string, options?: any) {
    return ScopedUserRoleApiFp(this.configuration)
      .deleteScopedUserRole(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing scoped user role.
   * @summary Delete a ScopedUserRoleResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ScopedUserRoleResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRoleApi
   */
  public deleteScopedUserRoleSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return ScopedUserRoleApiFp(this.configuration)
      .deleteScopedUserRoleSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the name and ID of all of the scoped user roles in the supplied Octopus Deploy Space. The results will be sorted by name.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRoleApi
   */
  public getListScopedUserRole(options?: any) {
    return ScopedUserRoleApiFp(this.configuration)
      .getListScopedUserRole(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists the name and ID of all of the scoped user roles in the supplied Octopus Deploy Space. The results will be sorted by name.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRoleApi
   */
  public getListScopedUserRoleSpaces(baseSpaceId: string, options?: any) {
    return ScopedUserRoleApiFp(this.configuration)
      .getListScopedUserRoleSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing scoped user role.
   * @summary Modify a ScopedUserRoleResource by ID
   * @param {string} id ID of the ScopedUserRoleResource to modify
   * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRoleApi
   */
  public updateScopedUserRole(
    id: string,
    body?: ScopedUserRoleResource,
    options?: any
  ) {
    return ScopedUserRoleApiFp(this.configuration)
      .updateScopedUserRole(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing scoped user role.
   * @summary Modify a ScopedUserRoleResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ScopedUserRoleResource to modify
   * @param {ScopedUserRoleResource} [body] The ScopedUserRoleResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRoleApi
   */
  public updateScopedUserRoleSpaces(
    baseSpaceId: string,
    id: string,
    body?: ScopedUserRoleResource,
    options?: any
  ) {
    return ScopedUserRoleApiFp(this.configuration)
      .updateScopedUserRoleSpaces(baseSpaceId, id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
