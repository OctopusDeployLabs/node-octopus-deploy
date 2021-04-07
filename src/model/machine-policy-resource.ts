// Octopus REST API v2021.2.1387

import { MachineCleanupPolicy } from "./machine-cleanup-policy";
import { MachineConnectivityPolicy } from "./machine-connectivity-policy";
import { MachineHealthCheckPolicy } from "./machine-health-check-policy";
import { MachineUpdatePolicy } from "./machine-update-policy";

/**
 *
 * @export
 * @interface MachinePolicyResource
 */
export interface MachinePolicyResource {
  /**
   *
   * @type {string}
   * @memberof MachinePolicyResource
   */
  ConnectionConnectTimeout?: string;
  /**
   *
   * @type {number}
   * @memberof MachinePolicyResource
   */
  ConnectionRetryCountLimit?: number;
  /**
   *
   * @type {string}
   * @memberof MachinePolicyResource
   */
  ConnectionRetrySleepInterval?: string;
  /**
   *
   * @type {string}
   * @memberof MachinePolicyResource
   */
  ConnectionRetryTimeLimit?: string;
  /**
   *
   * @type {string}
   * @memberof MachinePolicyResource
   */
  Description?: string;
  /**
   *
   * @type {string}
   * @memberof MachinePolicyResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof MachinePolicyResource
   */
  IsDefault?: boolean;
  /**
   *
   * @type {string}
   * @memberof MachinePolicyResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof MachinePolicyResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof MachinePolicyResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {MachineCleanupPolicy}
   * @memberof MachinePolicyResource
   */
  MachineCleanupPolicy?: MachineCleanupPolicy;
  /**
   *
   * @type {MachineConnectivityPolicy}
   * @memberof MachinePolicyResource
   */
  MachineConnectivityPolicy?: MachineConnectivityPolicy;
  /**
   *
   * @type {MachineHealthCheckPolicy}
   * @memberof MachinePolicyResource
   */
  MachineHealthCheckPolicy?: MachineHealthCheckPolicy;
  /**
   *
   * @type {MachineUpdatePolicy}
   * @memberof MachinePolicyResource
   */
  MachineUpdatePolicy?: MachineUpdatePolicy;
  /**
   *
   * @type {string}
   * @memberof MachinePolicyResource
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof MachinePolicyResource
   */
  PollingRequestMaximumMessageProcessingTimeout?: string;
  /**
   *
   * @type {string}
   * @memberof MachinePolicyResource
   */
  PollingRequestQueueTimeout?: string;
  /**
   *
   * @type {string}
   * @memberof MachinePolicyResource
   */
  SpaceId?: string;
}
