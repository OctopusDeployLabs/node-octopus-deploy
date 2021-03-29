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
import { InvitationResource } from '../model';
/**
 * InvitationsApi - axios parameter creator
 * @export
 */
export const InvitationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Invite a user to register.
         * @summary Create a InvitationResource
         * @param {InvitationResource} [body] The InvitationResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createInvitation: async (body?: InvitationResource, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/invitations`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Invite a user to register.
         * @summary Create a InvitationResource
         * @param {string} baseSpaceId ID of the space
         * @param {InvitationResource} [body] The InvitationResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createInvitationSpaces: async (baseSpaceId: string, body?: InvitationResource, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('createInvitationSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/users/invitations`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)));
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets an existing invitation by ID.
         * @summary Get a InvitationResource by ID
         * @param {string} id ID of the InvitationResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInvitationById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getInvitationById', 'id', id)
            const localVarPath = `/users/invitations/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
         * Gets an existing invitation by ID.
         * @summary Get a InvitationResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the InvitationResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInvitationByIdSpaces: async (baseSpaceId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getInvitationByIdSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getInvitationByIdSpaces', 'id', id)
            const localVarPath = `/{baseSpaceId}/users/invitations/{id}`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
 * InvitationsApi - functional programming interface
 * @export
 */
export const InvitationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = InvitationsApiAxiosParamCreator(configuration)
    return {
        /**
         * Invite a user to register.
         * @summary Create a InvitationResource
         * @param {InvitationResource} [body] The InvitationResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createInvitation(body?: InvitationResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvitationResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createInvitation(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Invite a user to register.
         * @summary Create a InvitationResource
         * @param {string} baseSpaceId ID of the space
         * @param {InvitationResource} [body] The InvitationResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createInvitationSpaces(baseSpaceId: string, body?: InvitationResource, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvitationResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createInvitationSpaces(baseSpaceId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets an existing invitation by ID.
         * @summary Get a InvitationResource by ID
         * @param {string} id ID of the InvitationResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInvitationById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvitationResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInvitationById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets an existing invitation by ID.
         * @summary Get a InvitationResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the InvitationResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInvitationByIdSpaces(baseSpaceId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvitationResource>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInvitationByIdSpaces(baseSpaceId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * InvitationsApi - factory interface
 * @export
 */
export const InvitationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = InvitationsApiFp(configuration)
    return {
        /**
         * Invite a user to register.
         * @summary Create a InvitationResource
         * @param {InvitationResource} [body] The InvitationResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createInvitation(body?: InvitationResource, options?: any): AxiosPromise<InvitationResource> {
            return localVarFp.createInvitation(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Invite a user to register.
         * @summary Create a InvitationResource
         * @param {string} baseSpaceId ID of the space
         * @param {InvitationResource} [body] The InvitationResource resource to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createInvitationSpaces(baseSpaceId: string, body?: InvitationResource, options?: any): AxiosPromise<InvitationResource> {
            return localVarFp.createInvitationSpaces(baseSpaceId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets an existing invitation by ID.
         * @summary Get a InvitationResource by ID
         * @param {string} id ID of the InvitationResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInvitationById(id: string, options?: any): AxiosPromise<InvitationResource> {
            return localVarFp.getInvitationById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets an existing invitation by ID.
         * @summary Get a InvitationResource by ID
         * @param {string} baseSpaceId ID of the space
         * @param {string} id ID of the InvitationResource to load
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInvitationByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<InvitationResource> {
            return localVarFp.getInvitationByIdSpaces(baseSpaceId, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * InvitationsApi - interface
 * @export
 * @interface InvitationsApi
 */
export interface InvitationsApiInterface {
    /**
     * Invite a user to register.
     * @summary Create a InvitationResource
     * @param {InvitationResource} [body] The InvitationResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvitationsApiInterface
     */
    createInvitation(body?: InvitationResource, options?: any): AxiosPromise<InvitationResource>;

    /**
     * Invite a user to register.
     * @summary Create a InvitationResource
     * @param {string} baseSpaceId ID of the space
     * @param {InvitationResource} [body] The InvitationResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvitationsApiInterface
     */
    createInvitationSpaces(baseSpaceId: string, body?: InvitationResource, options?: any): AxiosPromise<InvitationResource>;

    /**
     * Gets an existing invitation by ID.
     * @summary Get a InvitationResource by ID
     * @param {string} id ID of the InvitationResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvitationsApiInterface
     */
    getInvitationById(id: string, options?: any): AxiosPromise<InvitationResource>;

    /**
     * Gets an existing invitation by ID.
     * @summary Get a InvitationResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the InvitationResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvitationsApiInterface
     */
    getInvitationByIdSpaces(baseSpaceId: string, id: string, options?: any): AxiosPromise<InvitationResource>;

}

/**
 * InvitationsApi - object-oriented interface
 * @export
 * @class InvitationsApi
 * @extends {BaseAPI}
 */
export class InvitationsApi extends BaseAPI implements InvitationsApiInterface {
    /**
     * Invite a user to register.
     * @summary Create a InvitationResource
     * @param {InvitationResource} [body] The InvitationResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvitationsApi
     */
    public createInvitation(body?: InvitationResource, options?: any) {
        return InvitationsApiFp(this.configuration).createInvitation(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Invite a user to register.
     * @summary Create a InvitationResource
     * @param {string} baseSpaceId ID of the space
     * @param {InvitationResource} [body] The InvitationResource resource to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvitationsApi
     */
    public createInvitationSpaces(baseSpaceId: string, body?: InvitationResource, options?: any) {
        return InvitationsApiFp(this.configuration).createInvitationSpaces(baseSpaceId, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets an existing invitation by ID.
     * @summary Get a InvitationResource by ID
     * @param {string} id ID of the InvitationResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvitationsApi
     */
    public getInvitationById(id: string, options?: any) {
        return InvitationsApiFp(this.configuration).getInvitationById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets an existing invitation by ID.
     * @summary Get a InvitationResource by ID
     * @param {string} baseSpaceId ID of the space
     * @param {string} id ID of the InvitationResource to load
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvitationsApi
     */
    public getInvitationByIdSpaces(baseSpaceId: string, id: string, options?: any) {
        return InvitationsApiFp(this.configuration).getInvitationByIdSpaces(baseSpaceId, id, options).then((request) => request(this.axios, this.basePath));
    }
}
