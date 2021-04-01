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
import { SubscriptionResource } from "../model";
/**
 * SubscriptionsApi - axios parameter creator
 * @export
 */
export const SubscriptionsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Lists all the subscriptions in the supplied Octopus Deploy Space.
     * @summary Get all Subscriptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllSubscriptions: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/subscriptions/all`;
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
     * Lists all the subscriptions in the supplied Octopus Deploy Space.
     * @summary Get all Subscriptions
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllSubscriptionsSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getAllSubscriptionsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/subscriptions/all`.replace(
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
     *
     * @summary Get a Subscription by ID
     * @param {string} id ID of the Subscription to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubscriptionById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getSubscriptionById", "id", id);
      const localVarPath = `/subscriptions/{id}`.replace(
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
     * @summary Get a Subscription by ID
     * @param {string} id ID of the Subscription to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubscriptionByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getSubscriptionByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getSubscriptionByIdSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/subscriptions/{id}`
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
  };
};

/**
 * SubscriptionsApi - functional programming interface
 * @export
 */
export const SubscriptionsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = SubscriptionsApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Lists all the subscriptions in the supplied Octopus Deploy Space.
     * @summary Get all Subscriptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAllSubscriptions(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<SubscriptionResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getAllSubscriptions(
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
     * Lists all the subscriptions in the supplied Octopus Deploy Space.
     * @summary Get all Subscriptions
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAllSubscriptionsSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<SubscriptionResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getAllSubscriptionsSpaces(
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
     *
     * @summary Get a Subscription by ID
     * @param {string} id ID of the Subscription to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSubscriptionById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<SubscriptionResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSubscriptionById(
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
     *
     * @summary Get a Subscription by ID
     * @param {string} id ID of the Subscription to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSubscriptionByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<SubscriptionResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSubscriptionByIdSpaces(
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
  };
};

/**
 * SubscriptionsApi - factory interface
 * @export
 */
export const SubscriptionsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = SubscriptionsApiFp(configuration);
  return {
    /**
     * Lists all the subscriptions in the supplied Octopus Deploy Space.
     * @summary Get all Subscriptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllSubscriptions(
      options?: any
    ): AxiosPromise<Array<SubscriptionResource>> {
      return localVarFp
        .getAllSubscriptions(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the subscriptions in the supplied Octopus Deploy Space.
     * @summary Get all Subscriptions
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllSubscriptionsSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<SubscriptionResource>> {
      return localVarFp
        .getAllSubscriptionsSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Subscription by ID
     * @param {string} id ID of the Subscription to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubscriptionById(
      id: string,
      options?: any
    ): AxiosPromise<SubscriptionResource> {
      return localVarFp
        .getSubscriptionById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Subscription by ID
     * @param {string} id ID of the Subscription to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubscriptionByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<SubscriptionResource> {
      return localVarFp
        .getSubscriptionByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * SubscriptionsApi - interface
 * @export
 * @interface SubscriptionsApi
 */
export interface SubscriptionsApiInterface {
  /**
   * Lists all the subscriptions in the supplied Octopus Deploy Space.
   * @summary Get all Subscriptions
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SubscriptionsApiInterface
   */
  getAllSubscriptions(options?: any): AxiosPromise<Array<SubscriptionResource>>;

  /**
   * Lists all the subscriptions in the supplied Octopus Deploy Space.
   * @summary Get all Subscriptions
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SubscriptionsApiInterface
   */
  getAllSubscriptionsSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<SubscriptionResource>>;

  /**
   *
   * @summary Get a Subscription by ID
   * @param {string} id ID of the Subscription to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SubscriptionsApiInterface
   */
  getSubscriptionById(
    id: string,
    options?: any
  ): AxiosPromise<SubscriptionResource>;

  /**
   *
   * @summary Get a Subscription by ID
   * @param {string} id ID of the Subscription to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SubscriptionsApiInterface
   */
  getSubscriptionByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<SubscriptionResource>;
}

/**
 * SubscriptionsApi - object-oriented interface
 * @export
 * @class SubscriptionsApi
 * @extends {BaseAPI}
 */
export class SubscriptionsApi
  extends BaseAPI
  implements SubscriptionsApiInterface {
  /**
   * Lists all the subscriptions in the supplied Octopus Deploy Space.
   * @summary Get all Subscriptions
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SubscriptionsApi
   */
  public getAllSubscriptions(options?: any) {
    return SubscriptionsApiFp(this.configuration)
      .getAllSubscriptions(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the subscriptions in the supplied Octopus Deploy Space.
   * @summary Get all Subscriptions
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SubscriptionsApi
   */
  public getAllSubscriptionsSpaces(baseSpaceId: string, options?: any) {
    return SubscriptionsApiFp(this.configuration)
      .getAllSubscriptionsSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Subscription by ID
   * @param {string} id ID of the Subscription to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SubscriptionsApi
   */
  public getSubscriptionById(id: string, options?: any) {
    return SubscriptionsApiFp(this.configuration)
      .getSubscriptionById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Subscription by ID
   * @param {string} id ID of the Subscription to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SubscriptionsApi
   */
  public getSubscriptionByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ) {
    return SubscriptionsApiFp(this.configuration)
      .getSubscriptionByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
