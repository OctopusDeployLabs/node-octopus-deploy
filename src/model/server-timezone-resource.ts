// Octopus REST API v2020.6.4722


/**
 * 
 * @export
 * @interface ServerTimezoneResource
 */
export interface ServerTimezoneResource {
    /**
     * 
     * @type {string}
     * @memberof ServerTimezoneResource
     */
    Id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ServerTimezoneResource
     */
    IsLocal?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ServerTimezoneResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ServerTimezoneResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ServerTimezoneResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ServerTimezoneResource
     */
    Name?: string;
}
