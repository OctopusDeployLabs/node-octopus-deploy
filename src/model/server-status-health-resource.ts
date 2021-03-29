// Octopus REST API v2020.6.4722


/**
 * 
 * @export
 * @interface ServerStatusHealthResource
 */
export interface ServerStatusHealthResource {
    /**
     * 
     * @type {string}
     * @memberof ServerStatusHealthResource
     */
    Description?: string;
    /**
     * 
     * @type {string}
     * @memberof ServerStatusHealthResource
     */
    Id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ServerStatusHealthResource
     */
    IsCompliantWithLicense?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServerStatusHealthResource
     */
    IsEntireClusterDrainingTasks?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServerStatusHealthResource
     */
    IsEntireClusterReadOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServerStatusHealthResource
     */
    IsOperatingNormally?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ServerStatusHealthResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ServerStatusHealthResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ServerStatusHealthResource
     */
    Links?: { [key: string]: string; };
}
