// Octopus REST API v2020.6.4722

import { TriggerFilterType } from './trigger-filter-type';

/**
 * 
 * @export
 * @interface TriggerFilterResource
 */
export interface TriggerFilterResource {
    /**
     * 
     * @type {TriggerFilterType}
     * @memberof TriggerFilterResource
     */
    FilterType?: TriggerFilterType;
    /**
     * 
     * @type {string}
     * @memberof TriggerFilterResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof TriggerFilterResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof TriggerFilterResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof TriggerFilterResource
     */
    Links?: { [key: string]: string; };
}
