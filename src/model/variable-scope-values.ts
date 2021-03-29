// Octopus REST API v2020.6.4722

import { ProcessReferenceDataItem } from './process-reference-data-item';
import { ReferenceDataItem } from './reference-data-item';

/**
 * 
 * @export
 * @interface VariableScopeValues
 */
export interface VariableScopeValues {
    /**
     * 
     * @type {Array<ReferenceDataItem>}
     * @memberof VariableScopeValues
     */
    Actions?: Array<ReferenceDataItem>;
    /**
     * 
     * @type {Array<ReferenceDataItem>}
     * @memberof VariableScopeValues
     */
    Channels?: Array<ReferenceDataItem>;
    /**
     * 
     * @type {Array<ReferenceDataItem>}
     * @memberof VariableScopeValues
     */
    Environments?: Array<ReferenceDataItem>;
    /**
     * 
     * @type {Array<ReferenceDataItem>}
     * @memberof VariableScopeValues
     */
    Machines?: Array<ReferenceDataItem>;
    /**
     * 
     * @type {Array<ProcessReferenceDataItem>}
     * @memberof VariableScopeValues
     */
    Processes?: Array<ProcessReferenceDataItem>;
    /**
     * 
     * @type {Array<ReferenceDataItem>}
     * @memberof VariableScopeValues
     */
    Roles?: Array<ReferenceDataItem>;
    /**
     * 
     * @type {Array<ReferenceDataItem>}
     * @memberof VariableScopeValues
     */
    TenantTags?: Array<ReferenceDataItem>;
}
