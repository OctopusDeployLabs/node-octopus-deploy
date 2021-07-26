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
import { UserRoleResource } from "../model";
// @ts-ignore
import { UserRoleResourceCollection } from "../model";
/**
 * UserRolesApi - axios parameter creator
 * @export
 */
export const UserRolesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a custom user role definition.
     * @summary Create a UserRoleResource
     * @param {UserRoleResource} [body] The UserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserRole: async (
      body?: UserRoleResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/userroles`;
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
     * Deletes an existing user role.
     * @summary Delete a UserRoleResource by ID
     * @param {string} id ID of the UserRoleResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUserRole: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteUserRole", "id", id);
      const localVarPath = `/userroles/{id}`.replace(
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
     *
     * @summary Get a User Role by ID
     * @param {string} id ID of the UserRole to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserRoleById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getUserRoleById", "id", id);
      const localVarPath = `/userroles/{id}`.replace(
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
     * Lists all of the user roles in the current Octopus Deploy instance. The results will be sorted alphabetically by name.
     * @summary Get a list of UserRoleResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexUserRoles: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/userroles`;
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
     * Lists all of the User Roles in the current Octopus Deploy instance. The results will be sorted alphabetically by name.
     * @summary Get a list of User Roles
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllUserRoles: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/userroles/all`;
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
     * Modifies an existing user role definition.
     * @summary Modify a UserRoleResource by ID
     * @param {string} id ID of the UserRoleResource to modify
     * @param {UserRoleResource} [body] The UserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUserRole: async (
      id: string,
      body?: UserRoleResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateUserRole", "id", id);
      const localVarPath = `/userroles/{id}`.replace(
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
  };
};

/**
 * UserRolesApi - functional programming interface
 * @export
 */
export const UserRolesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    UserRolesApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a custom user role definition.
     * @summary Create a UserRoleResource
     * @param {UserRoleResource} [body] The UserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createUserRole(
      body?: UserRoleResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<UserRoleResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createUserRole(
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
     * Deletes an existing user role.
     * @summary Delete a UserRoleResource by ID
     * @param {string} id ID of the UserRoleResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteUserRole(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUserRole(
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
     * @summary Get a User Role by ID
     * @param {string} id ID of the UserRole to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserRoleById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<UserRoleResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getUserRoleById(
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
     * Lists all of the user roles in the current Octopus Deploy instance. The results will be sorted alphabetically by name.
     * @summary Get a list of UserRoleResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexUserRoles(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<UserRoleResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexUserRoles(
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
     * Lists all of the User Roles in the current Octopus Deploy instance. The results will be sorted alphabetically by name.
     * @summary Get a list of User Roles
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllUserRoles(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<UserRoleResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listAllUserRoles(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Modifies an existing user role definition.
     * @summary Modify a UserRoleResource by ID
     * @param {string} id ID of the UserRoleResource to modify
     * @param {UserRoleResource} [body] The UserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateUserRole(
      id: string,
      body?: UserRoleResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<UserRoleResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserRole(
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
 * UserRolesApi - factory interface
 * @export
 */
export const UserRolesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = UserRolesApiFp(configuration);
  return {
    /**
     * Creates a custom user role definition.
     * @summary Create a UserRoleResource
     * @param {UserRoleResource} [body] The UserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserRole(
      body?: UserRoleResource,
      options?: any
    ): AxiosPromise<UserRoleResource> {
      return localVarFp
        .createUserRole(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing user role.
     * @summary Delete a UserRoleResource by ID
     * @param {string} id ID of the UserRoleResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUserRole(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteUserRole(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a User Role by ID
     * @param {string} id ID of the UserRole to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserRoleById(id: string, options?: any): AxiosPromise<UserRoleResource> {
      return localVarFp
        .getUserRoleById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the user roles in the current Octopus Deploy instance. The results will be sorted alphabetically by name.
     * @summary Get a list of UserRoleResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexUserRoles(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<UserRoleResourceCollection> {
      return localVarFp
        .indexUserRoles(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the User Roles in the current Octopus Deploy instance. The results will be sorted alphabetically by name.
     * @summary Get a list of User Roles
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllUserRoles(options?: any): AxiosPromise<Array<UserRoleResource>> {
      return localVarFp
        .listAllUserRoles(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing user role definition.
     * @summary Modify a UserRoleResource by ID
     * @param {string} id ID of the UserRoleResource to modify
     * @param {UserRoleResource} [body] The UserRoleResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUserRole(
      id: string,
      body?: UserRoleResource,
      options?: any
    ): AxiosPromise<UserRoleResource> {
      return localVarFp
        .updateUserRole(id, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * UserRolesApi - object-oriented interface
 * @export
 * @class UserRolesApi
 * @extends {BaseAPI}
 */
export class UserRolesApi extends BaseAPI {
  /**
   * Creates a custom user role definition.
   * @summary Create a UserRoleResource
   * @param {UserRoleResource} [body] The UserRoleResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserRolesApi
   */
  public createUserRole(body?: UserRoleResource, options?: any) {
    return UserRolesApiFp(this.configuration)
      .createUserRole(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing user role.
   * @summary Delete a UserRoleResource by ID
   * @param {string} id ID of the UserRoleResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserRolesApi
   */
  public deleteUserRole(id: string, options?: any) {
    return UserRolesApiFp(this.configuration)
      .deleteUserRole(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a User Role by ID
   * @param {string} id ID of the UserRole to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserRolesApi
   */
  public getUserRoleById(id: string, options?: any) {
    return UserRolesApiFp(this.configuration)
      .getUserRoleById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the user roles in the current Octopus Deploy instance. The results will be sorted alphabetically by name.
   * @summary Get a list of UserRoleResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserRolesApi
   */
  public indexUserRoles(skip?: number, take?: number, options?: any) {
    return UserRolesApiFp(this.configuration)
      .indexUserRoles(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the User Roles in the current Octopus Deploy instance. The results will be sorted alphabetically by name.
   * @summary Get a list of User Roles
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserRolesApi
   */
  public listAllUserRoles(options?: any) {
    return UserRolesApiFp(this.configuration)
      .listAllUserRoles(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing user role definition.
   * @summary Modify a UserRoleResource by ID
   * @param {string} id ID of the UserRoleResource to modify
   * @param {UserRoleResource} [body] The UserRoleResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserRolesApi
   */
  public updateUserRole(id: string, body?: UserRoleResource, options?: any) {
    return UserRolesApiFp(this.configuration)
      .updateUserRole(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
