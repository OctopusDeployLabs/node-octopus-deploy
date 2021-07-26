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
import { LicenseResource } from "../model";
// @ts-ignore
import { LicenseStatusResource } from "../model";
/**
 * LicensesApi - axios parameter creator
 * @export
 */
export const LicensesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Returns the details of the current license in use by the Octopus Cluster.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLicenseGetCurrent: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/licenses/licenses-current`;
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
     * Calculates the status of the current Octopus license including compliance and maintenance expiry.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLicenseStatusGetCurrent: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/licenses/licenses-current-status`;
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
     * Updates the license for the Octopus cluster.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLicensePutCurrent: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/licenses/licenses-current`;
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
 * LicensesApi - functional programming interface
 * @export
 */
export const LicensesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = LicensesApiAxiosParamCreator(configuration);
  return {
    /**
     * Returns the details of the current license in use by the Octopus Cluster.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLicenseGetCurrent(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LicenseResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getLicenseGetCurrent(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Calculates the status of the current Octopus license including compliance and maintenance expiry.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLicenseStatusGetCurrent(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LicenseStatusResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getLicenseStatusGetCurrent(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Updates the license for the Octopus cluster.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateLicensePutCurrent(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LicenseResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateLicensePutCurrent(options);
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
 * LicensesApi - factory interface
 * @export
 */
export const LicensesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = LicensesApiFp(configuration);
  return {
    /**
     * Returns the details of the current license in use by the Octopus Cluster.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLicenseGetCurrent(options?: any): AxiosPromise<LicenseResource> {
      return localVarFp
        .getLicenseGetCurrent(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Calculates the status of the current Octopus license including compliance and maintenance expiry.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLicenseStatusGetCurrent(
      options?: any
    ): AxiosPromise<LicenseStatusResource> {
      return localVarFp
        .getLicenseStatusGetCurrent(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates the license for the Octopus cluster.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLicensePutCurrent(options?: any): AxiosPromise<LicenseResource> {
      return localVarFp
        .updateLicensePutCurrent(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * LicensesApi - object-oriented interface
 * @export
 * @class LicensesApi
 * @extends {BaseAPI}
 */
export class LicensesApi extends BaseAPI {
  /**
   * Returns the details of the current license in use by the Octopus Cluster.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LicensesApi
   */
  public getLicenseGetCurrent(options?: any) {
    return LicensesApiFp(this.configuration)
      .getLicenseGetCurrent(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Calculates the status of the current Octopus license including compliance and maintenance expiry.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LicensesApi
   */
  public getLicenseStatusGetCurrent(options?: any) {
    return LicensesApiFp(this.configuration)
      .getLicenseStatusGetCurrent(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates the license for the Octopus cluster.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LicensesApi
   */
  public updateLicensePutCurrent(options?: any) {
    return LicensesApiFp(this.configuration)
      .updateLicensePutCurrent(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
