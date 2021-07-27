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
import { ProjectedTeamReferenceDataItem } from "../model";
/**
 * UserTeamsApi - axios parameter creator
 * @export
 */
export const UserTeamsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Gets a list of teams (id and name only) for the specified user, including any from external auth-provider security groups.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserGetTeams: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getUserGetTeams", "id", id);
      const localVarPath = `/users/{id}/teams`.replace(
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
     * Gets a list of teams (id and name only) for the specified user, including any from external auth-provider security groups.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserGetTeamsSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getUserGetTeamsSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getUserGetTeamsSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/users/{id}/teams`
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
 * UserTeamsApi - functional programming interface
 * @export
 */
export const UserTeamsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    UserTeamsApiAxiosParamCreator(configuration);
  return {
    /**
     * Gets a list of teams (id and name only) for the specified user, including any from external auth-provider security groups.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserGetTeams(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<ProjectedTeamReferenceDataItem>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getUserGetTeams(
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
     * Gets a list of teams (id and name only) for the specified user, including any from external auth-provider security groups.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserGetTeamsSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<ProjectedTeamReferenceDataItem>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getUserGetTeamsSpaces(
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
 * UserTeamsApi - factory interface
 * @export
 */
export const UserTeamsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = UserTeamsApiFp(configuration);
  return {
    /**
     * Gets a list of teams (id and name only) for the specified user, including any from external auth-provider security groups.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserGetTeams(
      id: string,
      options?: any
    ): AxiosPromise<Array<ProjectedTeamReferenceDataItem>> {
      return localVarFp
        .getUserGetTeams(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a list of teams (id and name only) for the specified user, including any from external auth-provider security groups.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserGetTeamsSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<Array<ProjectedTeamReferenceDataItem>> {
      return localVarFp
        .getUserGetTeamsSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * UserTeamsApi - interface
 * @export
 * @interface UserTeamsApi
 */
export interface UserTeamsApiInterface {
  /**
   * Gets a list of teams (id and name only) for the specified user, including any from external auth-provider security groups.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserTeamsApiInterface
   */
  getUserGetTeams(
    id: string,
    options?: any
  ): AxiosPromise<Array<ProjectedTeamReferenceDataItem>>;

  /**
   * Gets a list of teams (id and name only) for the specified user, including any from external auth-provider security groups.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserTeamsApiInterface
   */
  getUserGetTeamsSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<Array<ProjectedTeamReferenceDataItem>>;
}

/**
 * UserTeamsApi - object-oriented interface
 * @export
 * @class UserTeamsApi
 * @extends {BaseAPI}
 */
export class UserTeamsApi extends BaseAPI implements UserTeamsApiInterface {
  /**
   * Gets a list of teams (id and name only) for the specified user, including any from external auth-provider security groups.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserTeamsApi
   */
  public getUserGetTeams(id: string, options?: any) {
    return UserTeamsApiFp(this.configuration)
      .getUserGetTeams(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a list of teams (id and name only) for the specified user, including any from external auth-provider security groups.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserTeamsApi
   */
  public getUserGetTeamsSpaces(baseSpaceId: string, id: string, options?: any) {
    return UserTeamsApiFp(this.configuration)
      .getUserGetTeamsSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
