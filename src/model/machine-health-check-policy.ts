// Octopus REST API v2021.2.1387

import { HealthCheckType } from "./health-check-type";
import { MachineScriptPolicy } from "./machine-script-policy";

/**
 *
 * @export
 * @interface MachineHealthCheckPolicy
 */
export interface MachineHealthCheckPolicy {
  /**
   *
   * @type {MachineScriptPolicy}
   * @memberof MachineHealthCheckPolicy
   */
  BashHealthCheckPolicy?: MachineScriptPolicy;
  /**
   *
   * @type {string}
   * @memberof MachineHealthCheckPolicy
   */
  HealthCheckCron?: string;
  /**
   *
   * @type {string}
   * @memberof MachineHealthCheckPolicy
   */
  HealthCheckCronTimezone?: string;
  /**
   *
   * @type {string}
   * @memberof MachineHealthCheckPolicy
   */
  HealthCheckInterval?: string;
  /**
   *
   * @type {HealthCheckType}
   * @memberof MachineHealthCheckPolicy
   */
  HealthCheckType?: HealthCheckType;
  /**
   *
   * @type {MachineScriptPolicy}
   * @memberof MachineHealthCheckPolicy
   */
  PowerShellHealthCheckPolicy?: MachineScriptPolicy;
}
