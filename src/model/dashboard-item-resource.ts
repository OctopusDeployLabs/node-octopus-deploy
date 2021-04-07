// Octopus REST API v2021.2.1387

import { TaskState } from "./task-state";

/**
 *
 * @export
 * @interface DashboardItemResource
 */
export interface DashboardItemResource {
  /**
   *
   * @type {string}
   * @memberof DashboardItemResource
   */
  ChannelId?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardItemResource
   */
  CompletedTime?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardItemResource
   */
  Created?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardItemResource
   */
  DeploymentId?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardItemResource
   */
  Duration?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardItemResource
   */
  EnvironmentId?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardItemResource
   */
  ErrorMessage?: string;
  /**
   *
   * @type {boolean}
   * @memberof DashboardItemResource
   */
  HasPendingInterruptions?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof DashboardItemResource
   */
  HasWarningsOrErrors?: boolean;
  /**
   *
   * @type {string}
   * @memberof DashboardItemResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof DashboardItemResource
   */
  IsCompleted?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof DashboardItemResource
   */
  IsCurrent?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof DashboardItemResource
   */
  IsPrevious?: boolean;
  /**
   *
   * @type {string}
   * @memberof DashboardItemResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardItemResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DashboardItemResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof DashboardItemResource
   */
  ProjectId?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardItemResource
   */
  QueueTime?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardItemResource
   */
  ReleaseId?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardItemResource
   */
  ReleaseVersion?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardItemResource
   */
  StartTime?: string;
  /**
   *
   * @type {TaskState}
   * @memberof DashboardItemResource
   */
  State?: TaskState;
  /**
   *
   * @type {string}
   * @memberof DashboardItemResource
   */
  TaskId?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardItemResource
   */
  TenantId?: string;
}
