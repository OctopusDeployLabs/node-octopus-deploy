// Octopus REST API v2020.6.4722

import { ProcessType } from './process-type';

/**
 * 
 * @export
 * @interface ProcessReferenceDataItem
 */
export interface ProcessReferenceDataItem {
    /**
     * 
     * @type {string}
     * @memberof ProcessReferenceDataItem
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessReferenceDataItem
     */
    Name?: string;
    /**
     * 
     * @type {ProcessType}
     * @memberof ProcessReferenceDataItem
     */
    ProcessType?: ProcessType;
}
