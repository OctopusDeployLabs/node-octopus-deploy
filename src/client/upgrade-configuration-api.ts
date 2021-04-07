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
 * UpgradeConfigurationApi - axios parameter creator
 * @export
 */
export const UpgradeConfigurationApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Gets information about the upgrade configuration in use by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUpgradeConfiguration: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/upgradeconfiguration`;
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
     * Updates the upgrade configuration used by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUpgradeConfiguration: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/upgradeconfiguration`;
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
 * UpgradeConfigurationApi - functional programming interface
 * @export
 */
export const UpgradeConfigurationApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator = UpgradeConfigurationApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Gets information about the upgrade configuration in use by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUpgradeConfiguration(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getUpgradeConfiguration(
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
     * Updates the upgrade configuration used by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateUpgradeConfiguration(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateUpgradeConfiguration(
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
 * UpgradeConfigurationApi - factory interface
 * @export
 */
export const UpgradeConfigurationApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = UpgradeConfigurationApiFp(configuration);
  return {
    /**
     * Gets information about the upgrade configuration in use by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUpgradeConfiguration(options?: any): AxiosPromise<void> {
      return localVarFp
        .getUpgradeConfiguration(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates the upgrade configuration used by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUpgradeConfiguration(options?: any): AxiosPromise<void> {
      return localVarFp
        .updateUpgradeConfiguration(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * UpgradeConfigurationApi - interface
 * @export
 * @interface UpgradeConfigurationApi
 */
export interface UpgradeConfigurationApiInterface {
  /**
   * Gets information about the upgrade configuration in use by the Octopus Server.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UpgradeConfigurationApiInterface
   */
  getUpgradeConfiguration(options?: any): AxiosPromise<void>;

  /**
   * Updates the upgrade configuration used by the Octopus Server.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UpgradeConfigurationApiInterface
   */
  updateUpgradeConfiguration(options?: any): AxiosPromise<void>;
}

/**
 * UpgradeConfigurationApi - object-oriented interface
 * @export
 * @class UpgradeConfigurationApi
 * @extends {BaseAPI}
 */
export class UpgradeConfigurationApi
  extends BaseAPI
  implements UpgradeConfigurationApiInterface {
  /**
   * Gets information about the upgrade configuration in use by the Octopus Server.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UpgradeConfigurationApi
   */
  public getUpgradeConfiguration(options?: any) {
    return UpgradeConfigurationApiFp(this.configuration)
      .getUpgradeConfiguration(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates the upgrade configuration used by the Octopus Server.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UpgradeConfigurationApi
   */
  public updateUpgradeConfiguration(options?: any) {
    return UpgradeConfigurationApiFp(this.configuration)
      .updateUpgradeConfiguration(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
