// Octopus REST API v2020.6.4722

import { DeploymentActionPackageResource } from './deployment-action-package-resource';

/**
 * 
 * @export
 * @interface ReleaseCreationStrategyResource
 */
export interface ReleaseCreationStrategyResource {
    [key: string]: object | any;

    /**
     * 
     * @type {string}
     * @memberof ReleaseCreationStrategyResource
     */
    ChannelId?: string;
    /**
     * 
     * @type {DeploymentActionPackageResource}
     * @memberof ReleaseCreationStrategyResource
     */
    ReleaseCreationPackage?: DeploymentActionPackageResource;
}
