// Octopus REST API v2020.6.4722

import { ActivityLogTreeNode } from './activity-log-tree-node';

/**
 * 
 * @export
 * @interface ScheduledTaskDetailsResource
 */
export interface ScheduledTaskDetailsResource {
    /**
     * 
     * @type {ActivityLogTreeNode}
     * @memberof ScheduledTaskDetailsResource
     */
    ActivityLog?: ActivityLogTreeNode;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTaskDetailsResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTaskDetailsResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTaskDetailsResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ScheduledTaskDetailsResource
     */
    Links?: { [key: string]: string; };
}
