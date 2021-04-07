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
import { AuthenticationProviderThatSupportsGroups } from "../model";
/**
 * ExternalSecurityGroupsApi - axios parameter creator
 * @export
 */
export const ExternalSecurityGroupsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Lists the authentication providers that support external group lookups.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListProvidersThatSupportExternalSecurityGroups: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/externalsecuritygroupproviders`;
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
 * ExternalSecurityGroupsApi - functional programming interface
 * @export
 */
export const ExternalSecurityGroupsApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator = ExternalSecurityGroupsApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Lists the authentication providers that support external group lookups.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getListProvidersThatSupportExternalSecurityGroups(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<AuthenticationProviderThatSupportsGroups>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getListProvidersThatSupportExternalSecurityGroups(
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
 * ExternalSecurityGroupsApi - factory interface
 * @export
 */
export const ExternalSecurityGroupsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ExternalSecurityGroupsApiFp(configuration);
  return {
    /**
     * Lists the authentication providers that support external group lookups.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListProvidersThatSupportExternalSecurityGroups(
      options?: any
    ): AxiosPromise<Array<AuthenticationProviderThatSupportsGroups>> {
      return localVarFp
        .getListProvidersThatSupportExternalSecurityGroups(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ExternalSecurityGroupsApi - interface
 * @export
 * @interface ExternalSecurityGroupsApi
 */
export interface ExternalSecurityGroupsApiInterface {
  /**
   * Lists the authentication providers that support external group lookups.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExternalSecurityGroupsApiInterface
   */
  getListProvidersThatSupportExternalSecurityGroups(
    options?: any
  ): AxiosPromise<Array<AuthenticationProviderThatSupportsGroups>>;
}

/**
 * ExternalSecurityGroupsApi - object-oriented interface
 * @export
 * @class ExternalSecurityGroupsApi
 * @extends {BaseAPI}
 */
export class ExternalSecurityGroupsApi
  extends BaseAPI
  implements ExternalSecurityGroupsApiInterface {
  /**
   * Lists the authentication providers that support external group lookups.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExternalSecurityGroupsApi
   */
  public getListProvidersThatSupportExternalSecurityGroups(options?: any) {
    return ExternalSecurityGroupsApiFp(this.configuration)
      .getListProvidersThatSupportExternalSecurityGroups(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
