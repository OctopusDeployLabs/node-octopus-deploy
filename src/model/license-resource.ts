// Octopus REST API v2020.6.4722


/**
 * 
 * @export
 * @interface LicenseResource
 */
export interface LicenseResource {
    /**
     * 
     * @type {string}
     * @memberof LicenseResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof LicenseResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof LicenseResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {string}
     * @memberof LicenseResource
     */
    LicenseText?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LicenseResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof LicenseResource
     */
    SerialNumber?: string;
}
