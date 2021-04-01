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
import { CloudTemplateMetadata } from "../model";
/**
 * CloudTemplateApi - axios parameter creator
 * @export
 */
export const CloudTemplateApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Provides parameter metadata for a cloud (AWS etc) resource template
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCloudTemplateMetadata: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createCloudTemplateMetadata", "id", id);
      const localVarPath = `/cloudtemplate/{id}/metadata`.replace(
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
 * CloudTemplateApi - functional programming interface
 * @export
 */
export const CloudTemplateApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = CloudTemplateApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Provides parameter metadata for a cloud (AWS etc) resource template
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCloudTemplateMetadata(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CloudTemplateMetadata>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createCloudTemplateMetadata(
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
 * CloudTemplateApi - factory interface
 * @export
 */
export const CloudTemplateApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = CloudTemplateApiFp(configuration);
  return {
    /**
     * Provides parameter metadata for a cloud (AWS etc) resource template
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCloudTemplateMetadata(
      id: string,
      options?: any
    ): AxiosPromise<CloudTemplateMetadata> {
      return localVarFp
        .createCloudTemplateMetadata(id, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * CloudTemplateApi - interface
 * @export
 * @interface CloudTemplateApi
 */
export interface CloudTemplateApiInterface {
  /**
   * Provides parameter metadata for a cloud (AWS etc) resource template
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CloudTemplateApiInterface
   */
  createCloudTemplateMetadata(
    id: string,
    options?: any
  ): AxiosPromise<CloudTemplateMetadata>;
}

/**
 * CloudTemplateApi - object-oriented interface
 * @export
 * @class CloudTemplateApi
 * @extends {BaseAPI}
 */
export class CloudTemplateApi
  extends BaseAPI
  implements CloudTemplateApiInterface {
  /**
   * Provides parameter metadata for a cloud (AWS etc) resource template
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CloudTemplateApi
   */
  public createCloudTemplateMetadata(id: string, options?: any) {
    return CloudTemplateApiFp(this.configuration)
      .createCloudTemplateMetadata(id, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
