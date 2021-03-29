/* tslint:disable */
/* eslint-disable */
// Octopus REST API v2020.6.4722

import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { MigrationImportResource } from '../model';
// @ts-ignore
import { MigrationPartialExportResource } from '../model';
/**
 * MigrationApi - axios parameter creator
 * @export
 */
export const MigrationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns HTTP OK (200) when an import migration has been queued.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMigrationImport: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/migrations/import`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject(localVarHeaderParameter, "X-Octopus-ApiKey", configuration)

            // authentication APIKeyQuery required
            await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration)

            // authentication NugetApiKeyHeader required
            await setApiKeyToObject(localVarHeaderParameter, "X-NuGet-ApiKey", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns HTTP OK (200) when a partial-export migration has been queued.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMigrationPartialExport: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/migrations/partialexport`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject(localVarHeaderParameter, "X-Octopus-ApiKey", configuration)

            // authentication APIKeyQuery required
            await setApiKeyToObject(localVarQueryParameter, "ApiKey", configuration)

            // authentication NugetApiKeyHeader required
            await setApiKeyToObject(localVarHeaderParameter, "X-NuGet-ApiKey", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MigrationApi - functional programming interface
 * @export
 */
export const MigrationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MigrationApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns HTTP OK (200) when an import migration has been queued.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMigrationImport(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MigrationImportResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createMigrationImport(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns HTTP OK (200) when a partial-export migration has been queued.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMigrationPartialExport(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MigrationPartialExportResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createMigrationPartialExport(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MigrationApi - factory interface
 * @export
 */
export const MigrationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MigrationApiFp(configuration)
    return {
        /**
         * Returns HTTP OK (200) when an import migration has been queued.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMigrationImport(options?: any): AxiosPromise<MigrationImportResource> {
            return localVarFp.createMigrationImport(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns HTTP OK (200) when a partial-export migration has been queued.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMigrationPartialExport(options?: any): AxiosPromise<MigrationPartialExportResource> {
            return localVarFp.createMigrationPartialExport(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MigrationApi - interface
 * @export
 * @interface MigrationApi
 */
export interface MigrationApiInterface {
    /**
     * Returns HTTP OK (200) when an import migration has been queued.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApiInterface
     */
    createMigrationImport(options?: any): AxiosPromise<MigrationImportResource>;

    /**
     * Returns HTTP OK (200) when a partial-export migration has been queued.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApiInterface
     */
    createMigrationPartialExport(options?: any): AxiosPromise<MigrationPartialExportResource>;

}

/**
 * MigrationApi - object-oriented interface
 * @export
 * @class MigrationApi
 * @extends {BaseAPI}
 */
export class MigrationApi extends BaseAPI implements MigrationApiInterface {
    /**
     * Returns HTTP OK (200) when an import migration has been queued.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public createMigrationImport(options?: any) {
        return MigrationApiFp(this.configuration).createMigrationImport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns HTTP OK (200) when a partial-export migration has been queued.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public createMigrationPartialExport(options?: any) {
        return MigrationApiFp(this.configuration).createMigrationPartialExport(options).then((request) => request(this.axios, this.basePath));
    }
}
