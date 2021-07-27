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
import { SpaceRootResource } from "../model";
/**
 * SpaceHomeApi - axios parameter creator
 * @export
 */
export const SpaceHomeApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Returns a document describing the specified Space and links to other parts of the API that apply to the Space.
     * @param {string} spaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSpaceHome: async (
      spaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'spaceId' is not null or undefined
      assertParamExists("getSpaceHome", "spaceId", spaceId);
      const localVarPath = `/{spaceId}`.replace(
        `{${"spaceId"}}`,
        encodeURIComponent(String(spaceId))
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
  };
};

/**
 * SpaceHomeApi - functional programming interface
 * @export
 */
export const SpaceHomeApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    SpaceHomeApiAxiosParamCreator(configuration);
  return {
    /**
     * Returns a document describing the specified Space and links to other parts of the API that apply to the Space.
     * @param {string} spaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSpaceHome(
      spaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<SpaceRootResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSpaceHome(
        spaceId,
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
 * SpaceHomeApi - factory interface
 * @export
 */
export const SpaceHomeApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = SpaceHomeApiFp(configuration);
  return {
    /**
     * Returns a document describing the specified Space and links to other parts of the API that apply to the Space.
     * @param {string} spaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSpaceHome(
      spaceId: string,
      options?: any
    ): AxiosPromise<SpaceRootResource> {
      return localVarFp
        .getSpaceHome(spaceId, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * SpaceHomeApi - interface
 * @export
 * @interface SpaceHomeApi
 */
export interface SpaceHomeApiInterface {
  /**
   * Returns a document describing the specified Space and links to other parts of the API that apply to the Space.
   * @param {string} spaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpaceHomeApiInterface
   */
  getSpaceHome(spaceId: string, options?: any): AxiosPromise<SpaceRootResource>;
}

/**
 * SpaceHomeApi - object-oriented interface
 * @export
 * @class SpaceHomeApi
 * @extends {BaseAPI}
 */
export class SpaceHomeApi extends BaseAPI implements SpaceHomeApiInterface {
  /**
   * Returns a document describing the specified Space and links to other parts of the API that apply to the Space.
   * @param {string} spaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpaceHomeApi
   */
  public getSpaceHome(spaceId: string, options?: any) {
    return SpaceHomeApiFp(this.configuration)
      .getSpaceHome(spaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
