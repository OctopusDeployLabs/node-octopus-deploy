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
import { TeamMembership } from '../model';
/**
 * TeamMembershipApi - axios parameter creator
 * @export
 */
export const TeamMembershipApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Lists all the users that would belong to the specified team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTeamMembershipPreview: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/teammembership/previewteam`;
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
         * Lists all the users that would belong to the specified team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTeamMembershipPreviewSpaces: async (baseSpaceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('createTeamMembershipPreviewSpaces', 'baseSpaceId', baseSpaceId)
            const localVarPath = `/{baseSpaceId}/teammembership/previewteam`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a list of team memberships, including any from external auth-provider security groups. Memberships can be filtered by userId.
         * @param {string} userId ID of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTeamMembership: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getTeamMembership', 'userId', userId)
            const localVarPath = `/teammembership`;
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

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a list of team memberships, including any from external auth-provider security groups. Memberships can be filtered by userId.
         * @param {string} baseSpaceId ID of the space
         * @param {string} userId ID of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTeamMembershipSpaces: async (baseSpaceId: string, userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseSpaceId' is not null or undefined
            assertParamExists('getTeamMembershipSpaces', 'baseSpaceId', baseSpaceId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getTeamMembershipSpaces', 'userId', userId)
            const localVarPath = `/{baseSpaceId}/teammembership`
                .replace(`{${"baseSpaceId"}}`, encodeURIComponent(String(baseSpaceId)));
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

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
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
 * TeamMembershipApi - functional programming interface
 * @export
 */
export const TeamMembershipApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TeamMembershipApiAxiosParamCreator(configuration)
    return {
        /**
         * Lists all the users that would belong to the specified team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTeamMembershipPreview(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TeamMembership>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTeamMembershipPreview(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all the users that would belong to the specified team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTeamMembershipPreviewSpaces(baseSpaceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TeamMembership>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTeamMembershipPreviewSpaces(baseSpaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a list of team memberships, including any from external auth-provider security groups. Memberships can be filtered by userId.
         * @param {string} userId ID of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTeamMembership(userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TeamMembership>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTeamMembership(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a list of team memberships, including any from external auth-provider security groups. Memberships can be filtered by userId.
         * @param {string} baseSpaceId ID of the space
         * @param {string} userId ID of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTeamMembershipSpaces(baseSpaceId: string, userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TeamMembership>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTeamMembershipSpaces(baseSpaceId, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TeamMembershipApi - factory interface
 * @export
 */
export const TeamMembershipApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TeamMembershipApiFp(configuration)
    return {
        /**
         * Lists all the users that would belong to the specified team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTeamMembershipPreview(options?: any): AxiosPromise<Array<TeamMembership>> {
            return localVarFp.createTeamMembershipPreview(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all the users that would belong to the specified team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
         * @param {string} baseSpaceId ID of the space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTeamMembershipPreviewSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<TeamMembership>> {
            return localVarFp.createTeamMembershipPreviewSpaces(baseSpaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of team memberships, including any from external auth-provider security groups. Memberships can be filtered by userId.
         * @param {string} userId ID of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTeamMembership(userId: string, options?: any): AxiosPromise<Array<TeamMembership>> {
            return localVarFp.getTeamMembership(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of team memberships, including any from external auth-provider security groups. Memberships can be filtered by userId.
         * @param {string} baseSpaceId ID of the space
         * @param {string} userId ID of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTeamMembershipSpaces(baseSpaceId: string, userId: string, options?: any): AxiosPromise<Array<TeamMembership>> {
            return localVarFp.getTeamMembershipSpaces(baseSpaceId, userId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TeamMembershipApi - interface
 * @export
 * @interface TeamMembershipApi
 */
export interface TeamMembershipApiInterface {
    /**
     * Lists all the users that would belong to the specified team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamMembershipApiInterface
     */
    createTeamMembershipPreview(options?: any): AxiosPromise<Array<TeamMembership>>;

    /**
     * Lists all the users that would belong to the specified team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamMembershipApiInterface
     */
    createTeamMembershipPreviewSpaces(baseSpaceId: string, options?: any): AxiosPromise<Array<TeamMembership>>;

    /**
     * Gets a list of team memberships, including any from external auth-provider security groups. Memberships can be filtered by userId.
     * @param {string} userId ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamMembershipApiInterface
     */
    getTeamMembership(userId: string, options?: any): AxiosPromise<Array<TeamMembership>>;

    /**
     * Gets a list of team memberships, including any from external auth-provider security groups. Memberships can be filtered by userId.
     * @param {string} baseSpaceId ID of the space
     * @param {string} userId ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamMembershipApiInterface
     */
    getTeamMembershipSpaces(baseSpaceId: string, userId: string, options?: any): AxiosPromise<Array<TeamMembership>>;

}

/**
 * TeamMembershipApi - object-oriented interface
 * @export
 * @class TeamMembershipApi
 * @extends {BaseAPI}
 */
export class TeamMembershipApi extends BaseAPI implements TeamMembershipApiInterface {
    /**
     * Lists all the users that would belong to the specified team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamMembershipApi
     */
    public createTeamMembershipPreview(options?: any) {
        return TeamMembershipApiFp(this.configuration).createTeamMembershipPreview(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all the users that would belong to the specified team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.
     * @param {string} baseSpaceId ID of the space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamMembershipApi
     */
    public createTeamMembershipPreviewSpaces(baseSpaceId: string, options?: any) {
        return TeamMembershipApiFp(this.configuration).createTeamMembershipPreviewSpaces(baseSpaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a list of team memberships, including any from external auth-provider security groups. Memberships can be filtered by userId.
     * @param {string} userId ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamMembershipApi
     */
    public getTeamMembership(userId: string, options?: any) {
        return TeamMembershipApiFp(this.configuration).getTeamMembership(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a list of team memberships, including any from external auth-provider security groups. Memberships can be filtered by userId.
     * @param {string} baseSpaceId ID of the space
     * @param {string} userId ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamMembershipApi
     */
    public getTeamMembershipSpaces(baseSpaceId: string, userId: string, options?: any) {
        return TeamMembershipApiFp(this.configuration).getTeamMembershipSpaces(baseSpaceId, userId, options).then((request) => request(this.axios, this.basePath));
    }
}
