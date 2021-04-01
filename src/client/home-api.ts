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
import { RootResource } from "../model";
/**
 * HomeApi - axios parameter creator
 * @export
 */
export const HomeApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Returns a document describing the current Octopus Server and links to other parts of the API.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getHome: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/`;
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
 * HomeApi - functional programming interface
 * @export
 */
export const HomeApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = HomeApiAxiosParamCreator(configuration);
  return {
    /**
     * Returns a document describing the current Octopus Server and links to other parts of the API.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getHome(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<RootResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getHome(
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
 * HomeApi - factory interface
 * @export
 */
export const HomeApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = HomeApiFp(configuration);
  return {
    /**
     * Returns a document describing the current Octopus Server and links to other parts of the API.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getHome(options?: any): AxiosPromise<RootResource> {
      return localVarFp
        .getHome(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * HomeApi - interface
 * @export
 * @interface HomeApi
 */
export interface HomeApiInterface {
  /**
   * Returns a document describing the current Octopus Server and links to other parts of the API.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof HomeApiInterface
   */
  getHome(options?: any): AxiosPromise<RootResource>;
}

/**
 * HomeApi - object-oriented interface
 * @export
 * @class HomeApi
 * @extends {BaseAPI}
 */
export class HomeApi extends BaseAPI implements HomeApiInterface {
  /**
   * Returns a document describing the current Octopus Server and links to other parts of the API.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof HomeApi
   */
  public getHome(options?: any) {
    return HomeApiFp(this.configuration)
      .getHome(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
