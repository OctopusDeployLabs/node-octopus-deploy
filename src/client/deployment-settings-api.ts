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
import { DeploymentSettingsResource } from "../model";
/**
 * DeploymentSettingsApi - axios parameter creator
 * @export
 */
export const DeploymentSettingsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Gets deployment settings by ID.
     * @param {string} id ID of the DeploymentSettings to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentSettingsById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getDeploymentSettingsById", "id", id);
      const localVarPath = `/deploymentsettings/{id}`.replace(
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
     *
     * @summary Gets deployment settings by ID.
     * @param {string} id ID of the DeploymentSettings to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentSettingsByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getDeploymentSettingsByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getDeploymentSettingsByIdSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/deploymentsettings/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)));
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
     * Modifies deployment settings for a project.
     * @summary Modifies deployment settings
     * @param {string} id The ID of the deployment settings to update. Example &#x60;deploymentsettings-Projects-1&#x60;
     * @param {DeploymentSettingsResource} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDeploymentSettingsById: async (
      id: string,
      body: DeploymentSettingsResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateDeploymentSettingsById", "id", id);
      // verify required parameter 'body' is not null or undefined
      assertParamExists("updateDeploymentSettingsById", "body", body);
      const localVarPath = `/deploymentsettings/{id}`.replace(
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

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Modifies deployment settings for a project.
     * @summary Modifies deployment settings
     * @param {string} id The ID of the deployment settings to update. Example &#x60;deploymentsettings-Projects-1&#x60;
     * @param {string} baseSpaceId ID of the space
     * @param {DeploymentSettingsResource} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDeploymentSettingsByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      body: DeploymentSettingsResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateDeploymentSettingsByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "updateDeploymentSettingsByIdSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'body' is not null or undefined
      assertParamExists("updateDeploymentSettingsByIdSpaces", "body", body);
      const localVarPath = `/{baseSpaceId}/deploymentsettings/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)));
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

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * DeploymentSettingsApi - functional programming interface
 * @export
 */
export const DeploymentSettingsApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    DeploymentSettingsApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Gets deployment settings by ID.
     * @param {string} id ID of the DeploymentSettings to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentSettingsById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentSettingsResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDeploymentSettingsById(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Gets deployment settings by ID.
     * @param {string} id ID of the DeploymentSettings to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentSettingsByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentSettingsResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDeploymentSettingsByIdSpaces(
          id,
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
     * Modifies deployment settings for a project.
     * @summary Modifies deployment settings
     * @param {string} id The ID of the deployment settings to update. Example &#x60;deploymentsettings-Projects-1&#x60;
     * @param {DeploymentSettingsResource} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDeploymentSettingsById(
      id: string,
      body: DeploymentSettingsResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentSettingsResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateDeploymentSettingsById(
          id,
          body,
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
     * Modifies deployment settings for a project.
     * @summary Modifies deployment settings
     * @param {string} id The ID of the deployment settings to update. Example &#x60;deploymentsettings-Projects-1&#x60;
     * @param {string} baseSpaceId ID of the space
     * @param {DeploymentSettingsResource} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDeploymentSettingsByIdSpaces(
      id: string,
      baseSpaceId: string,
      body: DeploymentSettingsResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentSettingsResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateDeploymentSettingsByIdSpaces(
          id,
          baseSpaceId,
          body,
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
 * DeploymentSettingsApi - factory interface
 * @export
 */
export const DeploymentSettingsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = DeploymentSettingsApiFp(configuration);
  return {
    /**
     *
     * @summary Gets deployment settings by ID.
     * @param {string} id ID of the DeploymentSettings to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentSettingsById(
      id: string,
      options?: any
    ): AxiosPromise<DeploymentSettingsResource> {
      return localVarFp
        .getDeploymentSettingsById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Gets deployment settings by ID.
     * @param {string} id ID of the DeploymentSettings to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentSettingsByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<DeploymentSettingsResource> {
      return localVarFp
        .getDeploymentSettingsByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies deployment settings for a project.
     * @summary Modifies deployment settings
     * @param {string} id The ID of the deployment settings to update. Example &#x60;deploymentsettings-Projects-1&#x60;
     * @param {DeploymentSettingsResource} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDeploymentSettingsById(
      id: string,
      body: DeploymentSettingsResource,
      options?: any
    ): AxiosPromise<DeploymentSettingsResource> {
      return localVarFp
        .updateDeploymentSettingsById(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies deployment settings for a project.
     * @summary Modifies deployment settings
     * @param {string} id The ID of the deployment settings to update. Example &#x60;deploymentsettings-Projects-1&#x60;
     * @param {string} baseSpaceId ID of the space
     * @param {DeploymentSettingsResource} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDeploymentSettingsByIdSpaces(
      id: string,
      baseSpaceId: string,
      body: DeploymentSettingsResource,
      options?: any
    ): AxiosPromise<DeploymentSettingsResource> {
      return localVarFp
        .updateDeploymentSettingsByIdSpaces(id, baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * DeploymentSettingsApi - interface
 * @export
 * @interface DeploymentSettingsApi
 */
export interface DeploymentSettingsApiInterface {
  /**
   *
   * @summary Gets deployment settings by ID.
   * @param {string} id ID of the DeploymentSettings to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentSettingsApiInterface
   */
  getDeploymentSettingsById(
    id: string,
    options?: any
  ): AxiosPromise<DeploymentSettingsResource>;

  /**
   *
   * @summary Gets deployment settings by ID.
   * @param {string} id ID of the DeploymentSettings to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentSettingsApiInterface
   */
  getDeploymentSettingsByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<DeploymentSettingsResource>;

  /**
   * Modifies deployment settings for a project.
   * @summary Modifies deployment settings
   * @param {string} id The ID of the deployment settings to update. Example &#x60;deploymentsettings-Projects-1&#x60;
   * @param {DeploymentSettingsResource} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentSettingsApiInterface
   */
  updateDeploymentSettingsById(
    id: string,
    body: DeploymentSettingsResource,
    options?: any
  ): AxiosPromise<DeploymentSettingsResource>;

  /**
   * Modifies deployment settings for a project.
   * @summary Modifies deployment settings
   * @param {string} id The ID of the deployment settings to update. Example &#x60;deploymentsettings-Projects-1&#x60;
   * @param {string} baseSpaceId ID of the space
   * @param {DeploymentSettingsResource} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentSettingsApiInterface
   */
  updateDeploymentSettingsByIdSpaces(
    id: string,
    baseSpaceId: string,
    body: DeploymentSettingsResource,
    options?: any
  ): AxiosPromise<DeploymentSettingsResource>;
}

/**
 * DeploymentSettingsApi - object-oriented interface
 * @export
 * @class DeploymentSettingsApi
 * @extends {BaseAPI}
 */
export class DeploymentSettingsApi
  extends BaseAPI
  implements DeploymentSettingsApiInterface
{
  /**
   *
   * @summary Gets deployment settings by ID.
   * @param {string} id ID of the DeploymentSettings to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentSettingsApi
   */
  public getDeploymentSettingsById(id: string, options?: any) {
    return DeploymentSettingsApiFp(this.configuration)
      .getDeploymentSettingsById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Gets deployment settings by ID.
   * @param {string} id ID of the DeploymentSettings to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentSettingsApi
   */
  public getDeploymentSettingsByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ) {
    return DeploymentSettingsApiFp(this.configuration)
      .getDeploymentSettingsByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies deployment settings for a project.
   * @summary Modifies deployment settings
   * @param {string} id The ID of the deployment settings to update. Example &#x60;deploymentsettings-Projects-1&#x60;
   * @param {DeploymentSettingsResource} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentSettingsApi
   */
  public updateDeploymentSettingsById(
    id: string,
    body: DeploymentSettingsResource,
    options?: any
  ) {
    return DeploymentSettingsApiFp(this.configuration)
      .updateDeploymentSettingsById(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies deployment settings for a project.
   * @summary Modifies deployment settings
   * @param {string} id The ID of the deployment settings to update. Example &#x60;deploymentsettings-Projects-1&#x60;
   * @param {string} baseSpaceId ID of the space
   * @param {DeploymentSettingsResource} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentSettingsApi
   */
  public updateDeploymentSettingsByIdSpaces(
    id: string,
    baseSpaceId: string,
    body: DeploymentSettingsResource,
    options?: any
  ) {
    return DeploymentSettingsApiFp(this.configuration)
      .updateDeploymentSettingsByIdSpaces(id, baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
