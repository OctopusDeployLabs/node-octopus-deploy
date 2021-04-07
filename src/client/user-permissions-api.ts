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
import { UserPermissionSetResource } from "../model";
/**
 * UserPermissionsApi - axios parameter creator
 * @export
 */
export const UserPermissionsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Gets summarized permission information. Available for the current authenticated user only.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserGetPermissions: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getUserGetPermissions", "id", id);
      const localVarPath = `/users/{id}/permissions`.replace(
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
     * Gets a summary of the configuration of the user\'s permissions information. Available for the current authenticated user only.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserGetPermissionsConfiguration: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getUserGetPermissionsConfiguration", "id", id);
      const localVarPath = `/users/{id}/permissions/configuration`.replace(
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
     * Gets a summary of the configuration of the user\'s permissions information. Available for the current authenticated user only.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserGetPermissionsConfigurationSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getUserGetPermissionsConfigurationSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getUserGetPermissionsConfigurationSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/users/{id}/permissions/configuration`
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
     * Gets summarized permission information. Available for the current authenticated user only.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserGetPermissionsSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getUserGetPermissionsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getUserGetPermissionsSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/users/{id}/permissions`
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
     * Gets list of permissions as a csv file. Available for the current authenticated user only.
     * @param {string} id ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserPermissionsExport: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getUserPermissionsExport", "id", id);
      const localVarPath = `/users/{id}/permissions/export`.replace(
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
     * Gets list of permissions as a csv file. Available for the current authenticated user only.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserPermissionsExportSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getUserPermissionsExportSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getUserPermissionsExportSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/users/{id}/permissions/export`
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
  };
};

/**
 * UserPermissionsApi - functional programming interface
 * @export
 */
export const UserPermissionsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UserPermissionsApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Gets summarized permission information. Available for the current authenticated user only.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserGetPermissions(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<UserPermissionSetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getUserGetPermissions(
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
     * Gets a summary of the configuration of the user\'s permissions information. Available for the current authenticated user only.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserGetPermissionsConfiguration(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<UserPermissionSetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getUserGetPermissionsConfiguration(
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
     * Gets a summary of the configuration of the user\'s permissions information. Available for the current authenticated user only.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserGetPermissionsConfigurationSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<UserPermissionSetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getUserGetPermissionsConfigurationSpaces(
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
     * Gets summarized permission information. Available for the current authenticated user only.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserGetPermissionsSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<UserPermissionSetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getUserGetPermissionsSpaces(
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
     * Gets list of permissions as a csv file. Available for the current authenticated user only.
     * @param {string} id ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserPermissionsExport(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getUserPermissionsExport(
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
     * Gets list of permissions as a csv file. Available for the current authenticated user only.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserPermissionsExportSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getUserPermissionsExportSpaces(
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
  };
};

/**
 * UserPermissionsApi - factory interface
 * @export
 */
export const UserPermissionsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = UserPermissionsApiFp(configuration);
  return {
    /**
     * Gets summarized permission information. Available for the current authenticated user only.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserGetPermissions(
      id: string,
      options?: any
    ): AxiosPromise<UserPermissionSetResource> {
      return localVarFp
        .getUserGetPermissions(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a summary of the configuration of the user\'s permissions information. Available for the current authenticated user only.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserGetPermissionsConfiguration(
      id: string,
      options?: any
    ): AxiosPromise<UserPermissionSetResource> {
      return localVarFp
        .getUserGetPermissionsConfiguration(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a summary of the configuration of the user\'s permissions information. Available for the current authenticated user only.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserGetPermissionsConfigurationSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<UserPermissionSetResource> {
      return localVarFp
        .getUserGetPermissionsConfigurationSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets summarized permission information. Available for the current authenticated user only.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserGetPermissionsSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<UserPermissionSetResource> {
      return localVarFp
        .getUserGetPermissionsSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets list of permissions as a csv file. Available for the current authenticated user only.
     * @param {string} id ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserPermissionsExport(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .getUserPermissionsExport(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets list of permissions as a csv file. Available for the current authenticated user only.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserPermissionsExportSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .getUserPermissionsExportSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * UserPermissionsApi - interface
 * @export
 * @interface UserPermissionsApi
 */
export interface UserPermissionsApiInterface {
  /**
   * Gets summarized permission information. Available for the current authenticated user only.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserPermissionsApiInterface
   */
  getUserGetPermissions(
    id: string,
    options?: any
  ): AxiosPromise<UserPermissionSetResource>;

  /**
   * Gets a summary of the configuration of the user\'s permissions information. Available for the current authenticated user only.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserPermissionsApiInterface
   */
  getUserGetPermissionsConfiguration(
    id: string,
    options?: any
  ): AxiosPromise<UserPermissionSetResource>;

  /**
   * Gets a summary of the configuration of the user\'s permissions information. Available for the current authenticated user only.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserPermissionsApiInterface
   */
  getUserGetPermissionsConfigurationSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<UserPermissionSetResource>;

  /**
   * Gets summarized permission information. Available for the current authenticated user only.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserPermissionsApiInterface
   */
  getUserGetPermissionsSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<UserPermissionSetResource>;

  /**
   * Gets list of permissions as a csv file. Available for the current authenticated user only.
   * @param {string} id ID of the user
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserPermissionsApiInterface
   */
  getUserPermissionsExport(id: string, options?: any): AxiosPromise<void>;

  /**
   * Gets list of permissions as a csv file. Available for the current authenticated user only.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the user
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserPermissionsApiInterface
   */
  getUserPermissionsExportSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;
}

/**
 * UserPermissionsApi - object-oriented interface
 * @export
 * @class UserPermissionsApi
 * @extends {BaseAPI}
 */
export class UserPermissionsApi
  extends BaseAPI
  implements UserPermissionsApiInterface {
  /**
   * Gets summarized permission information. Available for the current authenticated user only.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserPermissionsApi
   */
  public getUserGetPermissions(id: string, options?: any) {
    return UserPermissionsApiFp(this.configuration)
      .getUserGetPermissions(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a summary of the configuration of the user\'s permissions information. Available for the current authenticated user only.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserPermissionsApi
   */
  public getUserGetPermissionsConfiguration(id: string, options?: any) {
    return UserPermissionsApiFp(this.configuration)
      .getUserGetPermissionsConfiguration(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a summary of the configuration of the user\'s permissions information. Available for the current authenticated user only.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserPermissionsApi
   */
  public getUserGetPermissionsConfigurationSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return UserPermissionsApiFp(this.configuration)
      .getUserGetPermissionsConfigurationSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets summarized permission information. Available for the current authenticated user only.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserPermissionsApi
   */
  public getUserGetPermissionsSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return UserPermissionsApiFp(this.configuration)
      .getUserGetPermissionsSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets list of permissions as a csv file. Available for the current authenticated user only.
   * @param {string} id ID of the user
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserPermissionsApi
   */
  public getUserPermissionsExport(id: string, options?: any) {
    return UserPermissionsApiFp(this.configuration)
      .getUserPermissionsExport(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets list of permissions as a csv file. Available for the current authenticated user only.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the user
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserPermissionsApi
   */
  public getUserPermissionsExportSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return UserPermissionsApiFp(this.configuration)
      .getUserPermissionsExportSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
