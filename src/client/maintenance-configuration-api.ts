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
import { MaintenanceConfigurationResource } from "../model";
/**
 * MaintenanceConfigurationApi - axios parameter creator
 * @export
 */
export const MaintenanceConfigurationApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Gets information about the maintenance configuration in use by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMaintenanceConfiguration: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/maintenanceconfiguration`;
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
     * Updates the maintenance configuration used by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMaintenanceConfiguration: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/maintenanceconfiguration`;
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
 * MaintenanceConfigurationApi - functional programming interface
 * @export
 */
export const MaintenanceConfigurationApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator = MaintenanceConfigurationApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Gets information about the maintenance configuration in use by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMaintenanceConfiguration(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MaintenanceConfigurationResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getMaintenanceConfiguration(
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
     * Updates the maintenance configuration used by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateMaintenanceConfiguration(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<MaintenanceConfigurationResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateMaintenanceConfiguration(
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
 * MaintenanceConfigurationApi - factory interface
 * @export
 */
export const MaintenanceConfigurationApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = MaintenanceConfigurationApiFp(configuration);
  return {
    /**
     * Gets information about the maintenance configuration in use by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMaintenanceConfiguration(
      options?: any
    ): AxiosPromise<MaintenanceConfigurationResource> {
      return localVarFp
        .getMaintenanceConfiguration(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates the maintenance configuration used by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMaintenanceConfiguration(
      options?: any
    ): AxiosPromise<MaintenanceConfigurationResource> {
      return localVarFp
        .updateMaintenanceConfiguration(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * MaintenanceConfigurationApi - interface
 * @export
 * @interface MaintenanceConfigurationApi
 */
export interface MaintenanceConfigurationApiInterface {
  /**
   * Gets information about the maintenance configuration in use by the Octopus Server.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MaintenanceConfigurationApiInterface
   */
  getMaintenanceConfiguration(
    options?: any
  ): AxiosPromise<MaintenanceConfigurationResource>;

  /**
   * Updates the maintenance configuration used by the Octopus Server.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MaintenanceConfigurationApiInterface
   */
  updateMaintenanceConfiguration(
    options?: any
  ): AxiosPromise<MaintenanceConfigurationResource>;
}

/**
 * MaintenanceConfigurationApi - object-oriented interface
 * @export
 * @class MaintenanceConfigurationApi
 * @extends {BaseAPI}
 */
export class MaintenanceConfigurationApi
  extends BaseAPI
  implements MaintenanceConfigurationApiInterface {
  /**
   * Gets information about the maintenance configuration in use by the Octopus Server.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MaintenanceConfigurationApi
   */
  public getMaintenanceConfiguration(options?: any) {
    return MaintenanceConfigurationApiFp(this.configuration)
      .getMaintenanceConfiguration(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates the maintenance configuration used by the Octopus Server.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MaintenanceConfigurationApi
   */
  public updateMaintenanceConfiguration(options?: any) {
    return MaintenanceConfigurationApiFp(this.configuration)
      .updateMaintenanceConfiguration(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
