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
import { FeaturesConfigurationResource } from "../model";
/**
 * FeaturesConfigurationApi - axios parameter creator
 * @export
 */
export const FeaturesConfigurationApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Gets information about the features configuration in use by the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFeaturesConfiguration: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/featuresconfiguration`;
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
     * Updates the features configuration used by the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateFeaturesConfiguration: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/featuresconfiguration`;
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
 * FeaturesConfigurationApi - functional programming interface
 * @export
 */
export const FeaturesConfigurationApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    FeaturesConfigurationApiAxiosParamCreator(configuration);
  return {
    /**
     * Gets information about the features configuration in use by the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getFeaturesConfiguration(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<FeaturesConfigurationResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getFeaturesConfiguration(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Updates the features configuration used by the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateFeaturesConfiguration(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<FeaturesConfigurationResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateFeaturesConfiguration(options);
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
 * FeaturesConfigurationApi - factory interface
 * @export
 */
export const FeaturesConfigurationApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = FeaturesConfigurationApiFp(configuration);
  return {
    /**
     * Gets information about the features configuration in use by the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFeaturesConfiguration(
      options?: any
    ): AxiosPromise<FeaturesConfigurationResource> {
      return localVarFp
        .getFeaturesConfiguration(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates the features configuration used by the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateFeaturesConfiguration(
      options?: any
    ): AxiosPromise<FeaturesConfigurationResource> {
      return localVarFp
        .updateFeaturesConfiguration(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * FeaturesConfigurationApi - object-oriented interface
 * @export
 * @class FeaturesConfigurationApi
 * @extends {BaseAPI}
 */
export class FeaturesConfigurationApi extends BaseAPI {
  /**
   * Gets information about the features configuration in use by the Octopus Server
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FeaturesConfigurationApi
   */
  public getFeaturesConfiguration(options?: any) {
    return FeaturesConfigurationApiFp(this.configuration)
      .getFeaturesConfiguration(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates the features configuration used by the Octopus Server
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FeaturesConfigurationApi
   */
  public updateFeaturesConfiguration(options?: any) {
    return FeaturesConfigurationApiFp(this.configuration)
      .updateFeaturesConfiguration(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
