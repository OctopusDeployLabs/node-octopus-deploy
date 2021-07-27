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
/**
 * ScopedUserRolesApi - axios parameter creator
 * @export
 */
export const ScopedUserRolesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Get a Scoped User Role by ID
     * @param {string} id ID of the ScopedUserRole to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getScopedUserRoleById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getScopedUserRoleById", "id", id);
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
     * @summary Get a Scoped User Role by ID
     * @param {string} id ID of the ScopedUserRole to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getScopedUserRoleByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getScopedUserRoleByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getScopedUserRoleByIdSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/scopeduserroles/{id}`
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
  };
};

/**
 * ScopedUserRolesApi - functional programming interface
 * @export
 */
export const ScopedUserRolesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    ScopedUserRolesApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Get a Scoped User Role by ID
     * @param {string} id ID of the ScopedUserRole to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getScopedUserRoleById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ScopedUserRoleResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getScopedUserRoleById(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Get a Scoped User Role by ID
     * @param {string} id ID of the ScopedUserRole to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getScopedUserRoleByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ScopedUserRoleResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getScopedUserRoleByIdSpaces(
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
  };
};

/**
 * ScopedUserRolesApi - factory interface
 * @export
 */
export const ScopedUserRolesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ScopedUserRolesApiFp(configuration);
  return {
    /**
     *
     * @summary Get a Scoped User Role by ID
     * @param {string} id ID of the ScopedUserRole to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getScopedUserRoleById(
      id: string,
      options?: any
    ): AxiosPromise<ScopedUserRoleResource> {
      return localVarFp
        .getScopedUserRoleById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Scoped User Role by ID
     * @param {string} id ID of the ScopedUserRole to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getScopedUserRoleByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<ScopedUserRoleResource> {
      return localVarFp
        .getScopedUserRoleByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ScopedUserRolesApi - interface
 * @export
 * @interface ScopedUserRolesApi
 */
export interface ScopedUserRolesApiInterface {
  /**
   *
   * @summary Get a Scoped User Role by ID
   * @param {string} id ID of the ScopedUserRole to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRolesApiInterface
   */
  getScopedUserRoleById(
    id: string,
    options?: any
  ): AxiosPromise<ScopedUserRoleResource>;

  /**
   *
   * @summary Get a Scoped User Role by ID
   * @param {string} id ID of the ScopedUserRole to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRolesApiInterface
   */
  getScopedUserRoleByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<ScopedUserRoleResource>;
}

/**
 * ScopedUserRolesApi - object-oriented interface
 * @export
 * @class ScopedUserRolesApi
 * @extends {BaseAPI}
 */
export class ScopedUserRolesApi
  extends BaseAPI
  implements ScopedUserRolesApiInterface
{
  /**
   *
   * @summary Get a Scoped User Role by ID
   * @param {string} id ID of the ScopedUserRole to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRolesApi
   */
  public getScopedUserRoleById(id: string, options?: any) {
    return ScopedUserRolesApiFp(this.configuration)
      .getScopedUserRoleById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Scoped User Role by ID
   * @param {string} id ID of the ScopedUserRole to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScopedUserRolesApi
   */
  public getScopedUserRoleByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ) {
    return ScopedUserRolesApiFp(this.configuration)
      .getScopedUserRoleByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
