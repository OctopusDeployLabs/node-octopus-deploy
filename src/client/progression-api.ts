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
import { ProgressionResource } from "../model";
// @ts-ignore
import { RunbooksDashboardItemResourceCollection } from "../model";
// @ts-ignore
import { RunbooksProgressionResource } from "../model";
/**
 * ProgressionApi - axios parameter creator
 * @export
 */
export const ProgressionApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Returns the progress of a release in the environment lifecycle.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProgressionView: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getProgressionView", "id", id);
      const localVarPath = `/progression/{id}`.replace(
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
     * Returns the progress of a release in the environment lifecycle.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProgressionViewSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getProgressionViewSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getProgressionViewSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/progression/{id}`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
     * Returns a list of runbook dashboard items, filtered by various criteria including projectIds, environmentIds, tenantIds, runbookIds, taskIds
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookTaskRunDashboardItems: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/progression/runbooks/taskRuns`;
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
     * Returns a list of runbook dashboard items, filtered by various criteria including projectIds, environmentIds, tenantIds, runbookIds, taskIds
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookTaskRunDashboardItemsSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getRunbookTaskRunDashboardItemsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/progression/runbooks/taskRuns`.replace(
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
     * Returns the progress of a runbook in the environment lifecycle
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbooksProgressionView: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbooksProgressionView", "id", id);
      const localVarPath = `/progression/runbooks/{id}`.replace(
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
     * Returns the progress of a runbook in the environment lifecycle
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbooksProgressionViewSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getRunbooksProgressionViewSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getRunbooksProgressionViewSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/progression/runbooks/{id}`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
 * ProgressionApi - functional programming interface
 * @export
 */
export const ProgressionApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ProgressionApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Returns the progress of a release in the environment lifecycle.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getProgressionView(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProgressionResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getProgressionView(
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
     * Returns the progress of a release in the environment lifecycle.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getProgressionViewSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProgressionResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getProgressionViewSpaces(
        baseSpaceId,
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
     * Returns a list of runbook dashboard items, filtered by various criteria including projectIds, environmentIds, tenantIds, runbookIds, taskIds
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookTaskRunDashboardItems(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbooksDashboardItemResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getRunbookTaskRunDashboardItems(
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
     * Returns a list of runbook dashboard items, filtered by various criteria including projectIds, environmentIds, tenantIds, runbookIds, taskIds
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbookTaskRunDashboardItemsSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbooksDashboardItemResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getRunbookTaskRunDashboardItemsSpaces(
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
     * Returns the progress of a runbook in the environment lifecycle
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbooksProgressionView(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbooksProgressionResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getRunbooksProgressionView(
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
     * Returns the progress of a runbook in the environment lifecycle
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRunbooksProgressionViewSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RunbooksProgressionResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getRunbooksProgressionViewSpaces(
        baseSpaceId,
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
 * ProgressionApi - factory interface
 * @export
 */
export const ProgressionApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ProgressionApiFp(configuration);
  return {
    /**
     * Returns the progress of a release in the environment lifecycle.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProgressionView(
      id: string,
      options?: any
    ): AxiosPromise<ProgressionResource> {
      return localVarFp
        .getProgressionView(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns the progress of a release in the environment lifecycle.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProgressionViewSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<ProgressionResource> {
      return localVarFp
        .getProgressionViewSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns a list of runbook dashboard items, filtered by various criteria including projectIds, environmentIds, tenantIds, runbookIds, taskIds
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookTaskRunDashboardItems(
      options?: any
    ): AxiosPromise<RunbooksDashboardItemResourceCollection> {
      return localVarFp
        .getRunbookTaskRunDashboardItems(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns a list of runbook dashboard items, filtered by various criteria including projectIds, environmentIds, tenantIds, runbookIds, taskIds
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbookTaskRunDashboardItemsSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<RunbooksDashboardItemResourceCollection> {
      return localVarFp
        .getRunbookTaskRunDashboardItemsSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns the progress of a runbook in the environment lifecycle
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbooksProgressionView(
      id: string,
      options?: any
    ): AxiosPromise<RunbooksProgressionResource> {
      return localVarFp
        .getRunbooksProgressionView(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns the progress of a runbook in the environment lifecycle
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRunbooksProgressionViewSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<RunbooksProgressionResource> {
      return localVarFp
        .getRunbooksProgressionViewSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ProgressionApi - interface
 * @export
 * @interface ProgressionApi
 */
export interface ProgressionApiInterface {
  /**
   * Returns the progress of a release in the environment lifecycle.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProgressionApiInterface
   */
  getProgressionView(
    id: string,
    options?: any
  ): AxiosPromise<ProgressionResource>;

  /**
   * Returns the progress of a release in the environment lifecycle.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProgressionApiInterface
   */
  getProgressionViewSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<ProgressionResource>;

  /**
   * Returns a list of runbook dashboard items, filtered by various criteria including projectIds, environmentIds, tenantIds, runbookIds, taskIds
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProgressionApiInterface
   */
  getRunbookTaskRunDashboardItems(
    options?: any
  ): AxiosPromise<RunbooksDashboardItemResourceCollection>;

  /**
   * Returns a list of runbook dashboard items, filtered by various criteria including projectIds, environmentIds, tenantIds, runbookIds, taskIds
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProgressionApiInterface
   */
  getRunbookTaskRunDashboardItemsSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<RunbooksDashboardItemResourceCollection>;

  /**
   * Returns the progress of a runbook in the environment lifecycle
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProgressionApiInterface
   */
  getRunbooksProgressionView(
    id: string,
    options?: any
  ): AxiosPromise<RunbooksProgressionResource>;

  /**
   * Returns the progress of a runbook in the environment lifecycle
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProgressionApiInterface
   */
  getRunbooksProgressionViewSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<RunbooksProgressionResource>;
}

/**
 * ProgressionApi - object-oriented interface
 * @export
 * @class ProgressionApi
 * @extends {BaseAPI}
 */
export class ProgressionApi extends BaseAPI implements ProgressionApiInterface {
  /**
   * Returns the progress of a release in the environment lifecycle.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProgressionApi
   */
  public getProgressionView(id: string, options?: any) {
    return ProgressionApiFp(this.configuration)
      .getProgressionView(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns the progress of a release in the environment lifecycle.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProgressionApi
   */
  public getProgressionViewSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return ProgressionApiFp(this.configuration)
      .getProgressionViewSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns a list of runbook dashboard items, filtered by various criteria including projectIds, environmentIds, tenantIds, runbookIds, taskIds
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProgressionApi
   */
  public getRunbookTaskRunDashboardItems(options?: any) {
    return ProgressionApiFp(this.configuration)
      .getRunbookTaskRunDashboardItems(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns a list of runbook dashboard items, filtered by various criteria including projectIds, environmentIds, tenantIds, runbookIds, taskIds
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProgressionApi
   */
  public getRunbookTaskRunDashboardItemsSpaces(
    baseSpaceId: string,
    options?: any
  ) {
    return ProgressionApiFp(this.configuration)
      .getRunbookTaskRunDashboardItemsSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns the progress of a runbook in the environment lifecycle
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProgressionApi
   */
  public getRunbooksProgressionView(id: string, options?: any) {
    return ProgressionApiFp(this.configuration)
      .getRunbooksProgressionView(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns the progress of a runbook in the environment lifecycle
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProgressionApi
   */
  public getRunbooksProgressionViewSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return ProgressionApiFp(this.configuration)
      .getRunbooksProgressionViewSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
