// Octopus REST API v2020.6.4722

import { ProcessType } from './process-type';

/**
 * 
 * @export
 * @interface ActionTemplateUsageResource
 */
export interface ActionTemplateUsageResource {
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateUsageResource
     */
    ActionId?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateUsageResource
     */
    ActionName?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateUsageResource
     */
    ActionTemplateId?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateUsageResource
     */
    DeploymentProcessId?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateUsageResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateUsageResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateUsageResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ActionTemplateUsageResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateUsageResource
     */
    ProcessId?: string;
    /**
     * 
     * @type {ProcessType}
     * @memberof ActionTemplateUsageResource
     */
    ProcessType?: ProcessType;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateUsageResource
     */
    ProjectId?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateUsageResource
     */
    ProjectName?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateUsageResource
     */
    ProjectSlug?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateUsageResource
     */
    RunbookId?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateUsageResource
     */
    RunbookName?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateUsageResource
     */
    StepId?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateUsageResource
     */
    StepName?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateUsageResource
     */
    Version?: string;
}
