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
import { OctopusPackageVersionBuildInformationMappedResource } from "../model";
// @ts-ignore
import { OctopusPackageVersionBuildInformationMappedResourceCollection } from "../model";
/**
 * BuildInformationApi - axios parameter creator
 * @export
 */
export const BuildInformationApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Updates a specific build information record describing the vcs information for a given package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createBuildInformation: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/build-information`;
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
     * Updates a specific build information record describing the vcs information for a given package
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createBuildInformationSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createBuildInformationSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/build-information`.replace(
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
     * Deletes a specific build information record
     * @param {string} id ID of the build information resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteBuildInformationDeleteById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteBuildInformationDeleteById", "id", id);
      const localVarPath = `/build-information/{id}`.replace(
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
        method: "DELETE",
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
     * Deletes a specific build information record
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the build information resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteBuildInformationDeleteByIdSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "deleteBuildInformationDeleteByIdSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteBuildInformationDeleteByIdSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/build-information/{id}`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
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
     * Bulk deletes specific build information records
     * @param {string} ids Comma separated list of IDs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteBuildInformationDeleteByIds: async (
      ids: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'ids' is not null or undefined
      assertParamExists("deleteBuildInformationDeleteByIds", "ids", ids);
      const localVarPath = `/build-information/bulk`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
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

      if (ids !== undefined) {
        localVarQueryParameter["ids"] = ids;
      }

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
     * Bulk deletes specific build information records
     * @param {string} baseSpaceId ID of the space
     * @param {string} ids Comma separated list of IDs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteBuildInformationDeleteByIdsSpaces: async (
      baseSpaceId: string,
      ids: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "deleteBuildInformationDeleteByIdsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'ids' is not null or undefined
      assertParamExists("deleteBuildInformationDeleteByIdsSpaces", "ids", ids);
      const localVarPath = `/{baseSpaceId}/build-information/bulk`.replace(
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
        method: "DELETE",
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

      if (ids !== undefined) {
        localVarQueryParameter["ids"] = ids;
      }

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
     * Retrieves a specific build information record describing the vcs information for a given package
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBuildInformation: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getBuildInformation", "id", id);
      const localVarPath = `/build-information/{id}`.replace(
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
     * Retrieves a list of build information records describing the vcs information for a given package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBuildInformationList: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/build-information`;
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
     * Retrieves a list of build information records describing the vcs information for a given package
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBuildInformationListSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getBuildInformationListSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/build-information`.replace(
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
     * Retrieves a specific build information record describing the vcs information for a given package
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBuildInformationSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getBuildInformationSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getBuildInformationSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/build-information/{id}`
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
 * BuildInformationApi - functional programming interface
 * @export
 */
export const BuildInformationApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    BuildInformationApiAxiosParamCreator(configuration);
  return {
    /**
     * Updates a specific build information record describing the vcs information for a given package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createBuildInformation(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<OctopusPackageVersionBuildInformationMappedResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createBuildInformation(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Updates a specific build information record describing the vcs information for a given package
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createBuildInformationSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<OctopusPackageVersionBuildInformationMappedResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createBuildInformationSpaces(
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
     * Deletes a specific build information record
     * @param {string} id ID of the build information resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteBuildInformationDeleteById(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteBuildInformationDeleteById(
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
     * Deletes a specific build information record
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the build information resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteBuildInformationDeleteByIdSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteBuildInformationDeleteByIdSpaces(
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
     * Bulk deletes specific build information records
     * @param {string} ids Comma separated list of IDs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteBuildInformationDeleteByIds(
      ids: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteBuildInformationDeleteByIds(
          ids,
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
     * Bulk deletes specific build information records
     * @param {string} baseSpaceId ID of the space
     * @param {string} ids Comma separated list of IDs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteBuildInformationDeleteByIdsSpaces(
      baseSpaceId: string,
      ids: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteBuildInformationDeleteByIdsSpaces(
          baseSpaceId,
          ids,
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
     * Retrieves a specific build information record describing the vcs information for a given package
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBuildInformation(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<OctopusPackageVersionBuildInformationMappedResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getBuildInformation(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Retrieves a list of build information records describing the vcs information for a given package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBuildInformationList(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<OctopusPackageVersionBuildInformationMappedResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getBuildInformationList(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Retrieves a list of build information records describing the vcs information for a given package
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBuildInformationListSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<OctopusPackageVersionBuildInformationMappedResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getBuildInformationListSpaces(
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
     * Retrieves a specific build information record describing the vcs information for a given package
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBuildInformationSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<OctopusPackageVersionBuildInformationMappedResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getBuildInformationSpaces(
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
 * BuildInformationApi - factory interface
 * @export
 */
export const BuildInformationApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = BuildInformationApiFp(configuration);
  return {
    /**
     * Updates a specific build information record describing the vcs information for a given package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createBuildInformation(
      options?: any
    ): AxiosPromise<OctopusPackageVersionBuildInformationMappedResource> {
      return localVarFp
        .createBuildInformation(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates a specific build information record describing the vcs information for a given package
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createBuildInformationSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<OctopusPackageVersionBuildInformationMappedResource> {
      return localVarFp
        .createBuildInformationSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes a specific build information record
     * @param {string} id ID of the build information resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteBuildInformationDeleteById(
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteBuildInformationDeleteById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes a specific build information record
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the build information resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteBuildInformationDeleteByIdSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteBuildInformationDeleteByIdSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Bulk deletes specific build information records
     * @param {string} ids Comma separated list of IDs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteBuildInformationDeleteByIds(
      ids: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteBuildInformationDeleteByIds(ids, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Bulk deletes specific build information records
     * @param {string} baseSpaceId ID of the space
     * @param {string} ids Comma separated list of IDs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteBuildInformationDeleteByIdsSpaces(
      baseSpaceId: string,
      ids: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteBuildInformationDeleteByIdsSpaces(baseSpaceId, ids, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Retrieves a specific build information record describing the vcs information for a given package
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBuildInformation(
      id: string,
      options?: any
    ): AxiosPromise<OctopusPackageVersionBuildInformationMappedResource> {
      return localVarFp
        .getBuildInformation(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Retrieves a list of build information records describing the vcs information for a given package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBuildInformationList(
      options?: any
    ): AxiosPromise<OctopusPackageVersionBuildInformationMappedResourceCollection> {
      return localVarFp
        .getBuildInformationList(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Retrieves a list of build information records describing the vcs information for a given package
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBuildInformationListSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<OctopusPackageVersionBuildInformationMappedResourceCollection> {
      return localVarFp
        .getBuildInformationListSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Retrieves a specific build information record describing the vcs information for a given package
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBuildInformationSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<OctopusPackageVersionBuildInformationMappedResource> {
      return localVarFp
        .getBuildInformationSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * BuildInformationApi - interface
 * @export
 * @interface BuildInformationApi
 */
export interface BuildInformationApiInterface {
  /**
   * Updates a specific build information record describing the vcs information for a given package
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApiInterface
   */
  createBuildInformation(
    options?: any
  ): AxiosPromise<OctopusPackageVersionBuildInformationMappedResource>;

  /**
   * Updates a specific build information record describing the vcs information for a given package
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApiInterface
   */
  createBuildInformationSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<OctopusPackageVersionBuildInformationMappedResource>;

  /**
   * Deletes a specific build information record
   * @param {string} id ID of the build information resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApiInterface
   */
  deleteBuildInformationDeleteById(
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   * Deletes a specific build information record
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the build information resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApiInterface
   */
  deleteBuildInformationDeleteByIdSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   * Bulk deletes specific build information records
   * @param {string} ids Comma separated list of IDs to be deleted
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApiInterface
   */
  deleteBuildInformationDeleteByIds(
    ids: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   * Bulk deletes specific build information records
   * @param {string} baseSpaceId ID of the space
   * @param {string} ids Comma separated list of IDs to be deleted
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApiInterface
   */
  deleteBuildInformationDeleteByIdsSpaces(
    baseSpaceId: string,
    ids: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   * Retrieves a specific build information record describing the vcs information for a given package
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApiInterface
   */
  getBuildInformation(
    id: string,
    options?: any
  ): AxiosPromise<OctopusPackageVersionBuildInformationMappedResource>;

  /**
   * Retrieves a list of build information records describing the vcs information for a given package
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApiInterface
   */
  getBuildInformationList(
    options?: any
  ): AxiosPromise<OctopusPackageVersionBuildInformationMappedResourceCollection>;

  /**
   * Retrieves a list of build information records describing the vcs information for a given package
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApiInterface
   */
  getBuildInformationListSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<OctopusPackageVersionBuildInformationMappedResourceCollection>;

  /**
   * Retrieves a specific build information record describing the vcs information for a given package
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApiInterface
   */
  getBuildInformationSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<OctopusPackageVersionBuildInformationMappedResource>;
}

/**
 * BuildInformationApi - object-oriented interface
 * @export
 * @class BuildInformationApi
 * @extends {BaseAPI}
 */
export class BuildInformationApi
  extends BaseAPI
  implements BuildInformationApiInterface
{
  /**
   * Updates a specific build information record describing the vcs information for a given package
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApi
   */
  public createBuildInformation(options?: any) {
    return BuildInformationApiFp(this.configuration)
      .createBuildInformation(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates a specific build information record describing the vcs information for a given package
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApi
   */
  public createBuildInformationSpaces(baseSpaceId: string, options?: any) {
    return BuildInformationApiFp(this.configuration)
      .createBuildInformationSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes a specific build information record
   * @param {string} id ID of the build information resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApi
   */
  public deleteBuildInformationDeleteById(id: string, options?: any) {
    return BuildInformationApiFp(this.configuration)
      .deleteBuildInformationDeleteById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes a specific build information record
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the build information resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApi
   */
  public deleteBuildInformationDeleteByIdSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return BuildInformationApiFp(this.configuration)
      .deleteBuildInformationDeleteByIdSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Bulk deletes specific build information records
   * @param {string} ids Comma separated list of IDs to be deleted
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApi
   */
  public deleteBuildInformationDeleteByIds(ids: string, options?: any) {
    return BuildInformationApiFp(this.configuration)
      .deleteBuildInformationDeleteByIds(ids, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Bulk deletes specific build information records
   * @param {string} baseSpaceId ID of the space
   * @param {string} ids Comma separated list of IDs to be deleted
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApi
   */
  public deleteBuildInformationDeleteByIdsSpaces(
    baseSpaceId: string,
    ids: string,
    options?: any
  ) {
    return BuildInformationApiFp(this.configuration)
      .deleteBuildInformationDeleteByIdsSpaces(baseSpaceId, ids, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Retrieves a specific build information record describing the vcs information for a given package
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApi
   */
  public getBuildInformation(id: string, options?: any) {
    return BuildInformationApiFp(this.configuration)
      .getBuildInformation(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Retrieves a list of build information records describing the vcs information for a given package
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApi
   */
  public getBuildInformationList(options?: any) {
    return BuildInformationApiFp(this.configuration)
      .getBuildInformationList(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Retrieves a list of build information records describing the vcs information for a given package
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApi
   */
  public getBuildInformationListSpaces(baseSpaceId: string, options?: any) {
    return BuildInformationApiFp(this.configuration)
      .getBuildInformationListSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Retrieves a specific build information record describing the vcs information for a given package
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildInformationApi
   */
  public getBuildInformationSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return BuildInformationApiFp(this.configuration)
      .getBuildInformationSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
