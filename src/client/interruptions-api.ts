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
import { InterruptionResource } from "../model";
// @ts-ignore
import { InterruptionResourceCollection } from "../model";
// @ts-ignore
import { UserResource } from "../model";
/**
 * InterruptionsApi - axios parameter creator
 * @export
 */
export const InterruptionsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Submits a dictionary of form values for the interruption. Only the user with responsibility for this interruption can submit this form.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSubmitInterruption: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createSubmitInterruption", "id", id);
      const localVarPath = `/interruptions/{id}/submit`.replace(
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
    /**
     * Submits a dictionary of form values for the interruption. Only the user with responsibility for this interruption can submit this form.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSubmitInterruptionSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "createSubmitInterruptionSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createSubmitInterruptionSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/interruptions/{id}/submit`
        .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
     *
     * @summary Get an Interruption by ID
     * @param {string} id ID of the Interruption to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInterruptionById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getInterruptionById", "id", id);
      const localVarPath = `/interruptions/{id}`.replace(
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
     * @summary Get an Interruption by ID
     * @param {string} id ID of the Interruption to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInterruptionByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getInterruptionByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getInterruptionByIdSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/interruptions/{id}`
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
     * Gets the user that is currently responsible for this interruption.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInterruptionResponsibility: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getInterruptionResponsibility", "id", id);
      const localVarPath = `/interruptions/{id}/responsible`.replace(
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
     * Gets the user that is currently responsible for this interruption.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInterruptionResponsibilitySpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getInterruptionResponsibilitySpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getInterruptionResponsibilitySpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/interruptions/{id}/responsible`
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
     * Lists interruptions for user attention. The results will be sorted by date from most recently to least recently created.
     * @summary Get a list of InterruptionResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexInterruptions: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/interruptions`;
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
     * Lists interruptions for user attention. The results will be sorted by date from most recently to least recently created.
     * @summary Get a list of InterruptionResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexInterruptionsSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("indexInterruptionsSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/interruptions`.replace(
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
    /**
     * Allows the current user to take responsibility for this interruption. Only users in one of the responsible teams on this interruption can take responsibility for it.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateInterruptionResponsibility: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateInterruptionResponsibility", "id", id);
      const localVarPath = `/interruptions/{id}/responsible`.replace(
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
     * Allows the current user to take responsibility for this interruption. Only users in one of the responsible teams on this interruption can take responsibility for it.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateInterruptionResponsibilitySpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "updateInterruptionResponsibilitySpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateInterruptionResponsibilitySpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/interruptions/{id}/responsible`
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
 * InterruptionsApi - functional programming interface
 * @export
 */
export const InterruptionsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = InterruptionsApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Submits a dictionary of form values for the interruption. Only the user with responsibility for this interruption can submit this form.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSubmitInterruption(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<InterruptionResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createSubmitInterruption(
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
     * Submits a dictionary of form values for the interruption. Only the user with responsibility for this interruption can submit this form.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSubmitInterruptionSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<InterruptionResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createSubmitInterruptionSpaces(
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
     * @summary Get an Interruption by ID
     * @param {string} id ID of the Interruption to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getInterruptionById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<InterruptionResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getInterruptionById(
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
     * @summary Get an Interruption by ID
     * @param {string} id ID of the Interruption to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getInterruptionByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<InterruptionResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getInterruptionByIdSpaces(
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
     * Gets the user that is currently responsible for this interruption.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getInterruptionResponsibility(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getInterruptionResponsibility(
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
     * Gets the user that is currently responsible for this interruption.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getInterruptionResponsibilitySpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getInterruptionResponsibilitySpaces(
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
     * Lists interruptions for user attention. The results will be sorted by date from most recently to least recently created.
     * @summary Get a list of InterruptionResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexInterruptions(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<InterruptionResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexInterruptions(
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
     * Lists interruptions for user attention. The results will be sorted by date from most recently to least recently created.
     * @summary Get a list of InterruptionResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexInterruptionsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<InterruptionResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexInterruptionsSpaces(
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
    /**
     * Allows the current user to take responsibility for this interruption. Only users in one of the responsible teams on this interruption can take responsibility for it.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateInterruptionResponsibility(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateInterruptionResponsibility(
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
     * Allows the current user to take responsibility for this interruption. Only users in one of the responsible teams on this interruption can take responsibility for it.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateInterruptionResponsibilitySpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateInterruptionResponsibilitySpaces(
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
 * InterruptionsApi - factory interface
 * @export
 */
export const InterruptionsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = InterruptionsApiFp(configuration);
  return {
    /**
     * Submits a dictionary of form values for the interruption. Only the user with responsibility for this interruption can submit this form.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSubmitInterruption(
      id: string,
      options?: any
    ): AxiosPromise<InterruptionResource> {
      return localVarFp
        .createSubmitInterruption(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Submits a dictionary of form values for the interruption. Only the user with responsibility for this interruption can submit this form.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSubmitInterruptionSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<InterruptionResource> {
      return localVarFp
        .createSubmitInterruptionSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get an Interruption by ID
     * @param {string} id ID of the Interruption to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInterruptionById(
      id: string,
      options?: any
    ): AxiosPromise<InterruptionResource> {
      return localVarFp
        .getInterruptionById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get an Interruption by ID
     * @param {string} id ID of the Interruption to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInterruptionByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<InterruptionResource> {
      return localVarFp
        .getInterruptionByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets the user that is currently responsible for this interruption.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInterruptionResponsibility(
      id: string,
      options?: any
    ): AxiosPromise<UserResource> {
      return localVarFp
        .getInterruptionResponsibility(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets the user that is currently responsible for this interruption.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInterruptionResponsibilitySpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<UserResource> {
      return localVarFp
        .getInterruptionResponsibilitySpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists interruptions for user attention. The results will be sorted by date from most recently to least recently created.
     * @summary Get a list of InterruptionResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexInterruptions(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<InterruptionResourceCollection> {
      return localVarFp
        .indexInterruptions(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists interruptions for user attention. The results will be sorted by date from most recently to least recently created.
     * @summary Get a list of InterruptionResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexInterruptionsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<InterruptionResourceCollection> {
      return localVarFp
        .indexInterruptionsSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Allows the current user to take responsibility for this interruption. Only users in one of the responsible teams on this interruption can take responsibility for it.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateInterruptionResponsibility(
      id: string,
      options?: any
    ): AxiosPromise<UserResource> {
      return localVarFp
        .updateInterruptionResponsibility(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Allows the current user to take responsibility for this interruption. Only users in one of the responsible teams on this interruption can take responsibility for it.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateInterruptionResponsibilitySpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<UserResource> {
      return localVarFp
        .updateInterruptionResponsibilitySpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * InterruptionsApi - interface
 * @export
 * @interface InterruptionsApi
 */
export interface InterruptionsApiInterface {
  /**
   * Submits a dictionary of form values for the interruption. Only the user with responsibility for this interruption can submit this form.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApiInterface
   */
  createSubmitInterruption(
    id: string,
    options?: any
  ): AxiosPromise<InterruptionResource>;

  /**
   * Submits a dictionary of form values for the interruption. Only the user with responsibility for this interruption can submit this form.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApiInterface
   */
  createSubmitInterruptionSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<InterruptionResource>;

  /**
   *
   * @summary Get an Interruption by ID
   * @param {string} id ID of the Interruption to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApiInterface
   */
  getInterruptionById(
    id: string,
    options?: any
  ): AxiosPromise<InterruptionResource>;

  /**
   *
   * @summary Get an Interruption by ID
   * @param {string} id ID of the Interruption to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApiInterface
   */
  getInterruptionByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<InterruptionResource>;

  /**
   * Gets the user that is currently responsible for this interruption.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApiInterface
   */
  getInterruptionResponsibility(
    id: string,
    options?: any
  ): AxiosPromise<UserResource>;

  /**
   * Gets the user that is currently responsible for this interruption.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApiInterface
   */
  getInterruptionResponsibilitySpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<UserResource>;

  /**
   * Lists interruptions for user attention. The results will be sorted by date from most recently to least recently created.
   * @summary Get a list of InterruptionResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApiInterface
   */
  indexInterruptions(
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<InterruptionResourceCollection>;

  /**
   * Lists interruptions for user attention. The results will be sorted by date from most recently to least recently created.
   * @summary Get a list of InterruptionResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApiInterface
   */
  indexInterruptionsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<InterruptionResourceCollection>;

  /**
   * Allows the current user to take responsibility for this interruption. Only users in one of the responsible teams on this interruption can take responsibility for it.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApiInterface
   */
  updateInterruptionResponsibility(
    id: string,
    options?: any
  ): AxiosPromise<UserResource>;

  /**
   * Allows the current user to take responsibility for this interruption. Only users in one of the responsible teams on this interruption can take responsibility for it.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApiInterface
   */
  updateInterruptionResponsibilitySpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<UserResource>;
}

/**
 * InterruptionsApi - object-oriented interface
 * @export
 * @class InterruptionsApi
 * @extends {BaseAPI}
 */
export class InterruptionsApi
  extends BaseAPI
  implements InterruptionsApiInterface {
  /**
   * Submits a dictionary of form values for the interruption. Only the user with responsibility for this interruption can submit this form.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApi
   */
  public createSubmitInterruption(id: string, options?: any) {
    return InterruptionsApiFp(this.configuration)
      .createSubmitInterruption(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Submits a dictionary of form values for the interruption. Only the user with responsibility for this interruption can submit this form.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApi
   */
  public createSubmitInterruptionSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return InterruptionsApiFp(this.configuration)
      .createSubmitInterruptionSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get an Interruption by ID
   * @param {string} id ID of the Interruption to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApi
   */
  public getInterruptionById(id: string, options?: any) {
    return InterruptionsApiFp(this.configuration)
      .getInterruptionById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get an Interruption by ID
   * @param {string} id ID of the Interruption to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApi
   */
  public getInterruptionByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ) {
    return InterruptionsApiFp(this.configuration)
      .getInterruptionByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets the user that is currently responsible for this interruption.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApi
   */
  public getInterruptionResponsibility(id: string, options?: any) {
    return InterruptionsApiFp(this.configuration)
      .getInterruptionResponsibility(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets the user that is currently responsible for this interruption.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApi
   */
  public getInterruptionResponsibilitySpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return InterruptionsApiFp(this.configuration)
      .getInterruptionResponsibilitySpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists interruptions for user attention. The results will be sorted by date from most recently to least recently created.
   * @summary Get a list of InterruptionResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApi
   */
  public indexInterruptions(skip?: number, take?: number, options?: any) {
    return InterruptionsApiFp(this.configuration)
      .indexInterruptions(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists interruptions for user attention. The results will be sorted by date from most recently to least recently created.
   * @summary Get a list of InterruptionResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApi
   */
  public indexInterruptionsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return InterruptionsApiFp(this.configuration)
      .indexInterruptionsSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Allows the current user to take responsibility for this interruption. Only users in one of the responsible teams on this interruption can take responsibility for it.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApi
   */
  public updateInterruptionResponsibility(id: string, options?: any) {
    return InterruptionsApiFp(this.configuration)
      .updateInterruptionResponsibility(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Allows the current user to take responsibility for this interruption. Only users in one of the responsible teams on this interruption can take responsibility for it.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InterruptionsApi
   */
  public updateInterruptionResponsibilitySpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return InterruptionsApiFp(this.configuration)
      .updateInterruptionResponsibilitySpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
