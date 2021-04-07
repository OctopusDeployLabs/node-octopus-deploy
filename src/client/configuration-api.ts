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
import { ConfigurationSectionMetadata } from "../model";
// @ts-ignore
import { ConfigurationSectionMetadataCollection } from "../model";
// @ts-ignore
import { Metadata } from "../model";
/**
 * ConfigurationApi - axios parameter creator
 * @export
 */
export const ConfigurationApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Returns a structure that describes how to dynamically render the configuration section
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getConfigurationItemMetadata: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getConfigurationItemMetadata", "id", id);
      const localVarPath = `/configuration/{id}/metadata`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
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
     * Returns the current configuration for a specific configuration section
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getConfigurationItemValues: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getConfigurationItemValues", "id", id);
      const localVarPath = `/configuration/{id}/values`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
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
     * Returns a list of configuration section settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getConfigurationSectionList: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/configuration`;
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
     * Returns a single configuration section for the given id
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getConfigurationSectionMetadata: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getConfigurationSectionMetadata", "id", id);
      const localVarPath = `/configuration/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
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
     * Updates the configuration values for a specific configuration section
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateConfigurationItem: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateConfigurationItem", "id", id);
      const localVarPath = `/configuration/{id}/values`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
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
 * ConfigurationApi - functional programming interface
 * @export
 */
export const ConfigurationApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ConfigurationApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Returns a structure that describes how to dynamically render the configuration section
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getConfigurationItemMetadata(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Metadata>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getConfigurationItemMetadata(
        id,
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
     * Returns the current configuration for a specific configuration section
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getConfigurationItemValues(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getConfigurationItemValues(
        id,
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
     * Returns a list of configuration section settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getConfigurationSectionList(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ConfigurationSectionMetadataCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getConfigurationSectionList(
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
     * Returns a single configuration section for the given id
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getConfigurationSectionMetadata(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ConfigurationSectionMetadata>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getConfigurationSectionMetadata(
        id,
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
     * Updates the configuration values for a specific configuration section
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateConfigurationItem(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateConfigurationItem(
        id,
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
 * ConfigurationApi - factory interface
 * @export
 */
export const ConfigurationApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ConfigurationApiFp(configuration);
  return {
    /**
     * Returns a structure that describes how to dynamically render the configuration section
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getConfigurationItemMetadata(
      id: string,
      options?: any
    ): AxiosPromise<Metadata> {
      return localVarFp
        .getConfigurationItemMetadata(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns the current configuration for a specific configuration section
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getConfigurationItemValues(
      id: string,
      options?: any
    ): AxiosPromise<object> {
      return localVarFp
        .getConfigurationItemValues(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns a list of configuration section settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getConfigurationSectionList(
      options?: any
    ): AxiosPromise<ConfigurationSectionMetadataCollection> {
      return localVarFp
        .getConfigurationSectionList(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns a single configuration section for the given id
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getConfigurationSectionMetadata(
      id: string,
      options?: any
    ): AxiosPromise<ConfigurationSectionMetadata> {
      return localVarFp
        .getConfigurationSectionMetadata(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates the configuration values for a specific configuration section
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateConfigurationItem(id: string, options?: any): AxiosPromise<object> {
      return localVarFp
        .updateConfigurationItem(id, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ConfigurationApi - interface
 * @export
 * @interface ConfigurationApi
 */
export interface ConfigurationApiInterface {
  /**
   * Returns a structure that describes how to dynamically render the configuration section
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigurationApiInterface
   */
  getConfigurationItemMetadata(
    id: string,
    options?: any
  ): AxiosPromise<Metadata>;

  /**
   * Returns the current configuration for a specific configuration section
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigurationApiInterface
   */
  getConfigurationItemValues(id: string, options?: any): AxiosPromise<object>;

  /**
   * Returns a list of configuration section settings
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigurationApiInterface
   */
  getConfigurationSectionList(
    options?: any
  ): AxiosPromise<ConfigurationSectionMetadataCollection>;

  /**
   * Returns a single configuration section for the given id
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigurationApiInterface
   */
  getConfigurationSectionMetadata(
    id: string,
    options?: any
  ): AxiosPromise<ConfigurationSectionMetadata>;

  /**
   * Updates the configuration values for a specific configuration section
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigurationApiInterface
   */
  updateConfigurationItem(id: string, options?: any): AxiosPromise<object>;
}

/**
 * ConfigurationApi - object-oriented interface
 * @export
 * @class ConfigurationApi
 * @extends {BaseAPI}
 */
export class ConfigurationApi
  extends BaseAPI
  implements ConfigurationApiInterface {
  /**
   * Returns a structure that describes how to dynamically render the configuration section
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigurationApi
   */
  public getConfigurationItemMetadata(id: string, options?: any) {
    return ConfigurationApiFp(this.configuration)
      .getConfigurationItemMetadata(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns the current configuration for a specific configuration section
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigurationApi
   */
  public getConfigurationItemValues(id: string, options?: any) {
    return ConfigurationApiFp(this.configuration)
      .getConfigurationItemValues(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns a list of configuration section settings
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigurationApi
   */
  public getConfigurationSectionList(options?: any) {
    return ConfigurationApiFp(this.configuration)
      .getConfigurationSectionList(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns a single configuration section for the given id
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigurationApi
   */
  public getConfigurationSectionMetadata(id: string, options?: any) {
    return ConfigurationApiFp(this.configuration)
      .getConfigurationSectionMetadata(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates the configuration values for a specific configuration section
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigurationApi
   */
  public updateConfigurationItem(id: string, options?: any) {
    return ConfigurationApiFp(this.configuration)
      .updateConfigurationItem(id, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
