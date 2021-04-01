// Octopus REST API v2021.2.1290

import { ScheduledTaskStatusResource } from "./scheduled-task-status-resource";

/**
 *
 * @export
 * @interface SchedulerStatusResource
 */
export interface SchedulerStatusResource {
  /**
   *
   * @type {string}
   * @memberof SchedulerStatusResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof SchedulerStatusResource
   */
  IsRunning?: boolean;
  /**
   *
   * @type {string}
   * @memberof SchedulerStatusResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof SchedulerStatusResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof SchedulerStatusResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {Array<ScheduledTaskStatusResource>}
   * @memberof SchedulerStatusResource
   */
  TaskStatus?: Array<ScheduledTaskStatusResource>;
}
