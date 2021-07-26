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
import { ServerConfigurationResource } from "../model";
// @ts-ignore
import { ServerConfigurationSettingsResource } from "../model";
/**
 * ServerConfigurationApi - axios parameter creator
 * @export
 */
export const ServerConfigurationApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Gets information about the editable server configuration in use by the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getServerConfiguration: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/serverconfiguration`;
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
     * Gets information about the server configuration in use by the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getServerConfigurationSettingsList: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/serverconfiguration/settings`;
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
     * Updates the server configuration used by the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateServerConfiguration: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/serverconfiguration`;
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
 * ServerConfigurationApi - functional programming interface
 * @export
 */
export const ServerConfigurationApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    ServerConfigurationApiAxiosParamCreator(configuration);
  return {
    /**
     * Gets information about the editable server configuration in use by the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getServerConfiguration(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ServerConfigurationResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getServerConfiguration(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Gets information about the server configuration in use by the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getServerConfigurationSettingsList(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<ServerConfigurationSettingsResource>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getServerConfigurationSettingsList(
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
     * Updates the server configuration used by the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateServerConfiguration(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateServerConfiguration(options);
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
 * ServerConfigurationApi - factory interface
 * @export
 */
export const ServerConfigurationApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ServerConfigurationApiFp(configuration);
  return {
    /**
     * Gets information about the editable server configuration in use by the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getServerConfiguration(
      options?: any
    ): AxiosPromise<ServerConfigurationResource> {
      return localVarFp
        .getServerConfiguration(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets information about the server configuration in use by the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getServerConfigurationSettingsList(
      options?: any
    ): AxiosPromise<Array<ServerConfigurationSettingsResource>> {
      return localVarFp
        .getServerConfigurationSettingsList(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates the server configuration used by the Octopus Server
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateServerConfiguration(options?: any): AxiosPromise<void> {
      return localVarFp
        .updateServerConfiguration(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ServerConfigurationApi - object-oriented interface
 * @export
 * @class ServerConfigurationApi
 * @extends {BaseAPI}
 */
export class ServerConfigurationApi extends BaseAPI {
  /**
   * Gets information about the editable server configuration in use by the Octopus Server
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerConfigurationApi
   */
  public getServerConfiguration(options?: any) {
    return ServerConfigurationApiFp(this.configuration)
      .getServerConfiguration(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets information about the server configuration in use by the Octopus Server
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerConfigurationApi
   */
  public getServerConfigurationSettingsList(options?: any) {
    return ServerConfigurationApiFp(this.configuration)
      .getServerConfigurationSettingsList(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates the server configuration used by the Octopus Server
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerConfigurationApi
   */
  public updateServerConfiguration(options?: any) {
    return ServerConfigurationApiFp(this.configuration)
      .updateServerConfiguration(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
