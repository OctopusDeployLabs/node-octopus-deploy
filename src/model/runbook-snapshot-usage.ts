// Octopus REST API v2020.6.4722

import { RunbookSnapshotUsageEntry } from './runbook-snapshot-usage-entry';

/**
 * 
 * @export
 * @interface RunbookSnapshotUsage
 */
export interface RunbookSnapshotUsage {
    /**
     * 
     * @type {string}
     * @memberof RunbookSnapshotUsage
     */
    ProjectId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookSnapshotUsage
     */
    ProjectName?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookSnapshotUsage
     */
    RunbookId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookSnapshotUsage
     */
    RunbookName?: string;
    /**
     * 
     * @type {Array<RunbookSnapshotUsageEntry>}
     * @memberof RunbookSnapshotUsage
     */
    Snapshots?: Array<RunbookSnapshotUsageEntry>;
}
