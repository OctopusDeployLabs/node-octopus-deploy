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
import { DashboardConfigurationResource } from "../model";
/**
 * DashboardConfigurationsApi - axios parameter creator
 * @export
 */
export const DashboardConfigurationsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Returns the dashboard configuration for the current user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDashboardConfiguration: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/dashboardconfiguration`;
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
     * Returns the dashboard configuration for the current user
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDashboardConfigurationSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getDashboardConfigurationSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/dashboardconfiguration`.replace(
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
    /**
     * Updates the dashboard configuration for the current user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDashboardConfiguration: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/dashboardconfiguration`;
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
     * Updates the dashboard configuration for the current user
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDashboardConfigurationSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "updateDashboardConfigurationSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/dashboardconfiguration`.replace(
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
 * DashboardConfigurationsApi - functional programming interface
 * @export
 */
export const DashboardConfigurationsApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    DashboardConfigurationsApiAxiosParamCreator(configuration);
  return {
    /**
     * Returns the dashboard configuration for the current user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDashboardConfiguration(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DashboardConfigurationResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDashboardConfiguration(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Returns the dashboard configuration for the current user
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDashboardConfigurationSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DashboardConfigurationResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDashboardConfigurationSpaces(
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
    /**
     * Updates the dashboard configuration for the current user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDashboardConfiguration(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DashboardConfigurationResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateDashboardConfiguration(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Updates the dashboard configuration for the current user
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDashboardConfigurationSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DashboardConfigurationResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateDashboardConfigurationSpaces(
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
 * DashboardConfigurationsApi - factory interface
 * @export
 */
export const DashboardConfigurationsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = DashboardConfigurationsApiFp(configuration);
  return {
    /**
     * Returns the dashboard configuration for the current user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDashboardConfiguration(
      options?: any
    ): AxiosPromise<DashboardConfigurationResource> {
      return localVarFp
        .getDashboardConfiguration(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns the dashboard configuration for the current user
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDashboardConfigurationSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<DashboardConfigurationResource> {
      return localVarFp
        .getDashboardConfigurationSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates the dashboard configuration for the current user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDashboardConfiguration(
      options?: any
    ): AxiosPromise<DashboardConfigurationResource> {
      return localVarFp
        .updateDashboardConfiguration(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates the dashboard configuration for the current user
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDashboardConfigurationSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<DashboardConfigurationResource> {
      return localVarFp
        .updateDashboardConfigurationSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * DashboardConfigurationsApi - object-oriented interface
 * @export
 * @class DashboardConfigurationsApi
 * @extends {BaseAPI}
 */
export class DashboardConfigurationsApi extends BaseAPI {
  /**
   * Returns the dashboard configuration for the current user
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DashboardConfigurationsApi
   */
  public getDashboardConfiguration(options?: any) {
    return DashboardConfigurationsApiFp(this.configuration)
      .getDashboardConfiguration(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns the dashboard configuration for the current user
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DashboardConfigurationsApi
   */
  public getDashboardConfigurationSpaces(baseSpaceId: string, options?: any) {
    return DashboardConfigurationsApiFp(this.configuration)
      .getDashboardConfigurationSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates the dashboard configuration for the current user
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DashboardConfigurationsApi
   */
  public updateDashboardConfiguration(options?: any) {
    return DashboardConfigurationsApiFp(this.configuration)
      .updateDashboardConfiguration(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates the dashboard configuration for the current user
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DashboardConfigurationsApi
   */
  public updateDashboardConfigurationSpaces(
    baseSpaceId: string,
    options?: any
  ) {
    return DashboardConfigurationsApiFp(this.configuration)
      .updateDashboardConfigurationSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
