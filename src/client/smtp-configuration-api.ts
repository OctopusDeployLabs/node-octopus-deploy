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
import { SmtpIsConfiguredResource } from "../model";
/**
 * SmtpConfigurationApi - axios parameter creator
 * @export
 */
export const SmtpConfigurationApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Gets information about the SMTP (email) settings in use by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSmtpConfiguration: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/smtpconfiguration`;
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
     * A low privilege check to determine if SMTP is configured
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSmtpIsConfigured: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/smtpconfiguration/isconfigured`;
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
     * Updates the SMTP settings used by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSmtpConfiguration: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/smtpconfiguration`;
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
 * SmtpConfigurationApi - functional programming interface
 * @export
 */
export const SmtpConfigurationApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = SmtpConfigurationApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Gets information about the SMTP (email) settings in use by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSmtpConfiguration(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSmtpConfiguration(
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
     * A low privilege check to determine if SMTP is configured
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSmtpIsConfigured(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<SmtpIsConfiguredResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSmtpIsConfigured(
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
     * Updates the SMTP settings used by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSmtpConfiguration(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateSmtpConfiguration(
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
 * SmtpConfigurationApi - factory interface
 * @export
 */
export const SmtpConfigurationApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = SmtpConfigurationApiFp(configuration);
  return {
    /**
     * Gets information about the SMTP (email) settings in use by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSmtpConfiguration(options?: any): AxiosPromise<void> {
      return localVarFp
        .getSmtpConfiguration(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * A low privilege check to determine if SMTP is configured
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSmtpIsConfigured(options?: any): AxiosPromise<SmtpIsConfiguredResource> {
      return localVarFp
        .getSmtpIsConfigured(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates the SMTP settings used by the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSmtpConfiguration(options?: any): AxiosPromise<void> {
      return localVarFp
        .updateSmtpConfiguration(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * SmtpConfigurationApi - interface
 * @export
 * @interface SmtpConfigurationApi
 */
export interface SmtpConfigurationApiInterface {
  /**
   * Gets information about the SMTP (email) settings in use by the Octopus Server.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SmtpConfigurationApiInterface
   */
  getSmtpConfiguration(options?: any): AxiosPromise<void>;

  /**
   * A low privilege check to determine if SMTP is configured
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SmtpConfigurationApiInterface
   */
  getSmtpIsConfigured(options?: any): AxiosPromise<SmtpIsConfiguredResource>;

  /**
   * Updates the SMTP settings used by the Octopus Server.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SmtpConfigurationApiInterface
   */
  updateSmtpConfiguration(options?: any): AxiosPromise<void>;
}

/**
 * SmtpConfigurationApi - object-oriented interface
 * @export
 * @class SmtpConfigurationApi
 * @extends {BaseAPI}
 */
export class SmtpConfigurationApi
  extends BaseAPI
  implements SmtpConfigurationApiInterface {
  /**
   * Gets information about the SMTP (email) settings in use by the Octopus Server.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SmtpConfigurationApi
   */
  public getSmtpConfiguration(options?: any) {
    return SmtpConfigurationApiFp(this.configuration)
      .getSmtpConfiguration(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * A low privilege check to determine if SMTP is configured
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SmtpConfigurationApi
   */
  public getSmtpIsConfigured(options?: any) {
    return SmtpConfigurationApiFp(this.configuration)
      .getSmtpIsConfigured(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates the SMTP settings used by the Octopus Server.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SmtpConfigurationApi
   */
  public updateSmtpConfiguration(options?: any) {
    return SmtpConfigurationApiFp(this.configuration)
      .updateSmtpConfiguration(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
