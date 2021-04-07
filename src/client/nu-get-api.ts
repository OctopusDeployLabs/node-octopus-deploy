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
 * NuGetApi - axios parameter creator
 * @export
 */
export const NuGetApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Octopus allows NuGet.exe and compatible tools to push packages to this endpoint.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pushNuGetPackage: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/nuget/packages`;
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
    /**
     * Octopus allows NuGet.exe and compatible tools to push packages to this endpoint.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pushNuGetPackageSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("pushNuGetPackageSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/nuget/packages`.replace(
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
 * NuGetApi - functional programming interface
 * @export
 */
export const NuGetApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = NuGetApiAxiosParamCreator(configuration);
  return {
    /**
     * Octopus allows NuGet.exe and compatible tools to push packages to this endpoint.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async pushNuGetPackage(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.pushNuGetPackage(
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
     * Octopus allows NuGet.exe and compatible tools to push packages to this endpoint.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async pushNuGetPackageSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.pushNuGetPackageSpaces(
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
 * NuGetApi - factory interface
 * @export
 */
export const NuGetApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = NuGetApiFp(configuration);
  return {
    /**
     * Octopus allows NuGet.exe and compatible tools to push packages to this endpoint.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pushNuGetPackage(options?: any): AxiosPromise<void> {
      return localVarFp
        .pushNuGetPackage(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Octopus allows NuGet.exe and compatible tools to push packages to this endpoint.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pushNuGetPackageSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .pushNuGetPackageSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * NuGetApi - interface
 * @export
 * @interface NuGetApi
 */
export interface NuGetApiInterface {
  /**
   * Octopus allows NuGet.exe and compatible tools to push packages to this endpoint.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NuGetApiInterface
   */
  pushNuGetPackage(options?: any): AxiosPromise<void>;

  /**
   * Octopus allows NuGet.exe and compatible tools to push packages to this endpoint.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NuGetApiInterface
   */
  pushNuGetPackageSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<void>;
}

/**
 * NuGetApi - object-oriented interface
 * @export
 * @class NuGetApi
 * @extends {BaseAPI}
 */
export class NuGetApi extends BaseAPI implements NuGetApiInterface {
  /**
   * Octopus allows NuGet.exe and compatible tools to push packages to this endpoint.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NuGetApi
   */
  public pushNuGetPackage(options?: any) {
    return NuGetApiFp(this.configuration)
      .pushNuGetPackage(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Octopus allows NuGet.exe and compatible tools to push packages to this endpoint.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NuGetApi
   */
  public pushNuGetPackageSpaces(baseSpaceId: string, options?: any) {
    return NuGetApiFp(this.configuration)
      .pushNuGetPackageSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
