// Octopus REST API v2020.6.4722

import { Library } from './library';
import { Project } from './project';

/**
 * 
 * @export
 * @interface TenantVariableResource
 */
export interface TenantVariableResource {
    /**
     * 
     * @type {string}
     * @memberof TenantVariableResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof TenantVariableResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof TenantVariableResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: Library; }}
     * @memberof TenantVariableResource
     */
    LibraryVariables?: { [key: string]: Library; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof TenantVariableResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: Project; }}
     * @memberof TenantVariableResource
     */
    ProjectVariables?: { [key: string]: Project; };
    /**
     * 
     * @type {string}
     * @memberof TenantVariableResource
     */
    SpaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof TenantVariableResource
     */
    TenantId?: string;
    /**
     * 
     * @type {string}
     * @memberof TenantVariableResource
     */
    TenantName?: string;
}
