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
import { ExtensionsInfoResource } from "../model";
// @ts-ignore
import { ServerStatusHealthResource } from "../model";
// @ts-ignore
import { ServerTimezoneResource } from "../model";
/**
 * ServerStatusApi - axios parameter creator
 * @export
 */
export const ServerStatusApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Forces a GC collect.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSystemGarbageCollect: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/serverstatus/gc-collect`;
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
     * Provides statistics for the loaded server extensions.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExtensionStats: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/serverstatus/extensions`;
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
     * Lists timezones supported by the server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListServerTimezones: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/serverstatus/timezones`;
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
     * Retrieves the most recent high-priority log messages from this execution of the Octopus Server process.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecentLogs: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/serverstatus/logs`;
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
     * Shows information about the status of the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getServerStatus: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/serverstatus`;
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
     * Provides a super simple interface perfect for checking the general health of your entire Octopus Server cluster.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getServerStatusHealth: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/serverstatus/health`;
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
     * Provides information about the Octopus Server process and the machine on which it is running.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSystemInfo: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/serverstatus/system-info`;
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
     * Creates a .zip archive containing an aggregate of the other system information APIs.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSystemReport: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/serverstatus/system-report`;
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
 * ServerStatusApi - functional programming interface
 * @export
 */
export const ServerStatusApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ServerStatusApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Forces a GC collect.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSystemGarbageCollect(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createSystemGarbageCollect(
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
     * Provides statistics for the loaded server extensions.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getExtensionStats(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<ExtensionsInfoResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getExtensionStats(
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
     * Lists timezones supported by the server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListServerTimezones(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<ServerTimezoneResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getListServerTimezones(
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
     * Retrieves the most recent high-priority log messages from this execution of the Octopus Server process.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRecentLogs(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getRecentLogs(
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
     * Shows information about the status of the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getServerStatus(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getServerStatus(
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
     * Provides a super simple interface perfect for checking the general health of your entire Octopus Server cluster.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getServerStatusHealth(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ServerStatusHealthResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getServerStatusHealth(
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
     * Provides information about the Octopus Server process and the machine on which it is running.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSystemInfo(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSystemInfo(
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
     * Creates a .zip archive containing an aggregate of the other system information APIs.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSystemReport(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSystemReport(
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
 * ServerStatusApi - factory interface
 * @export
 */
export const ServerStatusApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ServerStatusApiFp(configuration);
  return {
    /**
     * Forces a GC collect.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSystemGarbageCollect(options?: any): AxiosPromise<void> {
      return localVarFp
        .createSystemGarbageCollect(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Provides statistics for the loaded server extensions.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExtensionStats(
      options?: any
    ): AxiosPromise<Array<ExtensionsInfoResource>> {
      return localVarFp
        .getExtensionStats(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists timezones supported by the server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListServerTimezones(
      options?: any
    ): AxiosPromise<Array<ServerTimezoneResource>> {
      return localVarFp
        .getListServerTimezones(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Retrieves the most recent high-priority log messages from this execution of the Octopus Server process.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecentLogs(options?: any): AxiosPromise<void> {
      return localVarFp
        .getRecentLogs(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Shows information about the status of the Octopus Server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getServerStatus(options?: any): AxiosPromise<void> {
      return localVarFp
        .getServerStatus(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Provides a super simple interface perfect for checking the general health of your entire Octopus Server cluster.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getServerStatusHealth(
      options?: any
    ): AxiosPromise<ServerStatusHealthResource> {
      return localVarFp
        .getServerStatusHealth(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Provides information about the Octopus Server process and the machine on which it is running.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSystemInfo(options?: any): AxiosPromise<void> {
      return localVarFp
        .getSystemInfo(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a .zip archive containing an aggregate of the other system information APIs.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSystemReport(options?: any): AxiosPromise<void> {
      return localVarFp
        .getSystemReport(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ServerStatusApi - interface
 * @export
 * @interface ServerStatusApi
 */
export interface ServerStatusApiInterface {
  /**
   * Forces a GC collect.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerStatusApiInterface
   */
  createSystemGarbageCollect(options?: any): AxiosPromise<void>;

  /**
   * Provides statistics for the loaded server extensions.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerStatusApiInterface
   */
  getExtensionStats(options?: any): AxiosPromise<Array<ExtensionsInfoResource>>;

  /**
   * Lists timezones supported by the server.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerStatusApiInterface
   */
  getListServerTimezones(
    options?: any
  ): AxiosPromise<Array<ServerTimezoneResource>>;

  /**
   * Retrieves the most recent high-priority log messages from this execution of the Octopus Server process.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerStatusApiInterface
   */
  getRecentLogs(options?: any): AxiosPromise<void>;

  /**
   * Shows information about the status of the Octopus Server.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerStatusApiInterface
   */
  getServerStatus(options?: any): AxiosPromise<void>;

  /**
   * Provides a super simple interface perfect for checking the general health of your entire Octopus Server cluster.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerStatusApiInterface
   */
  getServerStatusHealth(
    options?: any
  ): AxiosPromise<ServerStatusHealthResource>;

  /**
   * Provides information about the Octopus Server process and the machine on which it is running.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerStatusApiInterface
   */
  getSystemInfo(options?: any): AxiosPromise<void>;

  /**
   * Creates a .zip archive containing an aggregate of the other system information APIs.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerStatusApiInterface
   */
  getSystemReport(options?: any): AxiosPromise<void>;
}

/**
 * ServerStatusApi - object-oriented interface
 * @export
 * @class ServerStatusApi
 * @extends {BaseAPI}
 */
export class ServerStatusApi
  extends BaseAPI
  implements ServerStatusApiInterface {
  /**
   * Forces a GC collect.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerStatusApi
   */
  public createSystemGarbageCollect(options?: any) {
    return ServerStatusApiFp(this.configuration)
      .createSystemGarbageCollect(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Provides statistics for the loaded server extensions.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerStatusApi
   */
  public getExtensionStats(options?: any) {
    return ServerStatusApiFp(this.configuration)
      .getExtensionStats(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists timezones supported by the server.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerStatusApi
   */
  public getListServerTimezones(options?: any) {
    return ServerStatusApiFp(this.configuration)
      .getListServerTimezones(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Retrieves the most recent high-priority log messages from this execution of the Octopus Server process.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerStatusApi
   */
  public getRecentLogs(options?: any) {
    return ServerStatusApiFp(this.configuration)
      .getRecentLogs(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Shows information about the status of the Octopus Server.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerStatusApi
   */
  public getServerStatus(options?: any) {
    return ServerStatusApiFp(this.configuration)
      .getServerStatus(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Provides a super simple interface perfect for checking the general health of your entire Octopus Server cluster.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerStatusApi
   */
  public getServerStatusHealth(options?: any) {
    return ServerStatusApiFp(this.configuration)
      .getServerStatusHealth(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Provides information about the Octopus Server process and the machine on which it is running.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerStatusApi
   */
  public getSystemInfo(options?: any) {
    return ServerStatusApiFp(this.configuration)
      .getSystemInfo(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a .zip archive containing an aggregate of the other system information APIs.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServerStatusApi
   */
  public getSystemReport(options?: any) {
    return ServerStatusApiFp(this.configuration)
      .getSystemReport(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
