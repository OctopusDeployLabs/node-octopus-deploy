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
import { ScheduledTaskDetailsResource } from "../model";
// @ts-ignore
import { SchedulerStatusResource } from "../model";
/**
 * SchedulerApi - axios parameter creator
 * @export
 */
export const SchedulerApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Get the details of a scheduled task.
     * @param {string} name Name of the task
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getScheduledTaskDetails: async (
      name: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("getScheduledTaskDetails", "name", name);
      const localVarPath = `/scheduler/{name}/logs`.replace(
        `{${"name"}}`,
        encodeURIComponent(String(name))
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
     * Get the details of a scheduled task as raw text.
     * @param {string} name Name of the scheduled task
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getScheduledTaskRawDetails: async (
      name: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("getScheduledTaskRawDetails", "name", name);
      const localVarPath = `/scheduler/{name}/logs/raw`.replace(
        `{${"name"}}`,
        encodeURIComponent(String(name))
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
     * Returns status of Octopus scheduled tasks.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getScheduler: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/scheduler`;
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
     * Returns HTTP OK (200) when the Octopus Server scheduler has been started.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSchedulerStart: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/scheduler/start`;
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
     * Returns HTTP OK (200) when the Octopus Server scheduler has been stopped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSchedulerStop: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/scheduler/stop`;
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
     * Returns HTTP OK (200) when the Octopus Server scheduler has been triggered.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSchedulerTrigger: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/scheduler/trigger`;
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
 * SchedulerApi - functional programming interface
 * @export
 */
export const SchedulerApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    SchedulerApiAxiosParamCreator(configuration);
  return {
    /**
     * Get the details of a scheduled task.
     * @param {string} name Name of the task
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getScheduledTaskDetails(
      name: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ScheduledTaskDetailsResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getScheduledTaskDetails(name, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Get the details of a scheduled task as raw text.
     * @param {string} name Name of the scheduled task
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getScheduledTaskRawDetails(
      name: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getScheduledTaskRawDetails(
          name,
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
     * Returns status of Octopus scheduled tasks.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getScheduler(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<SchedulerStatusResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getScheduler(
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
     * Returns HTTP OK (200) when the Octopus Server scheduler has been started.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSchedulerStart(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getSchedulerStart(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Returns HTTP OK (200) when the Octopus Server scheduler has been stopped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSchedulerStop(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getSchedulerStop(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Returns HTTP OK (200) when the Octopus Server scheduler has been triggered.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSchedulerTrigger(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getSchedulerTrigger(options);
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
 * SchedulerApi - factory interface
 * @export
 */
export const SchedulerApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = SchedulerApiFp(configuration);
  return {
    /**
     * Get the details of a scheduled task.
     * @param {string} name Name of the task
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getScheduledTaskDetails(
      name: string,
      options?: any
    ): AxiosPromise<ScheduledTaskDetailsResource> {
      return localVarFp
        .getScheduledTaskDetails(name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get the details of a scheduled task as raw text.
     * @param {string} name Name of the scheduled task
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getScheduledTaskRawDetails(
      name: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .getScheduledTaskRawDetails(name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns status of Octopus scheduled tasks.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getScheduler(options?: any): AxiosPromise<SchedulerStatusResource> {
      return localVarFp
        .getScheduler(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns HTTP OK (200) when the Octopus Server scheduler has been started.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSchedulerStart(options?: any): AxiosPromise<void> {
      return localVarFp
        .getSchedulerStart(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns HTTP OK (200) when the Octopus Server scheduler has been stopped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSchedulerStop(options?: any): AxiosPromise<void> {
      return localVarFp
        .getSchedulerStop(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns HTTP OK (200) when the Octopus Server scheduler has been triggered.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSchedulerTrigger(options?: any): AxiosPromise<void> {
      return localVarFp
        .getSchedulerTrigger(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * SchedulerApi - interface
 * @export
 * @interface SchedulerApi
 */
export interface SchedulerApiInterface {
  /**
   * Get the details of a scheduled task.
   * @param {string} name Name of the task
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchedulerApiInterface
   */
  getScheduledTaskDetails(
    name: string,
    options?: any
  ): AxiosPromise<ScheduledTaskDetailsResource>;

  /**
   * Get the details of a scheduled task as raw text.
   * @param {string} name Name of the scheduled task
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchedulerApiInterface
   */
  getScheduledTaskRawDetails(name: string, options?: any): AxiosPromise<void>;

  /**
   * Returns status of Octopus scheduled tasks.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchedulerApiInterface
   */
  getScheduler(options?: any): AxiosPromise<SchedulerStatusResource>;

  /**
   * Returns HTTP OK (200) when the Octopus Server scheduler has been started.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchedulerApiInterface
   */
  getSchedulerStart(options?: any): AxiosPromise<void>;

  /**
   * Returns HTTP OK (200) when the Octopus Server scheduler has been stopped.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchedulerApiInterface
   */
  getSchedulerStop(options?: any): AxiosPromise<void>;

  /**
   * Returns HTTP OK (200) when the Octopus Server scheduler has been triggered.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchedulerApiInterface
   */
  getSchedulerTrigger(options?: any): AxiosPromise<void>;
}

/**
 * SchedulerApi - object-oriented interface
 * @export
 * @class SchedulerApi
 * @extends {BaseAPI}
 */
export class SchedulerApi extends BaseAPI implements SchedulerApiInterface {
  /**
   * Get the details of a scheduled task.
   * @param {string} name Name of the task
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchedulerApi
   */
  public getScheduledTaskDetails(name: string, options?: any) {
    return SchedulerApiFp(this.configuration)
      .getScheduledTaskDetails(name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get the details of a scheduled task as raw text.
   * @param {string} name Name of the scheduled task
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchedulerApi
   */
  public getScheduledTaskRawDetails(name: string, options?: any) {
    return SchedulerApiFp(this.configuration)
      .getScheduledTaskRawDetails(name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns status of Octopus scheduled tasks.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchedulerApi
   */
  public getScheduler(options?: any) {
    return SchedulerApiFp(this.configuration)
      .getScheduler(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns HTTP OK (200) when the Octopus Server scheduler has been started.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchedulerApi
   */
  public getSchedulerStart(options?: any) {
    return SchedulerApiFp(this.configuration)
      .getSchedulerStart(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns HTTP OK (200) when the Octopus Server scheduler has been stopped.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchedulerApi
   */
  public getSchedulerStop(options?: any) {
    return SchedulerApiFp(this.configuration)
      .getSchedulerStop(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns HTTP OK (200) when the Octopus Server scheduler has been triggered.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchedulerApi
   */
  public getSchedulerTrigger(options?: any) {
    return SchedulerApiFp(this.configuration)
      .getSchedulerTrigger(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
