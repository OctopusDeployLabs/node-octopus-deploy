// Octopus REST API v2020.6.4722

import { PhaseResource } from './phase-resource';
import { RetentionPeriod } from './retention-period';

/**
 * 
 * @export
 * @interface LifecycleResource
 */
export interface LifecycleResource {
    /**
     * 
     * @type {string}
     * @memberof LifecycleResource
     */
    Description?: string;
    /**
     * 
     * @type {string}
     * @memberof LifecycleResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof LifecycleResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof LifecycleResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LifecycleResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof LifecycleResource
     */
    Name?: string;
    /**
     * 
     * @type {Array<PhaseResource>}
     * @memberof LifecycleResource
     */
    Phases?: Array<PhaseResource>;
    /**
     * 
     * @type {RetentionPeriod}
     * @memberof LifecycleResource
     */
    ReleaseRetentionPolicy?: RetentionPeriod;
    /**
     * 
     * @type {string}
     * @memberof LifecycleResource
     */
    SpaceId?: string;
    /**
     * 
     * @type {RetentionPeriod}
     * @memberof LifecycleResource
     */
    TentacleRetentionPolicy?: RetentionPeriod;
}
