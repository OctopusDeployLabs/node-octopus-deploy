// Octopus REST API v2021.2.1387

import { ActivityLogElement } from "./activity-log-element";

/**
 *
 * @export
 * @interface MachineConnectionStatus
 */
export interface MachineConnectionStatus {
  /**
   *
   * @type {string}
   * @memberof MachineConnectionStatus
   */
  CurrentTentacleVersion?: string;
  /**
   *
   * @type {string}
   * @memberof MachineConnectionStatus
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof MachineConnectionStatus
   */
  LastChecked?: string;
  /**
   *
   * @type {string}
   * @memberof MachineConnectionStatus
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof MachineConnectionStatus
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof MachineConnectionStatus
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {Array<ActivityLogElement>}
   * @memberof MachineConnectionStatus
   */
  Logs?: Array<ActivityLogElement>;
  /**
   *
   * @type {string}
   * @memberof MachineConnectionStatus
   */
  MachineId?: string;
  /**
   *
   * @type {string}
   * @memberof MachineConnectionStatus
   */
  Status?: string;
}
