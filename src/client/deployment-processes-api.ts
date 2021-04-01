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
import { DeploymentProcessResource } from "../model";
// @ts-ignore
import { DeploymentProcessResourceCollection } from "../model";
// @ts-ignore
import { ReleaseTemplateResource } from "../model";
/**
 * DeploymentProcessesApi - axios parameter creator
 * @export
 */
export const DeploymentProcessesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Get a Deployment Process by ID.
     * @param {string} id ID of the DeploymentProcess to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentProcessById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getDeploymentProcessById", "id", id);
      const localVarPath = `/deploymentprocesses/{id}`.replace(
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
     * @summary Get a Deployment Process by ID.
     * @param {string} id ID of the DeploymentProcess to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentProcessByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getDeploymentProcessByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getDeploymentProcessByIdSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/deploymentprocesses/{id}`
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
     *
     * @summary Gets all of the information necessary for creating or editing a release using this deployment process.
     * @param {string} deploymentProcessId The ID of the deployment process to use. Example &#x60;deploymentprocess-projects-1&#x60;
     * @param {string} [channel] The ID of the channel to use. Example &#x60;Channels-12&#x60;
     * @param {string} [releaseId] The ID of the release to get variables from. Example &#x60;Releases-12&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReleaseTemplate: async (
      deploymentProcessId: string,
      channel?: string,
      releaseId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'deploymentProcessId' is not null or undefined
      assertParamExists(
        "getReleaseTemplate",
        "deploymentProcessId",
        deploymentProcessId
      );
      const localVarPath = `/deploymentprocesses/{deploymentProcessId}/template`.replace(
        `{${"deploymentProcessId"}}`,
        encodeURIComponent(String(deploymentProcessId))
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

      if (channel !== undefined) {
        localVarQueryParameter["channel"] = channel;
      }

      if (releaseId !== undefined) {
        localVarQueryParameter["releaseId"] = releaseId;
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
     *
     * @summary Gets all of the information necessary for creating or editing a release using this deployment process.
     * @param {string} deploymentProcessId The ID of the deployment process to use. Example &#x60;deploymentprocess-projects-1&#x60;
     * @param {string} baseSpaceId ID of the space
     * @param {string} [channel] The ID of the channel to use. Example &#x60;Channels-12&#x60;
     * @param {string} [releaseId] The ID of the release to get variables from. Example &#x60;Releases-12&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReleaseTemplateSpaces: async (
      deploymentProcessId: string,
      baseSpaceId: string,
      channel?: string,
      releaseId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'deploymentProcessId' is not null or undefined
      assertParamExists(
        "getReleaseTemplateSpaces",
        "deploymentProcessId",
        deploymentProcessId
      );
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getReleaseTemplateSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/deploymentprocesses/{deploymentProcessId}/template`
        .replace(
          `{${"deploymentProcessId"}}`,
          encodeURIComponent(String(deploymentProcessId))
        )
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

      if (channel !== undefined) {
        localVarQueryParameter["channel"] = channel;
      }

      if (releaseId !== undefined) {
        localVarQueryParameter["releaseId"] = releaseId;
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
     * Lists all the deployment processes in the supplied Octopus Deploy Space, sorted by Id.
     * @summary Lists all the deployment processes
     * @param {Array<string>} [ids] A list of DeploymentProcess IDs, to limit the matching of DeploymentProcesses to those with a particular ID. Example: [\&quot;deploymentprocess-Projects-1\&quot;, \&quot;deploymentprocess-Projects-2\&quot;]
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listDeploymentProcesses: async (
      ids?: Array<string>,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/deploymentprocesses`;
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

      if (ids) {
        localVarQueryParameter["ids"] = ids.join(COLLECTION_FORMATS.csv);
      }

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
     * Lists all the deployment processes in the supplied Octopus Deploy Space, sorted by Id.
     * @summary Lists all the deployment processes
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [ids] A list of DeploymentProcess IDs, to limit the matching of DeploymentProcesses to those with a particular ID. Example: [\&quot;deploymentprocess-Projects-1\&quot;, \&quot;deploymentprocess-Projects-2\&quot;]
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listDeploymentProcessesSpaces: async (
      baseSpaceId: string,
      ids?: Array<string>,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "listDeploymentProcessesSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/deploymentprocesses`.replace(
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

      if (ids) {
        localVarQueryParameter["ids"] = ids.join(COLLECTION_FORMATS.csv);
      }

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
     * Modifies a deployment process. Only allowed for deployment processes owned by a project (cannot be used to change the deployment process owned by a release).
     * @summary Modifies a deployment process
     * @param {string} id The ID of the deployment process to update. Example &#x60;deploymentprocess-Projects-1&#x60;
     * @param {DeploymentProcessResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDeploymentProcessById: async (
      id: string,
      body?: DeploymentProcessResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateDeploymentProcessById", "id", id);
      const localVarPath = `/deploymentprocesses/{id}`.replace(
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

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Modifies a deployment process. Only allowed for deployment processes owned by a project (cannot be used to change the deployment process owned by a release).
     * @summary Modifies a deployment process
     * @param {string} id The ID of the deployment process to update. Example &#x60;deploymentprocess-Projects-1&#x60;
     * @param {string} baseSpaceId ID of the space
     * @param {DeploymentProcessResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDeploymentProcessByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      body?: DeploymentProcessResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateDeploymentProcessByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "updateDeploymentProcessByIdSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/deploymentprocesses/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)));
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

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * DeploymentProcessesApi - functional programming interface
 * @export
 */
export const DeploymentProcessesApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator = DeploymentProcessesApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     *
     * @summary Get a Deployment Process by ID.
     * @param {string} id ID of the DeploymentProcess to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentProcessById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentProcessResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDeploymentProcessById(
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
     * @summary Get a Deployment Process by ID.
     * @param {string} id ID of the DeploymentProcess to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentProcessByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentProcessResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDeploymentProcessByIdSpaces(
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
     *
     * @summary Gets all of the information necessary for creating or editing a release using this deployment process.
     * @param {string} deploymentProcessId The ID of the deployment process to use. Example &#x60;deploymentprocess-projects-1&#x60;
     * @param {string} [channel] The ID of the channel to use. Example &#x60;Channels-12&#x60;
     * @param {string} [releaseId] The ID of the release to get variables from. Example &#x60;Releases-12&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReleaseTemplate(
      deploymentProcessId: string,
      channel?: string,
      releaseId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseTemplateResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getReleaseTemplate(
        deploymentProcessId,
        channel,
        releaseId,
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
     * @summary Gets all of the information necessary for creating or editing a release using this deployment process.
     * @param {string} deploymentProcessId The ID of the deployment process to use. Example &#x60;deploymentprocess-projects-1&#x60;
     * @param {string} baseSpaceId ID of the space
     * @param {string} [channel] The ID of the channel to use. Example &#x60;Channels-12&#x60;
     * @param {string} [releaseId] The ID of the release to get variables from. Example &#x60;Releases-12&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReleaseTemplateSpaces(
      deploymentProcessId: string,
      baseSpaceId: string,
      channel?: string,
      releaseId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReleaseTemplateResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getReleaseTemplateSpaces(
        deploymentProcessId,
        baseSpaceId,
        channel,
        releaseId,
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
     * Lists all the deployment processes in the supplied Octopus Deploy Space, sorted by Id.
     * @summary Lists all the deployment processes
     * @param {Array<string>} [ids] A list of DeploymentProcess IDs, to limit the matching of DeploymentProcesses to those with a particular ID. Example: [\&quot;deploymentprocess-Projects-1\&quot;, \&quot;deploymentprocess-Projects-2\&quot;]
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listDeploymentProcesses(
      ids?: Array<string>,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentProcessResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listDeploymentProcesses(
        ids,
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
    /**
     * Lists all the deployment processes in the supplied Octopus Deploy Space, sorted by Id.
     * @summary Lists all the deployment processes
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [ids] A list of DeploymentProcess IDs, to limit the matching of DeploymentProcesses to those with a particular ID. Example: [\&quot;deploymentprocess-Projects-1\&quot;, \&quot;deploymentprocess-Projects-2\&quot;]
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listDeploymentProcessesSpaces(
      baseSpaceId: string,
      ids?: Array<string>,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentProcessResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listDeploymentProcessesSpaces(
        baseSpaceId,
        ids,
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
    /**
     * Modifies a deployment process. Only allowed for deployment processes owned by a project (cannot be used to change the deployment process owned by a release).
     * @summary Modifies a deployment process
     * @param {string} id The ID of the deployment process to update. Example &#x60;deploymentprocess-Projects-1&#x60;
     * @param {DeploymentProcessResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDeploymentProcessById(
      id: string,
      body?: DeploymentProcessResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentProcessResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateDeploymentProcessById(
        id,
        body,
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
     * Modifies a deployment process. Only allowed for deployment processes owned by a project (cannot be used to change the deployment process owned by a release).
     * @summary Modifies a deployment process
     * @param {string} id The ID of the deployment process to update. Example &#x60;deploymentprocess-Projects-1&#x60;
     * @param {string} baseSpaceId ID of the space
     * @param {DeploymentProcessResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDeploymentProcessByIdSpaces(
      id: string,
      baseSpaceId: string,
      body?: DeploymentProcessResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeploymentProcessResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateDeploymentProcessByIdSpaces(
        id,
        baseSpaceId,
        body,
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
 * DeploymentProcessesApi - factory interface
 * @export
 */
export const DeploymentProcessesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = DeploymentProcessesApiFp(configuration);
  return {
    /**
     *
     * @summary Get a Deployment Process by ID.
     * @param {string} id ID of the DeploymentProcess to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentProcessById(
      id: string,
      options?: any
    ): AxiosPromise<DeploymentProcessResource> {
      return localVarFp
        .getDeploymentProcessById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Deployment Process by ID.
     * @param {string} id ID of the DeploymentProcess to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentProcessByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<DeploymentProcessResource> {
      return localVarFp
        .getDeploymentProcessByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Gets all of the information necessary for creating or editing a release using this deployment process.
     * @param {string} deploymentProcessId The ID of the deployment process to use. Example &#x60;deploymentprocess-projects-1&#x60;
     * @param {string} [channel] The ID of the channel to use. Example &#x60;Channels-12&#x60;
     * @param {string} [releaseId] The ID of the release to get variables from. Example &#x60;Releases-12&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReleaseTemplate(
      deploymentProcessId: string,
      channel?: string,
      releaseId?: string,
      options?: any
    ): AxiosPromise<ReleaseTemplateResource> {
      return localVarFp
        .getReleaseTemplate(deploymentProcessId, channel, releaseId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Gets all of the information necessary for creating or editing a release using this deployment process.
     * @param {string} deploymentProcessId The ID of the deployment process to use. Example &#x60;deploymentprocess-projects-1&#x60;
     * @param {string} baseSpaceId ID of the space
     * @param {string} [channel] The ID of the channel to use. Example &#x60;Channels-12&#x60;
     * @param {string} [releaseId] The ID of the release to get variables from. Example &#x60;Releases-12&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReleaseTemplateSpaces(
      deploymentProcessId: string,
      baseSpaceId: string,
      channel?: string,
      releaseId?: string,
      options?: any
    ): AxiosPromise<ReleaseTemplateResource> {
      return localVarFp
        .getReleaseTemplateSpaces(
          deploymentProcessId,
          baseSpaceId,
          channel,
          releaseId,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the deployment processes in the supplied Octopus Deploy Space, sorted by Id.
     * @summary Lists all the deployment processes
     * @param {Array<string>} [ids] A list of DeploymentProcess IDs, to limit the matching of DeploymentProcesses to those with a particular ID. Example: [\&quot;deploymentprocess-Projects-1\&quot;, \&quot;deploymentprocess-Projects-2\&quot;]
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listDeploymentProcesses(
      ids?: Array<string>,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<DeploymentProcessResourceCollection> {
      return localVarFp
        .listDeploymentProcesses(ids, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all the deployment processes in the supplied Octopus Deploy Space, sorted by Id.
     * @summary Lists all the deployment processes
     * @param {string} baseSpaceId ID of the space
     * @param {Array<string>} [ids] A list of DeploymentProcess IDs, to limit the matching of DeploymentProcesses to those with a particular ID. Example: [\&quot;deploymentprocess-Projects-1\&quot;, \&quot;deploymentprocess-Projects-2\&quot;]
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listDeploymentProcessesSpaces(
      baseSpaceId: string,
      ids?: Array<string>,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<DeploymentProcessResourceCollection> {
      return localVarFp
        .listDeploymentProcessesSpaces(baseSpaceId, ids, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies a deployment process. Only allowed for deployment processes owned by a project (cannot be used to change the deployment process owned by a release).
     * @summary Modifies a deployment process
     * @param {string} id The ID of the deployment process to update. Example &#x60;deploymentprocess-Projects-1&#x60;
     * @param {DeploymentProcessResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDeploymentProcessById(
      id: string,
      body?: DeploymentProcessResource,
      options?: any
    ): AxiosPromise<DeploymentProcessResource> {
      return localVarFp
        .updateDeploymentProcessById(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies a deployment process. Only allowed for deployment processes owned by a project (cannot be used to change the deployment process owned by a release).
     * @summary Modifies a deployment process
     * @param {string} id The ID of the deployment process to update. Example &#x60;deploymentprocess-Projects-1&#x60;
     * @param {string} baseSpaceId ID of the space
     * @param {DeploymentProcessResource} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDeploymentProcessByIdSpaces(
      id: string,
      baseSpaceId: string,
      body?: DeploymentProcessResource,
      options?: any
    ): AxiosPromise<DeploymentProcessResource> {
      return localVarFp
        .updateDeploymentProcessByIdSpaces(id, baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * DeploymentProcessesApi - interface
 * @export
 * @interface DeploymentProcessesApi
 */
export interface DeploymentProcessesApiInterface {
  /**
   *
   * @summary Get a Deployment Process by ID.
   * @param {string} id ID of the DeploymentProcess to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentProcessesApiInterface
   */
  getDeploymentProcessById(
    id: string,
    options?: any
  ): AxiosPromise<DeploymentProcessResource>;

  /**
   *
   * @summary Get a Deployment Process by ID.
   * @param {string} id ID of the DeploymentProcess to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentProcessesApiInterface
   */
  getDeploymentProcessByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<DeploymentProcessResource>;

  /**
   *
   * @summary Gets all of the information necessary for creating or editing a release using this deployment process.
   * @param {string} deploymentProcessId The ID of the deployment process to use. Example &#x60;deploymentprocess-projects-1&#x60;
   * @param {string} [channel] The ID of the channel to use. Example &#x60;Channels-12&#x60;
   * @param {string} [releaseId] The ID of the release to get variables from. Example &#x60;Releases-12&#x60;
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentProcessesApiInterface
   */
  getReleaseTemplate(
    deploymentProcessId: string,
    channel?: string,
    releaseId?: string,
    options?: any
  ): AxiosPromise<ReleaseTemplateResource>;

  /**
   *
   * @summary Gets all of the information necessary for creating or editing a release using this deployment process.
   * @param {string} deploymentProcessId The ID of the deployment process to use. Example &#x60;deploymentprocess-projects-1&#x60;
   * @param {string} baseSpaceId ID of the space
   * @param {string} [channel] The ID of the channel to use. Example &#x60;Channels-12&#x60;
   * @param {string} [releaseId] The ID of the release to get variables from. Example &#x60;Releases-12&#x60;
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentProcessesApiInterface
   */
  getReleaseTemplateSpaces(
    deploymentProcessId: string,
    baseSpaceId: string,
    channel?: string,
    releaseId?: string,
    options?: any
  ): AxiosPromise<ReleaseTemplateResource>;

  /**
   * Lists all the deployment processes in the supplied Octopus Deploy Space, sorted by Id.
   * @summary Lists all the deployment processes
   * @param {Array<string>} [ids] A list of DeploymentProcess IDs, to limit the matching of DeploymentProcesses to those with a particular ID. Example: [\&quot;deploymentprocess-Projects-1\&quot;, \&quot;deploymentprocess-Projects-2\&quot;]
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentProcessesApiInterface
   */
  listDeploymentProcesses(
    ids?: Array<string>,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<DeploymentProcessResourceCollection>;

  /**
   * Lists all the deployment processes in the supplied Octopus Deploy Space, sorted by Id.
   * @summary Lists all the deployment processes
   * @param {string} baseSpaceId ID of the space
   * @param {Array<string>} [ids] A list of DeploymentProcess IDs, to limit the matching of DeploymentProcesses to those with a particular ID. Example: [\&quot;deploymentprocess-Projects-1\&quot;, \&quot;deploymentprocess-Projects-2\&quot;]
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentProcessesApiInterface
   */
  listDeploymentProcessesSpaces(
    baseSpaceId: string,
    ids?: Array<string>,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<DeploymentProcessResourceCollection>;

  /**
   * Modifies a deployment process. Only allowed for deployment processes owned by a project (cannot be used to change the deployment process owned by a release).
   * @summary Modifies a deployment process
   * @param {string} id The ID of the deployment process to update. Example &#x60;deploymentprocess-Projects-1&#x60;
   * @param {DeploymentProcessResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentProcessesApiInterface
   */
  updateDeploymentProcessById(
    id: string,
    body?: DeploymentProcessResource,
    options?: any
  ): AxiosPromise<DeploymentProcessResource>;

  /**
   * Modifies a deployment process. Only allowed for deployment processes owned by a project (cannot be used to change the deployment process owned by a release).
   * @summary Modifies a deployment process
   * @param {string} id The ID of the deployment process to update. Example &#x60;deploymentprocess-Projects-1&#x60;
   * @param {string} baseSpaceId ID of the space
   * @param {DeploymentProcessResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentProcessesApiInterface
   */
  updateDeploymentProcessByIdSpaces(
    id: string,
    baseSpaceId: string,
    body?: DeploymentProcessResource,
    options?: any
  ): AxiosPromise<DeploymentProcessResource>;
}

/**
 * DeploymentProcessesApi - object-oriented interface
 * @export
 * @class DeploymentProcessesApi
 * @extends {BaseAPI}
 */
export class DeploymentProcessesApi
  extends BaseAPI
  implements DeploymentProcessesApiInterface {
  /**
   *
   * @summary Get a Deployment Process by ID.
   * @param {string} id ID of the DeploymentProcess to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentProcessesApi
   */
  public getDeploymentProcessById(id: string, options?: any) {
    return DeploymentProcessesApiFp(this.configuration)
      .getDeploymentProcessById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Deployment Process by ID.
   * @param {string} id ID of the DeploymentProcess to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentProcessesApi
   */
  public getDeploymentProcessByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ) {
    return DeploymentProcessesApiFp(this.configuration)
      .getDeploymentProcessByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Gets all of the information necessary for creating or editing a release using this deployment process.
   * @param {string} deploymentProcessId The ID of the deployment process to use. Example &#x60;deploymentprocess-projects-1&#x60;
   * @param {string} [channel] The ID of the channel to use. Example &#x60;Channels-12&#x60;
   * @param {string} [releaseId] The ID of the release to get variables from. Example &#x60;Releases-12&#x60;
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentProcessesApi
   */
  public getReleaseTemplate(
    deploymentProcessId: string,
    channel?: string,
    releaseId?: string,
    options?: any
  ) {
    return DeploymentProcessesApiFp(this.configuration)
      .getReleaseTemplate(deploymentProcessId, channel, releaseId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Gets all of the information necessary for creating or editing a release using this deployment process.
   * @param {string} deploymentProcessId The ID of the deployment process to use. Example &#x60;deploymentprocess-projects-1&#x60;
   * @param {string} baseSpaceId ID of the space
   * @param {string} [channel] The ID of the channel to use. Example &#x60;Channels-12&#x60;
   * @param {string} [releaseId] The ID of the release to get variables from. Example &#x60;Releases-12&#x60;
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentProcessesApi
   */
  public getReleaseTemplateSpaces(
    deploymentProcessId: string,
    baseSpaceId: string,
    channel?: string,
    releaseId?: string,
    options?: any
  ) {
    return DeploymentProcessesApiFp(this.configuration)
      .getReleaseTemplateSpaces(
        deploymentProcessId,
        baseSpaceId,
        channel,
        releaseId,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the deployment processes in the supplied Octopus Deploy Space, sorted by Id.
   * @summary Lists all the deployment processes
   * @param {Array<string>} [ids] A list of DeploymentProcess IDs, to limit the matching of DeploymentProcesses to those with a particular ID. Example: [\&quot;deploymentprocess-Projects-1\&quot;, \&quot;deploymentprocess-Projects-2\&quot;]
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentProcessesApi
   */
  public listDeploymentProcesses(
    ids?: Array<string>,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return DeploymentProcessesApiFp(this.configuration)
      .listDeploymentProcesses(ids, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all the deployment processes in the supplied Octopus Deploy Space, sorted by Id.
   * @summary Lists all the deployment processes
   * @param {string} baseSpaceId ID of the space
   * @param {Array<string>} [ids] A list of DeploymentProcess IDs, to limit the matching of DeploymentProcesses to those with a particular ID. Example: [\&quot;deploymentprocess-Projects-1\&quot;, \&quot;deploymentprocess-Projects-2\&quot;]
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentProcessesApi
   */
  public listDeploymentProcessesSpaces(
    baseSpaceId: string,
    ids?: Array<string>,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return DeploymentProcessesApiFp(this.configuration)
      .listDeploymentProcessesSpaces(baseSpaceId, ids, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies a deployment process. Only allowed for deployment processes owned by a project (cannot be used to change the deployment process owned by a release).
   * @summary Modifies a deployment process
   * @param {string} id The ID of the deployment process to update. Example &#x60;deploymentprocess-Projects-1&#x60;
   * @param {DeploymentProcessResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentProcessesApi
   */
  public updateDeploymentProcessById(
    id: string,
    body?: DeploymentProcessResource,
    options?: any
  ) {
    return DeploymentProcessesApiFp(this.configuration)
      .updateDeploymentProcessById(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies a deployment process. Only allowed for deployment processes owned by a project (cannot be used to change the deployment process owned by a release).
   * @summary Modifies a deployment process
   * @param {string} id The ID of the deployment process to update. Example &#x60;deploymentprocess-Projects-1&#x60;
   * @param {string} baseSpaceId ID of the space
   * @param {DeploymentProcessResource} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeploymentProcessesApi
   */
  public updateDeploymentProcessByIdSpaces(
    id: string,
    baseSpaceId: string,
    body?: DeploymentProcessResource,
    options?: any
  ) {
    return DeploymentProcessesApiFp(this.configuration)
      .updateDeploymentProcessByIdSpaces(id, baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
