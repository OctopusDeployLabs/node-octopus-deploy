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
import { DeploymentResource } from "../model";
// @ts-ignore
import { DeploymentResourceCollection } from "../model";
/**
 * DeploymentsApi - axios parameter creator
 * @export
 */
export const DeploymentsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new deployment.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDeploymentCreate: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/deployments`;
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
     * Creates a new deployment.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDeploymentCreateSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createDeploymentCreateSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/deployments`.replace(
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
     * Deletes a deployment.
     * @summary Delete a DeploymentResource by ID
     * @param {string} id ID of the DeploymentResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDeployment: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteDeployment", "id", id);
      const localVarPath = `/deployments/{id}`.replace(
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
     * Deletes a deployment.
     * @summary Delete a DeploymentResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the DeploymentResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDeploymentSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("deleteDeploymentSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteDeploymentSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/deployments/{id}`
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
     *
     * @summary Get a Deployment by ID
     * @param {string} id ID of the Deployment to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getDeploymentById", "id", id);
      const localVarPath = `/deployments/{id}`.replace(
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
     * @summary Get a Deployment by ID
     * @param {string} id ID of the Deployment to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getDeploymentByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getDeploymentByIdSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/deployments/{id}`
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
    /**
     * Lists all of the deployments in the supplied Octopus Deploy Space, from projects, releases and environments accessible by the current user. The results will be sorted from most recent to least recent deployment.
     * @summary Get a list of DeploymentResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexDeployments: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/deployments`;
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

      if (skip !== undefined) {
        localVarQueryParameter["skip"] = skip;
      }

      if (take !== undefined) {
        localVarQueryParameter["take"] = take;
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
     * Lists all of the deployments in the supplied Octopus Deploy Space, from projects, releases and environments accessible by the current user. The results will be sorted from most recent to least recent deployment.
     * @summary Get a list of DeploymentResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexDeploymentsSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("indexDeploymentsSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/deployments`.replace(
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

      if (skip !== undefined) {
        localVarQueryParameter["skip"] = skip;
      }

      if (take !== undefined) {
        localVarQueryParameter["take"] = take;
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
  };
};

/**
 * DeploymentsApi - functional programming interface
 * @export
 */
export const DeploymentsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    DeploymentsApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a new deployment.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createDeploymentCreate(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createDeploymentCreate(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Creates a new deployment.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createDeploymentCreateSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createDeploymentCreateSpaces(
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
     * Deletes a deployment.
     * @summary Delete a DeploymentResource by ID
     * @param {string} id ID of the DeploymentResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteDeployment(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteDeployment(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Deletes a deployment.
     * @summary Delete a DeploymentResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the DeploymentResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteDeploymentSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteDeploymentSpaces(
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
     *
     * @summary Get a Deployment by ID
     * @param {string} id ID of the Deployment to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDeploymentById(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Get a Deployment by ID
     * @param {string} id ID of the Deployment to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDeploymentByIdSpaces(
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
    /**
     * Lists all of the deployments in the supplied Octopus Deploy Space, from projects, releases and environments accessible by the current user. The results will be sorted from most recent to least recent deployment.
     * @summary Get a list of DeploymentResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexDeployments(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexDeployments(skip, take, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Lists all of the deployments in the supplied Octopus Deploy Space, from projects, releases and environments accessible by the current user. The results will be sorted from most recent to least recent deployment.
     * @summary Get a list of DeploymentResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexDeploymentsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexDeploymentsSpaces(
          baseSpaceId,
          skip,
          take,
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
 * DeploymentsApi - factory interface
 * @export
 */
export const DeploymentsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = DeploymentsApiFp(configuration);
  return {
    /**
     * Creates a new deployment.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDeploymentCreate(options?: any): AxiosPromise<DeploymentResource> {
      return localVarFp
        .createDeploymentCreate(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new deployment.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDeploymentCreateSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<DeploymentResource> {
      return localVarFp
        .createDeploymentCreateSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes a deployment.
     * @summary Delete a DeploymentResource by ID
     * @param {string} id ID of the DeploymentResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDeployment(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteDeployment(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes a deployment.
     * @summary Delete a DeploymentResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the DeploymentResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDeploymentSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteDeploymentSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Deployment by ID
     * @param {string} id ID of the Deployment to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentById(
      id: string,
      options?: any
    ): AxiosPromise<DeploymentResource> {
      return localVarFp
        .getDeploymentById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Deployment by ID
     * @param {string} id ID of the Deployment to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<DeploymentResource> {
      return localVarFp
        .getDeploymentByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the deployments in the supplied Octopus Deploy Space, from projects, releases and environments accessible by the current user. The results will be sorted from most recent to least recent deployment.
     * @summary Get a list of DeploymentResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexDeployments(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<DeploymentResourceCollection> {
      return localVarFp
        .indexDeployments(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the deployments in the supplied Octopus Deploy Space, from projects, releases and environments accessible by the current user. The results will be sorted from most recent to least recent deployment.
     * @summary Get a list of DeploymentResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexDeploymentsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<DeploymentResourceCollection> {
      return localVarFp
        .indexDeploymentsSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * DeploymentsApi - interface
 * @export
 * @interface DeploymentsApi
 */
export interface DeploymentsApiInterface {
  /**
   * Creates a new deployment.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentsApiInterface
   */
  createDeploymentCreate(options?: any): AxiosPromise<DeploymentResource>;

  /**
   * Creates a new deployment.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentsApiInterface
   */
  createDeploymentCreateSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<DeploymentResource>;

  /**
   * Deletes a deployment.
   * @summary Delete a DeploymentResource by ID
   * @param {string} id ID of the DeploymentResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentsApiInterface
   */
  deleteDeployment(id: string, options?: any): AxiosPromise<void>;

  /**
   * Deletes a deployment.
   * @summary Delete a DeploymentResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the DeploymentResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentsApiInterface
   */
  deleteDeploymentSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   *
   * @summary Get a Deployment by ID
   * @param {string} id ID of the Deployment to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentsApiInterface
   */
  getDeploymentById(
    id: string,
    options?: any
  ): AxiosPromise<DeploymentResource>;

  /**
   *
   * @summary Get a Deployment by ID
   * @param {string} id ID of the Deployment to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentsApiInterface
   */
  getDeploymentByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<DeploymentResource>;

  /**
   * Lists all of the deployments in the supplied Octopus Deploy Space, from projects, releases and environments accessible by the current user. The results will be sorted from most recent to least recent deployment.
   * @summary Get a list of DeploymentResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentsApiInterface
   */
  indexDeployments(
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<DeploymentResourceCollection>;

  /**
   * Lists all of the deployments in the supplied Octopus Deploy Space, from projects, releases and environments accessible by the current user. The results will be sorted from most recent to least recent deployment.
   * @summary Get a list of DeploymentResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentsApiInterface
   */
  indexDeploymentsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<DeploymentResourceCollection>;
}

/**
 * DeploymentsApi - object-oriented interface
 * @export
 * @class DeploymentsApi
 * @extends {BaseAPI}
 */
export class DeploymentsApi extends BaseAPI implements DeploymentsApiInterface {
  /**
   * Creates a new deployment.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentsApi
   */
  public createDeploymentCreate(options?: any) {
    return DeploymentsApiFp(this.configuration)
      .createDeploymentCreate(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new deployment.
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentsApi
   */
  public createDeploymentCreateSpaces(baseSpaceId: string, options?: any) {
    return DeploymentsApiFp(this.configuration)
      .createDeploymentCreateSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes a deployment.
   * @summary Delete a DeploymentResource by ID
   * @param {string} id ID of the DeploymentResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentsApi
   */
  public deleteDeployment(id: string, options?: any) {
    return DeploymentsApiFp(this.configuration)
      .deleteDeployment(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes a deployment.
   * @summary Delete a DeploymentResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the DeploymentResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentsApi
   */
  public deleteDeploymentSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return DeploymentsApiFp(this.configuration)
      .deleteDeploymentSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Deployment by ID
   * @param {string} id ID of the Deployment to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentsApi
   */
  public getDeploymentById(id: string, options?: any) {
    return DeploymentsApiFp(this.configuration)
      .getDeploymentById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Deployment by ID
   * @param {string} id ID of the Deployment to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentsApi
   */
  public getDeploymentByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ) {
    return DeploymentsApiFp(this.configuration)
      .getDeploymentByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the deployments in the supplied Octopus Deploy Space, from projects, releases and environments accessible by the current user. The results will be sorted from most recent to least recent deployment.
   * @summary Get a list of DeploymentResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentsApi
   */
  public indexDeployments(skip?: number, take?: number, options?: any) {
    return DeploymentsApiFp(this.configuration)
      .indexDeployments(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the deployments in the supplied Octopus Deploy Space, from projects, releases and environments accessible by the current user. The results will be sorted from most recent to least recent deployment.
   * @summary Get a list of DeploymentResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentsApi
   */
  public indexDeploymentsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return DeploymentsApiFp(this.configuration)
      .indexDeploymentsSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
