/* tslint:disable */
/* eslint-disable */
// Octopus REST API v2021.2.1290

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
import { ConnectivityCheckResponse } from "../model";
/**
 * AzureDevOpsApi - axios parameter creator
 * @export
 */
export const AzureDevOpsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAzureDevOpsConnectivityCheck: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/azuredevopsissuetracker/connectivitycheck`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
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
 * AzureDevOpsApi - functional programming interface
 * @export
 */
export const AzureDevOpsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AzureDevOpsApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createAzureDevOpsConnectivityCheck(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ConnectivityCheckResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createAzureDevOpsConnectivityCheck(
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
 * AzureDevOpsApi - factory interface
 * @export
 */
export const AzureDevOpsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = AzureDevOpsApiFp(configuration);
  return {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAzureDevOpsConnectivityCheck(
      options?: any
    ): AxiosPromise<ConnectivityCheckResponse> {
      return localVarFp
        .createAzureDevOpsConnectivityCheck(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * AzureDevOpsApi - interface
 * @export
 * @interface AzureDevOpsApi
 */
export interface AzureDevOpsApiInterface {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AzureDevOpsApiInterface
   */
  createAzureDevOpsConnectivityCheck(
    options?: any
  ): AxiosPromise<ConnectivityCheckResponse>;
}

/**
 * AzureDevOpsApi - object-oriented interface
 * @export
 * @class AzureDevOpsApi
 * @extends {BaseAPI}
 */
export class AzureDevOpsApi extends BaseAPI implements AzureDevOpsApiInterface {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AzureDevOpsApi
   */
  public createAzureDevOpsConnectivityCheck(options?: any) {
    return AzureDevOpsApiFp(this.configuration)
      .createAzureDevOpsConnectivityCheck(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
