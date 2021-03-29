// Octopus REST API v2020.6.4722

import { MissingVariableResource } from './missing-variable-resource';

/**
 * 
 * @export
 * @interface TenantsMissingVariablesResource
 */
export interface TenantsMissingVariablesResource {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof TenantsMissingVariablesResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {Array<MissingVariableResource>}
     * @memberof TenantsMissingVariablesResource
     */
    MissingVariables?: Array<MissingVariableResource>;
    /**
     * 
     * @type {string}
     * @memberof TenantsMissingVariablesResource
     */
    TenantId?: string;
}
