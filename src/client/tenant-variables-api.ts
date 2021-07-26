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
/**
 * TenantVariablesApi - axios parameter creator
 * @export
 */
export const TenantVariablesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Lists all of the tenant variables in the supplied Octopus Deploy Space. The results will be sorted alphabetically by id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantVariablesAll: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/tenantvariables/all`;
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
     * Lists all of the tenant variables in the supplied Octopus Deploy Space. The results will be sorted alphabetically by id.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantVariablesAllSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getTenantVariablesAllSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/tenantvariables/all`.replace(
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
 * TenantVariablesApi - functional programming interface
 * @export
 */
export const TenantVariablesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    TenantVariablesApiAxiosParamCreator(configuration);
  return {
    /**
     * Lists all of the tenant variables in the supplied Octopus Deploy Space. The results will be sorted alphabetically by id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTenantVariablesAll(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getTenantVariablesAll(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists all of the tenant variables in the supplied Octopus Deploy Space. The results will be sorted alphabetically by id.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTenantVariablesAllSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getTenantVariablesAllSpaces(
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
 * TenantVariablesApi - factory interface
 * @export
 */
export const TenantVariablesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = TenantVariablesApiFp(configuration);
  return {
    /**
     * Lists all of the tenant variables in the supplied Octopus Deploy Space. The results will be sorted alphabetically by id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantVariablesAll(options?: any): AxiosPromise<void> {
      return localVarFp
        .getTenantVariablesAll(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the tenant variables in the supplied Octopus Deploy Space. The results will be sorted alphabetically by id.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantVariablesAllSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .getTenantVariablesAllSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * TenantVariablesApi - object-oriented interface
 * @export
 * @class TenantVariablesApi
 * @extends {BaseAPI}
 */
export class TenantVariablesApi extends BaseAPI {
  /**
   * Lists all of the tenant variables in the supplied Octopus Deploy Space. The results will be sorted alphabetically by id.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantVariablesApi
   */
  public getTenantVariablesAll(options?: any) {
    return TenantVariablesApiFp(this.configuration)
      .getTenantVariablesAll(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the tenant variables in the supplied Octopus Deploy Space. The results will be sorted alphabetically by id.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TenantVariablesApi
   */
  public getTenantVariablesAllSpaces(baseSpaceId: string, options?: any) {
    return TenantVariablesApiFp(this.configuration)
      .getTenantVariablesAllSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
