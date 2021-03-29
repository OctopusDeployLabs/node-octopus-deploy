// Octopus REST API v2020.6.4722


/**
 * 
 * @export
 * @interface LoginInitiatedResource
 */
export interface LoginInitiatedResource {
    /**
     * 
     * @type {string}
     * @memberof LoginInitiatedResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginInitiatedResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginInitiatedResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LoginInitiatedResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof LoginInitiatedResource
     */
    ProviderName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LoginInitiatedResource
     */
    WasLoginInitiated?: boolean;
}
