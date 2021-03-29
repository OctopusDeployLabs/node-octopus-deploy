// Octopus REST API v2020.6.4722

import { TaskState } from './task-state';

/**
 * 
 * @export
 * @interface RunbooksDashboardItemResource
 */
export interface RunbooksDashboardItemResource {
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    CompletedTime?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    Created?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    Duration?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    EnvironmentId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    ErrorMessage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RunbooksDashboardItemResource
     */
    HasPendingInterruptions?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RunbooksDashboardItemResource
     */
    HasWarningsOrErrors?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    Id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RunbooksDashboardItemResource
     */
    IsCompleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof RunbooksDashboardItemResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    ProjectId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    QueueTime?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    RunbookId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    RunbookSnapshotId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    RunbookSnapshotName?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    RunbookSnapshotNotes?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    RunBy?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    StartTime?: string;
    /**
     * 
     * @type {TaskState}
     * @memberof RunbooksDashboardItemResource
     */
    State?: TaskState;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    TaskId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbooksDashboardItemResource
     */
    TenantId?: string;
}
