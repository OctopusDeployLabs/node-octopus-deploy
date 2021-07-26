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
import { UserAuthenticationResource } from "../model";
// @ts-ignore
import { UserResource } from "../model";
// @ts-ignore
import { UserResourceCollection } from "../model";
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserCreate: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/users`;
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
     * Authenticates a user and returns a response with a cookie for the current user. This cookie can be submitted with future requests to avoid re-authentication.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserLogin: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/users/login`;
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
     * Revokes the authentication cookie from the current session.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserLogout: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/users/logout`;
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
     * Registers a new user and responds with an authentication cookie. Unless the first administrator user is being registered, an invitation code must be provided.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserRegister: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/users/register`;
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
     * Delete an existing user.
     * @summary Delete a UserResource by ID
     * @param {string} id ID of the UserResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUser: async (id: string, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteUser", "id", id);
      const localVarPath = `/users/{id}`.replace(
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
     * Provides the details of the enabled authentication providers and whether the current user can edit logins for the given user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserAuthentication: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/users/authentication`;
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
     * Provides the details of the enabled authentication providers and whether the current user can edit logins for the given user.
     * @param {string} userId ID of the resource being edited
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserAuthentication1: async (
      userId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'userId' is not null or undefined
      assertParamExists("getUserAuthentication1", "userId", userId);
      const localVarPath = `/users/authentication/{userId}`.replace(
        `{${"userId"}}`,
        encodeURIComponent(String(userId))
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
     * @summary Get a User by ID
     * @param {string} id ID of the User to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getUserById", "id", id);
      const localVarPath = `/users/{id}`.replace(
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
     * Searches for users, using the authentication providers.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserExternalSearch: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/users/external-search`;
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
     * Gets information about the current user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserGetCurrent: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/users/me`;
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
     * Gets a list of spaces available to the current authenticated user only.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserGetSpaces: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getUserGetSpaces", "id", id);
      const localVarPath = `/users/{id}/spaces`.replace(
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
     * Gets the metadata to describe the claims/fields used by authentication providers that support identities.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserIdentityMetadata: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/users/identity-metadata`;
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
     * Lists all of the users in the current Octopus Deploy instance, from all teams. The results will be sorted alphabetically by username.
     * @summary Get a list of UserResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexUsers: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/users`;
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
     * Lists all the Users in the System. The results will be sorted alphabetically by `Username`
     * @summary Get a list of Users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllUsers: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/users/all`;
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
     * Modifies an existing user.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUser: async (id: string, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateUser", "id", id);
      const localVarPath = `/users/{id}`.replace(
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
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a new user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createUserCreate(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createUserCreate(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Authenticates a user and returns a response with a cookie for the current user. This cookie can be submitted with future requests to avoid re-authentication.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createUserLogin(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createUserLogin(
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
     * Revokes the authentication cookie from the current session.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createUserLogout(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createUserLogout(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Registers a new user and responds with an authentication cookie. Unless the first administrator user is being registered, an invitation code must be provided.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createUserRegister(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createUserRegister(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Delete an existing user.
     * @summary Delete a UserResource by ID
     * @param {string} id ID of the UserResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteUser(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUser(
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
     * Provides the details of the enabled authentication providers and whether the current user can edit logins for the given user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserAuthentication(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<UserAuthenticationResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getUserAuthentication(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Provides the details of the enabled authentication providers and whether the current user can edit logins for the given user.
     * @param {string} userId ID of the resource being edited
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserAuthentication1(
      userId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<UserAuthenticationResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getUserAuthentication1(userId, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Get a User by ID
     * @param {string} id ID of the User to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserById(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getUserById(
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
     * Searches for users, using the authentication providers.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserExternalSearch(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getUserExternalSearch(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Gets information about the current user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserGetCurrent(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getUserGetCurrent(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Gets a list of spaces available to the current authenticated user only.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserGetSpaces(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getUserGetSpaces(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Gets the metadata to describe the claims/fields used by authentication providers that support identities.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserIdentityMetadata(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getUserIdentityMetadata(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists all of the users in the current Octopus Deploy instance, from all teams. The results will be sorted alphabetically by username.
     * @summary Get a list of UserResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexUsers(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<UserResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexUsers(
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
     * Lists all the Users in the System. The results will be sorted alphabetically by `Username`
     * @summary Get a list of Users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllUsers(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<UserResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllUsers(
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
     * Modifies an existing user.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateUser(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateUser(
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
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = UsersApiFp(configuration);
  return {
    /**
     * Creates a new user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserCreate(options?: any): AxiosPromise<UserResource> {
      return localVarFp
        .createUserCreate(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Authenticates a user and returns a response with a cookie for the current user. This cookie can be submitted with future requests to avoid re-authentication.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserLogin(options?: any): AxiosPromise<void> {
      return localVarFp
        .createUserLogin(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Revokes the authentication cookie from the current session.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserLogout(options?: any): AxiosPromise<void> {
      return localVarFp
        .createUserLogout(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Registers a new user and responds with an authentication cookie. Unless the first administrator user is being registered, an invitation code must be provided.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserRegister(options?: any): AxiosPromise<void> {
      return localVarFp
        .createUserRegister(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Delete an existing user.
     * @summary Delete a UserResource by ID
     * @param {string} id ID of the UserResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUser(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteUser(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Provides the details of the enabled authentication providers and whether the current user can edit logins for the given user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserAuthentication(
      options?: any
    ): AxiosPromise<UserAuthenticationResource> {
      return localVarFp
        .getUserAuthentication(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Provides the details of the enabled authentication providers and whether the current user can edit logins for the given user.
     * @param {string} userId ID of the resource being edited
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserAuthentication1(
      userId: string,
      options?: any
    ): AxiosPromise<UserAuthenticationResource> {
      return localVarFp
        .getUserAuthentication1(userId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a User by ID
     * @param {string} id ID of the User to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserById(id: string, options?: any): AxiosPromise<UserResource> {
      return localVarFp
        .getUserById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Searches for users, using the authentication providers.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserExternalSearch(options?: any): AxiosPromise<void> {
      return localVarFp
        .getUserExternalSearch(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets information about the current user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserGetCurrent(options?: any): AxiosPromise<void> {
      return localVarFp
        .getUserGetCurrent(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a list of spaces available to the current authenticated user only.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserGetSpaces(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .getUserGetSpaces(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets the metadata to describe the claims/fields used by authentication providers that support identities.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserIdentityMetadata(options?: any): AxiosPromise<void> {
      return localVarFp
        .getUserIdentityMetadata(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the users in the current Octopus Deploy instance, from all teams. The results will be sorted alphabetically by username.
     * @summary Get a list of UserResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexUsers(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<UserResourceCollection> {
      return localVarFp
        .indexUsers(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the Users in the System. The results will be sorted alphabetically by `Username`
     * @summary Get a list of Users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllUsers(options?: any): AxiosPromise<Array<UserResource>> {
      return localVarFp
        .listAllUsers(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing user.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUser(id: string, options?: any): AxiosPromise<UserResource> {
      return localVarFp
        .updateUser(id, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
  /**
   * Creates a new user.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public createUserCreate(options?: any) {
    return UsersApiFp(this.configuration)
      .createUserCreate(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Authenticates a user and returns a response with a cookie for the current user. This cookie can be submitted with future requests to avoid re-authentication.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public createUserLogin(options?: any) {
    return UsersApiFp(this.configuration)
      .createUserLogin(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Revokes the authentication cookie from the current session.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public createUserLogout(options?: any) {
    return UsersApiFp(this.configuration)
      .createUserLogout(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Registers a new user and responds with an authentication cookie. Unless the first administrator user is being registered, an invitation code must be provided.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public createUserRegister(options?: any) {
    return UsersApiFp(this.configuration)
      .createUserRegister(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Delete an existing user.
   * @summary Delete a UserResource by ID
   * @param {string} id ID of the UserResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public deleteUser(id: string, options?: any) {
    return UsersApiFp(this.configuration)
      .deleteUser(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Provides the details of the enabled authentication providers and whether the current user can edit logins for the given user.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public getUserAuthentication(options?: any) {
    return UsersApiFp(this.configuration)
      .getUserAuthentication(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Provides the details of the enabled authentication providers and whether the current user can edit logins for the given user.
   * @param {string} userId ID of the resource being edited
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public getUserAuthentication1(userId: string, options?: any) {
    return UsersApiFp(this.configuration)
      .getUserAuthentication1(userId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a User by ID
   * @param {string} id ID of the User to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public getUserById(id: string, options?: any) {
    return UsersApiFp(this.configuration)
      .getUserById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Searches for users, using the authentication providers.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public getUserExternalSearch(options?: any) {
    return UsersApiFp(this.configuration)
      .getUserExternalSearch(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets information about the current user.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public getUserGetCurrent(options?: any) {
    return UsersApiFp(this.configuration)
      .getUserGetCurrent(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a list of spaces available to the current authenticated user only.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public getUserGetSpaces(id: string, options?: any) {
    return UsersApiFp(this.configuration)
      .getUserGetSpaces(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets the metadata to describe the claims/fields used by authentication providers that support identities.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public getUserIdentityMetadata(options?: any) {
    return UsersApiFp(this.configuration)
      .getUserIdentityMetadata(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the users in the current Octopus Deploy instance, from all teams. The results will be sorted alphabetically by username.
   * @summary Get a list of UserResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public indexUsers(skip?: number, take?: number, options?: any) {
    return UsersApiFp(this.configuration)
      .indexUsers(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the Users in the System. The results will be sorted alphabetically by `Username`
   * @summary Get a list of Users
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public listAllUsers(options?: any) {
    return UsersApiFp(this.configuration)
      .listAllUsers(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing user.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public updateUser(id: string, options?: any) {
    return UsersApiFp(this.configuration)
      .updateUser(id, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
