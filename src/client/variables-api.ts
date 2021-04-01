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
import { VariableSetResource } from "../model";
/**
 * VariablesApi - axios parameter creator
 * @export
 */
export const VariablesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * List the names of variables that can be used in deployment actions. If a project is specified, this will include variables in that project.  If a project environments filter is specified, project variables only scoped to the environment will be excluded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariableNamesList: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/variables/names`;
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
     * List the names of variables that can be used in deployment actions. If a project is specified, this will include variables in that project.  If a project environments filter is specified, project variables only scoped to the environment will be excluded.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariableNamesListSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getVariableNamesListSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/variables/names`.replace(
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
     * List the evaluated variables for a deployment.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariablePreviewList: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/variables/preview`;
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
     * List the evaluated variables for a deployment.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariablePreviewListSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getVariablePreviewListSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/variables/preview`.replace(
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
     * Gets a variable set by Id.
     * @summary Get a VariableSetResource by ID
     * @param {string} id ID of the VariableSetResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariableSetById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getVariableSetById", "id", id);
      const localVarPath = `/variables/{id}`.replace(
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
     * Gets a variable set by Id.
     * @summary Get a VariableSetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the VariableSetResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariableSetByIdSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getVariableSetByIdSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getVariableSetByIdSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/variables/{id}`
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
     * Lists all the variable sets in the supplied Octopus Deploy Space.
     * @summary Get a list of VariableSetResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllVariableSets: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/variables/all`;
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
     * Lists all the variable sets in the supplied Octopus Deploy Space.
     * @summary Get a list of VariableSetResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllVariableSetsSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "listAllVariableSetsSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/variables/all`.replace(
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
     * Updates a variable set.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateVariableSet: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateVariableSet", "id", id);
      const localVarPath = `/variables/{id}`.replace(
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
     * Updates a variable set.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateVariableSetSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("updateVariableSetSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateVariableSetSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/variables/{id}`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
 * VariablesApi - functional programming interface
 * @export
 */
export const VariablesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = VariablesApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * List the names of variables that can be used in deployment actions. If a project is specified, this will include variables in that project.  If a project environments filter is specified, project variables only scoped to the environment will be excluded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getVariableNamesList(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getVariableNamesList(
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
     * List the names of variables that can be used in deployment actions. If a project is specified, this will include variables in that project.  If a project environments filter is specified, project variables only scoped to the environment will be excluded.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getVariableNamesListSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getVariableNamesListSpaces(
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
     * List the evaluated variables for a deployment.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getVariablePreviewList(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<VariableSetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getVariablePreviewList(
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
     * List the evaluated variables for a deployment.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getVariablePreviewListSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<VariableSetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getVariablePreviewListSpaces(
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
     * Gets a variable set by Id.
     * @summary Get a VariableSetResource by ID
     * @param {string} id ID of the VariableSetResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getVariableSetById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<VariableSetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getVariableSetById(
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
     * Gets a variable set by Id.
     * @summary Get a VariableSetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the VariableSetResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getVariableSetByIdSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<VariableSetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getVariableSetByIdSpaces(
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
     * Lists all the variable sets in the supplied Octopus Deploy Space.
     * @summary Get a list of VariableSetResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllVariableSets(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<VariableSetResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllVariableSets(
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
     * Lists all the variable sets in the supplied Octopus Deploy Space.
     * @summary Get a list of VariableSetResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAllVariableSetsSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<VariableSetResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAllVariableSetsSpaces(
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
     * Updates a variable set.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateVariableSet(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<VariableSetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateVariableSet(
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
     * Updates a variable set.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateVariableSetSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<VariableSetResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateVariableSetSpaces(
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
 * VariablesApi - factory interface
 * @export
 */
export const VariablesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = VariablesApiFp(configuration);
  return {
    /**
     * List the names of variables that can be used in deployment actions. If a project is specified, this will include variables in that project.  If a project environments filter is specified, project variables only scoped to the environment will be excluded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariableNamesList(options?: any): AxiosPromise<void> {
      return localVarFp
        .getVariableNamesList(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List the names of variables that can be used in deployment actions. If a project is specified, this will include variables in that project.  If a project environments filter is specified, project variables only scoped to the environment will be excluded.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariableNamesListSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .getVariableNamesListSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List the evaluated variables for a deployment.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariablePreviewList(options?: any): AxiosPromise<VariableSetResource> {
      return localVarFp
        .getVariablePreviewList(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List the evaluated variables for a deployment.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariablePreviewListSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<VariableSetResource> {
      return localVarFp
        .getVariablePreviewListSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a variable set by Id.
     * @summary Get a VariableSetResource by ID
     * @param {string} id ID of the VariableSetResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariableSetById(
      id: string,
      options?: any
    ): AxiosPromise<VariableSetResource> {
      return localVarFp
        .getVariableSetById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets a variable set by Id.
     * @summary Get a VariableSetResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the VariableSetResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVariableSetByIdSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<VariableSetResource> {
      return localVarFp
        .getVariableSetByIdSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the variable sets in the supplied Octopus Deploy Space.
     * @summary Get a list of VariableSetResources
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllVariableSets(
      options?: any
    ): AxiosPromise<Array<VariableSetResource>> {
      return localVarFp
        .listAllVariableSets(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the variable sets in the supplied Octopus Deploy Space.
     * @summary Get a list of VariableSetResources
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAllVariableSetsSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<VariableSetResource>> {
      return localVarFp
        .listAllVariableSetsSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates a variable set.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateVariableSet(
      id: string,
      options?: any
    ): AxiosPromise<VariableSetResource> {
      return localVarFp
        .updateVariableSet(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates a variable set.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateVariableSetSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<VariableSetResource> {
      return localVarFp
        .updateVariableSetSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * VariablesApi - interface
 * @export
 * @interface VariablesApi
 */
export interface VariablesApiInterface {
  /**
   * List the names of variables that can be used in deployment actions. If a project is specified, this will include variables in that project.  If a project environments filter is specified, project variables only scoped to the environment will be excluded.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApiInterface
   */
  getVariableNamesList(options?: any): AxiosPromise<void>;

  /**
   * List the names of variables that can be used in deployment actions. If a project is specified, this will include variables in that project.  If a project environments filter is specified, project variables only scoped to the environment will be excluded.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApiInterface
   */
  getVariableNamesListSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   * List the evaluated variables for a deployment.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApiInterface
   */
  getVariablePreviewList(options?: any): AxiosPromise<VariableSetResource>;

  /**
   * List the evaluated variables for a deployment.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApiInterface
   */
  getVariablePreviewListSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<VariableSetResource>;

  /**
   * Gets a variable set by Id.
   * @summary Get a VariableSetResource by ID
   * @param {string} id ID of the VariableSetResource to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApiInterface
   */
  getVariableSetById(
    id: string,
    options?: any
  ): AxiosPromise<VariableSetResource>;

  /**
   * Gets a variable set by Id.
   * @summary Get a VariableSetResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the VariableSetResource to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApiInterface
   */
  getVariableSetByIdSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<VariableSetResource>;

  /**
   * Lists all the variable sets in the supplied Octopus Deploy Space.
   * @summary Get a list of VariableSetResources
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApiInterface
   */
  listAllVariableSets(options?: any): AxiosPromise<Array<VariableSetResource>>;

  /**
   * Lists all the variable sets in the supplied Octopus Deploy Space.
   * @summary Get a list of VariableSetResources
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApiInterface
   */
  listAllVariableSetsSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<VariableSetResource>>;

  /**
   * Updates a variable set.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApiInterface
   */
  updateVariableSet(
    id: string,
    options?: any
  ): AxiosPromise<VariableSetResource>;

  /**
   * Updates a variable set.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApiInterface
   */
  updateVariableSetSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<VariableSetResource>;
}

/**
 * VariablesApi - object-oriented interface
 * @export
 * @class VariablesApi
 * @extends {BaseAPI}
 */
export class VariablesApi extends BaseAPI implements VariablesApiInterface {
  /**
   * List the names of variables that can be used in deployment actions. If a project is specified, this will include variables in that project.  If a project environments filter is specified, project variables only scoped to the environment will be excluded.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApi
   */
  public getVariableNamesList(options?: any) {
    return VariablesApiFp(this.configuration)
      .getVariableNamesList(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List the names of variables that can be used in deployment actions. If a project is specified, this will include variables in that project.  If a project environments filter is specified, project variables only scoped to the environment will be excluded.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApi
   */
  public getVariableNamesListSpaces(baseSpaceId: string, options?: any) {
    return VariablesApiFp(this.configuration)
      .getVariableNamesListSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List the evaluated variables for a deployment.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApi
   */
  public getVariablePreviewList(options?: any) {
    return VariablesApiFp(this.configuration)
      .getVariablePreviewList(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List the evaluated variables for a deployment.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApi
   */
  public getVariablePreviewListSpaces(baseSpaceId: string, options?: any) {
    return VariablesApiFp(this.configuration)
      .getVariablePreviewListSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a variable set by Id.
   * @summary Get a VariableSetResource by ID
   * @param {string} id ID of the VariableSetResource to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApi
   */
  public getVariableSetById(id: string, options?: any) {
    return VariablesApiFp(this.configuration)
      .getVariableSetById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets a variable set by Id.
   * @summary Get a VariableSetResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the VariableSetResource to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApi
   */
  public getVariableSetByIdSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return VariablesApiFp(this.configuration)
      .getVariableSetByIdSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the variable sets in the supplied Octopus Deploy Space.
   * @summary Get a list of VariableSetResources
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApi
   */
  public listAllVariableSets(options?: any) {
    return VariablesApiFp(this.configuration)
      .listAllVariableSets(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the variable sets in the supplied Octopus Deploy Space.
   * @summary Get a list of VariableSetResources
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApi
   */
  public listAllVariableSetsSpaces(baseSpaceId: string, options?: any) {
    return VariablesApiFp(this.configuration)
      .listAllVariableSetsSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates a variable set.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApi
   */
  public updateVariableSet(id: string, options?: any) {
    return VariablesApiFp(this.configuration)
      .updateVariableSet(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates a variable set.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VariablesApi
   */
  public updateVariableSetSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return VariablesApiFp(this.configuration)
      .updateVariableSetSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
