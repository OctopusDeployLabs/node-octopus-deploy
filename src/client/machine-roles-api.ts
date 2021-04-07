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
/**
 * MachineRolesApi - axios parameter creator
 * @export
 */
export const MachineRolesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Gets all machine roles that have been defined in this Octopus installation. The result will be a string array.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMachineRolesListAll: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/machineroles/all`;
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
     * Gets all machine roles that have been defined in this Octopus installation. The result will be a string array.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMachineRolesListAllSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getMachineRolesListAllSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/machineroles/all`.replace(
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
  };
};

/**
 * MachineRolesApi - functional programming interface
 * @export
 */
export const MachineRolesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = MachineRolesApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Gets all machine roles that have been defined in this Octopus installation. The result will be a string array.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMachineRolesListAll(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getMachineRolesListAll(
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
     * Gets all machine roles that have been defined in this Octopus installation. The result will be a string array.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMachineRolesListAllSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getMachineRolesListAllSpaces(
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
 * MachineRolesApi - factory interface
 * @export
 */
export const MachineRolesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = MachineRolesApiFp(configuration);
  return {
    /**
     * Gets all machine roles that have been defined in this Octopus installation. The result will be a string array.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMachineRolesListAll(options?: any): AxiosPromise<Array<string>> {
      return localVarFp
        .getMachineRolesListAll(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets all machine roles that have been defined in this Octopus installation. The result will be a string array.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMachineRolesListAllSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<string>> {
      return localVarFp
        .getMachineRolesListAllSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * MachineRolesApi - interface
 * @export
 * @interface MachineRolesApi
 */
export interface MachineRolesApiInterface {
  /**
   * Gets all machine roles that have been defined in this Octopus installation. The result will be a string array.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachineRolesApiInterface
   */
  getMachineRolesListAll(options?: any): AxiosPromise<Array<string>>;

  /**
   * Gets all machine roles that have been defined in this Octopus installation. The result will be a string array.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachineRolesApiInterface
   */
  getMachineRolesListAllSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<string>>;
}

/**
 * MachineRolesApi - object-oriented interface
 * @export
 * @class MachineRolesApi
 * @extends {BaseAPI}
 */
export class MachineRolesApi
  extends BaseAPI
  implements MachineRolesApiInterface {
  /**
   * Gets all machine roles that have been defined in this Octopus installation. The result will be a string array.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachineRolesApi
   */
  public getMachineRolesListAll(options?: any) {
    return MachineRolesApiFp(this.configuration)
      .getMachineRolesListAll(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets all machine roles that have been defined in this Octopus installation. The result will be a string array.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MachineRolesApi
   */
  public getMachineRolesListAllSpaces(baseSpaceId: string, options?: any) {
    return MachineRolesApiFp(this.configuration)
      .getMachineRolesListAllSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
