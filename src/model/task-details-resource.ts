// Octopus REST API v2021.2.1290

import { ActivityLogTreeNode } from "./activity-log-tree-node";
import { TaskProgress } from "./task-progress";
import { TaskResource } from "./task-resource";

/**
 *
 * @export
 * @interface TaskDetailsResource
 */
export interface TaskDetailsResource {
  /**
   *
   * @type {Array<ActivityLogTreeNode>}
   * @memberof TaskDetailsResource
   */
  ActivityLogs?: Array<ActivityLogTreeNode>;
  /**
   *
   * @type {string}
   * @memberof TaskDetailsResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof TaskDetailsResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof TaskDetailsResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof TaskDetailsResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof TaskDetailsResource
   */
  PhysicalLogSize?: number;
  /**
   *
   * @type {TaskProgress}
   * @memberof TaskDetailsResource
   */
  Progress?: TaskProgress;
  /**
   *
   * @type {TaskResource}
   * @memberof TaskDetailsResource
   */
  Task?: TaskResource;
}
