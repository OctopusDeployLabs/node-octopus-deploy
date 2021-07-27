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
import { ActionTemplateResource } from "../model";
// @ts-ignore
import { CommunityActionTemplateResource } from "../model";
// @ts-ignore
import { CommunityActionTemplateResourceCollection } from "../model";
/**
 * CommunityActionTemplatesApi - axios parameter creator
 * @export
 */
export const CommunityActionTemplatesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Installs community step template.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCommunityActionTemplateInstallation: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createCommunityActionTemplateInstallation", "id", id);
      const localVarPath =
        `/communityactiontemplates/{id}/installation`.replace(
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
     * Installs community step template.
     * @param {string} id ID of the resource
     * @param {string} spaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCommunityActionTemplateInstallation1: async (
      id: string,
      spaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("createCommunityActionTemplateInstallation1", "id", id);
      // verify required parameter 'spaceId' is not null or undefined
      assertParamExists(
        "createCommunityActionTemplateInstallation1",
        "spaceId",
        spaceId
      );
      const localVarPath =
        `/communityactiontemplates/{id}/installation/{spaceId}`
          .replace(`{${"id"}}`, encodeURIComponent(String(id)))
          .replace(`{${"spaceId"}}`, encodeURIComponent(String(spaceId)));
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
     * Gets installed version of the template.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getActionTemplateBasedOnCommunityActionTemplate: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        "getActionTemplateBasedOnCommunityActionTemplate",
        "id",
        id
      );
      const localVarPath =
        `/communityactiontemplates/{id}/actiontemplate`.replace(
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
     * Gets installed version of the template.
     * @param {string} id ID of the resource
     * @param {string} spaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getActionTemplateBasedOnCommunityActionTemplate1: async (
      id: string,
      spaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        "getActionTemplateBasedOnCommunityActionTemplate1",
        "id",
        id
      );
      // verify required parameter 'spaceId' is not null or undefined
      assertParamExists(
        "getActionTemplateBasedOnCommunityActionTemplate1",
        "spaceId",
        spaceId
      );
      const localVarPath =
        `/communityactiontemplates/{id}/actiontemplate/{spaceId}`
          .replace(`{${"id"}}`, encodeURIComponent(String(id)))
          .replace(`{${"spaceId"}}`, encodeURIComponent(String(spaceId)));
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
     * @summary Get a Community Action Template by ID
     * @param {string} id ID of the CommunityActionTemplate to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCommunityActionTemplateById: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getCommunityActionTemplateById", "id", id);
      const localVarPath = `/communityactiontemplates/{id}`.replace(
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
     * Gets the logo associated with the community step template.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCommunityActionTemplateLogo: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getCommunityActionTemplateLogo", "id", id);
      const localVarPath = `/communityactiontemplates/{id}/logo`.replace(
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
     * @summary Get a list of Community Action Templates
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexCommunityActionTemplates: async (
      skip?: number,
      take?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/communityactiontemplates`;
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
     * Updates installed community step template to the latest version.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCommunityActionTemplateInstallationPut: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        "updateCommunityActionTemplateInstallationPut",
        "id",
        id
      );
      const localVarPath =
        `/communityactiontemplates/{id}/installation`.replace(
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
     * Updates installed community step template to the latest version.
     * @param {string} id ID of the resource
     * @param {string} spaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCommunityActionTemplateInstallationPut1: async (
      id: string,
      spaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        "updateCommunityActionTemplateInstallationPut1",
        "id",
        id
      );
      // verify required parameter 'spaceId' is not null or undefined
      assertParamExists(
        "updateCommunityActionTemplateInstallationPut1",
        "spaceId",
        spaceId
      );
      const localVarPath =
        `/communityactiontemplates/{id}/installation/{spaceId}`
          .replace(`{${"id"}}`, encodeURIComponent(String(id)))
          .replace(`{${"spaceId"}}`, encodeURIComponent(String(spaceId)));
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
 * CommunityActionTemplatesApi - functional programming interface
 * @export
 */
export const CommunityActionTemplatesApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    CommunityActionTemplatesApiAxiosParamCreator(configuration);
  return {
    /**
     * Installs community step template.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCommunityActionTemplateInstallation(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ActionTemplateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createCommunityActionTemplateInstallation(
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
     * Installs community step template.
     * @param {string} id ID of the resource
     * @param {string} spaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCommunityActionTemplateInstallation1(
      id: string,
      spaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ActionTemplateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createCommunityActionTemplateInstallation1(
          id,
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
    /**
     * Gets installed version of the template.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getActionTemplateBasedOnCommunityActionTemplate(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ActionTemplateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getActionTemplateBasedOnCommunityActionTemplate(
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
     * Gets installed version of the template.
     * @param {string} id ID of the resource
     * @param {string} spaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getActionTemplateBasedOnCommunityActionTemplate1(
      id: string,
      spaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ActionTemplateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getActionTemplateBasedOnCommunityActionTemplate1(
          id,
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
    /**
     *
     * @summary Get a Community Action Template by ID
     * @param {string} id ID of the CommunityActionTemplate to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCommunityActionTemplateById(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CommunityActionTemplateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCommunityActionTemplateById(
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
     * Gets the logo associated with the community step template.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCommunityActionTemplateLogo(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCommunityActionTemplateLogo(
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
     * @summary Get a list of Community Action Templates
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indexCommunityActionTemplates(
      skip?: number,
      take?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CommunityActionTemplateResourceCollection>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.indexCommunityActionTemplates(
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
     * Updates installed community step template to the latest version.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateCommunityActionTemplateInstallationPut(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ActionTemplateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateCommunityActionTemplateInstallationPut(
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
     * Updates installed community step template to the latest version.
     * @param {string} id ID of the resource
     * @param {string} spaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateCommunityActionTemplateInstallationPut1(
      id: string,
      spaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ActionTemplateResource>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateCommunityActionTemplateInstallationPut1(
          id,
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
 * CommunityActionTemplatesApi - factory interface
 * @export
 */
export const CommunityActionTemplatesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = CommunityActionTemplatesApiFp(configuration);
  return {
    /**
     * Installs community step template.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCommunityActionTemplateInstallation(
      id: string,
      options?: any
    ): AxiosPromise<ActionTemplateResource> {
      return localVarFp
        .createCommunityActionTemplateInstallation(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Installs community step template.
     * @param {string} id ID of the resource
     * @param {string} spaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCommunityActionTemplateInstallation1(
      id: string,
      spaceId: string,
      options?: any
    ): AxiosPromise<ActionTemplateResource> {
      return localVarFp
        .createCommunityActionTemplateInstallation1(id, spaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets installed version of the template.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getActionTemplateBasedOnCommunityActionTemplate(
      id: string,
      options?: any
    ): AxiosPromise<ActionTemplateResource> {
      return localVarFp
        .getActionTemplateBasedOnCommunityActionTemplate(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets installed version of the template.
     * @param {string} id ID of the resource
     * @param {string} spaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getActionTemplateBasedOnCommunityActionTemplate1(
      id: string,
      spaceId: string,
      options?: any
    ): AxiosPromise<ActionTemplateResource> {
      return localVarFp
        .getActionTemplateBasedOnCommunityActionTemplate1(id, spaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Community Action Template by ID
     * @param {string} id ID of the CommunityActionTemplate to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCommunityActionTemplateById(
      id: string,
      options?: any
    ): AxiosPromise<CommunityActionTemplateResource> {
      return localVarFp
        .getCommunityActionTemplateById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets the logo associated with the community step template.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCommunityActionTemplateLogo(
      id: string,
      options?: any
    ): AxiosPromise<any> {
      return localVarFp
        .getCommunityActionTemplateLogo(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a list of Community Action Templates
     * @param {number} [skip] Number of items to skip. Defaults to zero
     * @param {number} [take] Number of items to take. Defaults to 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indexCommunityActionTemplates(
      skip?: number,
      take?: number,
      options?: any
    ): AxiosPromise<CommunityActionTemplateResourceCollection> {
      return localVarFp
        .indexCommunityActionTemplates(skip, take, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates installed community step template to the latest version.
     * @param {string} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCommunityActionTemplateInstallationPut(
      id: string,
      options?: any
    ): AxiosPromise<ActionTemplateResource> {
      return localVarFp
        .updateCommunityActionTemplateInstallationPut(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates installed community step template to the latest version.
     * @param {string} id ID of the resource
     * @param {string} spaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCommunityActionTemplateInstallationPut1(
      id: string,
      spaceId: string,
      options?: any
    ): AxiosPromise<ActionTemplateResource> {
      return localVarFp
        .updateCommunityActionTemplateInstallationPut1(id, spaceId, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * CommunityActionTemplatesApi - interface
 * @export
 * @interface CommunityActionTemplatesApi
 */
export interface CommunityActionTemplatesApiInterface {
  /**
   * Installs community step template.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApiInterface
   */
  createCommunityActionTemplateInstallation(
    id: string,
    options?: any
  ): AxiosPromise<ActionTemplateResource>;

  /**
   * Installs community step template.
   * @param {string} id ID of the resource
   * @param {string} spaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApiInterface
   */
  createCommunityActionTemplateInstallation1(
    id: string,
    spaceId: string,
    options?: any
  ): AxiosPromise<ActionTemplateResource>;

  /**
   * Gets installed version of the template.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApiInterface
   */
  getActionTemplateBasedOnCommunityActionTemplate(
    id: string,
    options?: any
  ): AxiosPromise<ActionTemplateResource>;

  /**
   * Gets installed version of the template.
   * @param {string} id ID of the resource
   * @param {string} spaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApiInterface
   */
  getActionTemplateBasedOnCommunityActionTemplate1(
    id: string,
    spaceId: string,
    options?: any
  ): AxiosPromise<ActionTemplateResource>;

  /**
   *
   * @summary Get a Community Action Template by ID
   * @param {string} id ID of the CommunityActionTemplate to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApiInterface
   */
  getCommunityActionTemplateById(
    id: string,
    options?: any
  ): AxiosPromise<CommunityActionTemplateResource>;

  /**
   * Gets the logo associated with the community step template.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApiInterface
   */
  getCommunityActionTemplateLogo(id: string, options?: any): AxiosPromise<any>;

  /**
   *
   * @summary Get a list of Community Action Templates
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApiInterface
   */
  indexCommunityActionTemplates(
    skip?: number,
    take?: number,
    options?: any
  ): AxiosPromise<CommunityActionTemplateResourceCollection>;

  /**
   * Updates installed community step template to the latest version.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApiInterface
   */
  updateCommunityActionTemplateInstallationPut(
    id: string,
    options?: any
  ): AxiosPromise<ActionTemplateResource>;

  /**
   * Updates installed community step template to the latest version.
   * @param {string} id ID of the resource
   * @param {string} spaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApiInterface
   */
  updateCommunityActionTemplateInstallationPut1(
    id: string,
    spaceId: string,
    options?: any
  ): AxiosPromise<ActionTemplateResource>;
}

/**
 * CommunityActionTemplatesApi - object-oriented interface
 * @export
 * @class CommunityActionTemplatesApi
 * @extends {BaseAPI}
 */
export class CommunityActionTemplatesApi
  extends BaseAPI
  implements CommunityActionTemplatesApiInterface
{
  /**
   * Installs community step template.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApi
   */
  public createCommunityActionTemplateInstallation(id: string, options?: any) {
    return CommunityActionTemplatesApiFp(this.configuration)
      .createCommunityActionTemplateInstallation(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Installs community step template.
   * @param {string} id ID of the resource
   * @param {string} spaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApi
   */
  public createCommunityActionTemplateInstallation1(
    id: string,
    spaceId: string,
    options?: any
  ) {
    return CommunityActionTemplatesApiFp(this.configuration)
      .createCommunityActionTemplateInstallation1(id, spaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets installed version of the template.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApi
   */
  public getActionTemplateBasedOnCommunityActionTemplate(
    id: string,
    options?: any
  ) {
    return CommunityActionTemplatesApiFp(this.configuration)
      .getActionTemplateBasedOnCommunityActionTemplate(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets installed version of the template.
   * @param {string} id ID of the resource
   * @param {string} spaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApi
   */
  public getActionTemplateBasedOnCommunityActionTemplate1(
    id: string,
    spaceId: string,
    options?: any
  ) {
    return CommunityActionTemplatesApiFp(this.configuration)
      .getActionTemplateBasedOnCommunityActionTemplate1(id, spaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Community Action Template by ID
   * @param {string} id ID of the CommunityActionTemplate to load
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApi
   */
  public getCommunityActionTemplateById(id: string, options?: any) {
    return CommunityActionTemplatesApiFp(this.configuration)
      .getCommunityActionTemplateById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets the logo associated with the community step template.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApi
   */
  public getCommunityActionTemplateLogo(id: string, options?: any) {
    return CommunityActionTemplatesApiFp(this.configuration)
      .getCommunityActionTemplateLogo(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a list of Community Action Templates
   * @param {number} [skip] Number of items to skip. Defaults to zero
   * @param {number} [take] Number of items to take. Defaults to 30
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApi
   */
  public indexCommunityActionTemplates(
    skip?: number,
    take?: number,
    options?: any
  ) {
    return CommunityActionTemplatesApiFp(this.configuration)
      .indexCommunityActionTemplates(skip, take, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates installed community step template to the latest version.
   * @param {string} id ID of the resource
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApi
   */
  public updateCommunityActionTemplateInstallationPut(
    id: string,
    options?: any
  ) {
    return CommunityActionTemplatesApiFp(this.configuration)
      .updateCommunityActionTemplateInstallationPut(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates installed community step template to the latest version.
   * @param {string} id ID of the resource
   * @param {string} spaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunityActionTemplatesApi
   */
  public updateCommunityActionTemplateInstallationPut1(
    id: string,
    spaceId: string,
    options?: any
  ) {
    return CommunityActionTemplatesApiFp(this.configuration)
      .updateCommunityActionTemplateInstallationPut1(id, spaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
