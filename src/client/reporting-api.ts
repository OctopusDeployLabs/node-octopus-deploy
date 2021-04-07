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
import { ReportDeploymentCountOverTimeResource } from "../model";
/**
 * ReportingApi - axios parameter creator
 * @export
 */
export const ReportingApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Provides a report summarizing the weekly deployments per project over the last 6 months
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentsByProjectReport: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/reporting/deployments-counted-by-week`;
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
     * Provides a report summarizing the weekly deployments per project over the last 6 months
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentsByProjectReportSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists(
        "getDeploymentsByProjectReportSpaces",
        "baseSpaceId",
        baseSpaceId
      );
      const localVarPath = `/{baseSpaceId}/reporting/deployments-counted-by-week`.replace(
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
     * Provides an XML report that contains all of the information about deployments
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentsXml: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/reporting/deployments/xml`;
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
     * Provides an XML report that contains all of the information about deployments
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentsXmlSpaces: async (
      baseSpaceId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'baseSpaceId' is not null or undefined
      assertParamExists("getDeploymentsXmlSpaces", "baseSpaceId", baseSpaceId);
      const localVarPath = `/{baseSpaceId}/reporting/deployments/xml`.replace(
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
 * ReportingApi - functional programming interface
 * @export
 */
export const ReportingApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ReportingApiAxiosParamCreator(
    configuration
  );
  return {
    /**
     * Provides a report summarizing the weekly deployments per project over the last 6 months
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentsByProjectReport(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<ReportDeploymentCountOverTimeResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDeploymentsByProjectReport(
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
     * Provides a report summarizing the weekly deployments per project over the last 6 months
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentsByProjectReportSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<ReportDeploymentCountOverTimeResource>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDeploymentsByProjectReportSpaces(
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
     * Provides an XML report that contains all of the information about deployments
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentsXml(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDeploymentsXml(
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
     * Provides an XML report that contains all of the information about deployments
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeploymentsXmlSpaces(
      baseSpaceId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDeploymentsXmlSpaces(
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
 * ReportingApi - factory interface
 * @export
 */
export const ReportingApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ReportingApiFp(configuration);
  return {
    /**
     * Provides a report summarizing the weekly deployments per project over the last 6 months
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentsByProjectReport(
      options?: any
    ): AxiosPromise<Array<ReportDeploymentCountOverTimeResource>> {
      return localVarFp
        .getDeploymentsByProjectReport(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Provides a report summarizing the weekly deployments per project over the last 6 months
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentsByProjectReportSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<Array<ReportDeploymentCountOverTimeResource>> {
      return localVarFp
        .getDeploymentsByProjectReportSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Provides an XML report that contains all of the information about deployments
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentsXml(options?: any): AxiosPromise<void> {
      return localVarFp
        .getDeploymentsXml(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Provides an XML report that contains all of the information about deployments
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeploymentsXmlSpaces(
      baseSpaceId: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .getDeploymentsXmlSpaces(baseSpaceId, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ReportingApi - interface
 * @export
 * @interface ReportingApi
 */
export interface ReportingApiInterface {
  /**
   * Provides a report summarizing the weekly deployments per project over the last 6 months
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReportingApiInterface
   */
  getDeploymentsByProjectReport(
    options?: any
  ): AxiosPromise<Array<ReportDeploymentCountOverTimeResource>>;

  /**
   * Provides a report summarizing the weekly deployments per project over the last 6 months
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReportingApiInterface
   */
  getDeploymentsByProjectReportSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<Array<ReportDeploymentCountOverTimeResource>>;

  /**
   * Provides an XML report that contains all of the information about deployments
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReportingApiInterface
   */
  getDeploymentsXml(options?: any): AxiosPromise<void>;

  /**
   * Provides an XML report that contains all of the information about deployments
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReportingApiInterface
   */
  getDeploymentsXmlSpaces(
    baseSpaceId: string,
    options?: any
  ): AxiosPromise<void>;
}

/**
 * ReportingApi - object-oriented interface
 * @export
 * @class ReportingApi
 * @extends {BaseAPI}
 */
export class ReportingApi extends BaseAPI implements ReportingApiInterface {
  /**
   * Provides a report summarizing the weekly deployments per project over the last 6 months
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReportingApi
   */
  public getDeploymentsByProjectReport(options?: any) {
    return ReportingApiFp(this.configuration)
      .getDeploymentsByProjectReport(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Provides a report summarizing the weekly deployments per project over the last 6 months
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReportingApi
   */
  public getDeploymentsByProjectReportSpaces(
    baseSpaceId: string,
    options?: any
  ) {
    return ReportingApiFp(this.configuration)
      .getDeploymentsByProjectReportSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Provides an XML report that contains all of the information about deployments
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReportingApi
   */
  public getDeploymentsXml(options?: any) {
    return ReportingApiFp(this.configuration)
      .getDeploymentsXml(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Provides an XML report that contains all of the information about deployments
   * @param {string} baseSpaceId ID of the space
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReportingApi
   */
  public getDeploymentsXmlSpaces(baseSpaceId: string, options?: any) {
    return ReportingApiFp(this.configuration)
      .getDeploymentsXmlSpaces(baseSpaceId, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
