// Octopus REST API v2020.6.4722

import { PhaseProgressionResource } from './phase-progression-resource';

/**
 * 
 * @export
 * @interface LifecycleProgressionResource
 */
export interface LifecycleProgressionResource {
    /**
     * 
     * @type {string}
     * @memberof LifecycleProgressionResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof LifecycleProgressionResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof LifecycleProgressionResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LifecycleProgressionResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {Set<string>}
     * @memberof LifecycleProgressionResource
     */
    NextDeployments?: Set<string>;
    /**
     * 
     * @type {number}
     * @memberof LifecycleProgressionResource
     */
    NextDeploymentsMinimumRequired?: number;
    /**
     * 
     * @type {Array<PhaseProgressionResource>}
     * @memberof LifecycleProgressionResource
     */
    Phases?: Array<PhaseProgressionResource>;
}
