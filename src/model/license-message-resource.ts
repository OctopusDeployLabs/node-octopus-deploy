// Octopus REST API v2020.6.4722

import { LicenseMessageDisposition } from './license-message-disposition';

/**
 * 
 * @export
 * @interface LicenseMessageResource
 */
export interface LicenseMessageResource {
    /**
     * 
     * @type {LicenseMessageDisposition}
     * @memberof LicenseMessageResource
     */
    Disposition?: LicenseMessageDisposition;
    /**
     * 
     * @type {string}
     * @memberof LicenseMessageResource
     */
    Message?: string;
}
