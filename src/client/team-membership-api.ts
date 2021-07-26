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
import { TeamMembership } from "../model";
// @ts-ignore
import { TeamResource } from "../model";
/**
 * TeamMembershipApi - axios parameter creator
 * @export
 */
export const TeamMembershipApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Lists all the Users that would belong to the specified Team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
     * @summary Preview Users that would belong to the specified Team
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTeamMembershipPreview: async (
      body?: TeamResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/teammembership/previewteam`;
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
     * Lists all the Users that would belong to the specified Team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
     * @summary Preview Users that would belong to the specified Team
     * @param {string} baseSpaceId ID of the space
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTeamMembershipPreviewSpaces: async (
      baseSpaceId: string,
      body?: TeamResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createTeamMembershipPreviewSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/teammembership/previewteam`.replace(
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
     * Lists all teams a user is a member of, including any from external auth-provider security groups. Memberships are filtered by userId.
     * @summary Gets a list of team memberships for a user
     * @param {string} userId ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTeamMembership: async (
      userId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'userId' is not null or undefined
      assertParamExists("getTeamMembership", "userId", userId);
      const localVarPath = `/teammembership`;
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

      if (userId !== undefined) {
        localVarQueryParameter["userId"] = userId;
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
     * Lists all teams a user is a member of, including any from external auth-provider security groups. Memberships are filtered by userId.
     * @summary Gets a list of team memberships for a user
     * @param {string} userId ID of the user
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTeamMembershipSpaces: async (
      userId: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'userId' is not null or undefined
      assertParamExists("getTeamMembershipSpaces", "userId", userId);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getTeamMembershipSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/teammembership`.replace(
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

      if (userId !== undefined) {
        localVarQueryParameter["userId"] = userId;
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
 * TeamMembershipApi - functional programming interface
 * @export
 */
export const TeamMembershipApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    TeamMembershipApiAxiosParamCreator(configuration);
  return {
    /**
     * Lists all the Users that would belong to the specified Team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
     * @summary Preview Users that would belong to the specified Team
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTeamMembershipPreview(
      body?: TeamResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<TeamMembership>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createTeamMembershipPreview(
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
     * Lists all the Users that would belong to the specified Team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
     * @summary Preview Users that would belong to the specified Team
     * @param {string} baseSpaceId ID of the space
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTeamMembershipPreviewSpaces(
      baseSpaceId: string,
      body?: TeamResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<TeamMembership>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createTeamMembershipPreviewSpaces(
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
     * Lists all teams a user is a member of, including any from external auth-provider security groups. Memberships are filtered by userId.
     * @summary Gets a list of team memberships for a user
     * @param {string} userId ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTeamMembership(
      userId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<TeamMembership>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getTeamMembership(userId, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists all teams a user is a member of, including any from external auth-provider security groups. Memberships are filtered by userId.
     * @summary Gets a list of team memberships for a user
     * @param {string} userId ID of the user
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTeamMembershipSpaces(
      userId: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<TeamMembership>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getTeamMembershipSpaces(
          userId,
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
 * TeamMembershipApi - factory interface
 * @export
 */
export const TeamMembershipApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = TeamMembershipApiFp(configuration);
  return {
    /**
     * Lists all the Users that would belong to the specified Team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
     * @summary Preview Users that would belong to the specified Team
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTeamMembershipPreview(
      body?: TeamResource,
      options?: any
    ): AxiosPromise<Array<TeamMembership>> {
      return localVarFp
        .createTeamMembershipPreview(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the Users that would belong to the specified Team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
     * @summary Preview Users that would belong to the specified Team
     * @param {string} baseSpaceId ID of the space
     * @param {TeamResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTeamMembershipPreviewSpaces(
      baseSpaceId: string,
      body?: TeamResource,
      options?: any
    ): AxiosPromise<Array<TeamMembership>> {
      return localVarFp
        .createTeamMembershipPreviewSpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all teams a user is a member of, including any from external auth-provider security groups. Memberships are filtered by userId.
     * @summary Gets a list of team memberships for a user
     * @param {string} userId ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTeamMembership(
      userId: string,
      options?: any
    ): AxiosPromise<Array<TeamMembership>> {
      return localVarFp
        .getTeamMembership(userId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all teams a user is a member of, including any from external auth-provider security groups. Memberships are filtered by userId.
     * @summary Gets a list of team memberships for a user
     * @param {string} userId ID of the user
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTeamMembershipSpaces(
      userId: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<TeamMembership>> {
      return localVarFp
        .getTeamMembershipSpaces(userId, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * TeamMembershipApi - object-oriented interface
 * @export
 * @class TeamMembershipApi
 * @extends {BaseAPI}
 */
export class TeamMembershipApi extends BaseAPI {
  /**
   * Lists all the Users that would belong to the specified Team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
   * @summary Preview Users that would belong to the specified Team
   * @param {TeamResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamMembershipApi
   */
  public createTeamMembershipPreview(body?: TeamResource, options?: any) {
    return TeamMembershipApiFp(this.configuration)
      .createTeamMembershipPreview(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the Users that would belong to the specified Team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
   * @summary Preview Users that would belong to the specified Team
   * @param {string} baseSpaceId ID of the space
   * @param {TeamResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamMembershipApi
   */
  public createTeamMembershipPreviewSpaces(
    baseSpaceId: string,
    body?: TeamResource,
    options?: any
  ) {
    return TeamMembershipApiFp(this.configuration)
      .createTeamMembershipPreviewSpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all teams a user is a member of, including any from external auth-provider security groups. Memberships are filtered by userId.
   * @summary Gets a list of team memberships for a user
   * @param {string} userId ID of the user
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamMembershipApi
   */
  public getTeamMembership(userId: string, options?: any) {
    return TeamMembershipApiFp(this.configuration)
      .getTeamMembership(userId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all teams a user is a member of, including any from external auth-provider security groups. Memberships are filtered by userId.
   * @summary Gets a list of team memberships for a user
   * @param {string} userId ID of the user
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamMembershipApi
   */
  public getTeamMembershipSpaces(
    userId: string,
    baseSpaceId: string,
    options?: any
  ) {
    return TeamMembershipApiFp(this.configuration)
      .getTeamMembershipSpaces(userId, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
