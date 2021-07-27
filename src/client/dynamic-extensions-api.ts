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
import { DynamicExtensionsFeaturesMetadataResource } from "../model";
// @ts-ignore
import { DynamicExtensionsFeaturesValuesResource } from "../model";
/**
 * DynamicExtensionsApi - axios parameter creator
 * @export
 */
export const DynamicExtensionsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Retrieves the current dynamic extensions feature metadata.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDynamicExtensionsFeaturesMetadata: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/dynamic-extensions/features/metadata`;
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
     * Retrieves the current dynamic extensions feature values.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDynamicExtensionsFeaturesValues: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/dynamic-extensions/features/values`;
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
     * Modifies the current dynamic extensions feature values.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDynamicExtensionsFeaturesValues: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/dynamic-extensions/features/values`;
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
 * DynamicExtensionsApi - functional programming interface
 * @export
 */
export const DynamicExtensionsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    DynamicExtensionsApiAxiosParamCreator(configuration);
  return {
    /**
     * Retrieves the current dynamic extensions feature metadata.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDynamicExtensionsFeaturesMetadata(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DynamicExtensionsFeaturesMetadataResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDynamicExtensionsFeaturesMetadata(
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
     * Retrieves the current dynamic extensions feature values.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDynamicExtensionsFeaturesValues(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DynamicExtensionsFeaturesValuesResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDynamicExtensionsFeaturesValues(
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
     * Modifies the current dynamic extensions feature values.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDynamicExtensionsFeaturesValues(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DynamicExtensionsFeaturesValuesResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateDynamicExtensionsFeaturesValues(
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
 * DynamicExtensionsApi - factory interface
 * @export
 */
export const DynamicExtensionsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = DynamicExtensionsApiFp(configuration);
  return {
    /**
     * Retrieves the current dynamic extensions feature metadata.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDynamicExtensionsFeaturesMetadata(
      options?: any
    ): AxiosPromise<DynamicExtensionsFeaturesMetadataResource> {
      return localVarFp
        .getDynamicExtensionsFeaturesMetadata(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Retrieves the current dynamic extensions feature values.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDynamicExtensionsFeaturesValues(
      options?: any
    ): AxiosPromise<DynamicExtensionsFeaturesValuesResource> {
      return localVarFp
        .getDynamicExtensionsFeaturesValues(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies the current dynamic extensions feature values.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDynamicExtensionsFeaturesValues(
      options?: any
    ): AxiosPromise<DynamicExtensionsFeaturesValuesResource> {
      return localVarFp
        .updateDynamicExtensionsFeaturesValues(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * DynamicExtensionsApi - interface
 * @export
 * @interface DynamicExtensionsApi
 */
export interface DynamicExtensionsApiInterface {
  /**
   * Retrieves the current dynamic extensions feature metadata.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DynamicExtensionsApiInterface
   */
  getDynamicExtensionsFeaturesMetadata(
    options?: any
  ): AxiosPromise<DynamicExtensionsFeaturesMetadataResource>;

  /**
   * Retrieves the current dynamic extensions feature values.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DynamicExtensionsApiInterface
   */
  getDynamicExtensionsFeaturesValues(
    options?: any
  ): AxiosPromise<DynamicExtensionsFeaturesValuesResource>;

  /**
   * Modifies the current dynamic extensions feature values.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DynamicExtensionsApiInterface
   */
  updateDynamicExtensionsFeaturesValues(
    options?: any
  ): AxiosPromise<DynamicExtensionsFeaturesValuesResource>;
}

/**
 * DynamicExtensionsApi - object-oriented interface
 * @export
 * @class DynamicExtensionsApi
 * @extends {BaseAPI}
 */
export class DynamicExtensionsApi
  extends BaseAPI
  implements DynamicExtensionsApiInterface
{
  /**
   * Retrieves the current dynamic extensions feature metadata.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DynamicExtensionsApi
   */
  public getDynamicExtensionsFeaturesMetadata(options?: any) {
    return DynamicExtensionsApiFp(this.configuration)
      .getDynamicExtensionsFeaturesMetadata(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Retrieves the current dynamic extensions feature values.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DynamicExtensionsApi
   */
  public getDynamicExtensionsFeaturesValues(options?: any) {
    return DynamicExtensionsApiFp(this.configuration)
      .getDynamicExtensionsFeaturesValues(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies the current dynamic extensions feature values.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DynamicExtensionsApi
   */
  public updateDynamicExtensionsFeaturesValues(options?: any) {
    return DynamicExtensionsApiFp(this.configuration)
      .updateDynamicExtensionsFeaturesValues(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
