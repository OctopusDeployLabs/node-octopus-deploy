// Octopus REST API v2021.2.1290

import { ActivityLogEntry } from "./activity-log-entry";
import { ActivityStatus } from "./activity-status";

/**
 *
 * @export
 * @interface ActivityLogTreeNode
 */
export interface ActivityLogTreeNode {
  /**
   *
   * @type {Array<ActivityLogTreeNode>}
   * @memberof ActivityLogTreeNode
   */
  Children?: Array<ActivityLogTreeNode>;
  /**
   *
   * @type {string}
   * @memberof ActivityLogTreeNode
   */
  Ended?: string;
  /**
   *
   * @type {string}
   * @memberof ActivityLogTreeNode
   */
  Id?: string;
  /**
   *
   * @type {Array<ActivityLogEntry>}
   * @memberof ActivityLogTreeNode
   */
  LogElements?: Array<ActivityLogEntry>;
  /**
   *
   * @type {string}
   * @memberof ActivityLogTreeNode
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof ActivityLogTreeNode
   */
  ProgressMessage?: string;
  /**
   *
   * @type {number}
   * @memberof ActivityLogTreeNode
   */
  ProgressPercentage?: number;
  /**
   *
   * @type {boolean}
   * @memberof ActivityLogTreeNode
   */
  ShowAtSummaryLevel?: boolean;
  /**
   *
   * @type {string}
   * @memberof ActivityLogTreeNode
   */
  Started?: string;
  /**
   *
   * @type {ActivityStatus}
   * @memberof ActivityLogTreeNode
   */
  Status?: ActivityStatus;
}
