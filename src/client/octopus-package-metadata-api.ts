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
import { OctopusPackageMetadataMappedResource } from "../model";
/**
 * OctopusPackageMetadataApi - axios parameter creator
 * @export
 */
export const OctopusPackageMetadataApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates package build information. Deprecated. Please use the \'build-information\' api instead.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOctopusPackageMetadata: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/package-metadata`;
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
     * Creates package build information. Deprecated. Please use the \'build-information\' api instead.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOctopusPackageMetadataSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createOctopusPackageMetadataSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/package-metadata`.replace(
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
     * Returns package build information for the specified id. Deprecated. Please use the \'build-information\' api instead.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOctopusPackageMetadata: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getOctopusPackageMetadata", "id", id);
      const localVarPath = `/package-metadata/{id}`.replace(
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
     * Returns package build information for the specified id. Deprecated. Please use the \'build-information\' api instead.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOctopusPackageMetadataSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getOctopusPackageMetadataSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getOctopusPackageMetadataSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/package-metadata/{id}`
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
 * OctopusPackageMetadataApi - functional programming interface
 * @export
 */
export const OctopusPackageMetadataApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    OctopusPackageMetadataApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates package build information. Deprecated. Please use the \'build-information\' api instead.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createOctopusPackageMetadata(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<OctopusPackageMetadataMappedResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createOctopusPackageMetadata(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Creates package build information. Deprecated. Please use the \'build-information\' api instead.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createOctopusPackageMetadataSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<OctopusPackageMetadataMappedResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createOctopusPackageMetadataSpaces(
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
     * Returns package build information for the specified id. Deprecated. Please use the \'build-information\' api instead.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getOctopusPackageMetadata(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<OctopusPackageMetadataMappedResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getOctopusPackageMetadata(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Returns package build information for the specified id. Deprecated. Please use the \'build-information\' api instead.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getOctopusPackageMetadataSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<OctopusPackageMetadataMappedResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getOctopusPackageMetadataSpaces(
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
 * OctopusPackageMetadataApi - factory interface
 * @export
 */
export const OctopusPackageMetadataApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = OctopusPackageMetadataApiFp(configuration);
  return {
    /**
     * Creates package build information. Deprecated. Please use the \'build-information\' api instead.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOctopusPackageMetadata(
      options?: any
    ): AxiosPromise<OctopusPackageMetadataMappedResource> {
      return localVarFp
        .createOctopusPackageMetadata(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates package build information. Deprecated. Please use the \'build-information\' api instead.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOctopusPackageMetadataSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<OctopusPackageMetadataMappedResource> {
      return localVarFp
        .createOctopusPackageMetadataSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns package build information for the specified id. Deprecated. Please use the \'build-information\' api instead.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOctopusPackageMetadata(
      id: string,
      options?: any
    ): AxiosPromise<OctopusPackageMetadataMappedResource> {
      return localVarFp
        .getOctopusPackageMetadata(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns package build information for the specified id. Deprecated. Please use the \'build-information\' api instead.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOctopusPackageMetadataSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<OctopusPackageMetadataMappedResource> {
      return localVarFp
        .getOctopusPackageMetadataSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * OctopusPackageMetadataApi - interface
 * @export
 * @interface OctopusPackageMetadataApi
 */
export interface OctopusPackageMetadataApiInterface {
  /**
   * Creates package build information. Deprecated. Please use the \'build-information\' api instead.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OctopusPackageMetadataApiInterface
   */
  createOctopusPackageMetadata(
    options?: any
  ): AxiosPromise<OctopusPackageMetadataMappedResource>;

  /**
   * Creates package build information. Deprecated. Please use the \'build-information\' api instead.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OctopusPackageMetadataApiInterface
   */
  createOctopusPackageMetadataSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<OctopusPackageMetadataMappedResource>;

  /**
   * Returns package build information for the specified id. Deprecated. Please use the \'build-information\' api instead.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OctopusPackageMetadataApiInterface
   */
  getOctopusPackageMetadata(
    id: string,
    options?: any
  ): AxiosPromise<OctopusPackageMetadataMappedResource>;

  /**
   * Returns package build information for the specified id. Deprecated. Please use the \'build-information\' api instead.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OctopusPackageMetadataApiInterface
   */
  getOctopusPackageMetadataSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<OctopusPackageMetadataMappedResource>;
}

/**
 * OctopusPackageMetadataApi - object-oriented interface
 * @export
 * @class OctopusPackageMetadataApi
 * @extends {BaseAPI}
 */
export class OctopusPackageMetadataApi
  extends BaseAPI
  implements OctopusPackageMetadataApiInterface
{
  /**
   * Creates package build information. Deprecated. Please use the \'build-information\' api instead.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OctopusPackageMetadataApi
   */
  public createOctopusPackageMetadata(options?: any) {
    return OctopusPackageMetadataApiFp(this.configuration)
      .createOctopusPackageMetadata(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates package build information. Deprecated. Please use the \'build-information\' api instead.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OctopusPackageMetadataApi
   */
  public createOctopusPackageMetadataSpaces(
    baseSpaceId: string,
    options?: any
  ) {
    return OctopusPackageMetadataApiFp(this.configuration)
      .createOctopusPackageMetadataSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns package build information for the specified id. Deprecated. Please use the \'build-information\' api instead.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OctopusPackageMetadataApi
   */
  public getOctopusPackageMetadata(id: string, options?: any) {
    return OctopusPackageMetadataApiFp(this.configuration)
      .getOctopusPackageMetadata(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns package build information for the specified id. Deprecated. Please use the \'build-information\' api instead.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OctopusPackageMetadataApi
   */
  public getOctopusPackageMetadataSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return OctopusPackageMetadataApiFp(this.configuration)
      .getOctopusPackageMetadataSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
