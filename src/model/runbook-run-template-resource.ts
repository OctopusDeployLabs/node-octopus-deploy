// Octopus REST API v2020.6.4722

import { DeploymentPromomotionTenant } from './deployment-promomotion-tenant';
import { DeploymentPromotionTarget } from './deployment-promotion-target';

/**
 * 
 * @export
 * @interface RunbookRunTemplateResource
 */
export interface RunbookRunTemplateResource {
    /**
     * 
     * @type {string}
     * @memberof RunbookRunTemplateResource
     */
    Id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RunbookRunTemplateResource
     */
    IsLibraryVariableSetModified?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RunbookRunTemplateResource
     */
    IsRunbookProcessModified?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RunbookRunTemplateResource
     */
    IsVariableSetModified?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RunbookRunTemplateResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookRunTemplateResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof RunbookRunTemplateResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {Array<DeploymentPromotionTarget>}
     * @memberof RunbookRunTemplateResource
     */
    PromoteTo?: Array<DeploymentPromotionTarget>;
    /**
     * 
     * @type {Array<DeploymentPromomotionTenant>}
     * @memberof RunbookRunTemplateResource
     */
    TenantPromotions?: Array<DeploymentPromomotionTenant>;
}
