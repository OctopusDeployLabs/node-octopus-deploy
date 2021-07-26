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
import { PerformanceConfigurationResource } from "../model";
/**
 * PerformanceConfigurationApi - axios parameter creator
 * @export
 */
export const PerformanceConfigurationApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Get performance settings for the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPerformanceConfiguration: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/performanceconfiguration`;
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
     * Updates the performance settings for the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePerformanceConfiguration: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/performanceconfiguration`;
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
 * PerformanceConfigurationApi - functional programming interface
 * @export
 */
export const PerformanceConfigurationApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    PerformanceConfigurationApiAxiosParamCreator(configuration);
  return {
    /**
     * Get performance settings for the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPerformanceConfiguration(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<PerformanceConfigurationResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getPerformanceConfiguration(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Updates the performance settings for the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatePerformanceConfiguration(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<PerformanceConfigurationResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updatePerformanceConfiguration(options);
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
 * PerformanceConfigurationApi - factory interface
 * @export
 */
export const PerformanceConfigurationApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = PerformanceConfigurationApiFp(configuration);
  return {
    /**
     * Get performance settings for the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPerformanceConfiguration(
      options?: any
    ): AxiosPromise<PerformanceConfigurationResource> {
      return localVarFp
        .getPerformanceConfiguration(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates the performance settings for the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePerformanceConfiguration(
      options?: any
    ): AxiosPromise<PerformanceConfigurationResource> {
      return localVarFp
        .updatePerformanceConfiguration(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * PerformanceConfigurationApi - object-oriented interface
 * @export
 * @class PerformanceConfigurationApi
 * @extends {BaseAPI}
 */
export class PerformanceConfigurationApi extends BaseAPI {
  /**
   * Get performance settings for the Octopus Server
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PerformanceConfigurationApi
   */
  public getPerformanceConfiguration(options?: any) {
    return PerformanceConfigurationApiFp(this.configuration)
      .getPerformanceConfiguration(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates the performance settings for the Octopus Server
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PerformanceConfigurationApi
   */
  public updatePerformanceConfiguration(options?: any) {
    return PerformanceConfigurationApiFp(this.configuration)
      .updatePerformanceConfiguration(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
