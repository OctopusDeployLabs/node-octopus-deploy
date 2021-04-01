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
 * JiraIntegrationApi - axios parameter creator
 * @export
 */
export const JiraIntegrationApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createJiraConnectAppConnectivityCheck: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/jiraintegration/connectivitycheck/connectapp`;
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
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createJiraCredentialsConnectivityCheck: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/jiraintegration/connectivitycheck/jira`;
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
 * JiraIntegrationApi - functional programming interface
 * @export
 */
export const JiraIntegrationApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = JiraIntegrationApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createJiraConnectAppConnectivityCheck(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ConnectivityCheckResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createJiraConnectAppConnectivityCheck(
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
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createJiraCredentialsConnectivityCheck(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ConnectivityCheckResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createJiraCredentialsConnectivityCheck(
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
 * JiraIntegrationApi - factory interface
 * @export
 */
export const JiraIntegrationApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = JiraIntegrationApiFp(configuration);
  return {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createJiraConnectAppConnectivityCheck(
      options?: any
    ): AxiosPromise<ConnectivityCheckResponse> {
      return localVarFp
        .createJiraConnectAppConnectivityCheck(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createJiraCredentialsConnectivityCheck(
      options?: any
    ): AxiosPromise<ConnectivityCheckResponse> {
      return localVarFp
        .createJiraCredentialsConnectivityCheck(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * JiraIntegrationApi - interface
 * @export
 * @interface JiraIntegrationApi
 */
export interface JiraIntegrationApiInterface {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof JiraIntegrationApiInterface
   */
  createJiraConnectAppConnectivityCheck(
    options?: any
  ): AxiosPromise<ConnectivityCheckResponse>;

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof JiraIntegrationApiInterface
   */
  createJiraCredentialsConnectivityCheck(
    options?: any
  ): AxiosPromise<ConnectivityCheckResponse>;
}

/**
 * JiraIntegrationApi - object-oriented interface
 * @export
 * @class JiraIntegrationApi
 * @extends {BaseAPI}
 */
export class JiraIntegrationApi
  extends BaseAPI
  implements JiraIntegrationApiInterface {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof JiraIntegrationApi
   */
  public createJiraConnectAppConnectivityCheck(options?: any) {
    return JiraIntegrationApiFp(this.configuration)
      .createJiraConnectAppConnectivityCheck(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof JiraIntegrationApi
   */
  public createJiraCredentialsConnectivityCheck(options?: any) {
    return JiraIntegrationApiFp(this.configuration)
      .createJiraCredentialsConnectivityCheck(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
