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
import { ArtifactResource } from "../model";
// @ts-ignore
import { ArtifactResourceCollection } from "../model";
/**
 * ArtifactsApi - axios parameter creator
 * @export
 */
export const ArtifactsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new artifact.
     * @summary Create a ArtifactResource
     * @param {ArtifactResource} [body] The ArtifactResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createArtifact: async (
      body?: ArtifactResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/artifacts`;
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
     * Creates a new artifact.
     * @summary Create a ArtifactResource
     * @param {string} baseSpaceId ID of the space
     * @param {ArtifactResource} [body] The ArtifactResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createArtifactSpaces: async (
      baseSpaceId: string,
      body?: ArtifactResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("createArtifactSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/artifacts`.replace(
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
     * Deletes an existing artifact.
     * @summary Delete a ArtifactResource by ID
     * @param {string} id ID of the ArtifactResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteArtifact: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteArtifact", "id", id);
      const localVarPath = `/artifacts/{id}`.replace(
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
     * Deletes an existing artifact.
     * @summary Delete a ArtifactResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ArtifactResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteArtifactSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("deleteArtifactSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteArtifactSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/artifacts/{id}`
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
     * @summary Get an Artifact by ID
     * @param {string} id ID of the Artifact to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getArtifactById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getArtifactById", "id", id);
      const localVarPath = `/artifacts/{id}`.replace(
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
     * @summary Get an Artifact by ID
     * @param {string} id ID of the Artifact to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getArtifactByIdSpaces: async (
      id: string,
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getArtifactByIdSpaces", "id", id);
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getArtifactByIdSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/artifacts/{id}`
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
     * Gets the content associated with an artifact.
     * @param {string} id ID of the artifact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getArtifactContent: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getArtifactContent", "id", id);
      const localVarPath = `/artifacts/{id}/content`.replace(
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
     * Gets the content associated with an artifact.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the artifact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getArtifactContentSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getArtifactContentSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getArtifactContentSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/artifacts/{id}/content`
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
     * Lists all of the artifacts in the supplied Octopus Deploy Space, from all releases. The results will be sorted by date from most recently to least recently created.
     * @summary Get a list of ArtifactResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexArtifacts: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/artifacts`;
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
     * Lists all of the artifacts in the supplied Octopus Deploy Space, from all releases. The results will be sorted by date from most recently to least recently created.
     * @summary Get a list of ArtifactResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexArtifactsSpaces: async (
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("indexArtifactsSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/artifacts`.replace(
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
     * Modifies an existing artifact.
     * @summary Modify a ArtifactResource by ID
     * @param {string} id ID of the ArtifactResource to modify
     * @param {ArtifactResource} [body] The ArtifactResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateArtifact: async (
      id: string,
      body?: ArtifactResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateArtifact", "id", id);
      const localVarPath = `/artifacts/{id}`.replace(
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
     * Sets the content associated with an artifact.
     * @param {string} id ID of the artifact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateArtifactContent: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateArtifactContent", "id", id);
      const localVarPath = `/artifacts/{id}/content`.replace(
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
     * Sets the content associated with an artifact.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the artifact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateArtifactContentSpaces: async (
      baseSpaceId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "updateArtifactContentSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateArtifactContentSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/artifacts/{id}/content`
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
    /**
     * Modifies an existing artifact.
     * @summary Modify a ArtifactResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ArtifactResource to modify
     * @param {ArtifactResource} [body] The ArtifactResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateArtifactSpaces: async (
      baseSpaceId: string,
      id: string,
      body?: ArtifactResource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("updateArtifactSpaces", "baseSpaceId", baseSpaceId);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateArtifactSpaces", "id", id);
      const localVarPath = `/{baseSpaceId}/artifacts/{id}`
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
 * ArtifactsApi - functional programming interface
 * @export
 */
export const ArtifactsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ArtifactsApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Creates a new artifact.
     * @summary Create a ArtifactResource
     * @param {ArtifactResource} [body] The ArtifactResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createArtifact(
      body?: ArtifactResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ArtifactResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createArtifact(
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
     * Creates a new artifact.
     * @summary Create a ArtifactResource
     * @param {string} baseSpaceId ID of the space
     * @param {ArtifactResource} [body] The ArtifactResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createArtifactSpaces(
      baseSpaceId: string,
      body?: ArtifactResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ArtifactResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createArtifactSpaces(
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
    /**
     * Deletes an existing artifact.
     * @summary Delete a ArtifactResource by ID
     * @param {string} id ID of the ArtifactResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteArtifact(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteArtifact(
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
     * Deletes an existing artifact.
     * @summary Delete a ArtifactResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ArtifactResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteArtifactSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteArtifactSpaces(
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
     * @summary Get an Artifact by ID
     * @param {string} id ID of the Artifact to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getArtifactById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ArtifactResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getArtifactById(
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
     * @summary Get an Artifact by ID
     * @param {string} id ID of the Artifact to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getArtifactByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ArtifactResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getArtifactByIdSpaces(
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
     * Gets the content associated with an artifact.
     * @param {string} id ID of the artifact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getArtifactContent(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getArtifactContent(
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
     * Gets the content associated with an artifact.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the artifact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getArtifactContentSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getArtifactContentSpaces(
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
     * Lists all of the artifacts in the supplied Octopus Deploy Space, from all releases. The results will be sorted by date from most recently to least recently created.
     * @summary Get a list of ArtifactResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexArtifacts(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ArtifactResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexArtifacts(
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
     * Lists all of the artifacts in the supplied Octopus Deploy Space, from all releases. The results will be sorted by date from most recently to least recently created.
     * @summary Get a list of ArtifactResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexArtifactsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ArtifactResourceCollection>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.indexArtifactsSpaces(
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
     * Modifies an existing artifact.
     * @summary Modify a ArtifactResource by ID
     * @param {string} id ID of the ArtifactResource to modify
     * @param {ArtifactResource} [body] The ArtifactResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateArtifact(
      id: string,
      body?: ArtifactResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ArtifactResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateArtifact(
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
     * Sets the content associated with an artifact.
     * @param {string} id ID of the artifact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateArtifactContent(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateArtifactContent(
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
     * Sets the content associated with an artifact.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the artifact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateArtifactContentSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateArtifactContentSpaces(
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
     * Modifies an existing artifact.
     * @summary Modify a ArtifactResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ArtifactResource to modify
     * @param {ArtifactResource} [body] The ArtifactResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateArtifactSpaces(
      baseSpaceId: string,
      id: string,
      body?: ArtifactResource,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ArtifactResource>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateArtifactSpaces(
        baseSpaceId,
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
  };
};

/**
 * ArtifactsApi - factory interface
 * @export
 */
export const ArtifactsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ArtifactsApiFp(configuration);
  return {
    /**
     * Creates a new artifact.
     * @summary Create a ArtifactResource
     * @param {ArtifactResource} [body] The ArtifactResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createArtifact(
      body?: ArtifactResource,
      options?: any
    ): AxiosPromise<ArtifactResource> {
      return localVarFp
        .createArtifact(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a new artifact.
     * @summary Create a ArtifactResource
     * @param {string} baseSpaceId ID of the space
     * @param {ArtifactResource} [body] The ArtifactResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createArtifactSpaces(
      baseSpaceId: string,
      body?: ArtifactResource,
      options?: any
    ): AxiosPromise<ArtifactResource> {
      return localVarFp
        .createArtifactSpaces(baseSpaceId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing artifact.
     * @summary Delete a ArtifactResource by ID
     * @param {string} id ID of the ArtifactResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteArtifact(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteArtifact(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes an existing artifact.
     * @summary Delete a ArtifactResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ArtifactResource to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteArtifactSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteArtifactSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get an Artifact by ID
     * @param {string} id ID of the Artifact to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getArtifactById(id: string, options?: any): AxiosPromise<ArtifactResource> {
      return localVarFp
        .getArtifactById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get an Artifact by ID
     * @param {string} id ID of the Artifact to load
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getArtifactByIdSpaces(
      id: string,
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<ArtifactResource> {
      return localVarFp
        .getArtifactByIdSpaces(id, baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets the content associated with an artifact.
     * @param {string} id ID of the artifact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getArtifactContent(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .getArtifactContent(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets the content associated with an artifact.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the artifact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getArtifactContentSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .getArtifactContentSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the artifacts in the supplied Octopus Deploy Space, from all releases. The results will be sorted by date from most recently to least recently created.
     * @summary Get a list of ArtifactResources
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexArtifacts(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ArtifactResourceCollection> {
      return localVarFp
        .indexArtifacts(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Lists all of the artifacts in the supplied Octopus Deploy Space, from all releases. The results will be sorted by date from most recently to least recently created.
     * @summary Get a list of ArtifactResources
     * @param {string} baseSpaceId ID of the space
     * @param {number} [skip] Number of items to skip
     * @param {number} [take] Number of items to take
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexArtifactsSpaces(
      baseSpaceId: string,
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<ArtifactResourceCollection> {
      return localVarFp
        .indexArtifactsSpaces(baseSpaceId, skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing artifact.
     * @summary Modify a ArtifactResource by ID
     * @param {string} id ID of the ArtifactResource to modify
     * @param {ArtifactResource} [body] The ArtifactResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateArtifact(
      id: string,
      body?: ArtifactResource,
      options?: any
    ): AxiosPromise<ArtifactResource> {
      return localVarFp
        .updateArtifact(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Sets the content associated with an artifact.
     * @param {string} id ID of the artifact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateArtifactContent(id: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .updateArtifactContent(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Sets the content associated with an artifact.
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the artifact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateArtifactContentSpaces(
      baseSpaceId: string,
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .updateArtifactContentSpaces(baseSpaceId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Modifies an existing artifact.
     * @summary Modify a ArtifactResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the ArtifactResource to modify
     * @param {ArtifactResource} [body] The ArtifactResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateArtifactSpaces(
      baseSpaceId: string,
      id: string,
      body?: ArtifactResource,
      options?: any
    ): AxiosPromise<ArtifactResource> {
      return localVarFp
        .updateArtifactSpaces(baseSpaceId, id, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ArtifactsApi - interface
 * @export
 * @interface ArtifactsApi
 */
export interface ArtifactsApiInterface {
  /**
   * Creates a new artifact.
   * @summary Create a ArtifactResource
   * @param {ArtifactResource} [body] The ArtifactResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApiInterface
   */
  createArtifact(
    body?: ArtifactResource,
    options?: any
  ): AxiosPromise<ArtifactResource>;

  /**
   * Creates a new artifact.
   * @summary Create a ArtifactResource
   * @param {string} baseSpaceId ID of the space
   * @param {ArtifactResource} [body] The ArtifactResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApiInterface
   */
  createArtifactSpaces(
    baseSpaceId: string,
    body?: ArtifactResource,
    options?: any
  ): AxiosPromise<ArtifactResource>;

  /**
   * Deletes an existing artifact.
   * @summary Delete a ArtifactResource by ID
   * @param {string} id ID of the ArtifactResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApiInterface
   */
  deleteArtifact(id: string, options?: any): AxiosPromise<void>;

  /**
   * Deletes an existing artifact.
   * @summary Delete a ArtifactResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ArtifactResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApiInterface
   */
  deleteArtifactSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   *
   * @summary Get an Artifact by ID
   * @param {string} id ID of the Artifact to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApiInterface
   */
  getArtifactById(id: string, options?: any): AxiosPromise<ArtifactResource>;

  /**
   *
   * @summary Get an Artifact by ID
   * @param {string} id ID of the Artifact to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApiInterface
   */
  getArtifactByIdSpaces(
    id: string,
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<ArtifactResource>;

  /**
   * Gets the content associated with an artifact.
   * @param {string} id ID of the artifact
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApiInterface
   */
  getArtifactContent(id: string, options?: any): AxiosPromise<void>;

  /**
   * Gets the content associated with an artifact.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the artifact
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApiInterface
   */
  getArtifactContentSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   * Lists all of the artifacts in the supplied Octopus Deploy Space, from all releases. The results will be sorted by date from most recently to least recently created.
   * @summary Get a list of ArtifactResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApiInterface
   */
  indexArtifacts(
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ArtifactResourceCollection>;

  /**
   * Lists all of the artifacts in the supplied Octopus Deploy Space, from all releases. The results will be sorted by date from most recently to least recently created.
   * @summary Get a list of ArtifactResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApiInterface
   */
  indexArtifactsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<ArtifactResourceCollection>;

  /**
   * Modifies an existing artifact.
   * @summary Modify a ArtifactResource by ID
   * @param {string} id ID of the ArtifactResource to modify
   * @param {ArtifactResource} [body] The ArtifactResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApiInterface
   */
  updateArtifact(
    id: string,
    body?: ArtifactResource,
    options?: any
  ): AxiosPromise<ArtifactResource>;

  /**
   * Sets the content associated with an artifact.
   * @param {string} id ID of the artifact
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApiInterface
   */
  updateArtifactContent(id: string, options?: any): AxiosPromise<void>;

  /**
   * Sets the content associated with an artifact.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the artifact
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApiInterface
   */
  updateArtifactContentSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ): AxiosPromise<void>;

  /**
   * Modifies an existing artifact.
   * @summary Modify a ArtifactResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ArtifactResource to modify
   * @param {ArtifactResource} [body] The ArtifactResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApiInterface
   */
  updateArtifactSpaces(
    baseSpaceId: string,
    id: string,
    body?: ArtifactResource,
    options?: any
  ): AxiosPromise<ArtifactResource>;
}

/**
 * ArtifactsApi - object-oriented interface
 * @export
 * @class ArtifactsApi
 * @extends {BaseAPI}
 */
export class ArtifactsApi extends BaseAPI implements ArtifactsApiInterface {
  /**
   * Creates a new artifact.
   * @summary Create a ArtifactResource
   * @param {ArtifactResource} [body] The ArtifactResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApi
   */
  public createArtifact(body?: ArtifactResource, options?: any) {
    return ArtifactsApiFp(this.configuration)
      .createArtifact(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a new artifact.
   * @summary Create a ArtifactResource
   * @param {string} baseSpaceId ID of the space
   * @param {ArtifactResource} [body] The ArtifactResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApi
   */
  public createArtifactSpaces(
    baseSpaceId: string,
    body?: ArtifactResource,
    options?: any
  ) {
    return ArtifactsApiFp(this.configuration)
      .createArtifactSpaces(baseSpaceId, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing artifact.
   * @summary Delete a ArtifactResource by ID
   * @param {string} id ID of the ArtifactResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApi
   */
  public deleteArtifact(id: string, options?: any) {
    return ArtifactsApiFp(this.configuration)
      .deleteArtifact(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes an existing artifact.
   * @summary Delete a ArtifactResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ArtifactResource to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApi
   */
  public deleteArtifactSpaces(baseSpaceId: string, id: string, options?: any) {
    return ArtifactsApiFp(this.configuration)
      .deleteArtifactSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get an Artifact by ID
   * @param {string} id ID of the Artifact to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApi
   */
  public getArtifactById(id: string, options?: any) {
    return ArtifactsApiFp(this.configuration)
      .getArtifactById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get an Artifact by ID
   * @param {string} id ID of the Artifact to load
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApi
   */
  public getArtifactByIdSpaces(id: string, baseSpaceId: string, options?: any) {
    return ArtifactsApiFp(this.configuration)
      .getArtifactByIdSpaces(id, baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets the content associated with an artifact.
   * @param {string} id ID of the artifact
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApi
   */
  public getArtifactContent(id: string, options?: any) {
    return ArtifactsApiFp(this.configuration)
      .getArtifactContent(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets the content associated with an artifact.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the artifact
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApi
   */
  public getArtifactContentSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return ArtifactsApiFp(this.configuration)
      .getArtifactContentSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the artifacts in the supplied Octopus Deploy Space, from all releases. The results will be sorted by date from most recently to least recently created.
   * @summary Get a list of ArtifactResources
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApi
   */
  public indexArtifacts(skip?: number, take?: number, options?: any) {
    return ArtifactsApiFp(this.configuration)
      .indexArtifacts(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Lists all of the artifacts in the supplied Octopus Deploy Space, from all releases. The results will be sorted by date from most recently to least recently created.
   * @summary Get a list of ArtifactResources
   * @param {string} baseSpaceId ID of the space
   * @param {number} [skip] Number of items to skip
   * @param {number} [take] Number of items to take
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApi
   */
  public indexArtifactsSpaces(
    baseSpaceId: string,
    skip?: number,
    take?: number,
    options?: any
  ) {
    return ArtifactsApiFp(this.configuration)
      .indexArtifactsSpaces(baseSpaceId, skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing artifact.
   * @summary Modify a ArtifactResource by ID
   * @param {string} id ID of the ArtifactResource to modify
   * @param {ArtifactResource} [body] The ArtifactResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApi
   */
  public updateArtifact(id: string, body?: ArtifactResource, options?: any) {
    return ArtifactsApiFp(this.configuration)
      .updateArtifact(id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Sets the content associated with an artifact.
   * @param {string} id ID of the artifact
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApi
   */
  public updateArtifactContent(id: string, options?: any) {
    return ArtifactsApiFp(this.configuration)
      .updateArtifactContent(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Sets the content associated with an artifact.
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the artifact
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApi
   */
  public updateArtifactContentSpaces(
    baseSpaceId: string,
    id: string,
    options?: any
  ) {
    return ArtifactsApiFp(this.configuration)
      .updateArtifactContentSpaces(baseSpaceId, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Modifies an existing artifact.
   * @summary Modify a ArtifactResource by ID
   * @param {string} baseSpaceId ID of the space
   * @param {string} id ID of the ArtifactResource to modify
   * @param {ArtifactResource} [body] The ArtifactResource resource to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ArtifactsApi
   */
  public updateArtifactSpaces(
    baseSpaceId: string,
    id: string,
    body?: ArtifactResource,
    options?: any
  ) {
    return ArtifactsApiFp(this.configuration)
      .updateArtifactSpaces(baseSpaceId, id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
