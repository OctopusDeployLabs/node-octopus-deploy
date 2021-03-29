// Octopus REST API v2020.6.4722

import { ReleaseUsageEntry } from './release-usage-entry';

/**
 * 
 * @export
 * @interface ReleaseUsage
 */
export interface ReleaseUsage {
    /**
     * 
     * @type {string}
     * @memberof ReleaseUsage
     */
    ProjectId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleaseUsage
     */
    ProjectName?: string;
    /**
     * 
     * @type {Array<ReleaseUsageEntry>}
     * @memberof ReleaseUsage
     */
    Releases?: Array<ReleaseUsageEntry>;
}
