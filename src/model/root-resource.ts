// Octopus REST API v2020.6.4722


/**
 * 
 * @export
 * @interface RootResource
 */
export interface RootResource {
    /**
     * 
     * @type {string}
     * @memberof RootResource
     */
    ApiVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof RootResource
     */
    Application?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RootResource
     */
    HasLongTermSupport?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RootResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof RootResource
     */
    InstallationId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RootResource
     */
    IsEarlyAccessProgram?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RootResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof RootResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof RootResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof RootResource
     */
    Version?: string;
}
