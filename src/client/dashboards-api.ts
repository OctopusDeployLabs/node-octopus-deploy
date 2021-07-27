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
import { DashboardResource } from "../model";
/**
 * DashboardsApi - axios parameter creator
 * @export
 */
export const DashboardsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Returns information required to render the Octopus dashboard
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDashboardView: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/dashboard`;
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
     * Returns information required to render the Octopus dashboard
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDashboardViewSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getDashboardViewSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/dashboard`.replace(
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
     * Returns the information required to render the dynamic dashboard. Deprecated.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDynamicDashboardView: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/dashboard/dynamic`;
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
     * Returns the information required to render the dynamic dashboard. Deprecated.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDynamicDashboardViewSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getDynamicDashboardViewSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/dashboard/dynamic`.replace(
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
 * DashboardsApi - functional programming interface
 * @export
 */
export const DashboardsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    DashboardsApiAxiosParamCreator(configuration);
  return {
    /**
     * Returns information required to render the Octopus dashboard
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDashboardView(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DashboardResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDashboardView(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Returns information required to render the Octopus dashboard
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDashboardViewSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DashboardResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDashboardViewSpaces(
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
     * Returns the information required to render the dynamic dashboard. Deprecated.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDynamicDashboardView(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DashboardResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDynamicDashboardView(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Returns the information required to render the dynamic dashboard. Deprecated.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDynamicDashboardViewSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DashboardResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDynamicDashboardViewSpaces(
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
 * DashboardsApi - factory interface
 * @export
 */
export const DashboardsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = DashboardsApiFp(configuration);
  return {
    /**
     * Returns information required to render the Octopus dashboard
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDashboardView(options?: any): AxiosPromise<DashboardResource> {
      return localVarFp
        .getDashboardView(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns information required to render the Octopus dashboard
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDashboardViewSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<DashboardResource> {
      return localVarFp
        .getDashboardViewSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns the information required to render the dynamic dashboard. Deprecated.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDynamicDashboardView(options?: any): AxiosPromise<DashboardResource> {
      return localVarFp
        .getDynamicDashboardView(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns the information required to render the dynamic dashboard. Deprecated.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDynamicDashboardViewSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<DashboardResource> {
      return localVarFp
        .getDynamicDashboardViewSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * DashboardsApi - interface
 * @export
 * @interface DashboardsApi
 */
export interface DashboardsApiInterface {
  /**
   * Returns information required to render the Octopus dashboard
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DashboardsApiInterface
   */
  getDashboardView(options?: any): AxiosPromise<DashboardResource>;

  /**
   * Returns information required to render the Octopus dashboard
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DashboardsApiInterface
   */
  getDashboardViewSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<DashboardResource>;

  /**
   * Returns the information required to render the dynamic dashboard. Deprecated.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DashboardsApiInterface
   */
  getDynamicDashboardView(options?: any): AxiosPromise<DashboardResource>;

  /**
   * Returns the information required to render the dynamic dashboard. Deprecated.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DashboardsApiInterface
   */
  getDynamicDashboardViewSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<DashboardResource>;
}

/**
 * DashboardsApi - object-oriented interface
 * @export
 * @class DashboardsApi
 * @extends {BaseAPI}
 */
export class DashboardsApi extends BaseAPI implements DashboardsApiInterface {
  /**
   * Returns information required to render the Octopus dashboard
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DashboardsApi
   */
  public getDashboardView(options?: any) {
    return DashboardsApiFp(this.configuration)
      .getDashboardView(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns information required to render the Octopus dashboard
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DashboardsApi
   */
  public getDashboardViewSpaces(baseSpaceId: string, options?: any) {
    return DashboardsApiFp(this.configuration)
      .getDashboardViewSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns the information required to render the dynamic dashboard. Deprecated.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DashboardsApi
   */
  public getDynamicDashboardView(options?: any) {
    return DashboardsApiFp(this.configuration)
      .getDynamicDashboardView(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns the information required to render the dynamic dashboard. Deprecated.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DashboardsApi
   */
  public getDynamicDashboardViewSpaces(baseSpaceId: string, options?: any) {
    return DashboardsApiFp(this.configuration)
      .getDynamicDashboardViewSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
