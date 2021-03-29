// Octopus REST API v2020.6.4722

import { DeploymentActionPackageResource } from './deployment-action-package-resource';

/**
 * 
 * @export
 * @interface ChannelVersionRuleResource
 */
export interface ChannelVersionRuleResource {
    [key: string]: object | any;

    /**
     * 
     * @type {Array<DeploymentActionPackageResource>}
     * @memberof ChannelVersionRuleResource
     */
    ActionPackages?: Array<DeploymentActionPackageResource>;
    /**
     * 
     * @type {string}
     * @memberof ChannelVersionRuleResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof ChannelVersionRuleResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ChannelVersionRuleResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ChannelVersionRuleResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ChannelVersionRuleResource
     */
    Tag?: string;
    /**
     * 
     * @type {string}
     * @memberof ChannelVersionRuleResource
     */
    VersionRange?: string;
}
